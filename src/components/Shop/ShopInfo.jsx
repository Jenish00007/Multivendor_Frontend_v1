import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment, AiOutlineLogout } from "react-icons/ai";
import { BsBoxSeam, BsStar, BsShop } from "react-icons/bs";
import { motion } from "framer-motion";
import Loader from "../Layout/Loader";
import { useDispatch } from "react-redux";

const ShopInfo = ({ isOwner }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchShopData = async () => {
            try {
                const { data } = await axios.get(`${server}/shop/get-shop-info/${id}`);
                setData(data.shop);
                setLoading(false);
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message);
                setLoading(false);
            }
        };
        fetchShopData();
    }, [id]);

    const logoutHandler = async () => {
        try {
            await axios.get(`${server}/shop/logout`, { withCredentials: true });
            dispatch({ type: "SELLER_LOGOUT_SUCCESS" });
            toast.success("Logged out successfully!");
            navigate("/shop-login");
        } catch (error) {
            toast.error(error.response?.data?.message || "Logout failed");
        }
    };

    const totalReviews = data?.reviews?.length || 0;
    const averageRating = data?.reviews?.reduce((acc, review) => acc + review.rating, 0) / totalReviews || 0;

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Shop Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center mb-8"
            >
                <div className="relative group mb-4">
                    <img
                        src={data?.avatar}
                        alt="Avatar"
                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 text-center">{data?.name}</h2>
                <p className="text-sm text-gray-500 text-center mt-1">
                    Shop ID: {data?.shopId || "#" + data?._id?.slice(-6)}
                </p>
            </motion.div>

            {/* Shop Info */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4"
            >
                <p className="text-gray-600 mb-6 leading-relaxed text-center">{data?.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100/50 hover:border-blue-500/20 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                <BsBoxSeam className="text-blue-500" size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Products</p>
                                <p className="text-lg font-semibold text-gray-800">{data?.products?.length || 0}</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100/50 hover:border-yellow-500/20 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                                <BsStar className="text-yellow-500" size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Reviews</p>
                                <p className="text-lg font-semibold text-gray-800">{totalReviews}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Info */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-4"
                >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <BsShop className="text-blue-500" />
                        Contact Information
                    </h3>
                    <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                        <AiOutlinePhone className="text-blue-500" size={20} />
                        <span>{data?.phoneNumber}</span>
                    </motion.div>
                    <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                        <AiOutlineMail className="text-blue-500" size={20} />
                        <span>{data?.email}</span>
                    </motion.div>
                    <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                        <AiOutlineEnvironment className="text-blue-500" size={20} />
                        <span>{data?.address}</span>
                    </motion.div>
                </motion.div>

                {/* Logout Button (Only for Owner) */}
                {isOwner && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-8"
                    >
                        <button
                            onClick={logoutHandler}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <AiOutlineLogout size={20} />
                            Log Out
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default ShopInfo;