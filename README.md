# personal-site

Dinh Vu's personal site: a bilingual (English / Tiếng Việt) blog built with [Astro](https://astro.build). English is the default and every page has an EN | VI switch.

The first series is **Mentoring: Grade 12**, monthly sessions with a grade-12 student. Session 1 is *Learning how to learn*.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the built site
```

Requires Node 22.12 or newer (`node -v`).

## Project structure

```
src/
  content/posts/
    en/<slug>.mdx          # English post
    vi/<slug>.mdx          # Vietnamese translation (same <slug>)
  data/                    # bilingual data for widgets ({ en, vi } per field)
  components/
    interactive/           # quiz, flashcards, pomodoro, ... (vanilla JS, no framework)
    Illustration.astro     # theme-aware SVG drawings
    VideoEmbed.astro       # click-to-load YouTube
    Callout.astro
  i18n/ui.ts               # UI strings + language helpers
  layouts/                 # BaseLayout, PostLayout
  pages/[lang]/...         # /en/... and /vi/... routes
```

## Write a new post

1. Create `src/content/posts/en/my-post.mdx`:

   ```mdx
   ---
   title: My post
   description: One-line summary shown on cards.
   date: 2026-11-05
   tags: [notes]
   ---

   Hello world.
   ```

2. Optionally add the translation at `src/content/posts/vi/my-post.mdx` with the **same file name**. The EN | VI switch and the "Đọc bằng tiếng Việt" link connect them automatically. If there is no translation, the switch goes to the other language's home page.

3. Add `draft: true` to hide a post from the production build. Drafts still show in `npm run dev`.

## Add a mentoring session

Use the same steps, plus these fields:

```yaml
series: mentoring
seriesOrder: 2
kicker: Session 2        # "Buổi 2" in the vi file
```

Interactive components take a `lang` prop, for example `<MythFactQuiz lang="vi" />`. Session 1 (`2026-10-learning-how-to-learn.mdx`) shows how they are used. To make a quiz or flashcards for a new topic, copy `src/data/learning-how-to-learn.ts` and point the component at the new data, or add a `data` prop.

Data that the student enters (commitment card, 30-day tracker, habit picks) stays in her browser's `localStorage` only. Nothing is sent anywhere.

## Add a new series

1. Add the id to `SERIES` in `src/lib.ts`.
2. Add `series.<id>.title` and `series.<id>.description` to both languages in `src/i18n/ui.ts`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, go to **Add New → Project**, import `personal-site`, and keep the defaults (Framework: Astro, build `npm run build`, output `dist`).
3. Once you have the final URL, set `site` in `astro.config.mjs` to it. The sitemap and canonical links use that value.

Every push to `main` deploys the site. Every other branch or PR gets a preview URL, so you can check next month's session before it goes live.
