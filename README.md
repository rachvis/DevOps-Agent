# Terraform Enterprise Provisioning Tutorial

This repository contains a static documentation-style tutorial that walks through
provisioning a Terraform template with Terraform Enterprise. It covers creating a
VCS-driven workspace, configuring workspace variables, and reviewing and applying
a remote Terraform run.

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

- `index.html` – Terraform Enterprise tutorial structure and content
- `styles.css` – responsive documentation-style visual design
- `app.js` – confirm-and-apply demonstration interaction
