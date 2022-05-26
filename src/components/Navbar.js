import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbars">
        <div className="navbars-container">
          <Link to="/" className="navbars-logo">
            PORTFOLIO <i className="fa-solid fa-code" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
           <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "navs-menu active" : "navs-menu"}>
            <li className="navs-item">
              <Link to="/" className="navs.links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="navs-item">
              <Link to="/" className="navs-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="navs-item">
              <Link to="/" className="navs-links" onClick={closeMobileMenu}>
                Service
              </Link>
            </li>
            <li className="navs-item">
              <Link to="/" className="navs-links" onClick={closeMobileMenu}>
                Portfolio
              </Link>
            </li>
           {/* <li className="navs-item">
              <Link to="/" className="navs-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="navs-item">
              <Link to="/" className="navs-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>*/}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
