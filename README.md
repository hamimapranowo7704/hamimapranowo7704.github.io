# hamimapranowo7704.github.io

Personal portfolio website built with React + Vite and deployed via GitHub Pages.

## Live Site

- https://hamimapranowo7704.github.io/

## Tech Stack

- React
- Vite
- Font Awesome
- GitHub Actions (Pages deploy)

## Local Development

```bash
npm install
npm run dev
```

Open:

- http://localhost:5173

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

Deployment is automated using GitHub Actions workflow at `.github/workflows/deploy.yml`.
Every push to `main` triggers build and deploy to GitHub Pages.

## Project Structure

- `src/` — React source code
- `public/` — static assets
- `.github/workflows/deploy.yml` — CI/CD workflow for GitHub Pages
- `vite.config.js` — Vite configuration

## License

This project is for personal portfolio usage.
