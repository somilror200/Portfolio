// Centralized content — sourced from Somil Garak's resume.
// Keeping this as data (rather than hardcoding JSX) makes the site easy to
// update as projects, skills, and experience evolve.

export const profile = {
  name: "Somil Garak",
  role: "Computer Science Student & Aspiring Software Developer",
  location: "Melbourne, Victoria, Australia",
  email: "somilror200@gmail.com",
  phone: "0433 135 015",
  github: "https://github.com/somilror200",
  tagline:
    "I spent years building physical structures on residential job sites. Now I build software — same discipline, same attention to blueprints, different material.",
  summary:
    "Computer Science student at Deakin University with hands-on experience building responsive web applications and working across frontend, backend, API, database, mobile and cloud development. Practical exposure to React, Vue, Node.js, ASP.NET Core, REST APIs, SQL databases, Git, Docker and Google Cloud Platform through academic and personal development work. Brings strong problem-solving, reliability and teamwork developed while balancing university study with long-term construction employment.",
  seeking:
    "Seeking software developer, software engineer, web developer, graduate, junior or internship opportunities.",
};

export const stats = [
  { value: "3+", label: "Years balancing study & work" },
  { value: "12+", label: "Core languages & frameworks" },
  { value: "6", label: "Projects in the field" },
];

export const toolbox = [
  {
    icon: "Code2",
    title: "Core Development",
    items: ["C++", "C#", "Java", "Kotlin", "Python", "JavaScript", "SQL"],
  },
  {
    icon: "LayoutTemplate",
    title: "Web & UI",
    items: ["React", "Vue 3", "HTML5", "CSS3", "Responsive Web Development"],
  },
  {
    icon: "Server",
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "ASP.NET Core / Web API",
      "REST API Design",
      "Swagger / OpenAPI",
      "Postman",
    ],
  },
  {
    icon: "Database",
    title: "Data",
    items: ["PostgreSQL", "SQLite", "Microsoft SQL Server"],
  },
  {
    icon: "Smartphone",
    title: "Mobile",
    items: ["Android (Java/Kotlin)", "React Native"],
  },
  {
    icon: "Cloud",
    title: "Cloud & Engineering Tools",
    items: ["Google Cloud Platform", "Docker", "Git & GitHub", "Debugging"],
  },
];

