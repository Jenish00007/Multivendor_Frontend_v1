import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      // Take first 10 products for featured section
      setFeaturedProducts(allProducts.slice(0, 10));
    }
  }, [allProducts]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading} flex items-center justify-between`}>
          <h1>Featured Products</h1>
          {featuredProducts && featuredProducts.length > 0 && (
            <Link
              to="/view-all/featured"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-md hover:bg-indigo-100 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
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
          )}
        </div>
        
        {featuredProducts && featuredProducts.length > 0 ? (
          <div className="relative">
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
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide horizontal-scroll custom-scrollbar px-12"
            >
              {featuredProducts.map((i, index) => (
                <div key={index} className="flex-shrink-0 w-72 md:w-80 lg:w-96">
                  <ProductCard data={i} />
                </div>
              ))}
            </div>
            
            {/* Enhanced Scroll Indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-300"></div>
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  {featuredProducts.length > 10 ? `1-10 of ${featuredProducts.length}` : `${featuredProducts.length} products`}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">No featured products available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
