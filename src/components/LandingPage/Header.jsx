import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-container">
            <div className="logo-circle">
              <span className="logo-text">BNSN</span>
            </div>
            <div className="logo-tagline">Buy, Sell, and Negotiate</div>
          </Link>
          <nav className="nav-menu">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
           
           
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

