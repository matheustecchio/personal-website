# Matheus Tecchio

Personal portfolio built with Astro and JetBrains Mono. A short home page introduces selected work. `/projects/` adds descriptions, technologies, source links and documentation. Static output, with no client-side framework or tracking.

## Local development

Use Node.js 22.23.4 or newer and npm 9.6.5 or newer. `.nvmrc` selects Node.js 24 LTS.

```sh
npm ci
npm run dev
```

## Verify and build

```sh
npm run build
npm test
npm run preview
```

`build` checks Astro and TypeScript, then generates `dist/`. Tests check the generated routes, fragment links, project links, media and page metadata. Build before running tests. Any static host can serve `dist/`; no hosting provider is configured yet.

## Update content

- Project descriptions and links: `src/data/projects.ts`.
- Home and biography: `src/pages/index.astro`.
- Shared layout and metadata: `src/layouts/Layout.astro`.
- Colors, spacing and responsive styles: `src/styles/global.css`.

The design takes structural inspiration from [Sunny Patel's portfolio](https://www.sunnypatel.net/), with original content, project covers, purple accents and a standard cursor. Media origins are documented in `public/images/README.md`. Email, LinkedIn, resume and hosting can be added once supplied.
