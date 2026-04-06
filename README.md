# IBM Cloud DevOps Agent Prototype

This repository contains a static UI prototype for an IBM Cloud DevOps Agent experience.

## Run locally

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Publish on GitHub Pages

A workflow is included at `.github/workflows/deploy-pages.yml`.

### One-time GitHub setup

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure your default branch is `main` or `master`.

### Deploy

- Push to `main`/`master`, or run **Actions → Deploy static prototype to GitHub Pages → Run workflow**.
- After deployment, the site URL will be:

`https://<your-github-username>.github.io/<your-repository-name>/`

## Files

- `index.html` – page structure
- `styles.css` – Carbon-inspired styling
- `app.js` – AWS → IBM mapping data + table rendering
