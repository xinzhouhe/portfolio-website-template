export type Profile = {
  id: number;
  name: string;
  title: string;
  intro: string;   // short hero blurb: current role + research interests
  bio: string;     // longer background: education history, path
  imageUrl: string;
  email?: string;
  orcidUrl?: string;
  scholarUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  cvUrl?: string;
};

export const profile: Profile = {
  id: 1,
  name: "Alex Doe",
  title: "Ph.D. Student\nDept. of Computer Science\nState University\nAnytown, USA",
  intro:
    "I am a Ph.D. student in Computer Science at State University. My research interests lie in distributed systems and computer networks, with a focus on improving reliability and performance at scale.",
  bio:
    "I received my B.S. in Computer Science from Example University in May 2022. Before starting my Ph.D., I spent a year as a software engineer at Acme Corp working on large-scale infrastructure.",
  imageUrl: "/imgs/profile.jpg",
  email: "you@example.com",
  orcidUrl: "https://orcid.org/0000-0000-0000-0000",
  scholarUrl: "https://scholar.google.com/citations?user=EXAMPLE",
  githubUrl: "https://github.com/404-does-not-exist",
  linkedinUrl: "https://www.linkedin.com/in/404-does-not-exist/",
  cvUrl: "/cv.pdf",
};

export type Education = {
  id: number;
  institution: string;
  degree: string;
  year: string;
  link?: string;
  order: number;
};

export const education: Education[] = [
  {
    id: 1,
    institution: "State University",
    degree: "Ph.D. in Computer Science",
    year: "2022 - Present",
    link: "https://example.com/cs/",
    order: 1,
  },
  {
    id: 2,
    institution: "Example University",
    degree: "B.S. in Computer Science",
    year: "Graduated May 2022",
    link: "https://example.com/university/",
    order: 2,
  },
];

export type ResearchSubItem = {
  name: string;
  description: string;   // Sentence after the colon
  link?: string;         // Optional external link
  note?: string;         // e.g., "(in preparation)" or "(Best Paper Award)"
};

export type Research = {
  id: string;
  title: string;         // thrust title (outer bullet)
  overview?: string;     // one-liner under thrust (optional)
  items?: ResearchSubItem[]; // nested bullets
  order: number;
};

export const research: Research[] = [
  {
    id: "distributed_systems",
    title: "Fault-Tolerant Distributed Systems (Ongoing)",
    overview:
      "Designing protocols and abstractions that keep distributed applications correct and available under failures.",
    items: [
      {
        name: "Consensus under partial synchrony",
        description:
          "Analyzing the performance of Paxos-family protocols when network delays are bounded but unpredictable.",
      },
    ],
    order: 1,
  },
  {
    id: "network_security",
    title: "Network Security (Ongoing)",
    overview:
      "Investigating attack surfaces and defenses in modern network infrastructure.",
    items: [
      {
        name: "Side-channel traffic analysis",
        description:
          "Studying how encrypted traffic metadata leaks information and exploring countermeasures.",
      },
    ],
    order: 2,
  },
];

export type Project = {
  id: string;
  title: string;
  description: string[];
  imageUrl?: string;
  link?: string;
  githubLink?: string;
  tags?: string[];
  order: number;
};

export const projects: Project[] = [
  {
    id: "distributed_kv",
    title: "Distributed Key-Value Store",
    description: [
      "Built a fault-tolerant, linearizable key-value store using the Raft consensus algorithm in Go.",
      "Implemented log replication, leader election, and snapshotting to handle node failures and network partitions.",
      "Benchmarked throughput and latency under varying failure scenarios using a custom test harness.",
    ],
    githubLink: "https://github.com/404-does-not-exist/distributed-kv",
    tags: ["Go", "Raft", "Distributed Systems"],
    order: 0,
  },
  {
    id: "network_monitor",
    title: "Network Traffic Monitor",
    description: [
      "Developed a real-time traffic analysis tool that captures and classifies packets using ML-based fingerprinting.",
      "Achieved 95%+ accuracy identifying application protocols in encrypted HTTPS streams.",
    ],
    githubLink: "https://github.com/404-does-not-exist/net-monitor",
    tags: ["Python", "Machine Learning", "Networking"],
    order: 1,
  },
  {
    id: "mini_compiler",
    title: "Mini Compiler",
    description: [
      "Implemented a compiler for a subset of C in Java, including lexing, parsing, type-checking, and LLVM IR code generation.",
      "Designed a modular architecture with a recursive-descent parser and visitor-pattern AST traversal.",
    ],
    tags: ["Java", "Compilers", "LLVM"],
    order: 2,
  },
  {
    id: "portfolio",
    title: "Academic Portfolio Website",
    description: [
      "This website — an open-source academic portfolio template built with React, TypeScript, and Tailwind CSS.",
    ],
    githubLink: "https://github.com/404-does-not-exist/portfolio",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    order: 3,
  },
];

