import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import "./App.css";

const App = () => {
  return (
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/experience" element={<Experience />} />
          </Routes>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Routes>
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
  );
};

export default App;
