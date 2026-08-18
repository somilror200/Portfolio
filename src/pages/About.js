import React from "react";
import { GraduationCap, Users } from "lucide-react";
import { profile, education, experience, certifications } from "../data/resumeData";
import { useScrollReveal } from "../hooks";

const About = () => {
  useScrollReveal();

  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <div className="section-kicker reveal">About</div>
          <h1 className="section-title reveal">From job sites to codebases</h1>
        </div>
      </section>

      <section className="section">
        <div className="shell about-grid">
          <div className="about-card reveal">
            <p>{profile.summary}</p>
            <p>{profile.seeking}</p>

            <div className="about-stat-row">
              <div>
                <div className="hero-fact-value mono" style={{ fontSize: "1.25rem" }}>
                  {education.institution}
                </div>
                <div className="hero-fact-label">{education.program}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="reveal" style={{ marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "1.25rem" }}>
                <GraduationCap
                  size={20}
                  style={{ verticalAlign: "-4px", marginRight: 8, color: "var(--primary)" }}
                />
                Education
              </h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date mono">{education.status}</div>
                  <h3>{education.program}</h3>
                  <div className="org">
                    {education.institution} — {education.location}
                  </div>
                  <p>Relevant coursework:</p>
                  <ul>
                    {education.coursework.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date mono">{education.club.period}</div>
                  <h3>{education.club.role}</h3>
                  <div className="org">{education.club.name}</div>
                  <p>{education.club.description}</p>
                </div>
              </div>
            </div>

            <div className="reveal">
              <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "1.25rem" }}>
                <Users
                  size={20}
                  style={{ verticalAlign: "-4px", marginRight: 8, color: "var(--primary)" }}
                />
                Experience
              </h2>
              <div className="timeline">
                {experience.map((exp) => (
                  <div className="timeline-item" key={exp.title + exp.org}>
                    <div className="timeline-date mono">{exp.date}</div>
                    <h3>{exp.title}</h3>
                    <div className="org">
                      {exp.org} — {exp.location}
                    </div>
                    <p>{exp.description}</p>
                    <ul>
                      {exp.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="section-head reveal">
            <div className="section-kicker">Certifications</div>
            <h2 className="section-title">Continuous learning</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div className="cert-card reveal" key={cert.title}>
                <div className="cert-issuer">{cert.issuer}</div>
                <h4>{cert.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
