import React from "react";

const About = () => (
  <section className="section about">
    <h2>About Me.</h2>
    <div className="about-grid">
    <img
    src="https://media.licdn.com/dms/image/v2/C5603AQGrHZKWNPZj4w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1643972369135?e=1755129600&v=beta&t=xYbJldwY7gSozg01iRpwplWfNKC4SLYoKR2WxylU-es"
    alt="Somil Garak"
    />

      <div>
        <p>
          I'm a penultimate-year Bachelor of Computer Science student at Deakin University,
          with a strong passion for building modern web and mobile applications that solve real-world problems.
        </p>
        <p>
          Over the years, I’ve honed my skills in frontend technologies like React, JavaScript, HTML, and CSS, 
          and backend development using C# and SQL. I’ve also worked with Android (Java/Kotlin), and have
          deployed real-world applications including a portfolio site, a Lost and Found platform, and a responsive business site for Subcon PL.
        </p>

        <h3>EDUCATION</h3>
        <p>Deakin University – Bachelor of Computer Science (Expected 2025)</p>

        <h3>EXPERIENCE / SKILLS</h3>
        <p>
          React, JavaScript, HTML, CSS, C#, SQL, Android (Java/Kotlin), Git, Firebase, REST APIs,
          Web Deployment (GitHub Pages & Netlify)
        </p>

        <h3>AWARDS / RECOGNITION</h3>
        <p>
          Team Lead at Subcon PL<br />
          Member of Deakin Software Engineering Club (DSEC)
        </p>

        <a href="/work">
          <button>VIEW MY WORK</button>
        </a>
      </div>
    </div>
  </section>
);

export default About;
