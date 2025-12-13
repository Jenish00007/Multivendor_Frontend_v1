import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <Header />
      
      <section className="privacy-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="hero-subtitle">How we collect, use, and protect your information</p>
          <p className="last-updated">Last updated: December 2024</p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="policy-content">
            <section className="policy-section">
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, list an item, or contact us. This may include:</p>
              <ul>
                <li>Name and contact information</li>
                <li>Email address and phone number</li>
                <li>Profile information and preferences</li>
                <li>Item listings and descriptions</li>
                <li>Messages and communications</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and facilitate communication between users</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>3. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
              <ul>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist us in operating our platform</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section className="policy-section">
              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and update your personal information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of certain communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="contact-info">
                <p>📞 Phone: +91 9741906407</p>
                <p>📧 Email: bnsn.info7@gmail.com</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

