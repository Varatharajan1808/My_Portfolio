# Varatharajan Portfolio

A personal portfolio showcasing my work in graphics programming, rendering engine development, shaders and WebGL/WebGPU projects.

The portfolio itself is built from scratch using TypeScript with a custom component system, demonstrating low-level frontend architecture without relying on UI frameworks.

## Live Demo : 
  [varatharajanportfolio.vercel.app](https://varatharajanportfolio.vercel.app/)

---

## Architecture

Rather than using a frontend framework, this portfolio uses a lightweight custom component architecture written in TypeScript.

It includes:

- Component lifecycle
- State management
- DOM rendering
- Event handling

The goal was to better understand frontend architecture while keeping the application lightweight and maintainable.

## Portfolio Features

- Responsive design
- Custom TypeScript component system
- Project showcase
- Experience timeline
- Skills section
- Contact form
- Dark theme
- CSS 3D animations

## Tech Stack

- **TypeScript** — the whole thing is typed
- **Vite** — dev server + bundler
- **Vanilla CSS** — custom properties, animations, 3D transforms
- **EmailJS** — contact form sends emails without a backend

## Project Structure

```
src/
├── core/                   # component system + state management
│   ├── BaseComponent.ts
│   └── State.ts
│
├── components/             # each section of the site
│   ├── App.ts
│   ├── Navbar.ts
│   ├── Hero.ts
│   ├── Projects.ts
│   ├── Skills.ts
│   ├── Experience.ts
│   └── ContactSection.ts
│
├── Style/                  # CSS files, one per component
│   ├── Root.css            # global variables + theme
│   └── ...
│
└── assets/                 # images, videos
```

## Running Locally

```bash
git clone https://github.com/Varatharajan1808/My_Portfolio.git
cd My_Portfolio
npm install
npm run dev
```

Open `http://localhost:5173` and you're good.

## Some Things Worth Noting

- **Custom component lifecycle** — every section goes through `mount()` → `update()` → `unmount()`. No virtual DOM, just direct DOM updates where needed.
- **3D gallery** — the project screenshots use CSS 3D transforms (`rotateY`, `translateZ`) for that depth effect. It's all CSS, no Three.js.
- **Contact form** — validates inputs client-side, sends via EmailJS, shows feedback. Nothing fancy, just works.

## About Me

**Varatharajan** — 3D_Engine_Developer specializing in browser-based graphics engines, WebGL, WebGPU, rendering pipelines, shader programming, and real-time rendering.

I enjoy building software close to the metal and understanding how graphics systems work under the hood. Rather than relying on abstractions, I like exploring the architecture behind rendering engines and modern GPU programming.

- GitHub: https://github.com/Varatharajan1808
- Email: ciazvanish2000@gmail.com

## License

MIT
