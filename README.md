# olmurphy.github.io

[![Repo Size](https://img.shields.io/github/repo-size/olmurphy/olmurphy.github.io?style=for-the-badge&logo=github&label=Repo%20Size&color=1f4e79)](https://github.com/olmurphy/olmurphy.github.io)
[![Deploy](https://img.shields.io/github/actions/workflow/status/olmurphy/olmurphy.github.io/deploy.yml?style=for-the-badge&logo=githubactions&logoColor=white&label=Deploy)](https://github.com/olmurphy/olmurphy.github.io/actions)

Personal academic & research website ([olmurphy.github.io](https://olmurphy.github.io)) built with Astro (EN / ZH).

## Commands

| Command            | Action                              |
| :----------------- | :---------------------------------- |
| `pnpm dev`         | Local dev server (`localhost:4321`) |
| `pnpm build`       | Build production site to `./dist/`  |
| `pnpm astro check` | Type & Astro template check         |

## Structure

```text
src/
├── config/          # features.ts, site.ts, storage.ts
├── i18n/            # config.ts, ui.ts, utils.ts
├── data/
│   ├── en/          # English content (places.ts, projects.ts, etc.)
│   └── zh/          # Chinese mirrors
├── components/      # UI & section components
└── pages/
    └── [...lang]/   # Routes for / and /zh/ + llms.txt
```
