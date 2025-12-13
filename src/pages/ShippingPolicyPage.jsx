import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import {
  AiOutlineCar,
  AiOutlineClockCircle,
  AiOutlineMap,
  AiOutlineDollar,
  AiOutlineSafetyCertificate,
  AiOutlineShopping,
  AiOutlineGlobal,
} from "react-icons/ai";

const ShippingPolicyPage = () => {
  const { appName, logo } = useSelector((state) => state.appSettings);

  const shippingFeatures = [
                {
              icon: AiOutlineCar,
              title: "Fast Delivery",
              description: "Quick and reliable shipping to get your orders to you as soon as possible.",
            },
    {
      icon: AiOutlineClockCircle,
      title: "Real-time Tracking",
      description: "Track your package from warehouse to doorstep with real-time updates.",
    },
                {
              icon: AiOutlineSafetyCertificate,
              title: "Secure Packaging",
              description: "Your items are carefully packaged to ensure they arrive in perfect condition.",
            },
    {
      icon: AiOutlineGlobal,
      title: "Worldwide Shipping",
      description: "We ship to most countries worldwide with reliable international carriers.",
    },
  ];

  const shippingMethods = [
                {
              name: "Standard Shipping",
              icon: AiOutlineCar,
              time: "3-5 business days",
              cost: "Free on orders over ₹2000",
              description: "Reliable ground shipping for most locations.",
            },
    {
      name: "Express Shipping",
      icon: AiOutlineCar,
      time: "1-2 business days",
      cost: "₹399",
      description: "Fast delivery for urgent orders.",
    },
                {
              name: "Overnight Shipping",
              icon: AiOutlineShopping,
              time: "Next business day",
              cost: "₹799",
              description: "Ultra-fast delivery for critical orders.",
            },
  ];

  return (
    <div>
      <Header activeHeading={1} />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={logo}
                  alt={appName}
                  className="w-24 h-24 object-contain bg-white/20 p-4 rounded-2xl backdrop-blur-sm"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Shipping Policy
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Fast, reliable, and secure shipping to get your orders to you quickly and safely.
              </p>
            </div>
          </div>
        </div>

        {/* Shipping Features */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Shipping Promise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to providing fast, reliable, and secure shipping for all your orders.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {shippingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shipping Methods */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Shipping Methods</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the shipping option that best fits your needs and timeline.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {shippingMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <method.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.name}</h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Delivery Time:</span>
                      <span className="font-semibold text-gray-900">{method.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Cost:</span>
                      <span className="font-semibold text-green-600">{method.cost}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shipping Policy Content */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Processing Time</h2>
                <p className="text-gray-600 mb-6">
                  Most orders are processed and shipped within 1-2 business days. Orders placed after 2:00 PM EST will be processed the next business day. During peak seasons or sales, processing times may be extended by 1-2 additional days.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Shipping Destinations</h2>
                <p className="text-gray-600 mb-6">
                  We currently ship to the following locations:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>All 50 US states and territories</li>
                  <li>Canada and Mexico</li>
                  <li>Most European countries</li>
                  <li>Australia and New Zealand</li>
                  <li>Select Asian countries</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  For international shipping, delivery times may vary from 7-21 business days depending on the destination and customs processing.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Shipping Costs</h2>
                <p className="text-gray-600 mb-6">
                  Shipping costs are calculated based on:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Package weight and dimensions</li>
                  <li>Shipping destination</li>
                  <li>Selected shipping method</li>
                  <li>Order value (free shipping thresholds)</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Order Tracking</h2>
                <p className="text-gray-600 mb-6">
                  Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order through your account dashboard or by contacting our customer service team.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Delivery Issues</h2>
                <p className="text-gray-600 mb-6">
                  If you experience any issues with delivery, such as:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Package not received within expected timeframe</li>
                  <li>Damaged package upon delivery</li>
                  <li>Incorrect items received</li>
                  <li>Lost or stolen package</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  Please contact our customer service team immediately. We'll work with you and the shipping carrier to resolve the issue quickly.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Returns and Exchanges</h2>
                <p className="text-gray-600 mb-6">
                  For information about returns and exchanges, please refer to our Return Policy. Return shipping costs may apply depending on the reason for the return and your location.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Information</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our shipping policy, please contact us:
                </p>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-700 font-semibold">Email: qauds.info@gmail.com</p>
                  <p className="text-gray-700 font-semibold">Phone: +91 9591727966</p>
                  <p className="text-gray-700 font-semibold">Live Chat: Available 24/7 on our website</p>
                </div>

                <div className="mt-12 p-6 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-green-800 text-sm mt-2">
                    This shipping policy is subject to change. Please check back regularly for updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingPolicyPage;
