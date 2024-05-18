import React, { useState, useEffect } from 'react';
import logo from "../assets/healthyRushDark.png";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <Link className="navbar-brand" to="/" onClick={() => handleLinkClick('/')}>
          <img style={{ width: '100px', margin: '10px', paddingLeft:"10px"}} src={logo} alt="Logo" />
        </Link>
      </a>

      <ul className="nav nav-pills" style={{ marginTop: '20px' }}>
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${activeLink === '/' ? 'active' : ''}`} 
            aria-current="page" 
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/shop" 
            className={`nav-link ${activeLink === '/shop' ? 'active' : ''}`} 
            onClick={() => handleLinkClick('/shop')}
          >
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/aboutus" 
            className={`nav-link ${activeLink === '/aboutus' ? 'active' : ''}`} 
            onClick={() => handleLinkClick('/aboutus')}
          >
            About us
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/contactus" 
            className={`nav-link ${activeLink === '/contactus' ? 'active' : ''}`} 
            onClick={() => handleLinkClick('/contactus')}
          >
            Contact us
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
