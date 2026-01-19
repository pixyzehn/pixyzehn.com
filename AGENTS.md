# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` contains route-level pages (Astro). `src/layouts/` and `src/components/` hold shared UI.
- `src/content/posts/` stores Markdown posts named `YYYY-MM-DD-title.md`.
- `src/data/` keeps site data in `.yml` and `.ts`, while `src/utils/` provides helpers.
- `src/styles/tailwind.css` is the global stylesheet entry.
- `public/` serves static files as-is; `assets/` and `ico/` store images and icons.
- `dist/` is the build output.

## Build, Test, and Development Commands
- `npm install` installs dependencies (Node `22.16.0`, see `.nvmrc`).
- `npm run dev` starts the Astro dev server with live reload.
- `npm run build` builds the production site into `dist/`.
- `npm run preview` serves the built site locally.

## Coding Style & Naming Conventions
- Use 2-space indentation; follow existing Astro/TS patterns (single quotes in TS/JS, semicolons in frontmatter).
- Components and layouts use PascalCase filenames (e.g., `BaseLayout.astro`).
- Pages are lowercase or snake case (e.g., `things_i_like.astro`).
- Prefer Tailwind utility classes in markup; keep global tweaks in `src/styles/tailwind.css`.

## Testing Guidelines
- No automated test suite is configured. Validate changes with `npm run build` and a quick manual pass in `npm run dev`.

## Commit & Pull Request Guidelines
- Commit history follows Conventional Commits: `feat:`, `refactor:`, `chore:`, `style:`. Keep subjects short and imperative (e.g., `feat: add tag filtering`).
- PRs should include a concise summary, mention affected routes (e.g., `/tags`, `/logs`), and attach screenshots for visual changes. Link issues when applicable.
