import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, X, Camera } from "lucide-react";
import { server } from "../../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AdminAddProductModel = ({ isOpen, onClose }) => {


    // const { seller } = useSelector((state) => state.seller);

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

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (formData.category) fetchSubcategories(formData.category);
        else setSubcategories([]);
    }, [formData.category]);

    const fetchCategories = async () => {
        try {
            const res = await axios.get(`${server}/categories`);
            setCategories(res.data.data || []);
        } catch {
            toast.error("Error fetching categories");
        }
    };

    const fetchSubcategories = async (categoryId) => {
        try {
            const res = await axios.get(`${server}/subcategories`);
            setSubcategories(
                res.data.data.filter((s) => s.category._id === categoryId)
            );
        } catch {
            toast.error("Error fetching subcategories");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImages((prev) => [...prev, ...Array.from(e.target.files)]);
    };

    const removeImage = (i) => {
        setImages(images.filter((_, idx) => idx !== i));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (images.length === 0) {
            toast.error("Please upload at least one image");
            return;
        }

        setIsSubmitting(true);

        try {
            const data = new FormData();
            Object.entries(formData).forEach(([k, v]) => data.append(k, v));
            // data.append("shopId", seller._id);
            images.forEach((img) => data.append("images", img));

            await axios.post(`${server}/product/create-product`, data, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success("Product created successfully");
            onClose(); // close modal after success
        } catch (error) {
            console.error('Error creating product from admin', error);
            toast.error("Error creating product");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Modal - Made much wider */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto">
                {/* max-w-4xl = ~1024px wide */}
                {/* You can go even wider with max-w-5xl (~1152px) or max-w-6xl (~1280px) if needed */}

                <div className="p-8 md:p-10 lg:p-12"> {/* Extra padding on larger screens */}

                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Create Product
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={28} className="text-gray-500" />
                        </button>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Product Name
                            </label>
                            <input
                                name="name"
                                placeholder="Enter product name"
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                name="description"
                                placeholder="Describe your product..."
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                rows={5}
                                required
                            />
                        </div>

                        {/* Category and Subcategory side by side on larger screens */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Category
                                </label>
                                <select
                                    name="category"
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                                >
                                    <option value="">Select Category</option>
                                    {categories.map(c => (
                                        <option key={c._id} value={c._id}>{c.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subcategory
                                </label>
                                <select
                                    name="subcategory"
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                                >
                                    <option value="">Select Subcategory</option>
                                    {subcategories.map(s => (
                                        <option key={s._id} value={s._id}>{s.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Image upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Product Images
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-gray-400 transition-colors relative cursor-pointer bg-gray-50/50">
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                                <div className="space-y-3">
                                    <Image size={56} className="mx-auto text-gray-400" />
                                    <div>
                                        <p className="text-lg text-gray-600 font-medium">Click to upload images</p>
                                        <p className="text-sm text-gray-500 mt-1">or drag and drop (multiple allowed)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Previews - Wider grid */}
                        {images.length > 0 && (
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-4">
                                    Uploaded Images ({images.length})
                                </p>
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                                    {images.map((img, i) => (
                                        <div key={i} className="relative group">
                                            <img
                                                alt={`Product Preview ${i + 1}`}
                                                src={URL.createObjectURL(img)}
                                                className="h-32 w-full object-cover rounded-xl shadow-md"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(i)}
                                                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 transition-all"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            {isSubmitting ? "Creating Product..." : "Create Product"}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminAddProductModel;
