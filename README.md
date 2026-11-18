# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

gcloud storage cp friends.png gs://owenmurphy2022-portfolio-media/life/everyday/friends-nyc-hendry-2024.png \
--cache-control="public, max-age=31536000, immutable"

gcloud storage cp temple-of-heaven.png gs://owenmurphy2022-portfolio-media/life/places/temple-of-heaven-2025.png --cache-control="public, max-age=31536000, immutable"

src/
├── config/
│ ├── features.ts # Unchanged
│ ├── site.ts # Shared constants (URLs, handles) + locale metadata
│ └── storage.ts # Unchanged (R2 media URLs shared across locales)
├── i18n/
│ ├── config.ts # LOCALES = ['en', 'zh'], DEFAULT_LOCALE = 'en', hreflang map
│ ├── ui.ts # Chrome strings (nav groups, buttons, ARIA labels, 404, BibTeX)
│ └── utils.ts # getLocaleFromUrl(), localePath(lang, path), switchLocalePath()
├── data/
│ ├── types.ts # Shared TypeScript interfaces extracted from current data files
│ ├── index.ts # Typed registry: getSiteData(lang) -> { home, about, research, ... }
│ ├── en/ # Existing English data files moved here[cite: 1, 2]
│ │ ├── about.ts
│ │ ├── contact.ts
│ │ ├── education.ts
│ │ ├── group.ts
│ │ ├── home.ts
│ │ ├── learning.ts
│ │ ├── life.ts
│ │ ├── media.ts
│ │ ├── profile.ts
│ │ ├── projects.ts
│ │ ├── publications.ts
│ │ ├── research.ts
│ │ ├── teaching.ts
│ │ └── timeline.ts
│ └── zh/ # 1:1 typed Chinese mirrors enforcing compile-time parity
│ ├── about.ts
│ ├── contact.ts
│ ├── education.ts
│ ├── group.ts
│ ├── home.ts
│ ├── learning.ts
│ ├── life.ts
│ ├── media.ts
│ ├── profile.ts
│ ├── projects.ts
│ ├── publications.ts
│ ├── research.ts
│ ├── teaching.ts
│ └── timeline.ts
├── layouts/
│ └── BaseLayout.astro # Accepts `lang`, injects html[lang], canonical, hreflang, og:locale
├── components/ # Existing components updated to accept `lang` / localized props[cite: 1, 2]
└── pages/
├── 404.astro # Root 404 (can offer bilingual quick links)
├── references.bib.ts # Language-agnostic BibTeX export
└── [...lang]/ # Single route set generating both `/` and `/zh/`
├── index.astro
├── about.astro
├── contact.astro
├── education.astro
├── group.astro
├── learning.astro
├── life.astro
├── media.astro
├── projects.astro
├── publications.astro
├── research.astro
├── teaching.astro
├── timeline.astro
├── llms.txt.ts # Generates /llms.txt and /zh/llms.txt
└── llms-full.txt.ts # Generates /llms-full.txt and /zh/llms-full.txt

https://gemini.google.com/app/3e92848d14d3f6e1
