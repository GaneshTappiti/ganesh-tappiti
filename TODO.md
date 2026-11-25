# TODO

## Done

- [x] Keep the Bitwip visual system intact
  - Same CSS, fonts, motion, breakpoints and component behaviour as the source site.
  - Evidence: `public/assets/css/bitwip.css` and `public/assets/js/bitwip.js` are unmodified; only markup and copy changed.
- [x] Rewrite the five core pages for Ganesh Tappiti
  - Home, About, Work, Services, Contact — all copy, imagery captions, statistics, FAQ answers and calls to action.
  - Evidence: no `Bitwip` string remains in the rendered body of any page; the wordmark, favicon and share image are new.
- [x] New shared header, menu and footer
  - GANESH wordmark, five-link navigation with service submenu, mobile menu, contact CTA, footer, local clocks (IST / SGT / GMT / GST).
  - Evidence: generated once and applied to all five pages plus the 404 page.
- [x] Work page filters
  - Type (all / product / AI & experiments / design & brand / campus & community), service and place groups wired to the existing filtering script.
- [x] Contact form without a backend
  - Field names, validation and the "when do you need it" timeline; submit composes a mailto body addressed to `ganeshtappitii@gmail.com`.
- [x] Metadata and identity
  - Per-page titles, descriptions, canonical, Open Graph and Twitter cards, one shared `Person` JSON-LD block, new share card, favicon and web manifest.
- [x] Trim the mirror to the portfolio's own routes
  - Deleted the 85 unused Bitwip route directories, the RSS feed and the scratch copy; `manus-routes.json` now lists only `/`, `/en` and the five pages.
- [x] Broken references from the clone
  - Removed the Google Analytics bootstrap, the missing `mesure.js` / `consentement.js` (and the cookie-consent vendor bundle they loaded), the remote `bitwip.fr` showreel sources, the `/rss.xml` link, and the 404 page's in-browser game.
  - Added `/site.webmanifest` and its icons.
- [x] Internal links
  - Removed all `/en/project-*` targets and collapsed the dropdown links to in-page anchors on the five remaining pages.
- [x] The three live products, everywhere they belong
  - Home rail and Work page carry Clstr (`clstr.in`), Spark (`spark.clstr.in`) and Clstr Vizag (`vizag.clstr.in`); the Work page now lists 10 projects in one page, so the list and grid both render 10 cards and the pager stays hidden (`PAR.liste` 8 → 12).
- [x] Direct contact hub
  - Contact page links to `ganeshtappiti.ganeshtappitii.workers.dev/letsgoo` above the mailto address, alongside the existing working form.
- [x] One set of numbers, everywhere
  - 33+ campuses, 1,200+ students and 4,500+ colleges now appear identically on Home and About (stat blocks, timeline, experience rows, recognition card, FAQs, the rail stat card and the Services seal). The career page copy no longer says 30+ or 19.
- [x] Resume facts folded in
  - Top 10 Vizag Startups (CIC I³ Conclave, Andhra University) and PM 4.0 (top 5 percentile) are now carousel cards 05 and 06; YUKTI, Hackverse 1.0 numbers (450-student workshop, 400+ participants) and the 8.6 CGPA sit in the About experience rows; the skills block splits "Written myself" from "Built with AI".
- [x] LinkedIn record folded in
  - Clstr now starts January 2026 everywhere (timeline, experience row), matching the 23 Jan 2026 launch post; the 2025 timeline entry carries E-Cell, Hackverse and Aspire instead.
  - About experience list went from 7 to 13 rows, adding Aspire India Campus Ambassador, VENIX/IIM-B, E-Cell IIT Guwahati (Udgam), Blackbox.AI, NSS and Photography Club Lead; Unstop, E-Cell REC and Chaayachitram dates corrected to the LinkedIn ranges.
  - New `#certifications` section between Experience and Skills: eleven credentials, one row each, newest first — seven Udemy courses plus Oracle, the Ministry of Education Innovation Cell and IIT Bombay. Every Udemy row links to its `ude.my` verification page.
  - Each Udemy credential number was tested; LinkedIn's Power BI ID (`UC-alf06ba5…`) 404s while the filename variant (`UC-a1f06ba5…`) resolves, so the site uses the working one.
  - Degree stays B.Tech CSE (AI & ML), 8.6 CGPA — LinkedIn's "Associate's degree" treated as a form-entry error. Aspire kept at Cohort 5 (LinkedIn's title says 5, its description says 4).
- [x] "What I have done" rows realigned
  - The experience list was rendering into the base four-column `.row` grid (a 56px number column and an arrow column it does not have), so every title wrapped into a 66px strip and sat on top of its description. The list now carries the page's own `.ag-valeurs` row layout — title across columns 2–7, description across 8–12, top-aligned — the same pattern as "Three things guide the work" directly above it. Under 760px both stack into one column.
