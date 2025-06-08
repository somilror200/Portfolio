import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/work">MY WORK</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
      <li><Link to="/contact">CONTACT</Link></li>
    </ul>
  </nav>
);

export default App;

