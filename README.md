# prydae.github.io

Portfolio site for Abhinay Kadam, served by GitHub Pages as a user site at https://prydae.github.io.

Plain HTML and CSS only. No framework, no build step, no JavaScript.

## Structure

```
index.html              home page: header, project cards, about
projects/gas.html       case study: Kalshi Gas Market-Maker
projects/btc.html       case study: Kalshi BTC 15-Minute Audit
assets/style.css        the only stylesheet
assets/img/             chart images copied from the two showcase repos
.nojekyll               tells GitHub Pages to serve files as-is
```

## Resume (placeholder)

The home page links to `resume.pdf` in the site root. **That file is not in this repo yet.** Drop the PDF at the root as `resume.pdf` and commit it. Until then the Resume link returns a 404.

## Preview locally

From this folder:

```
python -m http.server 8000
```

Then open http://localhost:8000.

## Publish

Push to the `main` branch of `Prydae/prydae.github.io` and enable GitHub Pages from the `main` branch, root folder. This repo has no remote yet.
