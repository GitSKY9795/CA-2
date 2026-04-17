# CA2 Node.js REST API with CI/CD

This project provides a simple Node.js Express API and a complete CI/CD pipeline using GitHub Actions.

## API Endpoint

- `GET /health` -> returns server status

Example response:

```json
{
  "status": "ok",
  "service": "ca2-ci-cd-api",
  "timestamp": "2026-04-17T10:00:00.000Z"
}
```

## Local Setup

```bash
npm install
npm test
npm start
```

Health check:

```bash
curl http://localhost:3000/health
```

## Docker

Build image:

```bash
docker build -t ca2-ci-cd-api:latest .
```

Run container:

```bash
docker run -d --name ca2-api -p 3000:3000 ca2-ci-cd-api:latest
```

Or with compose:

```bash
docker compose up --build -d
```

## GitHub Actions CI/CD

Pipeline file: `.github/workflows/ci-cd.yml`

This single pipeline file does the following:
1. Installs dependencies
2. Runs tests
3. Builds Docker image
4. Pushes image to GHCR on push to `main`
5. Triggers cloud deployment using `RENDER_DEPLOY_HOOK_URL` secret

## Required GitHub Secrets

- `RENDER_DEPLOY_HOOK_URL` (optional; required only if using Render deploy hook)

## Suggested Git Flow

```bash
git init
git add .
git commit -m "This is the new CI/CD pipeline for CA2"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```
