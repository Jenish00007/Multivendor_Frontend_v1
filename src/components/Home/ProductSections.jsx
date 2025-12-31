import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import ProductCard from "../Route/ProductCard/ProductCard";
import { motion } from 'framer-motion';
import './ProductSections.css';

const ProductSections = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [topOffers, setTopOffers] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [flashSaleItems, setFlashSaleItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Create refs for each section
  const recommendedRef = useRef(null);
  const topOffersRef = useRef(null);
  const popularRef = useRef(null);
  const latestRef = useRef(null);
  const flashSaleRef = useRef(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const [recommended, offers, popular, latest, flashSale] = await Promise.all([
          axios.get(`${server}/user-products/recommended`),
          axios.get(`${server}/user-products/top-offers`),
          axios.get(`${server}/user-products/popular`),
          axios.get(`${server}/user-products/latest`),
          axios.get(`${server}/user-products/flash-sale`),
        ]);

        setRecommendedProducts(recommended.data.products);
        setTopOffers(offers.data.products);
        setPopularProducts(popular.data.products);
        setLatestProducts(latest.data.products);
        setFlashSaleItems(flashSale.data.flashSaleItems);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const renderProductSection = (title, products, type, icon, gradient, scrollRef) => {
    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      }
    };

    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      }
    };

    return (
      <motion.div 
        className="w-11/12 mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center shadow-lg`}>
              {icon}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h1>
          </div>
          {products && products.length > 0 && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={`/view-all/${type}`}
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-0 rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View All
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          )}
        </div>
        
        {products && products.length > 0 ? (
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Scroll Navigation Buttons */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-gray-200"
                title="Scroll Left"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={scrollRight}
                className="w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-gray-200"
                title="Scroll Right"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Horizontal Scroll Container */}
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide horizontal-scroll custom-scrollbar px-12"
            >
              {products.slice(0, 10).map((product, index) => (
                <motion.div
                  key={product._id}
                  className="flex-shrink-0 w-72 md:w-80 lg:w-96"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard data={product} />
                </motion.div>
              ))}
            </div>
            
            {/* Enhanced Scroll Indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300"></div>
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  {products.length > 10 ? `1-10 of ${products.length}` : `${products.length} products`}
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">No products available in this category</p>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="h-20"></div>
      
      {renderProductSection(
        "Recommended Products", 
        recommendedProducts, 
        "recommended",
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>,
        "bg-gradient-to-br from-blue-500 to-blue-600",
        recommendedRef
      )}
      
      {renderProductSection(
        "Top Offers", 
        topOffers, 
        "top-offers",
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>,
        "bg-gradient-to-br from-green-500 to-green-600",
        topOffersRef
      )}
      
      {renderProductSection(
        "Most Popular", 
        popularProducts, 
        "popular",
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>,
        "bg-gradient-to-br from-yellow-500 to-orange-500",
        popularRef
      )}
      
      {renderProductSection(
        "Latest Products", 
        latestProducts, 
        "latest",
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>,
        "bg-gradient-to-br from-purple-500 to-purple-600",
        latestRef
      )}
      
      
    </div>
  );
};

export default ProductSections; 