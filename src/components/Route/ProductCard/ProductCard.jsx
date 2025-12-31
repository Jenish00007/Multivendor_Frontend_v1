import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import {
    AiFillHeart,
    AiFillStar,
    AiOutlineEye,
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineStar,
    AiOutlineTag,
    AiOutlineShop,
    AiOutlineFire,

    AiOutlineSwapLeft,
    AiOutlineClockCircle,
    AiOutlineGift,
    AiOutlineCheckCircle,
    AiOutlineExclamationCircle,
} from "react-icons/ai";
import { backend_url } from "../../../server";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard.jsx";
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../../../redux/actions/wishlist';
import { addTocart } from '../../../redux/actions/cart';
import { toast } from 'react-toastify';
import Ratings from "../../Products/Ratings";
import { motion, AnimatePresence } from 'framer-motion';
import './ProductCard.css';

const ProductCard = ({ data, isEvent, onCompare, isCompareMode = false }) => {
    const { wishlist } = useSelector((state) => state.wishlist);
    const { cart } = useSelector((state) => state.cart);
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [showQuickActions, setShowQuickActions] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (wishlist && wishlist.find((i) => i._id === data._id)) {
            setClick(true);
        } else {
            setClick(false);
        }
    }, [wishlist]);

    const removeFromWishlistHandler = (data) => {
        setClick(!click);
        dispatch(removeFromWishlist(data));
        toast.success("Removed from wishlist!");
    }

    const addToWishlistHandler = (data) => {
        setClick(!click);
        dispatch(addToWishlist(data));
        toast.success("Added to wishlist!");
    }

    const addToCartHandler = (id) => {
        const isItemExists = cart && cart.find((i) => i._id === id);
        if (isItemExists) {
            toast.error("Item already in cart!")
        } else {
            if (data.stock < 1) {
                toast.error("Product stock limited!")
            } else {
                const cartData = { ...data, qty: 1 };
                dispatch(addTocart(cartData));
                toast.success("Item added to cart successfully!")
            }
        }
    }



    const handleCompare = () => {
        if (onCompare) {
            onCompare(data);
        }
    };

    const getImageUrl = () => {
        if (!data.images || data.images.length === 0) {
            return "https://via.placeholder.com/400x400?text=No+Image";
        }

        const image = data.images[0];
        if (typeof image === 'string') {
            if (image.startsWith('http')) {
                return image;
            }
            return image;
        }
        
        if (image.url) {
            if (image.url.startsWith('http')) {
                return image.url;
            }
            return image.url;
        }

        return "https://via.placeholder.com/400x400?text=No+Image";
    };

    const calculateDiscountPercentage = () => {
        if (data.originalPrice && data.discountPrice) {
            return Math.round(((data.originalPrice - data.discountPrice) / data.originalPrice) * 100);
        }
        return 0;
    };

    const isOutOfStock = data.stock < 1;
    const isLowStock = data.stock > 0 && data.stock <= 5;
    const isNewProduct = data.createdAt && (new Date() - new Date(data.createdAt)) < (30 * 24 * 60 * 60 * 1000); // 30 days
    const isBestSeller = data.soldCount && data.soldCount > 100;

    const getStockStatus = () => {
        if (isOutOfStock) return { text: 'Out of Stock', color: 'bg-red-100 text-red-600', icon: AiOutlineExclamationCircle };
        if (isLowStock) return { text: `Only ${data.stock} left`, color: 'bg-orange-100 text-orange-600', icon: AiOutlineClockCircle };
        return { text: 'In Stock', color: 'bg-green-100 text-green-600', icon: AiOutlineCheckCircle };
    };

    const stockStatus = getStockStatus();
    const StockIcon = stockStatus.icon;

    return (
        <motion.div 
            className={`group w-full h-auto min-h-[450px] bg-white rounded-2xl shadow-lg hover:shadow-2xl p-4 relative cursor-pointer border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 ${
                isCompareMode ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
            }`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            layout
        >
            {/* Enhanced Wishlist Button */}
            <div className='absolute top-4 right-4 z-20'>
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative"
                >
                    {click ? (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <AiFillHeart
                                size={44}
                                className="cursor-pointer text-red-500 p-2 bg-white/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                onClick={() => removeFromWishlistHandler(data)}
                                title='Remove from wishlist'
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <AiOutlineHeart
                                size={44}
                                className="cursor-pointer text-gray-600 p-2 bg-white/90 rounded-full shadow-lg hover:shadow-xl hover:text-red-500 transition-all duration-300"
                                onClick={() => addToWishlistHandler(data)}
                                title='Add to wishlist'
                            />
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Enhanced Badge System */}
            <div className="absolute top-4 left-4 z-20 space-y-2">
                {/* Discount Badge */}
                {data.discountPrice && calculateDiscountPercentage() > 0 && (
                    <motion.div
                        initial={{ scale: 0, x: -20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-lg"
                    >
                        <AiOutlineTag className="mr-1" size={12} />
                        {calculateDiscountPercentage()}% OFF
                    </motion.div>
                )}

                {/* Flash Sale Badge */}
                {data.flashSale && (
                    <motion.div
                        initial={{ scale: 0, x: -20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-lg animate-pulse"
                    >
                        <AiOutlineFire className="mr-1" size={12} />
                        FLASH SALE
                    </motion.div>
                )}

                {/* New Product Badge */}
                {isNewProduct && (
                    <motion.div
                        initial={{ scale: 0, x: -20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-lg"
                    >
                        <AiOutlineGift className="mr-1" size={12} />
                        NEW
                    </motion.div>
                )}

                {/* Best Seller Badge */}
                {isBestSeller && (
                    <motion.div
                        initial={{ scale: 0, x: -20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                        className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-lg"
                    >
                        <AiOutlineStar className="mr-1" size={12} />
                        BEST SELLER
                    </motion.div>
                )}
            </div>

            {/* Enhanced Product Image */}
            <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
                <div className="relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-gray-50 to-gray-100 mb-4 group">
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-xl" />
                    )}
                    <motion.img
                        src={getImageUrl()}
                        alt={data.name}
                        className={`w-full h-full object-contain transition-all duration-500 ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => setImageLoaded(true)}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/400x400?text=No+Image";
                            setImageLoaded(true);
                        }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                    
                    {/* Enhanced Quick View Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileHover={{ scale: 1.1, rotate: 0 }}
                            className="bg-white/95 p-4 rounded-full shadow-xl backdrop-blur-sm"
                        >
                            <AiOutlineEye size={24} className="text-gray-700" />
                        </motion.div>
                    </div>

                    {/* Image Gallery Indicator */}
                    {data.images && data.images.length > 1 && (
                        <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                            +{data.images.length - 1} more
                        </div>
                    )}
                </div>
            </Link>

            {/* Enhanced Shop Information */}
            <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                        <div className="relative">
                            <img 
                                src={data?.shop?.avatar ? data.shop.avatar : "https://via.placeholder.com/30x30?text=Shop"}
                                alt={data?.shop?.name || "Shop"}
                                className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/30x30?text=Shop";
                                }}
                            />
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
                        </div>
                        <div className="ml-2">
                            <h5 className="text-blue-600 text-sm font-medium truncate hover:text-blue-700 transition-colors duration-200">
                                {data?.shop?.name || "Shop"}
                            </h5>
                            {data?.shop?.rating && (
                                <div className="flex items-center">
                                    <AiFillStar size={12} className="text-yellow-400" />
                                    <span className="text-xs text-gray-500 ml-1">{data.shop.rating}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Shop Verification Badge */}
                    {data?.shop?.verified && (
                        <div className="bg-blue-100 text-blue-600 p-1 rounded-full">
                            <AiOutlineCheckCircle size={14} />
                        </div>
                    )}
                </div>
            </Link>

            {/* Enhanced Product Title */}
            <Link to={`/product/${data._id}`}>
                <h4 className='font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 line-clamp-2 min-h-[3rem] mb-3 text-sm leading-tight group-hover:text-blue-600'>
                    {data.name}
                </h4>

                {/* Enhanced Ratings */}
                <div className='flex items-center justify-between mb-3'>
                    <div className="flex items-center">
                        <Ratings rating={data?.ratings} />
                        <span className="text-gray-500 text-xs ml-2 font-medium">
                            ({data?.ratings || 0})
                        </span>
                    </div>
                    {data?.numReviews && (
                        <span className="text-gray-400 text-xs">
                            • {data.numReviews} reviews
                        </span>
                    )}
                </div>

                {/* Enhanced Unit Information */}
                {data?.unitCount && data?.unit && (
                    <div className='flex items-center mb-3'>
                        <AiOutlineTag className="text-gray-400 mr-2" size={14} />
                        <span className="text-gray-600 text-xs font-medium bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
                            {data.unitCount} {data.unit}
                        </span>
                    </div>
                )}

                {/* Enhanced Price Section */}
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center gap-2'>
                        <h5 className="text-xl font-bold text-gray-900">
                            ₹{data.discountPrice || data.originalPrice}
                        </h5>
                        {data.originalPrice && data.discountPrice && (
                            <h4 className="text-sm text-gray-500 line-through">
                                ₹{data.originalPrice}
                            </h4>
                        )}
                    </div>
                    
                    {/* Enhanced Stock Status */}
                    <div className={`text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1 ${stockStatus.color}`}>
                        <StockIcon size={12} />
                        {stockStatus.text}
                    </div>
                </div>
            </Link>

            {/* Enhanced Action Buttons */}
            <div className="flex items-center gap-2 mb-3">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                        isOutOfStock
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
                    }`}
                    onClick={() => !isOutOfStock && addToCartHandler(data._id)}
                    disabled={isOutOfStock}
                >
                    <AiOutlineShoppingCart size={18} />
                    {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                </motion.button>
            </div>

            {/* Enhanced Quick Actions Bar */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Compare Button */}
                    {onCompare && (
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleCompare}
                            className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
                            title="Compare Product"
                        >
                            <AiOutlineSwapLeft size={16} />
                        </motion.button>
                    )}
                </div>

                {/* Product Stats */}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                    {data?.soldCount && (
                        <span className="flex items-center gap-1">
                            <AiOutlineFire size={12} />
                            {data.soldCount} sold
                        </span>
                    )}
                    {data?.viewCount && (
                        <span className="flex items-center gap-1">
                            <AiOutlineEye size={12} />
                            {data.viewCount} views
                        </span>
                    )}
                </div>
            </div>

            {/* Floating Quick Actions */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute right-4 top-24 z-10"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <button
                                className="w-12 h-12 bg-white/95 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-200 hover:bg-blue-50 backdrop-blur-sm"
                                onClick={() => addToCartHandler(data._id)}
                                disabled={isOutOfStock}
                                title='Quick Add to Cart'
                            >
                                <AiOutlineShoppingCart size={20} className="text-gray-700" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Enhanced Product Details Modal */}
            {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </motion.div>
    )
}

export default ProductCard