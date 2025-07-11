// AllProduct.jsx
import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineDelete, AiOutlineEye, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, deleteProduct } from "../../redux/actions/product";

const AllProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 1.5 },
    { field: "price", headerName: "Price", flex: 1 },
    { field: "stock", headerName: "Stock", flex: 1 },
    { field: "unit", headerName: "Unit", flex: 1 },
    { field: "sold", headerName: "Sold", flex: 1 },
    {
      field: "preview",
      headerName: "Preview",
      flex: 1,
      renderCell: (params) => (
        <button
          className="text-indigo-600 hover:text-indigo-800"
          onClick={() => openModal(params.row.product)}
        >
          <AiOutlineEye size={20} />
        </button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params) => (
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => handleDelete(params.row.id)}
        >
          <AiOutlineDelete size={20} />
        </button>
      ),
    },
  ];

  const rows =
    products &&
    products.map((item) => ({
      id: item._id,
      name: item.name,
      price: "₹" + item.discountPrice,
      stock: item.stock,
      unit: item.unitCount && item.unit ? `${item.unitCount} ${item.unit}` : 'N/A',
      sold: item.sold,
      product: item,
    }));

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="bg-white rounded-xl shadow-md">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>

      {/* Preview Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full border border-white/20">
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <AiOutlineEye className="text-white" size={24} />
                    </div>
                    Product Preview
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-white/80 hover:text-white focus:outline-none transition-all duration-200 p-2 hover:bg-white/20 rounded-xl"
                  >
                    <AiOutlineClose size={24} />
                  </button>
                </div>
              </div>

              <div className="bg-white px-6 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl">
                      <img
                        src={selectedProduct.images[0]}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {selectedProduct.images.slice(1).map((image, index) => (
                        <div key={index} className="relative w-full h-24 rounded-xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                          <img
                            src={image}
                            alt={`${selectedProduct.name} ${index + 2}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/100";
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="text-3xl font-bold text-gray-900 leading-tight">{selectedProduct.name}</h4>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-xl font-semibold text-sm shadow-sm">
                        {typeof selectedProduct.category === 'object' ? selectedProduct.category.name : selectedProduct.category}
                      </div>
                    </div>

                    <div className="space-y-4 bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl shadow-inner">
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Original Price:</span>
                        <span className="text-gray-500 line-through text-lg font-semibold">₹{selectedProduct.originalPrice}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Discount Price:</span>
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl shadow-lg">
                          <span className="text-xl font-bold">₹{selectedProduct.discountPrice}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Stock:</span>
                        <div className={`px-4 py-2 rounded-xl font-semibold shadow-sm ${
                          selectedProduct.stock > 0 
                            ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700' 
                            : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700'
                        }`}>
                          {selectedProduct.stock > 0 ? `${selectedProduct.stock} units` : 'Out of Stock'}
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">Unit:</span>
                        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-xl font-semibold shadow-sm">
                          {selectedProduct.unitCount && selectedProduct.unit ? `${selectedProduct.unitCount} ${selectedProduct.unit}` : 'N/A'}
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600 font-medium">Total Sold:</span>
                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-xl font-semibold shadow-sm">
                          {selectedProduct.sold} units
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-lg font-bold text-gray-900">Description</h5>
                      <p className="text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {selectedProduct.tags && (
                      <div className="space-y-3">
                        <h5 className="text-lg font-bold text-gray-900">Tags</h5>
                        <div className="flex flex-wrap gap-2">
                          {(typeof selectedProduct.tags === 'string' 
                            ? selectedProduct.tags.split(',').map(tag => tag.trim())
                            : Array.isArray(selectedProduct.tags) 
                              ? selectedProduct.tags 
                              : []
                          ).map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 text-sm font-semibold text-blue-600 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-transparent shadow-lg px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-base font-semibold text-white hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 hover:scale-105"
                  onClick={closeModal}
                >
                  <AiOutlineClose size={18} />
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProduct;
