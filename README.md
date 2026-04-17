# JCC

Portfolio website for Julius Cinco Cesar, built with Next.js App Router.

## Stack

- Next.js 16
- React 19
- TypeScript
- ESLint

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start local development:

```bash
npm run dev
```

3. Open http://localhost:3000

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build production app
- `npm run start`: Start production server
- `npm run lint`: Run ESLint checks

## Content Model

Primary content source is [src/data/contents.json](src/data/contents.json).

- `website`: Global metadata and author information
- `navigation`: Top-level route labels and page banner metadata
- `portfolio`: Portfolio entries used by `/portfolio` and `/portfolio/[slug]`
- `projects`: Project entries used by `/projects` and `/projects/[slug]`
- `skills`: About page skill cards

## Project Structure

- `src/app`: Routes and page-level metadata
- `src/components`: Reusable UI components
- `src/styles/globals.css`: Global tokens and shared styling
- `src/lib`: Shared utilities
- `public`: Static media assets

## Notes

- Theme preference is persisted in `localStorage` under `theme`.
- Dynamic detail pages are statically generated from `contents.json` via `generateStaticParams`.