- [x] Asset pruning
  - 1,664 unused files (~97 MB) moved out; `public` is now ~6.5 MB. Hard-coded `data-galerie` references that pointed at deleted variants were filtered out of `index.html` and `services/index.html`.
- [x] Services page "Where to start" repaired
  - Three of the five need panels had slipped out of `.besoins__panneaux` (unbalanced `</div>`s), so they rendered full-bleed below the tab strip with no page gutter, the strip listed only two tabs, and the section stood 2,133px tall. All five panels are back inside the container: 5 tabs, 5 panels, 663px tall, DOM identical to the source page's.
  - Cause confirmed by comparing against the pristine clone: the source page keeps every `.besoin` inside `.besoins__panneaux`; the rewrite had closed the wrapper two `</div>`s early.
- [x] Text links inside row copy are visible
  - The global `a{color:inherit;text-decoration:none}` left links in `.row__t` / `.row__d` indistinguishable from body text. Added an underline rule scoped to those two classes in `p-agence.css` (About only, which is the only page loading it).
- [x] One address, everywhere
  - `contact@ganeshtappiti.com` replaced by `ganeshtappitii@gmail.com` in 53 places: footer, menu, CTA blocks, contact page, form `action`, the form's mailto builder, the FAQ answer, the 404 page and every `Person` JSON-LD block.

- [x] Two LinkedIn roles that were missing from the site
  - `#experience` now carries **IMUNA Campus Ambassador** (Aug–Sep 2024) and **NCC Cadet** (Jun 2019–Jun 2020, school), taking the list from 13 to 15 rows. Neither appeared in the résumé or the earlier LinkedIn export.
  - Left as single rows by design: E-Cell REC's two LinkedIn entries (Startup Assistance Lead Jul–Dec 2025, Lead Graphic Designer Jul 2024–Jul 2025) share one row, and the Aspire Leaders Program participation is folded into the Aspire Campus Ambassador row.

## Next

- [x] Replace the placeholder photography with real project screenshots and bespoke illustrations
  - Processed and converted all 11 project artworks from `C:\Users\2005g\Downloads\images` into multi-resolution WebP formats (1600w, 1200w, 800w, 320w, 240w, 160w, 96w).
  - Captured live high-resolution screenshots for the 3 live web products (`https://clstr.in`, `https://spark.clstr.in`, `https://vizag.clstr.in`) and rendered them inside sleek, modern dark MacBook laptop screen mockups with custom brand glow accents.
  - Deployed responsive multi-resolution WebP sets for Clstr, Spark, and Clstr Vizag into `public/assets/img/cms/projets/`.
  - Replaced all placeholder illustrations and crops on the Home page (`public/en/index.html`) and Work page (`public/en/work/index.html`) with the new laptop mockups for all three live products.
  - Replaced the 13 Bitwip French agency photos in About page (`#vie` section) with two animated strips showcasing Ganesh's 11 project illustrations with responsive srcsets and accessible alt texts.
  - Replaced the French Bitwip actualités cards in Home page (`#actualites` Builder's log) with Clstr, Scollab, and E-Cell REC project artwork.
  - Verified Work page grid, list, and case studies all render with proper assets.
- [x] Motion effect for Home page images strip (`public/en/index.html`)
  - Restored `data-vie=""` on the `.ag-vie.ag-vie--papier` container, wrapped track in `<div class="ag-vie__bande" data-bande="1" data-reveal="" role="group" tabindex="0">`, and added `data-bande-piste=""` to `<ul class="ag-vie__piste">`.
  - Added full responsive `src` and `srcset` (320w, 800w, 1200w) for 8 project showcases so images render immediately and layout measurements calculate accurately on page load.
  - Connected `bitwip.js` infinite marquee loop, scroll acceleration, drag-to-scroll interactivity, and entrance reveal motion.
- [x] Footer wordmark update
  - Replaced standalone "GANESH" in the footer across all five pages and 404 page with the full name "GANESH TAPPITI".
  - Created `site-logo-ganesh-tappiti.svg` for `.groupe__mere` and updated the giant inline SVG in `.pied__logo` with balanced letter spacing, viewBox (`0 0 2350 281`), and the orange brand spark.

## Next

- [ ] Add personal portrait when available
- [ ] Record a short showreel to replace the hero poster
- [ ] Record a short showreel to replace the hero poster
- [ ] Decide whether the contact form should post to a form service instead of `mailto:`
- [ ] Add a `sitemap.xml` and `robots.txt` once the site has a domain
