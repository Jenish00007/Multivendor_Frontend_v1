import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineCar,
  AiOutlineHeart,
  AiOutlineSafetyCertificate,
  AiOutlineTeam,
  AiOutlineGlobal,
} from "react-icons/ai";

const AboutUsPage = () => {
  const { appName, logo } = useSelector((state) => state.appSettings);

  const stats = [
    {
      icon: AiOutlineShoppingCart,
      number: "10K+",
      label: "Products Sold",
      color: "text-blue-600",
    },
    {
      icon: AiOutlineUser,
      number: "50K+",
      label: "Happy Customers",
      color: "text-green-600",
    },
    {
      icon: AiOutlineStar,
      number: "4.8",
      label: "Average Rating",
      color: "text-yellow-600",
    },
                {
              icon: AiOutlineCar,
              number: "24/7",
              label: "Fast Delivery",
              color: "text-purple-600",
            },
  ];

  const values = [
    {
      icon: AiOutlineHeart,
      title: "Customer First",
      description: "We prioritize our customers' needs and satisfaction above everything else.",
    },
                {
              icon: AiOutlineSafetyCertificate,
              title: "Quality Assurance",
              description: "Every product is carefully selected and quality-tested before reaching you.",
            },
    {
      icon: AiOutlineTeam,
      title: "Community Driven",
      description: "We believe in building strong relationships with our community and partners.",
    },
    {
      icon: AiOutlineGlobal,
      title: "Innovation",
      description: "Constantly evolving and improving to provide the best shopping experience.",
    },
  ];

  return (
    <div>
      <Header activeHeading={1} />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
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
                About {appName}
              </h1>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
                We're passionate about connecting customers with quality products and
                exceptional service. Our mission is to make shopping convenient,
                reliable, and enjoyable for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 group-hover:bg-gray-200 transition-colors duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-4">
                    <AiOutlineHeart className="w-8 h-8 text-teal-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To provide a seamless, secure, and enjoyable shopping experience
                  that connects customers with quality products from trusted vendors
                  while fostering a community of satisfied buyers and sellers.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <AiOutlineGlobal className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To become the leading multivendor e-commerce platform that
                  revolutionizes online shopping by offering innovative solutions,
                  exceptional customer service, and a diverse marketplace for all.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to becoming a trusted name in e-commerce
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Building Trust Since Day One
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded with a simple yet powerful vision, {appName} started as a
                    small team passionate about creating a better shopping experience.
                    We recognized the challenges that both customers and vendors face
                    in traditional e-commerce platforms.
                  </p>
                  <p>
                    Our journey began with a commitment to transparency, quality, and
                    customer satisfaction. We built our platform with the belief that
                    every transaction should be secure, every product should be
                    authentic, and every customer should feel valued.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of customers and work with
                    hundreds of trusted vendors, creating a vibrant marketplace that
                    benefits everyone in our community.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-teal-600 mb-4">2020</div>
                  <div className="text-xl text-gray-700 mb-4">Founded</div>
                  <div className="text-sm text-gray-600">
                    Started with a small team and big dreams
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">2021</span>
                    <span className="text-sm text-gray-500">First 1000 customers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">2022</span>
                    <span className="text-sm text-gray-500">Expanded to 50+ vendors</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">2023</span>
                    <span className="text-sm text-gray-500">50K+ happy customers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">2024</span>
                    <span className="text-sm text-gray-500">Leading the market</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <value.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Experience the difference that quality, trust, and exceptional service
              can make in your shopping journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Shopping
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
