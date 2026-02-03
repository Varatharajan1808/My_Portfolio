# ENGINE ARCHITECTURE: VARATHARAJAN_PORTFOLIO

> **v2.0.1** | **System Status**: `STABLE` | **Render Pipeline**: `WEBGL/WEBGPU`

A high-performance personal portfolio built on a **custom TypeScript component system**, designed to showcase Graphics Engineering and Low-Level Architecture skills.

**Live Deployment:** [Launch System](https://varatharajanportfolio.vercel.app/) | **Data Log:** [Download Resume](./public/resume.pdf)

---

## 1.0 SYSTEM OVERVIEW

This repository contains the source code for a custom-built web, adhering to **ECS (Entity Component System)** principles slightly modified for DOM manipulation. It abandons heavy frameworks (React/Vue) in favor of a lightweight, vanilla TypeScript architecture to demonstrate deep understanding of:
- **State Management**: Custom observable-based state storage.
- **Component Lifecycle**: Manual mount/update/unmount orchestration.
- **Rendering Optimization**: Direct DOM manipulation with localized updates.
- **3D Graphics**: Integration of WebGL/WebGPU visuals (glTF rendering, shaders).

---

## 2.0 KERNEL DEPENDENCIES

The engine minimizes external bloat, relying on a focused set of core libraries:

### 2.1 Core Runtime
- **TypeScript**: Static typing for architectural robustness.
- **Vite**: High-velocity build toolchain and dev server (HMR enabled).
- **ES6+ Modules**: Native modularity.

### 2.2 Visual Systems
- **HTML5 & CSS3**: Semantic structure and high-performance CSS animations.
- **TailwindCSS 4.1.7**: Utility-first atomic styling for layout scaffolding.
- **Custom CSS Variables**: Theming engine (Root.css) for global aesthetic control.

### 2.3 IO / Communications
- **@emailjs/browser**: Serverless SMTP transmission protocol for the Contact interface.
- **Intersection Observer API**: Viewport-based rendering triggers.

---

## 3.0 DIRECTORY MAP

Hierarchy is organized by functional modules rather than framework convention.

```
src/
├── core/                   # ENGINE KERNEL
│   ├── BaseComponent.ts    # Abstract Component Class (Mount, Update, Unmount)
│   └── State.ts           # Pub/Sub State Management System
│
├── components/             # UI MODULES
│   ├── App.ts              # Root Orchestrator
│   ├── Navbar.ts           # Navigation Interface
│   ├── Hero.ts             # Entry & idle animations
│   ├── ProjectEntry.ts     # Initial load sequence
│   ├── Projects.ts         # 3D Gallery & Showcase
│   ├── Skills.ts           # Tech Tree Visualization
│   ├── Experience.ts       # Timeline & History
│   └── ContactSection.ts   # I/O Interface
│
├── Style/                  # VISUAL ASSETS
│   ├── Root.css            # Global Variables (Theming)
│   ├── Project.css         # 3D Transforms logic
│   └── [Module].css        # Component-scoped styling
│
└── assets/                 # BINARY DATA
    └── projects/           # Screenshots & Texture maps
```

---

## 4.0 BOOT SEQUENCE (LOCAL DEPLOYMENT)

To initialize the engine on a local machine:

### 4.1 Prerequisites
- Node.js Runtime (v16+)
- NPM Package Manager

### 4.2 Initialization
1.  **Clone Repository:**
    ```bash
    git clone [REPO_URL]
    cd my-portfolio
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Execute Start Script:**
    ```bash
    npm run dev
    ```

4.  **Access Port:**
    Open `http://localhost:5173` to view the render output.

---

## 5.0 SYSTEM CAPABILITIES

### 5.1 Custom Component Architecture
Every UI element extends `BaseComponent`, implementing a predictable lifecycle:
- `mount()`: Allocates DOM resources and attaches listeners.
- `update()`: Reactively modifies DOM based on state changes.
- `unmount()`:Garbage collection, removing listeners and intervals to prevent memory leaks.

### 5.2 3D Gallery Module
A CSS3D-powered project showcase featuring:
- **Perspective Transforms**: `translateZ` and `rotateY` for depth perception.
- **Interactive Hover States**: Physics-simulated focus effects.
- **Layout Engine**: `object-fit: contain` logic to ensure zero-cropping of project assets.

### 5.3 Communication Protocol
The `ContactSection` module implements a secure handshake with EmailJS:
- **Validation**: Client-side regex checks for signal integrity.
- **Async Transmission**: Non-blocking `Promise`-based email dispatch.
- **Auto-Response**: Instant automated acknowledgment signal.

---

## 6.0 DEVELOPER PROFILE

**Varatharajan**
*Full Stack Web Developer | WebGL/WebGPU *
Hexr Factory

Focused on bridging the gap between low-level graphics programming and high-level web accessibility.

**Signal Channels:**
- **Email:** ciazvanish2000@gmail.com
- **GitHub:** [@Varatharajan1808](https://github.com/Varatharajan1808)

---

## 7.0 LICENSE

**MIT License** | Open Source Architecture
*Engineered by Varatharajan | Last Compile: January 2026*
