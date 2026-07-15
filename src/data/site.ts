// Single source of truth for all portfolio content.
// Edit this file to update any section of the site — pushing to `main`
// rebuilds and redeploys automatically via GitHub Actions.

export interface ExperienceEntry {
  role: string;
  org: string;
  location?: string;
  start: string;
  end: string;
  narrative: string;
  bullets: string[];
  stack: string[];
}

export interface ProjectEntry {
  name: string;
  start: string;
  end: string;
  narrative: string;
  bullets: string[];
  stack: string[];
  link?: string;
}

export const profile = {
  name: "Amy Kim",
  role: "Full-Stack Developer",
  location: "Toronto, ON",
  summary: [
    "Developer who genuinely cares about solving problems and making life easier. I like to show my creativity through art.",
    "Junior software engineer with experience building and deploying full-stack web apps and REST APIs. Proficient in Python, JavaScript, TypeScript, and C, with practical experience in Git workflows, agile collaboration, and AI-driven development. Committed to building solutions, taking ownership of projects independently, and continuously learning new tools and technologies.",
  ],
};

export const education = {
  degree: "Honours Bachelor of Science — Computer Science Specialist",
  school: "University of Toronto",
  honors: ["University of Toronto International Scholar Award"],
};

export const skills = {
  languages: [
    "C/C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS",
    "PostgreSQL",
    "MySQL",
    "Java",
    "Assembly",
    "R",
  ],
  tools: [
    "React",
    "Node.js",
    "Next.js",
    "Django",
    "Tailwind",
    "Bootstrap",
    "jQuery",
    "Prisma",
    "Quarto",
    "Git",
    "GitHub",
    "Postman",
    "Spring Boot",
    "Figma",
    "RStudio",
    "Tableau",
    "NumPy",
    "Flask",
    "pandas",
    "seaborn",
    "Matplotlib",
    "BeautifulSoup",
    "scikit-learn",
    "Lighthouse",
  ],
};

export const experience: ExperienceEntry[] = [
  {
    role: "Freelance Full-Stack Developer",
    org: "Self-employed",
    start: "June 2026",
    end: "Present",
    narrative:
      "Working as a freelance developer for a team of professional interpreters, I noticed day-to-day terminology lookups were slow and scattered across spreadsheets and notes. I designed and built a full-stack vocabulary management app to fix that — a Flask + PostgreSQL REST API handling 3,000+ queries a day, paired with a React frontend for instant client-side search, filtering, and sorting across 2,000+ terms — so interpreters can find the right term without breaking their flow.",
    bullets: [
      "Accelerated daily interpretation workflows by developing a full-stack vocabulary management application with Flask, PostgreSQL, and React, centralizing terminology management into a single web platform",
      "Handled 3,000+ daily database queries and structured error handling by designing a robust CRUD-based REST API using Flask",
      "Built client-side search, filtering, and sorting with React, letting interpreters browse 2,000+ entries instantly without reloading the page",
    ],
    stack: ["Flask", "PostgreSQL", "React"],
  },
  {
    role: "Web Developer",
    org: "University of Toronto",
    location: "Toronto, ON",
    start: "June 2025",
    end: "Sept 2025",
    narrative:
      "I joined a university research lab to modernize their public-facing website. Beyond fixing cross-device layout bugs, I noticed the team was manually converting written articles into web pages, so I built a self-service pipeline that automatically renders uploaded Quarto (qmd) documents into HTML and deploys them — cutting publishing time by 60% — and wrote a JavaScript asset pipeline that automatically compressed images and GIFs to speed up page loads by 30%.",
    bullets: [
      "Improved lab website's cross-device user experience by building responsive React components and CSS layouts, resolving 10+ UI rendering defects across devices",
      "Reduced content publishing time by 60% by implementing a self-service content pipeline that automatically renders uploaded qmd articles into HTML and deploys them to the lab website",
      "Accelerated lab page load times by 30% by writing a custom JavaScript asset preprocessing pipeline that automated image/GIF compression",
    ],
    stack: ["React", "CSS", "JavaScript"],
  },
  {
    role: "Software Developer",
    org: "University of Toronto",
    location: "Toronto, ON",
    start: "Jan 2025",
    end: "April 2025",
    narrative:
      "I took over a bare-bones, browser-based slide viewer and rebuilt it into a full interactive presentation platform — adding autoplay with synchronized audio, auto-hiding controls, and a session-persistent playback system that remembers each user's preferences. A big part of the work was debugging inconsistent scroll-snap behavior across browsers and replacing it with a deterministic, keyboard-aware navigation system, which cut average navigation time by 55%.",
    bullets: [
      "Transformed a minimal browser-based slide viewer into an interactive presentation platform, reducing average user navigation time by 55% by implementing autoplay with synchronized audio, auto-hiding controls, and responsive UI state management",
      "Resolved persistent cross-device scroll alignment defects by systematically debugging browser snap-scroll behavior and keyboard event handling, replacing it with a deterministic navigation system",
      "Reduced user configuration time by 65% by developing a session-persistent playback system that saves recorded user preferences",
    ],
    stack: ["JavaScript", "CSS"],
  },
  {
    role: "Software Developer",
    org: "mHapy",
    location: "Toronto, ON",
    start: "Jan 2024",
    end: "April 2024",
    narrative:
      "As part of a 7-person agile team, I helped build the backend data layer for a mental health chatbot API. I designed a relational schema on a Railway-hosted SQL database, including a precomputed, real-time user-statistics table that cut assessment data retrieval latency by 40% by eliminating repeated multi-table aggregations in the Django ORM. I also wrote Postman test suites to validate HTTP response codes and payload structures across every endpoint before release.",
    bullets: [
      "Collaborated across a 7-person agile team to deliver a scalable, Railway-hosted SQL database for a mental health chatbot API",
      "Reduced assessment data retrieval latency by 40% by architecting a relational schema with a precomputed, real-time user-statistics table, eliminating repeated multi-table aggregations in Django ORM",
      "Validated API reliability by designing Postman test suites verifying HTTP response codes and payload structures across all endpoints",
    ],
    stack: ["Django", "SQL", "Postman"],
  },
];

