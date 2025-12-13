import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { AiOutlineSafetyCertificate, AiOutlineEye, AiOutlineLock, AiOutlineUser } from "react-icons/ai";

const PrivacyPolicyPage = () => {
  const { appName, logo } = useSelector((state) => state.appSettings);

  const privacyFeatures = [
                {
              icon: AiOutlineSafetyCertificate,
              title: "Data Protection",
              description: "Your personal information is protected with industry-standard encryption and security measures.",
            },
    {
      icon: AiOutlineEye,
      title: "Transparency",
      description: "We are transparent about how we collect, use, and protect your data.",
    },
    {
      icon: AiOutlineLock,
      title: "Secure Transactions",
      description: "All transactions are secured with SSL encryption to protect your financial information.",
    },
    {
      icon: AiOutlineUser,
      title: "User Control",
      description: "You have full control over your personal data and can request changes or deletion at any time.",
    },
  ];

  return (
    <div>
      <Header activeHeading={1} />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
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
                Privacy Policy
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Your privacy is our priority. Learn how we protect and handle your personal information.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Features */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Privacy Commitment</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
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

        {/* Privacy Policy Content */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                <p className="text-gray-600 mb-6">
                  We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Name, email address, and contact information</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely by our payment partners)</li>
                  <li>Account preferences and settings</li>
                  <li>Communication history with our support team</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How We Use Your Information</h2>
                <p className="text-gray-600 mb-6">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send order confirmations and updates</li>
                  <li>Improve our services and user experience</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Information Sharing</h2>
                <p className="text-gray-600 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To trusted third-party service providers who assist us in operating our platform</li>
                  <li>To comply with legal requirements or protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Data Security</h2>
                <p className="text-gray-600 mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure data storage with industry-standard protocols</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication measures</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Your Rights</h2>
                <p className="text-gray-600 mb-6">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Request data portability</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cookies and Tracking</h2>
                <p className="text-gray-600 mb-6">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 font-semibold">Email: qauds.info@gmail.com</p>
                  <p className="text-gray-700 font-semibold">Phone:+91 9591727966</p>
                  <p className="text-gray-700 font-semibold">Address: Tirupattur,Tamil Nadu,India</p>
                </div>

                <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-blue-800 text-sm mt-2">
                    This Privacy Policy is effective as of the date listed above and will remain in effect except with respect to any changes in its provisions in the future.
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

export default PrivacyPolicyPage;
