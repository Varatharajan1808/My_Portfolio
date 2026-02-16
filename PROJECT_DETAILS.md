# Portfolio Project: System Overview & Technical Documentation

## 1. IDENTITY_SUMMARY
**Name:** Varatharajan
**Role:** Graphics Engineer / 3D Engine Developer
**Experience:** 2+ Years in specialized graphics programming
**Education:** 
- MBA in Human Resource Management (Graduated 2023, Alagappa University)
- BSc in Mathematics (Graduated 2020, Kamaraj College)
**Location:** Thoothukudi, Tamil Nadu, India

---

## 2. PROJECT_PHILOSOPHY
This portfolio is built to demonstrate deep technical understanding by avoiding high-level abstractions like React or Vue. It uses a **custom-built component lifecycle system** written in vanilla TypeScript.
Key architectural highlights:
- **Manual State Management:** No third-party state libraries; built from scratch.
- **Component Lifecycle:** Implemented `mount`, `update`, and `unmount` hooks for direct DOM control.
- **Modern Build Engine:** Powered by Vite for high-performance development and bundling.
- **Tailwind CSS 4.0 & PostCSS:** Utilizing the latest CSS engine for high-performance styling.

---

## 3. TECHNICAL_CAPABILITIES (SKILLS)

### GRAPHICS_&_RENDERING
- **APIs:** WebGL, WebGPU
- **Core Systems:** GPU Pipelines, Shaders (GLSL/WGSL), Render Passes, Draw Submission
- **Techniques:** Depth Testing, Framebuffers, Post-Processing, Blinn-Phong, Gamma Correction
- **Knowledge:** MVP Pipeline, Normal Matrix, Forward/Deferred Shading, Resource Lifecycle, GPU Memory Layout

### ENGINE_&_SYSTEMS
- Scene Graph Systems & Transform Hierarchies
- Render Loop & Frame Lifecycle Management
- Resource & Asset Management
- Performance Debugging: FPS Tracking & Draw Call Analysis

### 3D_DATA_&_MATERIALS
- **Formats:** glTF 2.0 (Buffers, Accessors, Node Hierarchies)
- **Shading:** PBR (Physically Based Rendering) Workflow
- **Maps:** Albedo, Normal, AO, Roughness, Texture Baking

### ARCHITECTURE_&_MATH
- **Languages:** TypeScript, JavaScript
- **Mathematics:** Linear Algebra, Computational Geometry, Transformation Math
- **Patterns:** Entity Component System (ECS)

### TOOLS
- Git, GitHub, Blender, VS Code, Chrome DevTools

---

## 4. WORK_HISTORY

### Graphics Engineer (WebGL/WebGPU) | Hexrfactory Immersive Tech Pvt Ltd
*2023 – PRESENT*
- **Custom Engine Development:** Designed core systems (Scene, Renderer, Camera, Mesh) with full control over draw calls.
- **Asset Pipeline:** Implemented glTF import/export for structured scene management.
- **Material System:** Developed a unified system supporting PBR, normal maps, and alpha transparency.
- **Shader Engineering:** Authored optimized GLSL/WGSL shaders for lighting and material evaluation.
- **Advanced Features:** Implemented Image-Based Lighting (IBL), Global Illumination, and ray/path tracing in WebGPU.
- **Tooling:** Built transform gizmos and interaction systems from the ground up.

---

## 5. ACTIVE_PROJECTS

### Custom Web-Based 3D Editor
- **URL:** [varatha3deditor.vercel.app](https://varatha3deditor.vercel.app/)
- **Description:** A high-performance 3D rendering engine and editor written from scratch.
- **Key Features:**
    - Full PBR pipeline with multi-light support.
    - GlTF 2.0 asset workflow.
    - Hierarchical scene system with frustum culling.
    - Professional-grade transform gizmos and editor tooling.
- **Tech Stack:** TypeScript, WebGL, JavaScript.

---

## 6. PROJECT_STRUCTURE
```bash
src/
├── core/                   # Kernel: Component system & State 
│   ├── BaseComponent.ts    # Component primitives
│   └── State.ts            # Global state manager
│
├── components/             # UI/View Modules
│   ├── App.ts              # Main orchestrator
│   ├── Navbar.ts           # Navigation logic
│   ├── Hero.ts             # Primary entry view
│   ├── About.ts            # System biography
│   ├── Skills.ts           # Technical competency matrix
│   ├── Experience.ts       # Work history timeline
│   ├── Projects.ts         # Portfolio showcase
│   └── ContactSection.ts   # Communication gateway
│
├── Style/                  # Visual definitions (CSS Modules)
└── assets/                 # Static assets (3D models, textures, videos)
```

---

## 7. SYSTEM_EXECUTION (BUILD & RUN)

**Clone & Initialization:**
```bash
git clone https://github.com/Varatharajan1808/My_Portfolio.git
cd My_Portfolio
npm install
```

**Development Mode:**
```bash
npm run dev
```

**Production Build:**
```bash
npm run build
```

---

## 8. CONTACT_PROTOCOLS
- **GitHub:** [Varatharajan1808](https://github.com/Varatharajan1808)
- **Email:** ciazvanish2000@gmail.com
- **Live Site:** [varatharajanportfolio.vercel.app](https://varatharajanportfolio.vercel.app/)
