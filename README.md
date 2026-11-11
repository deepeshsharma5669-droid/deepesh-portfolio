# Deepesh Sharma — Portfolio

Next.js 15 (App Router, TypeScript). No UI library, no CSS framework, no runtime dependencies beyond Next and React.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Edit content
All text, links and project details live in `content/site.ts`. Styles are in `app/globals.css`.
Resume file: `public/Deepesh_Sharma_Resume.pdf` (replace it to update the Download button).

## Before you publish
- `content/site.ts` → `experience.period` must match your resume PDF (the PDF currently says August 2024).
- `content/site.ts` → `site.url` — set it to your real domain.

## Deploy to Vercel
1. Create a new GitHub repo (e.g. `deepesh-portfolio`) and push this folder to it.
2. On vercel.com choose **Add New → Project**, import the repo, keep the defaults (Framework: Next.js), and click **Deploy**.
No environment variables are needed.
