# 🧭 KALIANAK PLATFORM - WEB FRONTEND

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-Build-yellow)

> The public-facing website for Ikan Bakar Kalianak — part of the
> `kalianak_platform` monorepo.

---

## 🎯 Overview

The digital storefront for Ikan Bakar Kalianak: a landing page, menu display, and
restaurant information (location, hours, contact). Served in production at
`www.ikanbk.com`.

## 🧱 Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build tool**: Vite
- **Prod**: Nginx (via Docker + Traefik)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher) + npm

### Setup

```bash
# From web_frontend/
npm install
```

## 🧪 Development

```bash
npm run dev    # Vite dev server (port 3002 in the Docker stack)
npm run build  # TypeScript + Vite production build
```

## 🔐 Environment Variables

Any Vite env vars belong in a local `.env` (see `.env.example` if present).
Never commit `.env` files or secrets.

## 🏛️ Architecture

A minimal React + Vite single-page site. Before making significant changes,
explore the existing structure under `src/` and `components/` — no specialized
patterns are documented yet.

## 🔗 Related Documents

- [`AGENTS.md`](AGENTS.md) — sub-project notes
- [`../AGENTS.md`](../AGENTS.md) — monorepo overview
