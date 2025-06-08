import React from "react";

const Contact = () => (
  <section className="section contact">
    <h2>Get in Touch.</h2>
    <div className="contact-grid">
      <div>
        <p>
            I'm always open to exciting opportunities, collaborations, or just a friendly chat. 
            Whether you want to discuss a project, explore an internship, or talk tech—feel free to reach out through 
            the form below or connect with me on LinkedIn.
        </p>
        <p>
            I respond promptly and look forward to hearing from you. Let’s build something awesome together!
        </p>
      </div>
      <form
        action="https://formspree.io/f/mgvyogjz"
        method="POST"
        >
        <label>Name *</label>
        <div className="name-fields">
            <input type="text" name="first" placeholder="First" required />
            <input type="text" name="last" placeholder="Last" required />
        </div>

        <label>Email *</label>
        <input type="email" name="email" required />

        <label>Comment *</label>
        <textarea name="message" required></textarea>

        <button type="submit">Submit</button>
    </form>

    </div>
    <div className="contact-links">
      <a
        href="https://www.linkedin.com/in/somil-garak-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>{" "}
      |{" "}
      <a
        href="https://github.com/somilror200"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </section>
);

export default Contact;