export const projects = [
  {
    index: "01",
    title: "SmartStock",
    role: "IoT-Enabled Automatic Stock Management & Delivery System",
    status: "in-progress",
    statusLabel: "In Development — University Distinction Task",
    description:
      "A full-stack, IoT-enabled system designed to automate stock tracking and delivery scheduling for supermarkets. Sensors feed live inventory data through a Node-RED flow into backend microservices, which trigger low-stock alerts and delivery requests automatically — removing the manual stocktake bottleneck.",
    highlights: [
      "Node.js microservices handling stock events, alerts and delivery requests",
      "Node-RED flows wiring IoT sensor data into the backend pipeline",
      "Planned deployment on AWS with a relational database for stock history",
      "Currently in the implementation phase, following tutor sign-off on the project plan",
    ],
    tags: ["Node.js", "Node-RED", "IoT", "AWS", "REST API"],
    links: {},
  },
  {
    index: "02",
    title: "Fleet Tracker",
    role: "Full-Stack Fleet Management Dashboard",
    status: "complete",
    statusLabel: "Completed — Personal Project",
    description:
      "A fleet management dashboard for a simulated regional transport operator running the Melbourne–Ballarat corridor — giving dispatchers a single live view of vehicle locations, driver assignments, trip logs and maintenance/fuel alerts. Built to connect hands-on transport experience with modern full-stack development.",
    highlights: [
      "React, TypeScript and Tailwind frontend with a live map (Leaflet) and Recharts analytics",
      "Node.js/Express backend with Drizzle ORM over SQLite, full CRUD for vehicles, drivers and trips",
      "Real-time GPS simulation — vehicles move, accrue mileage, drain fuel and raise alerts automatically",
      "Live map, tables and KPIs auto-refresh every few seconds via polling",
    ],
    tags: ["React", "TypeScript", "Express", "Drizzle ORM", "SQLite", "Leaflet"],
    links: { repo: "https://github.com/somilror200/fleet-tracker" },
  },
  {
    index: "03",
    title: "Subcon Pty Ltd — Company Website",
    role: "Responsive Business Website",
    status: "complete",
    statusLabel: "Completed & Deployed",
    description:
      "Designed and shipped a responsive company website for Subcon Pty Ltd from scratch — planning the layout, building the UI in React, and handling the full deployment pipeline with a custom domain.",
    highlights: [
      "Built with React, JavaScript, HTML and CSS with dedicated mobile and desktop layouts",
      "Published via GitHub Pages with a custom domain",
      "Used Git/GitHub branching workflows throughout development",
    ],
    tags: ["React", "JavaScript", "HTML/CSS", "GitHub Pages", "Git"],
    links: { live: "https://somilror200.github.io/Subcon/" },
  },
  {
    index: "04",
    title: "Grewal Constructions — Company Website",
    role: "Marketing Website for a Melbourne Concreting & Carpentry Business",
    status: "complete",
    statusLabel: "Completed & Deployed",
    description:
      "Built the marketing website for Grewal Constructions, a Melbourne-based concreting and carpentry business working alongside builders including Henley Homes, Simonds Homes and Nostra Homes. A fast, front-end-only site showcasing the business, its services and completed projects.",
    highlights: [
      "Static HTML, CSS and JavaScript — no backend, no build step",
      "Service and gallery sections tailored to a trades/construction audience",
      "Deployed and hosted on GitHub Pages",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    links: { live: "https://somilror200.github.io/grewal-construction-website/" },
  },
  {
    index: "05",
    title: "My Story — Personal Site",
    role: "Personal Narrative & Background Site",
    status: "complete",
    statusLabel: "Completed & Deployed",
    description:
      "A personal site telling the story behind the resume — the journey from India to Australia, years of hands-on construction and interstate transport work, and the move into a Computer Science degree and software direction. Built as a companion piece to this portfolio, not a replacement for it.",
    highlights: [
      "Semantic HTML, responsive CSS and vanilla JavaScript — no framework or build step",
      "Light/dark theme toggle with scroll-reveal interactions",
      "Tells the journey from construction and transport work into software, in my own words",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    links: { live: "https://somilror200.github.io/somil-garak/" },
  },
  {
    index: "06",
    title: "Instagram Clone",
    role: "Open-Source Contribution — Forked Android Project",
    status: "complete",
    statusLabel: "Forked Project — Small Contribution",
    description:
      "An Android Instagram clone forked from another developer's project, used to get hands-on with Kotlin and Firebase-backed app development. Not an original build — included here as an early, honest look at reading someone else's codebase and shipping a small change to it.",
    highlights: [
      "Forked a Kotlin/Android app that recreates core Instagram functionality with Firebase for storage",
      "Read and navigated an existing codebase written by another developer",
      "Contributed a layout/UI fix on top of the original project",
    ],
    tags: ["Kotlin", "Android", "Firebase"],
    links: { repo: "https://github.com/somilror200/Instagram-Clone" },
  },
];

export const education = {
  institution: "Deakin University",
  program: "Bachelor of Computer Science",
  location: "Melbourne, VIC",
  status: "In Progress",
  coursework: [
    "Object-Oriented Programming",
    "Data Structures and Algorithms",
    "Database Management",
    "Software Engineering",
    "Embedded Systems",
  ],
  club: {
    name: "Deakin Software and Electronics Club (DSEC)",
    role: "Member",
    period: "July 2023 — Present",
    description:
      "Participates in software, electronics and technical learning activities, collaborating with other students on practical problem-solving and engaging with industry-focused events.",
  },
};

export const experience = [
  {
    date: "March 2022 — Present",
    title: "Formwork & Concrete",
    org: "Subcon Pty Ltd",
    location: "Truganina, VIC",
    description:
      "Residential construction — site set-out, boxing, framing and concrete preparation, read directly from engineering plans.",
    bullets: [
      "Read construction plans and engineering details to complete work accurately — identifying dimensions, levels, structural requirements and sequencing (the same precision now applied to reading technical specs and API docs)",
      "Worked closely with crew members and supervisors to meet daily targets, resolve on-site issues and maintain quality under time pressure",
      "Maintained reliable attendance while balancing full-time employment with university study — strong time management and accountability",
    ],
  },
  {
    date: "July 2023 — Present",
    title: "Member",
    org: "Deakin Software and Electronics Club (DSEC)",
    location: "Deakin University",
    description:
      "Software, electronics and technical learning community.",
    bullets: [
      "Collaborate with peers on practical software and electronics problem-solving",
      "Attend industry-focused events and workshops to strengthen software-development knowledge and professional communication",
    ],
  },
];

export const certifications = [
  { issuer: "LinkedIn Learning", title: "Learning C# Algorithms" },
  { issuer: "Coursera", title: "SQL for Data Science" },
  { issuer: "Udemy", title: "Android App Development" },
];
