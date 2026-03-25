# Academic Portfolio Website Template

A clean, responsive academic portfolio website template for researchers, PhD students, and faculty. Built with React, TypeScript, and Tailwind CSS — deployable to GitHub Pages in minutes.

![Tech Stack](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4) ![Vite](https://img.shields.io/badge/Vite-7-646CFF)

## Features

- **Five pages**
  - Home, Publications, Software, Teaching, and Contact
- **Home page sections**
  - Hero with profile photo, Education, Research interests, News, Selected publications, Talks, Students, Awards, Grants, Service, and Bio
- **Publications page**
  - Grouped by type (Conference, Journal, Workshop, Preprint, Technical Report, Thesis, Poster, In Preparation) with links to PDF, arXiv, DOI, Code, and Slides
- **Software / Projects page**
  - Project cards with descriptions, tags, GitHub and demo links
- **Teaching page**
  - Course listing with semester-by-semester role history
- **Contact page**
  - Links to email, GitHub, LinkedIn, Google Scholar, and ORCID; location derived from your profile data
- **Smooth animations**
  - Via Framer Motion
- **Responsive design**
  - Works on mobile, tablet, and desktop
- **Single data file**
  - All content lives in `src/data/portfolio.ts` and `src/data/publications.ts`
- **GitHub Pages deployment**
  - One command deploys the built site

## Tech Stack

| Layer | Library |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 7 |
| Routing | Wouter |
| Styling | Tailwind CSS 3 + Shadcn/ui |
| Icons | Lucide React + React Icons |
| Animations | Framer Motion |
| Data / state | TanStack React Query |
| Deployment | gh-pages |

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### 1. Clone or fork the repository

```bash
git clone git@github.com:xinzhouhe/portfolio-website-template.git
cd portfolio-website-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your profile photo

Replace `public/imgs/profile.jpg` with your own photo (any common image format works). Also replace `public/favicon.jpg` with a square crop of the same photo — it appears as the browser tab icon and the navbar logo.

### 4. Add your CV (optional)

Drop your CV PDF at `public/cv.pdf`. If you don't have one yet, remove the `cvUrl` field from `src/data/portfolio.ts`.

### 5. Fill in your information

Open **`src/data/portfolio.ts`** and edit the exported constants:

#### `profile` — your basic info

```ts
export const profile: Profile = {
  id: 1,
  name: "Alex Doe",
  title: "Ph.D. Student\nDept. of Computer Science\nState University\nAnytown, USA",
  intro: "Short hero blurb shown on the home page.",
  bio: "Longer background paragraph shown below the research section.",
  imageUrl: "/imgs/profile.jpg",
  email: "you@example.com",
  orcidUrl: "https://orcid.org/0000-0000-0000-0000",
  scholarUrl: "https://scholar.google.com/citations?user=XXXX",
  githubUrl: "https://github.com/404-does-not-exist",
  linkedinUrl: "https://www.linkedin.com/in/404-does-not-exist/",
  cvUrl: "/cv.pdf",
};
```

All link fields (`orcidUrl`, `scholarUrl`, `githubUrl`, `linkedinUrl`, `cvUrl`) are optional — omit any you don't want to display.

#### `education` — your degrees

```ts
export const education: Education[] = [
  {
    id: 1,
    institution: "State University",
    degree: "Ph.D. in Computer Science",
    year: "2022 - Present",
    link: "https://cs.example.edu/",
    order: 1,
  },
  // add more entries...
];
```

#### `research` — research interests / thrusts

```ts
export const research: Research[] = [
  {
    id: "distributed_systems",
    title: "Fault-Tolerant Distributed Systems (Ongoing)",
    overview: "One-liner description of this research direction.",
    items: [
      {
        name: "Sub-topic name",
        description: "Details about this specific project or thread.",
        link: "https://optional-external-link.com",
        note: "(Best Paper Award)",  // optional
      },
    ],
    order: 1,
  },
];
```

#### `projects` — software / projects page

```ts
export const projects: Project[] = [
  {
    id: "my_project",
    title: "My Project",
    description: [
      "First bullet point describing the project.",
      "Second bullet point with more details.",
    ],
    link: "https://demo-url.example.com",       // optional live demo
    githubLink: "https://github.com/you/repo",  // optional GitHub link
    tags: ["Go", "Distributed Systems"],
    order: 0,
  },
];
```

#### Other sections

All other exported arrays follow the same pattern — add objects, set `order` to control display order, and leave empty arrays (`[]`) for sections you want to hide:

| Export | Section |
|---|---|
| `news` | News items on home page |
| `courses` | Teaching page |
| `students` | Students section on home page |
| `services` | Service section on home page |
| `talks` | Talks section on home page |
| `awards` | Awards section on home page |
| `grants` | Grants section on home page |

### 6. Add publications

Open **`src/data/publications.ts`** and add entries to the `publications` array:

```ts
export const publications: Publication[] = [
  {
    id: "doe2025paper",               // unique string ID
    title: "Your Paper Title",
    authors: [
      { name: "Alex Doe", me: true }, // me: true bolds your name
      { name: "Coauthor One", url: "https://coauthor.example.com" },
      { name: "Coauthor Two" },
    ],
    venue: "Conference or Journal Name",
    year: 2025,
    links: {
      pdf: "https://example.com/paper.pdf",
      arxiv: "https://arxiv.org/abs/XXXX.XXXXX",
      doi: "https://doi.org/10.XXXX/XXXXX",
      code: "https://github.com/you/repo",
      slides: "https://example.com/slides.pdf",
    },
    note: "Best Paper Award",  // optional — shown in red
    kind: "conference",        // see valid values below
    featured: true,            // show on home page under Selected Publications
  },
];
```

Valid `kind` values: `"conference"` | `"journal"` | `"workshop"` | `"preprint"` | `"techreport"` | `"thesis"` | `"poster"` | `"inprep"`

### 7. Run the development server

```bash
npm run dev
```

The site is now live at [http://localhost:5173](http://localhost:5173). Changes to data files hot-reload instantly.

### 8. Customize the color scheme (optional)

Open **`tailwind.config.ts`**. The primary color (used for headings, links, and the footer background) is set via CSS variables in `src/index.css`. Look for:

```css
--primary: <hsl value>;
```

Change it to any color you like. The default is a dark academic red (`#820000`).

## Deployment

### GitHub Pages

1. In `package.json`, add your repository URL:

   ```json
   "homepage": "https://your-username.github.io/your-repo-name"
   ```

2. Deploy:

   ```bash
   npm run deploy
   ```

   This runs `npm run build` then pushes the `dist/` folder to the `gh-pages` branch. GitHub Pages will serve it automatically.

3. In your GitHub repository settings → Pages, make sure the source is set to the `gh-pages` branch.

### Other hosts (Netlify, Vercel, Cloudflare Pages)

Build with:

```bash
npm run build
```

Then deploy the `dist/` folder to any static host.

## Project Structure

```
portfolio-website-template/
├── public/
│   ├── cv.pdf              # Your CV (replace with your own)
│   ├── favicon.jpg         # Browser tab / navbar logo
│   └── imgs/
│       └── profile.jpg     # Profile photo (replace with your own)
├── src/
│   ├── data/
│   │   ├── portfolio.ts    # ← Edit this: all profile, education, research, etc.
│   │   └── publications.ts # ← Edit this: all publications
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Publications.tsx
│   │   ├── Software.tsx
│   │   ├── Teaching.tsx
│   │   └── Contact.tsx
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── FooterContact.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ResearchItem.tsx
│   │   └── ui/             # Shadcn/ui components
│   └── hooks/
│       └── use-portfolio.ts # React Query hooks — no need to edit
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build optimized production site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run TypeScript type checking |
| `npm run deploy` | Build and deploy to GitHub Pages |

## License

MIT — free to use, modify, and distribute. Attribution appreciated but not required.
