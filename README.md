# Ganesh Tappiti — portfolio

Personal portfolio for **Ganesh Tappiti**, product designer and full-stack engineer in Visakhapatnam, India.

The front end is a static recreation of the Bitwip English site: same layout, typography, colour system, motion and component behaviour. Everything that carried agency-specific content — navigation, section copy, cards, imagery, footer, metadata — has been rewritten for this portfolio.

## Pages

| Route | File | What is on it |
| --- | --- | --- |
| `/en` | `public/en/index.html` | Hero, manifesto, four service accordions, three live products (Clstr, Spark, Clstr Vizag), recognition, where I work, builder's log, FAQ |
| `/en/about` | `public/en/about/index.html` | Story, timeline, values, experience, skills and stats, working-from-Vizag, FAQ |
| `/en/work` | `public/en/work/index.html` | Project grid with type / service / place filters, FAQ |
| `/en/services` | `public/en/services/index.html` | Four chapters — strategy & consulting, brand & creative, web & digital, campaigns & media — plus method and FAQ |
| `/en/contact` | `public/en/contact/index.html` | Contact form, four working locations, service shortcuts, FAQ |

`/` redirects to `/en`. Unknown paths are served by `public/404.html` with a real 404 status.

## Run

```bash
npm run dev
```

Serves `public/` on `http://localhost:3000` (override with `PORT`). No build step, no dependencies.

## Structure

```
public/
  assets/
    css/       bitwip.css — the shared design system, unmodified
    js/        bitwip.js — navigation, reveals, sliders, clocks, gallery
    fonts/     self-hosted typography
    img/       brand marks, project and location imagery
    video/     hero poster and hero loop
  en/          the five pages
  404.html
  site.webmanifest
  manus-routes.json
server.mjs     dependency-free static server
```

## Notes

- The contact form is front-end only. It builds a formatted message and hands it to the visitor's mail client addressed to `ganeshtappitii@gmail.com`; there is no backend.
- Project and location photographs are the original placeholders, kept until real screenshots replace them.
