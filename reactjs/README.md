# Patron React Template

This folder contains a React (Vite) version of the original Patron template while preserving:

- same pages
- same content
- same styles and assets
- same responsiveness

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## How it works

- Each original HTML page is converted into a dedicated React JSX component under `src/pages/`.
- `src/App.jsx` maps `/*.html` URLs to their React page components.
- Original static assets are served from `public/assets` to preserve the same visuals and responsiveness.
