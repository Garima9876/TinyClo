import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="TinyClo Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {[
              "Home",
              "Why Rent?",
              "Clean Out Closet",
              "About Us",
              "Store",
              "Contact Us",
            ].map((item) => (
              <li className="nav-item" key={item}>
                <Link to="/" className="nav-link">
                  <button
                    className={`btn ${
                      activeButton === item
                        ? "btn-secondary rounded-pill"
                        : "btn"
                    }`}
                    onClick={() => handleClick(item)}
                  >
                    {item}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/login" className="ms-auto">
            <button className="btn btn-secondary ms-3">Login/Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
