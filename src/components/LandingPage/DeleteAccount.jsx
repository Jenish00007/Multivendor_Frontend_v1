import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './DeleteAccount.css';

const DeleteAccount = () => {
  return (
    <div className="delete-account-page">
      <Header />
      
      <section className="delete-hero">
        <div className="container">
          <h1>Delete Account</h1>
          <p className="hero-subtitle">Account deletion guide and information</p>
        </div>
      </section>

      <section className="delete-content">
        <div className="container">
          <div className="delete-main-content">
            <div className="warning-box">
              <h2>⚠️ Important Notice</h2>
              <p>Deleting your account is a permanent action that cannot be undone. Please read this guide carefully before proceeding.</p>
            </div>

            <section className="help-section">
              <h2>What Happens When You Delete Your Account</h2>
              <p>When you delete your BNSN account, the following will occur:</p>
              <ul>
                <li><strong>Account Deactivation:</strong> Your account will be immediately deactivated and you will lose access to all BNSN services</li>
                <li><strong>Data Removal:</strong> Your personal information, profile data, and account settings will be permanently deleted</li>
                <li><strong>Listings Removal:</strong> All your active listings will be removed from the marketplace</li>
                <li><strong>Message History:</strong> All your conversations and message history will be deleted</li>
                <li><strong>Transaction Records:</strong> Your transaction history will be anonymized for legal and business purposes</li>
                <li><strong>Reviews and Ratings:</strong> Reviews you've written will be anonymized, reviews about you will remain</li>
              </ul>
            </section>

            <section className="help-section">
              <h2>Before You Delete Your Account</h2>
              <div className="checklist">
                <h3>📋 Pre-Deletion Checklist</h3>
                <div className="checklist-item">
                  <input type="checkbox" id="check1" />
                  <label htmlFor="check1">Download any important data you want to keep</label>
                </div>
                <div className="checklist-item">
                  <input type="checkbox" id="check2" />
                  <label htmlFor="check2">Complete any pending transactions</label>
                </div>
                <div className="checklist-item">
                  <input type="checkbox" id="check3" />
                  <label htmlFor="check3">Cancel any active listings</label>
                </div>
                <div className="checklist-item">
                  <input type="checkbox" id="check4" />
                  <label htmlFor="check4">Save contact information of users you want to stay in touch with</label>
                </div>
                <div className="checklist-item">
                  <input type="checkbox" id="check5" />
                  <label htmlFor="check5">Check if you have any outstanding payments or refunds</label>
                </div>
              </div>
            </section>

            <section className="help-section">
              <h2>How to Delete Your Account</h2>
              <div className="steps">
                {[
                  { num: '1', title: 'Log into Your Account', desc: 'Sign in to your BNSN account using your email and password.' },
                  { num: '2', title: 'Go to Account Settings', desc: 'Navigate to your account settings or profile page.' },
                  { num: '3', title: 'Find Account Deletion Option', desc: 'Look for "Delete Account" or "Close Account" option in the settings menu.' },
                  { num: '4', title: 'Confirm Your Identity', desc: 'You may be asked to re-enter your password or verify your email address.' },
                  { num: '5', title: 'Read and Confirm', desc: 'Carefully read the deletion terms and confirm that you understand the consequences.' },
                  { num: '6', title: 'Submit Deletion Request', desc: 'Click the final confirmation button to submit your account deletion request.' }
                ].map((step, index) => (
                  <div key={index} className="step">
                    <div className="step-number">{step.num}</div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="help-section">
              <h2>Need More Help?</h2>
              <p>If you're having trouble deleting your account or have questions about the process, our support team is here to help:</p>
              <div className="contact-info">
                <p>📞 Phone: +91 9741906407</p>
                <p>📧 Email: bnsn.info7@gmail.com</p>
                <p>📋 Support Hours: Monday - Friday, 9 AM - 6 PM IST</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeleteAccount;

