import React from "react";
import { Mail, Phone, MapPin, Github, Download } from "lucide-react";
import { profile } from "../data/resumeData";
import { useScrollReveal } from "../hooks";

const Contact = () => {
  useScrollReveal();

  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <div className="section-kicker reveal">Contact</div>
          <h1 className="section-title reveal">Let's talk</h1>
          <p className="section-sub reveal">
            Open to graduate, junior developer and internship opportunities —
            the quickest way to reach me is email.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="contact-grid">
            <a href={`mailto:${profile.email}`} className="contact-card reveal">
              <div className="icon-wrap">
                <Mail size={20} />
              </div>
              <div>
                <small>Email</small>
                <strong>{profile.email}</strong>
              </div>
            </a>

            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-card reveal">
              <div className="icon-wrap">
                <Phone size={20} />
              </div>
              <div>
                <small>Phone</small>
                <strong>{profile.phone}</strong>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card reveal"
            >
              <div className="icon-wrap">
                <Github size={20} />
              </div>
              <div>
                <small>GitHub</small>
                <strong>github.com/somilror200</strong>
              </div>
            </a>

            <div className="contact-card reveal">
              <div className="icon-wrap">
                <MapPin size={20} />
              </div>
              <div>
                <small>Location</small>
                <strong>{profile.location}</strong>
              </div>
            </div>
          </div>

          <div className="contact-cta reveal">
            <h2>Prefer a document?</h2>
            <p>Grab a copy of my full resume — updated to reflect my current software focus.</p>
            <div className="contact-actions">
              <a
                href={`${process.env.PUBLIC_URL}/resume-somil-garak.pdf`}
                className="btn btn-primary"
                download
              >
                <Download size={16} /> Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
