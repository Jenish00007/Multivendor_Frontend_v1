import React, { useEffect, useState } from "react";
import { Plus, Package, Image, DollarSign, Tag, X, Camera } from "lucide-react";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const { seller } = useSelector((state) => state.seller);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    subcategory: "",
    tags: "",
    originalPrice: "",
    discountPrice: "",
    stock: "",
    unit: "",
    unitCount: "",
    maxPurchaseQuantity: "",
  });
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Assume array of product objects {_id, name, image}
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [productSearchData, setProductSearchData] = useState([]);
  const [offset, setOffset] = useState(1);
  const [limit] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);




  const addProduct = (prod) => {
    if (!selectedProducts.some(p => p._id === prod._id)) { // Avoid duplicates
      setSelectedProducts([...selectedProducts, prod]);
    }
    setSearchQuery(''); // Optional: Clear search
    setSearchResults([]); // Hide results after add
  };

  const removeProduct = (index) => {
    setSelectedProducts(selectedProducts.filter((_, i) => i !== index));
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (formData.category) fetchSubcategories(formData.category);
    else {
      setSubcategories([]);
      setFormData((prev) => ({ ...prev, subcategory: "" }));
    }
  }, [formData.category]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${server}/categories`);
      setCategories(res.data.data || []);
    } catch (err) {
      toast.error("Error fetching categories");
    }
  };

  const fetchSubcategories = async (categoryId) => {
    try {
      const res = await axios.get(`${server}/subcategories`);
      const filtered = res.data.data.filter((sub) => sub.category._id === categoryId);
      setSubcategories(filtered);
    } catch (err) {
      toast.error("Error fetching subcategories");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberInputChange = (e) => {
    const { name, value } = e.target;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    let files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.description ||
      !formData.category ||
      !formData.subcategory ||
      !formData.originalPrice ||
      !formData.discountPrice ||
      !formData.stock ||
      !formData.unit ||
      !formData.unitCount ||
      !formData.maxPurchaseQuantity ||
      images.length === 0
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsSubmitting(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      data.append("shopId", seller._id);
      images.forEach((img) => data.append("images", img));

      await axios.post(`${server}/product/create-product`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Product created successfully!");
      setFormData({
        name: "",
        description: "",
        category: "",
        subcategory: "",
        tags: "",
        originalPrice: "",
        discountPrice: "",
        stock: "",
        unit: "",
        unitCount: "",
        maxPurchaseQuantity: "",
      });
      setImages([]);
      navigate("/dashboard-products");
    } catch (err) {
      toast.error("Error creating product");
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 20 && hasMore && !loading) {
      const nextPage = offset + 1;
      setOffset(nextPage);

      fetchProducts({
        name: searchByName,
        page: nextPage,
        append: true,
      });
    }
  };


  const handleToggleSearchByName = async (value) => {
    setSearchByName(value);
    setOffset(1);
    setHasMore(true);

    if (!value.trim()) {
      setProductSearchData([]);
      return;
    }

    fetchProducts({ name: value, page: 1, append: false });
  };


  const fetchProducts = async ({ name, page, append = false }) => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const response = await axios.get(`${server}/product/items/search`, {
        params: {
          name,
          offset: page,
          limit,
        },
      });

      const products = response.data.products || [];

      setProductSearchData((prev) =>
        append ? [...prev, ...products] : products
      );

      if (products.length < limit) {
        setHasMore(false); // no more data
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // save selected products function 
  const handleSaveProducts = async () => {
    if (selectedProducts.length === 0) return;

    setIsSubmitting(true);

    try {
      // extract only product IDs
      const productIds = selectedProducts.map((product) => product._id);

      const response = await axios.post(
        `${server}/product/save-products/in-shop`,
        { productIds }, // ✅ correct field name
        {
          withCredentials: true, // 🔥 required if auth uses cookies
        }
      );

      console.log('After successful saved products :', response.data);

      toast.success("Products saved successfully!");
      setSelectedProducts([]);

    } catch (err) {
      console.error(err);
      toast.error("Error saving products");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-3 px-2 sm:px-4">
      <div className="w-full md:max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow mb-2">
            <Package className="text-lg sm:text-xl text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Create New Product
          </h1>
        </div>

        {/* New Section: Search and Select Products */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/20 p-3 sm:p-4 md:p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Search and Add Products
          </h2>

          {/* Search Box with Toggle on the Right */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search products"
              value={searchByName}
              onChange={(e) => handleToggleSearchByName(e.target.value)}
              className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-base"
            />

          </div>

          {/* Search Results (for selection) */}
          {productSearchData.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Search Results:
              </p>

              <div
                className="max-h-48 overflow-y-auto p-2 border border-gray-200 rounded-xl bg-gray-50"
                onScroll={handleScroll}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {productSearchData.map((prod) => (
                    <div
                      key={prod._id}
                      className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                      onClick={() => addProduct(prod)}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={prod.images?.[0] || "https://via.placeholder.com/40"}
                          alt={prod.name || "Product Image"}
                          className="w-10 h-10 object-cover rounded"
                        />
                        <span className="text-sm font-medium text-gray-800">
                          {prod.name}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation(); // 🔥 prevents double click
                          addProduct(prod);
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                      >
                        Add
                      </button>
                    </div>
                  ))}
                </div>

                {/* Loading indicator */}
                {loading && (
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Loading...
                  </p>
                )}

                {/* End of list */}
                {!hasMore && productSearchData.length > 0 && !loading && (
                  <p className="text-center text-xs text-gray-400 mt-3">
                    No more products
                  </p>
                )}
              </div>
            </div>
          )}


          {/* Selected Products List - Only visible when products are selected */}
          {selectedProducts.length > 0 && (
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">
                Selected Products ({selectedProducts.length})
              </p>
              <div className="grid grid-cols-3 gap-4 overflow-y-auto max-h-72 p-3 border border-gray-200 rounded-xl bg-gray-50">
                {selectedProducts.map((prod, i) => (
                  <div
                    key={i}
                    className="relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <img
                      src={prod.images[0] || 'https://via.placeholder.com/150'}
                      alt={prod.name || 'Product Image'}
                      className="w-full h-28 object-cover"
                    />
                    <div className="p-2">
                      <p className="text-xs text-center text-gray-800 font-medium truncate">
                        {prod.name}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeProduct(i)}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg transition"
                      aria-label="Remove product"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Save product button  only visible when products are selected */}
          {selectedProducts.length > 0 && (
            <div className="mt-4">
              <button
                type="button"
                onClick={handleSaveProducts}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow"
              >
                Save Selected Products
              </button>
            </div>
          )}
        </div>

        {/* Existing Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/20 p-3 sm:p-4 md:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name, Category, Subcategory */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Product Name"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <select
                name="subcategory"
                value={formData.subcategory}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Select Subcategory</option>
                {subcategories.map((sub) => (
                  <option key={sub._id} value={sub._id}>
                    {sub.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Description & Tags */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                rows={3}
                required
                className="w-full px-3 py-2 border rounded resize-none"
              />
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="Tags (comma separated)"
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            {/* Prices & stock */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <input
                type="text"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleNumberInputChange}
                placeholder="Original Price"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="discountPrice"
                value={formData.discountPrice}
                onChange={handleNumberInputChange}
                placeholder="Discount Price"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="stock"
                value={formData.stock}
                onChange={handleNumberInputChange}
                placeholder="Stock"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <select
                name="unit"
                value={formData.unit}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Unit</option>
                <option value="kg">Kilogram</option>
                <option value="g">Gram</option>
                <option value="pcs">Pieces</option>
                <option value="ltr">Liter</option>
                <option value="ml">Milliliter</option>
                <option value="pack">Pack</option>
              </select>
              <input
                type="number"
                name="unitCount"
                value={formData.unitCount}
                onChange={handleNumberInputChange}
                placeholder="Unit Count"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="number"
                name="maxPurchaseQuantity"
                value={formData.maxPurchaseQuantity}
                onChange={handleNumberInputChange}
                placeholder="Max Purchase Qty"
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            {/* Images */}
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="border-2 border-dashed border-gray-300 rounded p-4 text-center">
                  <Image className="mx-auto text-2xl text-gray-400 mb-1" />
                  <p className="text-gray-600 text-xs">Drag & drop or click to browser</p>
                  <label className="mt-1 inline-flex items-center gap-1 text-blue-600 cursor-pointer text-xs">
                    <Camera className="w-4 h-4" /> Take Photo
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              {images.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {images.map((img, i) => (
                    <div key={i} className="relative">
                      <img
                        src={URL.createObjectURL(img)}
                        alt=""
                        className="object-cover w-full h-20 sm:h-24 md:h-28 rounded"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 rounded w-full sm:w-auto"
            >
              {isSubmitting ? "Creating..." : "Create Product"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
