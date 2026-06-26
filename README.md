# CIVIKA — Landing (Astro)

Landing de producto inspirada en landings SaaS modernas (estructura tipo Framer): hero con mockup, marquee, capas, ecosistema, pilares sticky, módulos detallados, indicadores y bento de plataforma.

**No reemplaza** `docs/sales/site` (propuesta municipal en Vite). Es un sitio distinto, más largo y orientado a producto.

## Desarrollo

Desde la raíz del monorepo:

```bash
pnpm dev:sales:landing
```

O desde esta carpeta:

```bash
pnpm install --ignore-workspace
pnpm dev
```

Abre http://localhost:5176

## Capturas de las apps

Por defecto hay **placeholders SVG** estilizados en `public/screenshots/`.

### Opción A — Manual

1. Captura pantalla de cada app (Pulse, Nexo, etc.)
2. Guarda como `public/screenshots/{app}.webp` o `.png`
3. Actualiza la ruta en `src/content/site.ts` si cambias extensión

### Opción B — Script (Playwright)

Con las apps corriendo (`pnpm dev:tunnel`):

```bash
pnpm install --ignore-workspace
pnpm add -D playwright
pnpm exec playwright install chromium
node scripts/capture-screenshots.mjs
```

Regenerar placeholders:

```bash
node scripts/generate-placeholders.mjs
```

## Build

```bash
pnpm build
pnpm preview
```

Output en `dist/`.

## Deploy

Igual que el sitio Vite: Vercel con **Root Directory** `docs/sales/landing`, o GitHub Pages con workflow dedicado.
