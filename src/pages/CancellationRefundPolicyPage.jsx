import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import {
  AiOutlineUndo,
  AiOutlineClockCircle,
  AiOutlineDollar,
  AiOutlineSafetyCertificate,
  AiOutlineFileText,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";

const CancellationRefundPolicyPage = () => {
  const { appName, logo } = useSelector((state) => state.appSettings);

  const policyFeatures = [
    {
      icon: AiOutlineUndo,
      title: "Fresh Guarantee",
      description: "Cancel your grocery orders easily if items don't meet our freshness standards.",
    },
    {
      icon: AiOutlineClockCircle,
      title: "Quick Processing",
      description: "Fast processing of refunds for spoiled or damaged grocery items.",
    },
    {
      icon: AiOutlineDollar,
      title: "Quality Assurance",
      description: "Get full refunds for any grocery items that don't meet quality standards.",
    },
    {
      icon: AiOutlineSafetyCertificate,
      title: "Food Safety",
      description: "Safe and secure handling of all grocery items with proper food safety protocols.",
    },
  ];

  const cancellationTimeframes = [
    {
      type: "Fresh Produce",
      timeframe: "Before delivery",
      icon: AiOutlineCheckCircle,
      description: "Fresh fruits and vegetables can be cancelled before delivery.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      type: "Perishable Items",
      timeframe: "Within 1 hour",
      icon: AiOutlineCheckCircle,
      description: "Dairy, meat, and other perishable items must be cancelled within 1 hour.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      type: "Packaged Goods",
      timeframe: "Before processing",
      icon: AiOutlineExclamationCircle,
      description: "Canned goods, snacks, and packaged items can be cancelled before processing.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      type: "Out for Delivery",
      timeframe: "Not eligible",
      icon: AiOutlineCloseCircle,
      description: "Orders that are out for delivery cannot be cancelled.",
      color: "text-gray-600",
      bgColor: "bg-gray-100",
    },
  ];

  const refundMethods = [
    {
      method: "Original Payment Method",
      icon: AiOutlineDollar,
      timeframe: "2-3 business days",
      description: "Refunds are processed back to your original payment method.",
    },
    {
      method: "Store Credit",
      icon: AiOutlineFileText,
      timeframe: "Immediate",
      description: "Get instant store credit for your next grocery order.",
    },
    {
      method: "Cash on Delivery",
      icon: AiOutlineSafetyCertificate,
      timeframe: "Next delivery",
      description: "Refund amount deducted from your next order total.",
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
                Cancellation & Refund Policy
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Fresh and fair cancellation and refund policies for all your grocery needs.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Features */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Freshness Promise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to providing fresh groceries and fair cancellation and refund processes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {policyFeatures.map((feature, index) => (
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

        {/* Cancellation Timeframes */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Grocery Cancellation Timeframes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Different grocery items have different cancellation windows based on freshness and perishability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cancellationTimeframes.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${item.bgColor} flex-shrink-0`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.type}</h3>
                      <p className={`text-lg font-semibold ${item.color} mb-3`}>{item.timeframe}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Refund Methods */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Refund Methods</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the refund method that works best for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {refundMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <method.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.method}</h3>
                  <p className="text-green-600 font-semibold mb-3">{method.timeframe}</p>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Policy Content */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Order Cancellation</h2>
                <p className="text-gray-600 mb-6">
                  You can cancel your order under the following conditions:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Fresh produce: Before delivery is dispatched</li>
                  <li>Perishable items: Within 1 hour of order placement</li>
                  <li>Packaged goods: Before order processing begins</li>
                  <li>Pre-orders: Until the items are prepared for delivery</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How to Cancel an Order</h2>
                <p className="text-gray-600 mb-6">
                  To cancel your order, you can:
                </p>
                <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-2">
                  <li>Log into your account and go to "My Orders"</li>
                  <li>Find the grocery order you want to cancel</li>
                  <li>Click on "Cancel Order" if the option is available</li>
                  <li>Follow the cancellation process</li>
                  <li>Contact customer support for urgent cancellations</li>
                </ol>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Refund Eligibility</h2>
                <p className="text-gray-600 mb-6">
                  Refunds are available for the following situations:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Order cancelled within the allowed timeframe</li>
                  <li>Grocery items received are spoiled or damaged</li>
                  <li>Wrong items received</li>
                  <li>Items not fresh or as described</li>
                  <li>Late delivery beyond the promised timeframe</li>
                  <li>Items not received (lost in transit)</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Non-Refundable Items</h2>
                <p className="text-gray-600 mb-6">
                  The following items are generally not eligible for refunds:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Perishable items after delivery</li>
                  <li>Fresh produce that has been consumed</li>
                  <li>Items damaged by improper storage</li>
                  <li>Items returned without proper packaging</li>
                  <li>Items past their expiration date when delivered</li>
                  <li>Gift cards and vouchers</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Refund Processing Time</h2>
                <p className="text-gray-600 mb-6">
                  Refund processing times vary by payment method:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Credit/Debit Cards: 2-3 business days</li>
                  <li>PayPal: 1-2 business days</li>
                  <li>Bank Transfer: 3-5 business days</li>
                  <li>Store Credit: Immediate</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Return Process</h2>
                <p className="text-gray-600 mb-6">
                  For grocery items that need to be returned:
                </p>
                <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-2">
                  <li>Contact customer support to initiate a return</li>
                  <li>Receive return authorization and pickup schedule</li>
                  <li>Keep items in original packaging and refrigerate if needed</li>
                  <li>Our delivery team will pick up the items</li>
                  <li>Wait for inspection and approval</li>
                  <li>Receive refund once approved</li>
                </ol>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Partial Refunds</h2>
                <p className="text-gray-600 mb-6">
                  In some cases, partial refunds may be issued for:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Minor quality issues that don't affect freshness</li>
                  <li>Late delivery (partial refund for inconvenience)</li>
                  <li>Items returned in partially consumed condition</li>
                  <li>Missing items from the order</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dispute Resolution</h2>
                <p className="text-gray-600 mb-6">
                  If you're not satisfied with our refund decision, you can:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Contact our customer support team for review</li>
                  <li>Provide additional documentation or evidence</li>
                  <li>Request escalation to a supervisor</li>
                  <li>File a dispute with your payment provider</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Information</h2>
                <p className="text-gray-600 mb-6">
                  For cancellation and refund inquiries, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <AiOutlineMail className="w-5 h-5 text-green-600" />
                    <p className="text-gray-700 font-semibold">Email: qauds.info@gmail.com</p>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <AiOutlinePhone className="w-5 h-5 text-green-600" />
                    <p className="text-gray-700 font-semibold">Phone: +91 9591727966</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AiOutlineFileText className="w-5 h-5 text-green-600" />
                    <p className="text-gray-700 font-semibold">Live Chat: Available 24/7 on our website</p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-green-800 text-sm mt-2">
                    This Cancellation & Refund Policy is subject to change. Please check back regularly for updates.
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

export default CancellationRefundPolicyPage;
