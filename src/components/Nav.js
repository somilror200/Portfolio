import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, Download, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { useHideOnScroll, useTheme } from "../hooks";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// External link out to a separate personal-narrative site (not part of this
// React app), opened in a new tab from both the desktop and mobile nav.
const externalLink = {
  href: "https://somilror200.github.io/somil-garak/",
  label: "My Story",
};

const Nav = () => {
  const [theme, toggleTheme] = useTheme();
  const hidden = useHideOnScroll();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${hidden && !open ? "hide" : ""}`}>
      <div className="shell nav-row">
        <NavLink to="/" className="brand" aria-label="Somil Garak — Home">
          <Logo />
          <span>somil.dev</span>
        </NavLink>

        <nav className="nav-links nav-links-desktop" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={externalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-external-link"
          >
            {externalLink.label} <ArrowUpRight size={13} />
          </a>
        </nav>

        <div className="nav-actions">
          <a
            href={`${process.env.PUBLIC_URL}/resume-somil-garak.pdf`}
            className="btn btn-ghost nav-resume-btn"
            download
          >
            <Download size={15} /> Resume
          </a>
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {createPortal(
        <nav
          className={`nav-links nav-links-mobile ${open ? "open" : ""}`}
          aria-label="Primary mobile"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={externalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-external-link"
          >
            {externalLink.label} <ArrowUpRight size={13} />
          </a>
        </nav>,
        document.body
      )}
    </header>
  );
};

export default Nav;
