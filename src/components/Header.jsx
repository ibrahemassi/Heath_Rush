import React from 'react'
import logo from "../assets/healthyRushDark.png";
import { Link } from 'react-router-dom';

function Header() {
  const isActive = (link) => {
    
  }
  return (
    <div>
     <nav className="custom-navbar navbar navbar-expand-md" aria-label="Health Rust navigation bar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img style={{ width: '100px' }} src={logo} alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsHealthRust" aria-controls="navbarsHealthRust" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsHealthRust">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={"nav-item" + isActive}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li><Link to="/shop" className="nav-link" >Shop</Link></li>
            <li><Link to="/aboutus" className="nav-link" >About us</Link></li>
            <li><Link to="/contactus" className="nav-link" >Contact us</Link></li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Header