export type NewsItem = {
  id: number;
  date: string;      // e.g. "Mar 2026"
  content: string;   // plain text or short HTML-free description
  link?: string;     // optional external link
  order: number;
};

export const news: NewsItem[] = [
  { id: 1, date: "Jan 2025", content: "Paper accepted at ECDS 2025!", order: 1 },
  { id: 2, date: "Sep 2024", content: "Started Ph.D. at State University.", order: 2 },
  { id: 3, date: "May 2024", content: "Presented work at the Systems Workshop.", order: 3 },
];

export type CourseSemester = {
  semester: string;
  role: string;
};

export type Course = {
  id: number;
  code: string;
  name: string;
  institution: string;
  description?: string;
  semesters: CourseSemester[];
  order: number;
};

export const courses: Course[] = [
  {
    id: 501,
    code: "CS 501",
    name: "Introduction to Distributed Systems",
    institution: "State University",
    semesters: [
      { semester: "Spring 2025", role: "Teaching Assistant" },
      { semester: "Fall 2024", role: "Teaching Assistant" },
    ],
    description: "Covers the fundamentals of distributed computing: communication, consistency, fault tolerance, and consensus. Students build a series of distributed systems from scratch.",
    order: 1,
  },
  {
    id: 301,
    code: "CS 301",
    name: "Algorithms and Data Structures",
    institution: "State University",
    semesters: [
      { semester: "Spring 2024", role: "Grader" },
    ],
    description: "Design and analysis of algorithms including sorting, graph traversal, dynamic programming, and NP-completeness.",
    order: 2,
  },
];

export type Student = {
  id: number;
  name: string;
  degree: string;        // e.g. "Ph.D.", "M.S.", "B.S."
  institution: string;
  year: string;          // e.g. "2024 – Present"
  note?: string;         // e.g. co-advised with X, now at Y
  link?: string;
  imageUrl?: string;
  order: number;
};

export const students: Student[] = [
  // Uncomment and fill in when you start advising students:
  // { id: 1, name: "Alice Smith", degree: "M.S.", institution: "State University", year: "2024 – Present", order: 1 },
];

export type ServiceItem = {
  id: number;
  category: string;      // e.g. "Program Committee", "Reviewer", "Organizing Committee"
  role: string;          // e.g. "Reviewer", "PC Member", "Session Chair"
  venue: string;         // e.g. "IEEE INFOCOM 2025"
  year?: string;
  order: number;
};

export const services: ServiceItem[] = [
  { id: 1, category: "Reviewer", role: "Reviewer", venue: "IEEE INFOCOM", year: "2025", order: 1 },
  { id: 2, category: "Reviewer", role: "Sub-reviewer", venue: "ACM SIGCOMM", year: "2024", order: 2 },
];

export type Talk = {
  id: number;
  title: string;
  event: string;         // conference, workshop, seminar, etc.
  location?: string;     // "Columbus, OH" or "Virtual"
  date: string;          // e.g. "Mar 2026"
  type: "invited" | "contributed" | "keynote" | "seminar" | "guest-lecture";
  slides?: string;
  video?: string;
  order: number;
};

export const talks: Talk[] = [
  {
    id: 1,
    title: "Consensus Under Partial Synchrony: Lessons from the Real World",
    event: "Example Conference on Distributed Systems (ECDS 2025)",
    location: "San Francisco, CA",
    date: "Mar 2025",
    type: "contributed",
    order: 1,
  },
  {
    id: 2,
    title: "Introduction to Fault-Tolerant Systems",
    event: "State University Systems Seminar",
    location: "Anytown, USA",
    date: "Oct 2024",
    type: "seminar",
    order: 2,
  },
];

export type Award = {
  id: number;
  name: string;          // e.g. "NSF Graduate Research Fellowship"
  org: string;           // awarding organization
  year: string;
  description?: string;
  link?: string;
  order: number;
};

export const awards: Award[] = [
  {
    id: 1,
    name: "NSF Graduate Research Fellowship",
    org: "National Science Foundation",
    year: "2023",
    description: "Three-year fellowship supporting graduate research in science and engineering.",
    link: "https://www.nsfgrfp.org/",
    order: 1,
  },
  {
    id: 2,
    name: "Best Paper Award",
    org: "Example Conference on Distributed Systems (ECDS)",
    year: "2024",
    order: 2,
  },
  {
    id: 3,
    name: "University Honors",
    org: "Example University",
    year: "2022",
    order: 3,
  },
];

export type Grant = {
  id: number;
  title: string;
  agency: string;        // e.g. "NSF", "DARPA", "NIH"
  role: "PI" | "Co-PI" | "Senior Personnel" | "Collaborator";
  amount?: string;       // e.g. "$500,000"
  period: string;        // e.g. "2026 – 2029"
  description?: string;
  link?: string;
  order: number;
};

export const grants: Grant[] = [
  // Uncomment and fill in when you have grants:
  // { id: 1, title: "Resilient Distributed Systems", agency: "NSF", role: "Co-PI", amount: "$250,000", period: "2025 – 2028", order: 1 },
];
