# Repository Guidelines
Contributors help extend the docs AI Tools catalog while preserving a polished TypeScript/Vite stack. Use this guide to align code, content, and review habits.

## Project Structure & Module Organization
- `src/components/` holds reusable UI backed by shadcn primitives; agent-specific UI lives alongside page-level containers in `src/pages/`.
- `src/data/aiToolsData.ts` stores the bilingual catalog; keep translations and metadata synchronized.
- Global context, hooks, and utilities live in `src/context/`, `src/hooks/`, and `src/lib/`. Static assets remain under `public/`.
- Operational prompts for other agents are in `.claude/agents/`; update alongside any process change.

## Build, Test, and Development Commands
- `npm run dev` launches Vite on `http://localhost:8080` for iterative work.
- `npm run build` performs a production build and type checks; run before every PR.
- `npm run build:dev` mirrors the build in development mode when troubleshooting.
- `npm run preview` serves the latest build locally for QA review snapshots.
- `npm run lint` runs ESLint against the TypeScript codebase; fix or document any warnings.

## Coding Style & Naming Conventions
- Prefer 2-space indentation, TypeScript strictness, and explicit return types on exported functions.
- Components and contexts use PascalCase (`LanguageProvider`), hooks use `useCamelCase`, and data IDs stay kebab-case (`"tool-name"`).
- Import via the `@/` alias for modules inside `src/`. Tailwind utility classes belong in component files; avoid ad-hoc CSS.
- Follow ESLint recommendations configured in `eslint.config.js`; set unused variables off via `_` prefix when intentional.

## Testing Guidelines
- Automated tests are not yet wired in; document manual checks in PRs (screenshots or short video) and validate routing paths in both languages.
- Treat `npm run build` as the gate for type safety. When adding regression coverage, colocate tests under `src/__tests__/` and suffix files with `.test.tsx`.

## Commit & Pull Request Guidelines
- Use short, imperative commit messages ("Add pagination skeleton") and group related changes.
- Reference issues in the PR description, outline the user impact, and attach media when UI changes occur.
- Ensure lint, build, and preview steps have been run; note any deviations in the PR checklist.

## Data & Configuration Notes
- New tools require English and Indonesian copy plus a unique slug; mirror the schema in `aiToolsData.ts`.
- Keep favicon or branding assets in `public/` and update `vite.config.ts` only when build behaviour changes.
