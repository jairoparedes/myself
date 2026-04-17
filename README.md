# ☠ DATASLATE // Portfolio Grimdark Sci-Fi

Portfolio inmersivo con estética **Warhammer 40K / Adeptus Mechanicus**, construido como una **cogitator dataslate** interactiva. Incluye sistema tipo RPG con XP, niveles, misiones y paneles tecno-industriales.

> _"El código es mi credo. Ave Omnissiah."_

## ⚙ Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + CSS personalizado (`warhammer-theme.css`)
- **Framer Motion** — animaciones fade-in, barras animadas, typing terminal
- **Zustand** — estado global (XP, nivel, misiones completadas)
- **Lucide React** — iconografía
- Fuentes: **Orbitron** (títulos) + **JetBrains Mono** (cuerpo/terminal)

## 🧩 Estructura

```
/app            layout.tsx + page.tsx (dashboard)
/components
  /ui           TechPanel, SkullHeader, Divider
  /hud          HUDStats, SkillBar, StatusBar
  /modules      ProfileCard, MissionCard, TerminalLog, ArsenalGrid
  /layout       Sidebar, TopBar
/store          useGameStore.ts   (XP / nivel / misiones)
/styles         globals.css + warhammer-theme.css
/data           profile.ts, skills.ts, missions.ts
```

## 🎨 Sistema de diseño

Paleta (variables CSS en `:root`):

```
--bg-main      #0b0b0c
--panel-bg     #121214
--panel-border #2a2a2e
--accent-red   #8b0000
--accent-green #00ff9f
--text-primary #e5e5e5
--text-muted   #888
```

Todos los paneles usan la clase obligatoria `.tech-panel` (gradiente metálico oscuro + sombra interior + scanlines + borde industrial). El glow rojo aparece en hover.

## 🚀 Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## 🎮 Mecánica tipo juego

- Cada misión con estado `completed` se puede **RECLAMAR** para sumar XP.
- Al alcanzar `1000 XP` subes un **nivel** automáticamente.
- El panel **HUD // Vitae** muestra nivel, XP total y progreso al siguiente nivel.

## 🎬 Animaciones

- Fade-in stagger en paneles
- Barras de habilidades animadas con `motion.div`
- Typing efecto máquina en `TerminalLog`
- Overlay de **scanlines** global + flicker en skulls
- Glitch en el título principal
- Hover glow rojo en todos los `TechPanel`

## 🧠 Editar contenido

Modifica los archivos en `/data`:

- `profile.ts` → tu identidad
- `skills.ts` → tus habilidades + nivel (0–100)
- `missions.ts` → tus proyectos/misiones (status: `completed` / `in-progress` / `locked`)

---

**M41.999 — Forge World Protocol Active**
