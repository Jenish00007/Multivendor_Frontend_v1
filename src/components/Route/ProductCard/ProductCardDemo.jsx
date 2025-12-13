import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductCardDemo = () => {
    const [compareList, setCompareList] = useState([]);

    // Sample product data for demonstration
    const sampleProducts = [
        {
            _id: '1',
            name: 'Premium Wireless Headphones with Noise Cancellation',
            originalPrice: 2999,
            discountPrice: 1999,
            stock: 15,
            ratings: 4.8,
            numReviews: 127,
            unitCount: 1,
            unit: 'piece',
            images: ['https://via.placeholder.com/400x400?text=Headphones'],
            shop: {
                name: 'TechGadgets Pro',
                avatar: 'https://via.placeholder.com/30x30?text=TG',
                rating: 4.9,
                verified: true
            },
            discountPrice: 1999,
            soldCount: 234,
            viewCount: 1250,
            createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
            flashSale: true
        },
        {
            _id: '2',
            name: 'Smart Fitness Watch with Heart Rate Monitor',
            originalPrice: 4999,
            discountPrice: 3499,
            stock: 3,
            ratings: 4.6,
            numReviews: 89,
            unitCount: 1,
            unit: 'piece',
            images: ['https://via.placeholder.com/400x400?text=SmartWatch'],
            shop: {
                name: 'HealthTech Solutions',
                avatar: 'https://via.placeholder.com/30x30?text=HT',
                rating: 4.7,
                verified: true
            },
            soldCount: 156,
            viewCount: 890,
            createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        },
        {
            _id: '3',
            name: 'Organic Cotton T-Shirt - Premium Quality',
            originalPrice: 899,
            discountPrice: 599,
            stock: 0,
            ratings: 4.4,
            numReviews: 203,
            unitCount: 1,
            unit: 'piece',
            images: ['https://via.placeholder.com/400x400?text=TShirt'],
            shop: {
                name: 'EcoFashion Store',
                avatar: 'https://via.placeholder.com/30x30?text=EF',
                rating: 4.5,
                verified: false
            },
            soldCount: 445,
            viewCount: 2100,
            createdAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000), // 45 days ago
        },
        {
            _id: '4',
            name: 'Professional Camera Lens 50mm f/1.8',
            originalPrice: 12999,
            discountPrice: 9999,
            stock: 8,
            ratings: 4.9,
            numReviews: 67,
            unitCount: 1,
            unit: 'piece',
            images: ['https://via.placeholder.com/400x400?text=CameraLens'],
            shop: {
                name: 'PhotoPro Equipment',
                avatar: 'https://via.placeholder.com/30x30?text=PP',
                rating: 4.8,
                verified: true
            },
            soldCount: 89,
            viewCount: 567,
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        }
    ];

    const handleCompare = (product) => {
        setCompareList(prev => {
            const exists = prev.find(p => p._id === product._id);
            if (exists) {
                return prev.filter(p => p._id !== product._id);
            } else if (prev.length < 3) {
                return [...prev, product];
            } else {
                // Replace the oldest item
                return [...prev.slice(1), product];
            }
        });
    };

    const clearCompareList = () => {
        setCompareList([]);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Enhanced ProductCard Demo
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Showcasing advanced features including animations, badges, comparison, 
                        and enhanced user experience
                    </p>
                </div>

                {/* Comparison Section */}
                {compareList.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Compare Products ({compareList.length}/3)
                            </h2>
                            <button
                                onClick={clearCompareList}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Clear All
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {compareList.map(product => (
                                <div key={product._id} className="border-2 border-blue-200 rounded-xl p-4">
                                    <ProductCard 
                                        data={product} 
                                        onCompare={handleCompare}
                                        isCompareMode={true}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sampleProducts.map(product => (
                        <ProductCard 
                            key={product._id} 
                            data={product} 
                            onCompare={handleCompare}
                        />
                    ))}
                </div>

                {/* Feature Highlights */}
                <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                        Enhanced Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smooth Animations</h3>
                            <p className="text-gray-600">Framer Motion powered animations with 3D hover effects</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Badges</h3>
                            <p className="text-gray-600">Dynamic badges for discounts, flash sales, new products</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Comparison</h3>
                            <p className="text-gray-600">Compare up to 3 products side by side</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive Design</h3>
                            <p className="text-gray-600">Optimized for all devices with touch-friendly interactions</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Customizable</h3>
                            <p className="text-gray-600">Easy to customize with CSS variables and Tailwind classes</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
                            <p className="text-gray-600">Optimized animations and efficient rendering</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardDemo;
