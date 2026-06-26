#!/usr/bin/env node
/**
 * Generates stylized placeholder screenshots until real captures are added.
 * Real captures: place WebP or PNG at public/screenshots/{app}.webp (same basename).
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '../public/screenshots');

const APPS = [
  { id: 'pulse', label: 'Pulse', accent: '#7174ff', panels: ['Feed', 'Reporte', 'Chat'] },
  { id: 'nexo', label: 'Nexo', accent: '#00d1ff', panels: ['Bandeja', 'Mapa', 'Triage'] },
  { id: 'vision', label: 'Visión', accent: '#c26bff', panels: ['PI', 'Costos', 'Patrones'] },
  { id: 'focus', label: 'Focus', accent: '#ffb347', panels: ['Turnos', 'Costos', 'SLA'] },
  { id: 'sentinel', label: 'Sentinel', accent: '#4cd4a8', panels: ['Ops', 'Evidencia', 'PTT'] },
  { id: 'manager', label: 'Pulse Manager', accent: '#5b8cff', panels: ['Campañas', 'Mapa PI', 'Stats'] },
  { id: 'lira', label: 'LIRA', accent: '#00eaff', panels: ['Consulta', 'Mapa', 'Fuentes'] },
  { id: 'intelligence', label: 'Intelligence', accent: '#8856ff', panels: ['Scoring', 'ΔPI', 'Prioridad'] },
];

function svg({ id, label, accent, panels }) {
  const panelMarkup = panels
    .map((name, i) => {
      const x = 24 + i * 118;
      return `<rect x="${x}" y="18" width="104" height="28" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)"/>
      <text x="${x + 52}" y="37" text-anchor="middle" fill="#d1d5db" font-size="11" font-family="Inter, sans-serif">${name}</text>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="Placeholder ${label}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0a10"/>
      <stop offset="100%" stop-color="#12121a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg)"/>
  <rect x="0" y="0" width="800" height="64" fill="rgba(0,0,0,0.35)"/>
  <circle cx="24" cy="32" r="6" fill="#ff5f57"/>
  <circle cx="44" cy="32" r="6" fill="#febc2e"/>
  <circle cx="64" cy="32" r="6" fill="#28c840"/>
  <text x="400" y="38" text-anchor="middle" fill="#f5f5f7" font-size="14" font-weight="600" font-family="Inter, sans-serif">${label}</text>
  ${panelMarkup}
  <rect x="24" y="64" width="200" height="412" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
  <rect x="40" y="88" width="120" height="10" rx="5" fill="rgba(255,255,255,0.12)"/>
  <rect x="40" y="110" width="168" height="8" rx="4" fill="rgba(255,255,255,0.06)"/>
  <rect x="40" y="128" width="148" height="8" rx="4" fill="rgba(255,255,255,0.06)"/>
  <rect x="40" y="146" width="156" height="8" rx="4" fill="rgba(255,255,255,0.06)"/>
  <rect x="240" y="64" width="536" height="412" rx="12" fill="url(#accent)" stroke="${accent}" stroke-opacity="0.35"/>
  <rect x="268" y="96" width="220" height="14" rx="7" fill="rgba(255,255,255,0.14)"/>
  <rect x="268" y="128" width="480" height="120" rx="12" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.08)"/>
  <rect x="268" y="268" width="230" height="170" rx="12" fill="rgba(0,0,0,0.22)" stroke="rgba(255,255,255,0.08)"/>
  <rect x="518" y="268" width="230" height="170" rx="12" fill="rgba(0,0,0,0.22)" stroke="rgba(255,255,255,0.08)"/>
  <text x="400" y="470" text-anchor="middle" fill="#6b7280" font-size="12" font-family="Inter, sans-serif">Placeholder — reemplazar con captura en public/screenshots/${id}.webp</text>
</svg>`;
}

mkdirSync(outDir, { recursive: true });

for (const app of APPS) {
  const file = join(outDir, `${app.id}.svg`);
  writeFileSync(file, svg({ id: app.id, ...app }));
  console.log(`wrote ${file}`);
}
