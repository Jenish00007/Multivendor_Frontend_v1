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
      number: "100K+",
      label: "Active Ads",
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
      number: "50K+",
      label: "Daily Users",
              color: "text-purple-600",
            },
  ];

  const values = [
    {
      icon: AiOutlineHeart,
      title: "User First",
      description: "We prioritize our users' safety and satisfaction, making trading simple and secure.",
    },
                {
              icon: AiOutlineSafetyCertificate,
      title: "Safety First",
      description: "We provide tools and guidelines to ensure safe trading between buyers and sellers.",
            },
    {
      icon: AiOutlineTeam,
      title: "Local Community",
      description: "We connect neighbors and build local communities through trusted trading.",
    },
    {
      icon: AiOutlineGlobal,
      title: "Free & Easy",
      description: "Free ads and simple tools to help you buy and sell with ease.",
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
                We're passionate about connecting buyers and sellers in your local community.
                Our mission is to make buying and selling safe, easy, and accessible for everyone.
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
                  To provide a safe, easy-to-use platform that connects local buyers and sellers,
                  making it simple to find great deals and sell items in your neighborhood
                  while building a trusted community marketplace.
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
                  To become the leading classified ads platform that revolutionizes
                  local buying and selling by offering free ads, safe transactions,
                  and connecting communities across cities and neighborhoods.
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
                    platform to make local buying and selling easier. We recognized
                    the need for a trusted, free marketplace where people could connect
                    and trade items in their local area.
                  </p>
                  <p>
                    Our journey began with a commitment to safety, simplicity, and
                    community building. We built our platform with the belief that
                    everyone should be able to buy and sell easily, with free ads,
                    safe communication, and local connections.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of users daily with hundreds
                    of thousands of active listings, creating a vibrant local marketplace
                    that connects communities and makes trading simple and safe.
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
              Join thousands of users buying and selling locally. Post your first ad today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Browse Ads
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
