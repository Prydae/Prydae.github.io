# prydae.github.io

Portfolio site for Abhinay Kadam, served by GitHub Pages as a user site at https://prydae.github.io.

Plain HTML, CSS and a little vanilla JavaScript. No framework, no build step.

## Structure

```
index.html              single page with two tabs (Profile, Projects), switched by URL hash
assets/style.css        the only stylesheet (dark trading-terminal theme)
assets/projects.js      project data array; renders the Projects tab and the Profile project rows
assets/img/             chart images used by the case studies
projects/gas.html       case study: Kalshi Gas Market-Maker
projects/btc.html       case study: Kalshi BTC 15-Minute Audit
.nojekyll               tells GitHub Pages to serve files as-is
```

Tabs: `#profile` (default) and `#projects`. With JavaScript off, both sections stack on one page.

## Adding a project

Append one object to the `PROJECTS` array in `assets/projects.js`. Fields: `title`, `status` (`label`, `tone`: `pos`, `amber` or `muted`), `short` (one line for the Profile tab), `summary` (two lines for the card), `metrics` (three items: `value`, `label`, `tone`: `pos`, `neg`, `amber` or `text`), `caseStudy` and `repo`. Then add a case study page under `projects/` and copy any charts into `assets/img/`.

## Resume (placeholder)

The top bar links to `resume.pdf` in the site root. **That file is not in this repo yet.** Drop the PDF at the root as `resume.pdf` and commit it. Until then the Resume link returns a 404.

## Preview locally

From this folder:

```
python -m http.server 8000
```

Then open http://localhost:8000.

## Publish

Push to the `main` branch of `Prydae/prydae.github.io` and enable GitHub Pages from the `main` branch, root folder. This repo has no remote yet.
