import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Buy and Sell Anything</h1>
            <h2 className="hero-subtitle">Everything you need, right in your neighborhood</h2>
            <p className="hero-description">
              Find great deals on cars, electronics, furniture, property, and more. 
              Post free classified ads and connect with buyers and sellers in your local area.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          <div className="categories-grid">
            {[
              { icon: '🚗', name: 'Cars', count: '12,345' },
              { icon: '📱', name: 'Electronics', count: '8,234' },
              { icon: '🏠', name: 'Property', count: '5,678' },
              { icon: '🛋️', name: 'Furniture', count: '3,456' },
              { icon: '👕', name: 'Fashion', count: '9,123' },
              { icon: '🎮', name: 'Gaming', count: '2,345' },
              { icon: '🏋️', name: 'Sports', count: '4,567' },
              { icon: '📚', name: 'Books', count: '1,234' },
            ].map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.count} ads</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose BNSN?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📢</div>
              <h3>Free Ads</h3>
              <p>Post unlimited free classified ads. No hidden fees, no credit card required.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Local Deals</h3>
              <p>Find buyers and sellers in your neighborhood. Meet locally and save on shipping.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safe Trading</h3>
              <p>We provide safety tips and guidelines. Always meet in public places for transactions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Easy Contact</h3>
              <p>Message sellers directly through our secure platform. Quick responses guaranteed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Quick Listing</h3>
              <p>Create your ad in minutes. Add photos, set price, and publish instantly.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Buy and sell on the go. Our platform works perfectly on all devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Sign Up Free</h3>
              <p>Create your account in seconds. No credit card required.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Post or Browse</h3>
              <p>List your items for free or browse thousands of ads in your area.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Connect & Deal</h3>
              <p>Message buyers/sellers, negotiate prices, and complete your transaction safely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Buy or Sell?</h2>
            <p>Join thousands of users buying and selling locally. Get started today!</p>
           
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;

