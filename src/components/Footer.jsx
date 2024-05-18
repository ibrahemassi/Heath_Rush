import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/healthyRushDark.png";
import { FaFacebook,FaTwitch,FaLinkedin,FaInstagram } from 'react-icons/fa';
const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="footer-section">
      <div className="container relative">

        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo">Health Rust<span>.</span></a>
            </div>
            <p className="mb-4 mx-100">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

            <ul className="list-unstyled custom-social">
              <li><a href="#"><FaFacebook/></a></li>
              <li><a href="#"><FaLinkedin/></a></li>
              <li><a href="#"><FaInstagram/></a></li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><Link to="/aboutus">About us</Link></li>
                  <li><Link to="/contactus">Contact us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