export const projects: ProjectEntry[] = [
  {
    name: "Petpal",
    start: "Oct 2025",
    end: "Jan 2026",
    narrative:
      "Petpal is a full-stack pet adoption platform I built with a team of four, connecting animal shelters with adopters. I focused on the backend and integrations — building RESTful APIs for real-time messaging between adopters and shelters (cutting response times by 40%) and implementing role-based access control and authentication with Django's authorization framework to keep sensitive adoption data secure — while the frontend was built with React and Tailwind CSS.",
    bullets: [
      "Developed a full-stack pet adoption platform for a client with Django, React, and Tailwind CSS, collaborating with a team of four to connect animal shelters and adopters",
      "Reduced communication response times by 40% by engineering RESTful APIs that enabled real-time messaging between adopters and shelters, streamlining the adoption application workflow",
      "Secured sensitive adoption data by building role-based access control and authentication using Django's authorization framework",
    ],
    stack: ["Django", "React", "Tailwind CSS"],
    link: "https://github.com/kimmy190/Petpal",
  },
  {
    name: "Diabetes Data Visualization",
    start: "Nov 2024",
    end: "Dec 2024",
    narrative:
      "For this data visualization project, I worked with a dataset of 200+ health records to surface early diabetes risk patterns. After cleaning and restructuring the raw data in R — handling missing values and standardizing formats — I built an interactive Tableau dashboard so key health indicators could be explored visually instead of read off a spreadsheet.",
    bullets: [
      "Surfaced early diabetes risk patterns for a dataset of 200+ records by developing an interactive Tableau dashboard, enabling visual analysis of key health indicators",
      "Cleaned and transformed raw datasets with R, handling missing values, standardizing formats, and restructuring fields",
    ],
    stack: ["Tableau", "R"],
  },
  {
    name: "Automated Job Search Agent",
    start: "April 2026",
    end: "May 2026",
    narrative:
      "To cut down time spent manually screening job postings, I built an automated Python pipeline that scrapes LinkedIn listings and scores each one against my resume profile using the Claude API. I designed a custom AI scoring rubric to rank opportunities by fit, then wired the pipeline to push filtered, ranked results to a Google Sheet via the Sheets REST API — turning job search from a manual chore into an automated daily digest.",
    bullets: [
      "Built an automated Python pipeline using the Claude API to scrape LinkedIn job postings and score fit against a personal resume profile",
      "Designed a custom AI scoring rubric to rank opportunities and push filtered results to Google Sheets via REST API",
    ],
    stack: ["Python", "Claude API", "Google Sheets API"],
  },
];

export const contact = {
  email: "aamy.kim@alumni.utoronto.ca",
  linkedin: "https://www.linkedin.com/in/amy-kim8/",
  github: "https://github.com/kimmy190",
};
