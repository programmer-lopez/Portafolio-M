
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { DiReact } from "react-icons/di";
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" exact className="navbar-logo">
            Portfolio <DiReact />
          </Link>
        </div>
      </nav>

      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="experience" className="menu-item" href="/experience">
          Experience
        </a>
        {/*<a id="portfolio" className="menu-item" href="/portfolio">
          Portfolio
        </a>
        <a id="blogs" className="menu-item" href="/blogs">
          Blogs
        </a>
        */}<a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </>
  );
};

export default Navbar;