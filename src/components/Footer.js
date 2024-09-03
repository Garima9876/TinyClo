import React from "react";
import logoImage from "../components/assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-left mb-4 mb-md-0">
            <img src={logoImage} alt="TinyClo Logo" className="mb-2" style={{ width: '120px' }} />
          </div>
          <div className="col-md-4 text-center text-md-left mb-4 mb-md-0">
            <h5 className="fw-bold">Our Company</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-dark">Blog</a></li>
              <li><a href="#!" className="text-dark">About Us</a></li>
              <li><a href="#!" className="text-dark">Careers</a></li>
            </ul>
          </div>
          <div className="col-md-4 text-center text-md-left">
            <h5 className="fw-bold">Products</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-dark">Subscription Plans</a></li>
              <li><a href="#!" className="text-dark">Clothing</a></li>
              <li><a href="#!" className="text-dark">Equipments</a></li>
              <li><a href="#!" className="text-dark">Toys</a></li>
              <li><a href="#!" className="text-dark">Clean Out Closet</a></li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="text-center pt-4">
          <small>©2024 TinyClo. All rights reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;