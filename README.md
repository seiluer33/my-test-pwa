# Color Memory Game – Progressive Web App

>A fun and addictive color memory game. Remember the sequence and repeat it!

## Features

- **Progressive Web App (PWA):**
  - Installable on mobile and desktop
  - Works offline (via service worker)
  - Add to Home Screen support (with manifest and icons)
- **Gameplay:**
  - Simon-style color memory game
  - Tracks your best score (saved in browser)
  - Sound and animation feedback
- **Modern UI:**
  - Responsive, mobile-friendly design
  - Built with Tailwind CSS and Google Fonts

## Getting Started

1. **Open `index.html` in your browser.**
   - No build step or server required for basic play.
2. **Install as a PWA:**
   - On mobile, use your browser's menu (e.g., "Add to Home Screen").
   - On desktop, look for the install icon in the address bar.

## Project Structure

- `index.html` – Main game UI and logic (all in one file)
- `manifest.json` – PWA manifest (name, icons, theme, etc.)
- `service-worker.js` – Enables offline play by caching files
- `README.md` – Project info

## How It Works

1. Press **START GAME** to begin.
2. Watch the color sequence and repeat it by clicking the colored buttons.
3. Each level adds a new color to the sequence.
4. Your best score is saved locally.

## PWA Details

- **Manifest:**
  - Name: Color Memory Game
  - Theme color: #6366f1 (purple)
  - Icons: Provided via placeholder URLs
- **Service Worker:**
  - Caches `index.html` and root for offline use
  - Simple cache-first strategy

## License

This project is for study/demo purposes.
