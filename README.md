# Cassette Player – Retro Portfolio Website

A retro-styled portfolio site featuring a liquid-glass navbar, animated gradient typing effect, a cassette player UI with real audio playback, and subtle parallax/interaction details.

## Preview
[Preview it](https://cassette-player-portfolio.netlify.app/)

## ✨ Features
- Liquid glass navbar with smooth scroll and mobile menu
- Darkmode & Lightmode with animated button 
- Animated typing of the name with gradient text and custom blinking cursor
- Cassette Player component with real audio playback
  - Play/Pause, Next/Previous, volume and mute
  - Progress bar and rotating reel animation while playing
  - Global “Now Playing” indicator fixed at the bottom-right
- Parallax sections and interactive portfolio cards
- Tailwind CSS theme tokens and utility layers

## 🧰 Tech Stack
- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons

## ▶️ Quick Start
```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Vite will serve at http://localhost:5173
```

## 📁 Project Structure
```
src/
  components/
    audio/                       # Local MP3 tracks used by CassettePlayer
    CassettePlayer.tsx           # UI + real audio playback
    LiquidGlassNavbar.tsx        # Apple-like liquid-glass nav + typing name
    AnimatedButton.tsx
    ParallaxSection.tsx
    PortfolioCard.tsx
  pages/
    Index.tsx                    # Main page
  index.css                      # Tailwind and theme layers
main.tsx                         # React entry
index.html                       # Vite entry
```

## 🎵 Audio Files
The cassette player uses local MP3s located at `src/components/audio/`. You can replace or add tracks:
1. Drop `.mp3` files into `src/components/audio/`.
2. Import them in `src/components/CassettePlayer.tsx` and add to the `tracks` array:
```ts
import mySong from './audio/my-song.mp3';

const tracks = [
  { title: 'My Song', artist: 'Me', url: mySong, duration: '3:12' },
];
```

Note: Streaming links like Spotify URLs cannot be played directly by the `<audio>` element.

## 🔧 Scripts
- npm run dev – Start dev server
- npm run build – Production build
- npm run preview – Preview production build
- npm run lint – Lint code
- npm run format – Format with Prettier

## 🖌️ Styling
- Tailwind is configured via `tailwind.config.js` and `postcss.config.js`.
- Tailwind layers and CSS variables live in `src/index.css`.

## 🚀 Deployment
Any static host that supports Vite builds will work:
```bash
npm run build
# Deploy the contents of dist/ to your host
```

## 📄 License
MIT 

## 🙌 Acknowledgements
- Framer Motion for animations
- Lucide for icons
- Tailwind CSS for utilities and theming
