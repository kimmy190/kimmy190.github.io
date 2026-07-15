# amy kim — portfolio

Personal developer portfolio, built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Deployed to GitHub Pages at [kimmy190.github.io](https://kimmy190.github.io) via GitHub Actions on every push to `main`.

## Updating content

All page content — profile, education, skills, experience, and projects (including the longer per-entry `narrative` write-ups) — lives in one file:

```
src/data/site.ts
```

Edit that file, commit, and push to `main`. The GitHub Actions workflow (`.github/workflows/deploy.yml`) rebuilds and redeploys the site automatically — no manual deploy step needed.

## Structure

```
src/
├── data/site.ts          # all content — edit this to update the site
├── layouts/Layout.astro
├── components/            # Header, Hero, About, Skills, Contact, Footer
└── pages/
    ├── index.astro        # home: Hero, About, Skills, Contact
    ├── work.astro          # /work — detailed experience write-ups
    └── projects.astro      # /projects — detailed project write-ups
```

## Commands

| Command               | Action                                     |
| :-------------------- | :----------------------------------------- |
| `npm install`         | Install dependencies                       |
| `npm run dev`         | Start local dev server at `localhost:4321` |
| `npm run build`       | Build the production site to `./dist/`     |
| `npm run preview`     | Preview the production build locally       |
| `npm run astro check` | Type-check the project (also runs in CI)   |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which type-checks, builds, and deploys to GitHub Pages. The repo's Pages source must be set to **GitHub Actions** (Settings → Pages → Source) for this to work.
