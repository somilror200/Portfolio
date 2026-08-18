import React from "react";
import { Github, Mail } from "lucide-react";
import { profile } from "../data/resumeData";

const Footer = () => (
  <footer className="site-footer">
    <div className="shell footer-row">
      <p className="mono">
        © {new Date().getFullYear()} {profile.name} — Built with React
      </p>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Github size={15} /> GitHub
          </span>
        </a>
        <a href={`mailto:${profile.email}`}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Mail size={15} /> Email
          </span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
