import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { AiOutlineFileText, AiOutlineUser, AiOutlineShoppingCart, AiOutlineSafetyCertificate } from "react-icons/ai";

const TermsOfServicePage = () => {
  const { appName, logo } = useSelector((state) => state.appSettings);

  const termsFeatures = [
    {
      icon: AiOutlineFileText,
      title: "Clear Terms",
      description: "Transparent and easy-to-understand terms of service for all users.",
    },
    {
      icon: AiOutlineUser,
      title: "User Rights",
      description: "Protection of user rights and fair treatment for all customers.",
    },
    {
      icon: AiOutlineShoppingCart,
      title: "Secure Transactions",
      description: "Safe and secure shopping experience with clear transaction terms.",
    },
    {
      icon: AiOutlineSafetyCertificate,
      title: "Legal Protection",
      description: "Comprehensive legal protection for both customers and vendors.",
    },
  ];

  return (
    <div>
      <Header activeHeading={1} />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
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
                Terms of Service
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before using our platform. By using our services, you agree to these terms.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Features */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to You</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in transparency and fair treatment for all our users.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {termsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                    <feature.icon className="w-8 h-8 text-purple-600" />
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

        {/* Terms of Service Content */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">
                  By accessing and using {appName}, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Use License</h2>
                <p className="text-gray-600 mb-6">
                  Permission is granted to temporarily download one copy of the materials (information or software) on {appName} for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on {appName}</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. User Accounts</h2>
                <p className="text-gray-600 mb-6">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Product Information</h2>
                <p className="text-gray-600 mb-6">
                  We strive to display accurate product information, including prices, descriptions, and availability. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Payment Terms</h2>
                <p className="text-gray-600 mb-6">
                  All purchases are subject to our payment terms. By making a purchase, you agree to pay the full amount specified at the time of purchase. We reserve the right to refuse or cancel orders if fraud or an unauthorized or illegal transaction is suspected.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. Shipping and Delivery</h2>
                <p className="text-gray-600 mb-6">
                  Delivery times are estimates only. We are not responsible for delays beyond our control. Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. Returns and Refunds</h2>
                <p className="text-gray-600 mb-6">
                  Returns and refunds are subject to our Return Policy. Some items may not be eligible for return. Please review our Return Policy for complete details.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">8. Intellectual Property</h2>
                <p className="text-gray-600 mb-6">
                  The content on {appName}, including text, graphics, logos, images, and software, is the property of {appName} or its content suppliers and is protected by copyright and other intellectual property laws.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">9. Privacy Policy</h2>
                <p className="text-gray-600 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">10. Prohibited Uses</h2>
                <p className="text-gray-600 mb-6">
                  You may not use our service for any illegal or unauthorized purpose. You agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the service</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">11. Limitation of Liability</h2>
                <p className="text-gray-600 mb-6">
                  In no event shall {appName} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {appName}.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">12. Disclaimer</h2>
                <p className="text-gray-600 mb-6">
                  The materials on {appName} are provided on an 'as is' basis. {appName} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">13. Governing Law</h2>
                <p className="text-gray-600 mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which {appName} operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">14. Changes to Terms</h2>
                <p className="text-gray-600 mb-6">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page. Your continued use of the service after such modifications constitutes acceptance of the updated terms.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">15. Contact Information</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 font-semibold">Email: qauds.info@gmail.com</p>
                  <p className="text-gray-700 font-semibold">Phone: +91 9591727966</p>
                  <p className="text-gray-700 font-semibold">Address: Tirupattur,Tamil Nadu,India</p>
                </div>

                <div className="mt-12 p-6 bg-purple-50 rounded-lg">
                  <p className="text-purple-800 text-sm">
                    <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-purple-800 text-sm mt-2">
                    These Terms of Service are effective as of the date listed above and will remain in effect except with respect to any changes in their provisions in the future.
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

export default TermsOfServicePage;
