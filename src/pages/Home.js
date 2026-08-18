import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Code2,
  LayoutTemplate,
  Server,
  Database,
  Smartphone,
  Cloud,
} from "lucide-react";
import { profile, stats, toolbox } from "../data/resumeData";
import { useScrollReveal } from "../hooks";

const icons = { Code2, LayoutTemplate, Server, Database, Smartphone, Cloud };

const Home = () => {
  useScrollReveal();

  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <div className="hero-kicker">
              <span className="dot" /> Open to graduate & junior roles
            </div>
            <h1>
              Hi, I'm {profile.name.split(" ")[0]}.<br />
              I build <span>software</span>, not just structures.
            </h1>
            <p className="hero-lede">{profile.tagline}</p>
            <div className="hero-actions">
              <Link to="/work" className="btn btn-primary">
                View My Work <ArrowRight size={16} />
              </Link>
              <a
                href={`${process.env.PUBLIC_URL}/resume-somil-garak.pdf`}
                className="btn btn-ghost"
                download
              >
                <Download size={16} /> Download Resume
              </a>
            </div>

            <div className="hero-facts">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="hero-fact-value mono">{s.value}</div>
                  <div className="hero-fact-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal">
            <img
              src={`${process.env.PUBLIC_URL}/assets/hero-blueprint.png`}
              alt="Abstract illustration of an architectural blueprint transforming into a glowing circuit board, symbolising a transition from construction to software engineering"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head reveal">
            <div className="section-kicker">Toolbox</div>
            <h2 className="section-title">What I build with</h2>
            <p className="section-sub">
              Practical exposure across the stack — from UI to database to
              cloud deployment.
            </p>
          </div>

          <div className="toolbox-grid">
            {toolbox.map((group) => {
              const Icon = icons[group.icon];
              return (
                <div className="toolbox-card reveal" key={group.title}>
                  <div className="toolbox-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{group.title}</h3>
                  <div className="tag-row">
                    {group.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="contact-cta reveal">
            <h2>Currently building SmartStock</h2>
            <p>
              An IoT-enabled automatic stock management and delivery system
              for supermarkets — my current Deakin University distinction
              task, combining Node.js microservices, Node-RED and AWS.
            </p>
            <div className="contact-actions">
              <Link to="/work" className="btn btn-primary">
                See the case study <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn btn-ghost">
                More about me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
