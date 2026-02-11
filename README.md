# My Portfolio

Personal portfolio site built with vanilla TypeScript — no React, no Vue, just raw TS and a custom component system.

**Live:** [varatharajanportfolio.vercel.app](https://varatharajanportfolio.vercel.app/)

---

## Why No Framework?

I wanted to prove I actually understand how things work under the hood. So instead of `npx create-react-app`, I wrote my own component lifecycle (`mount`, `update`, `unmount`), my own state management, and wired up the DOM manually. It's not about reinventing the wheel — it's about knowing how the wheel works.

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

**Varatharajan** — Graphics Engineer working with WebGL/WebGPU at Hexr Factory.

I like building things close to the metal. If there's an abstraction, I probably want to look inside it.

- [GitHub](https://github.com/Varatharajan1808)
- ciazvanish2000@gmail.com

## License

MIT
