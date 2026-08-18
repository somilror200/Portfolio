import React from "react";
import { CheckCircle2, Github, ExternalLink } from "lucide-react";
import { projects, profile } from "../data/resumeData";
import { useScrollReveal } from "../hooks";

const Work = () => {
  useScrollReveal();

  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <div className="section-kicker reveal">Selected Work</div>
          <h1 className="section-title reveal">Projects & case studies</h1>
          <p className="section-sub reveal">
            Six projects that show how I think — from a university IoT
            system still in progress and client sites already live, to the
            personal story behind it all and an early open-source contribution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-meta">
                  <span className="project-index mono">{project.index}</span>
                  <span
                    className={`project-status ${
                      project.status === "in-progress" ? "in-progress" : "complete"
                    }`}
                  >
                    <span className="dot" /> {project.statusLabel}
                  </span>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p className="project-role mono">{project.role}</p>
                  <p className="project-desc">{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map((h) => (
                      <li key={h}>
                        <CheckCircle2 size={16} /> {h}
                      </li>
                    ))}
                  </ul>
                  {project.links?.live || project.links?.repo ? (
                    <div className="project-links">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost btn-sm"
                        >
                          <ExternalLink size={15} /> View Live Site
                        </a>
                      )}
                      {project.links.repo && (
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost btn-sm"
                        >
                          <Github size={15} /> View Repository
                        </a>
                      )}
                    </div>
                  ) : (
                    <span className="project-note">
                      Repository link available on request — reach out and I'll share it.
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="contact-cta reveal" style={{ marginTop: "3rem" }}>
            <h2>More on GitHub</h2>
            <p>
              These are the highlights — the rest of my day-to-day
              coursework, experiments and smaller repos live on my GitHub
              profile.
            </p>
            <div className="contact-actions">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github size={16} /> Visit my GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
