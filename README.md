# Vrushali Alugade Portfolio

A single-page portfolio built with React, TypeScript, and Vite for software development and AI application engineering opportunities.

## What is included

- Responsive, recruiter-friendly single-page portfolio
- Typed portfolio content in [src/data/portfolio.ts](src/data/portfolio.ts)
- Public résumé and portrait copied into [public/](public/)
- GitHub Pages deployment workflow for automatic deployment from the main branch
- Anchor navigation, keyboard-accessible tabs, expandable project details, and visible focus states

## Project structure

- [src/App.tsx](src/App.tsx) — page composition and content sections
- [src/data/portfolio.ts](src/data/portfolio.ts) — typed content for experience, projects, skills, and beyond-work sections
- [src/styles.css](src/styles.css) — responsive styling and layout
- [public/resume.pdf](public/resume.pdf) — approved résumé used for the download link
- [public/profile.jpg](public/profile.jpg) — approved portrait used in the introduction section
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml) — GitHub Pages deployment workflow
- [vite.config.ts](vite.config.ts) — Vite configuration using base `/`

## Development

Use Node.js 24 LTS (the older local Node 20.16 installation emits a tooling engine warning).

1. Install dependencies:

   npm ci

2. Start the local development server:

   npm run dev

3. Open the local URL shown in the terminal, typically http://localhost:5173/

## Build

To verify the production build:

npm run lint
npm run type-check
npm run build

## Preview

To preview the production bundle locally:

npm run preview

## Deployment

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

The workflow is defined in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) and is configured to:

- install dependencies with `npm ci`
- run lint, type-check, and any available test script
- build the Vite app
- upload only the `dist` output
- deploy with the official GitHub Pages actions

Important notes:

- Vite is configured with `base: '/'` for GitHub Pages hosting on the root domain.
- The build deploys only the dist directory.
- The reference folder is deliberately excluded from Git and is not published.
- A GitHub Pages source is configured in GitHub repository settings using GitHub Actions.

### GitHub Pages setup in GitHub

1. Open the repository in GitHub.
2. Go to Settings → Pages.
3. Under Source, select GitHub Actions.
4. Save the configuration.
5. The first successful workflow run will publish the site.

### Local preview and troubleshooting

- Preview locally: `npm run preview`
- Build locally: `npm run build`
- Lint locally: `npm run lint`
- Type-check locally: `npm run type-check`

If deployment fails:

- confirm the repository default branch is `main`
- confirm the workflow has permission to deploy to Pages
- confirm the app builds successfully locally before pushing
- check the Actions tab in GitHub for workflow logs and errors

No gh-pages branch or personal access token is required when using the GitHub Pages Actions workflow.

## Resume and portrait source handling

The portfolio uses the approved public résumé and portrait from the repository reference materials:

- [reference/resume.pdf](reference/resume.pdf)
- [reference/photo.PNG](reference/photo.PNG)

These files were copied only into public assets for deployment, and the original reference folder remains excluded from git publish output.

## Content provenance and missing inputs

`reference/resume.pdf` is authoritative. Achievement wording is retained; guided research and team outcomes are identified. MCP functionality retrieves relevant S/4HANA Cloud OData URLs through natural-language queries.

- `reference/profile.jpg` is absent. The existing public portrait is byte-identical to `reference/photo.PNG`, with no facial edits.
- User-provided Tableau links are displayed on the two earlier DIY projects. Repository/demo buttons remain omitted for projects without supplied public URLs.
- The user supplied additional project details and Tableau links for System for Full Immunization Coverage and Dashboard for AICTE Schemes. These now appear under DIY Projects, retaining prototype and team-result attribution.

## Navigation and validation

The existing tabbed design is retained. Work links to `#projects`, About to `#experience`; `#skills` and `#beyond-work` also select the corresponding panel on direct navigation. Tabs support Left/Right and Home/End. Project and responsibility details use native expandable controls.

Validated with Node 24: clean dependency installation, lint, TypeScript checks and production build. Browser checks cover 320, 375, 768 and 1440 pixel widths, section navigation, keyboard tabs, expandable details, portrait loading, email links and an exact-byte resume download comparison.

## Official deployment references

- [Vite static deployment guide](https://vite.dev/guide/static-deploy)
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

The workflow builds on pushes to main and uploads only `dist`, with Vite base `/`. Enable Settings > Pages > Source > GitHub Actions when ready. No commit, push or publication was performed during local implementation.

## Notes

- No backend or authentication is used.
- No API keys are exposed in the frontend.
- The site is intended for static GitHub Pages hosting and does not require a routing library.

## Project browsing

Projects opens with three featured highlights. Filter buttons show Featured, All, Professional, Academic or DIY projects, with counts and keyboard-accessible pressed states. All eight projects remain available. The `featured` flag and category in `src/data/portfolio.ts` control selection. Category illustrations appear on cards; shared grid rows align headings and controls across each desktop row.

Project cards flip on View details to show full contributions, status and available links. Back to overview or Escape returns to the front. Focus follows the active face; inactive controls are inert and hidden from assistive technology. Reduced-motion preferences disable the rotation. Both faces share intrinsic layout space to prevent clipping and preserve equal row heights.
