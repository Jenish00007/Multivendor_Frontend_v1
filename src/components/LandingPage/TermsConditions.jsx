import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <div className="terms-page">
      <Header />

      <section className="terms-hero">
        <div className="container">
          <h1>Terms and Conditions</h1>
          <p className="hero-subtitle">Terms of service for using BNSN</p>
          <p className="last-updated">Last updated: December 2024</p>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="terms-main-content">
            <section className="terms-section">
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using BNSN, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            </section>

            <section className="terms-section">
              <h2>2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of BNSN for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>3. User Responsibilities</h2>
              <p>As a user of BNSN, you agree to:</p>
              <ul>
                <li>Provide accurate and truthful information</li>
                <li>Not post illegal, harmful, or inappropriate content</li>
                <li>Respect other users and their property</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not engage in fraudulent or deceptive practices</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>4. Prohibited Activities</h2>
              <p>You may not use our service to:</p>
              <ul>
                <li>Post false, misleading, or deceptive listings</li>
                <li>Spam or send unsolicited communications</li>
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>5. Transaction Safety</h2>
              <p>BNSN provides a platform for users to connect, but we do not:</p>
              <ul>
                <li>Guarantee the quality or authenticity of items</li>
                <li>Handle payments or transactions directly</li>
                <li>Provide insurance for transactions</li>
                <li>Mediate disputes between users</li>
              </ul>
              <p>Users are responsible for their own safety and should meet in public places for transactions.</p>
            </section>

            <section className="terms-section">
              <h2>6. Limitation of Liability</h2>
              <p>In no event shall BNSN or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BNSN, even if BNSN or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            </section>

            <section className="terms-section">
              <h2>7. Termination</h2>
              <p>We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            </section>

            <section className="terms-section">
              <h2>8. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
            </section>

            <section className="terms-section">
              <h2>9. Contact Information</h2>
              <p>If you have any questions about these Terms and Conditions, please contact us:</p>
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

export default TermsConditions;

