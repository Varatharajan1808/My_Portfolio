import { createComponent, mountComponent, updateComponent } from '../core/BaseComponent';
import '../Style/Project.css';
import img1 from '../assets/projects/editor_1.png';
import img2 from '../assets/projects/editor_2.png';
import img3 from '../assets/projects/editor_3.png';
import img4 from '../assets/projects/editor_4.png';
import img5 from '../assets/projects/editor_5.png';
import img6 from '../assets/projects/editor_6.png';
import ProjectVideo from '../assets/projects/ProjectVideo.mp4';
import luminasphere from '../assets/projects/luminasphere.mp4';

const projectImages = [img1, img2, img3, img4, img5, img6];

// Types
interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
    video?: string;
    image?: string;
    isActive: boolean;
}

// Component
export function createProjects() {
    const config = createComponent({});
    const element: HTMLElement = config.element;
    element.id = 'projects';
    element.className = 'section';

    const projects: Project[] = [
        {
            id: 'project-card-gltf',
            title: "Custom Web-Based 3D Editor",
            description: `Architected a high-performance web-based 3D rendering engine from scratch using JavaScript and TypeScript, featuring a full Physically Based Rendering (PBR) pipeline with multi-light support.
            Implemented a complete glTF 2.0 asset workflow and hierarchical scene system with frustum culling, transform gizmos, and professional-grade real-time editor tooling.`,
            tech: ["Typescript", "Javascript", "WebGL", "GLSL"],
            link: "https://varatha3deditor.vercel.app/",
            video: ProjectVideo,
            isActive: true
        },
        {
            id: 'project-luminasphere',
            title: "Luminasphere",
            description: "A high-performance interactive 3D orb built using WebGL and custom GLSL shaders, featuring dynamic vertex displacement and fluid color transitions. This project demonstrates advanced 3D rendering techniques with a focus on smooth, responsive user interactions.",
            tech: ["TypeScript", "Javascript", "WebGL", "GLSL"],
            link: "https://luminasphere-webgl.vercel.app/",
            video: luminasphere,
            isActive: false
        }
    ];

    function render(): string {
        return `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">ACTIVE_PROJECTS</h2>
                    <p class="section-subtitle">Principal research and development output</p>
                    <div class="section-divider"></div>
                </div>

                <div class="projects-grid">
                    ${projects.map(project => `
                        <a
                            class="project-card ${project.isActive ? 'highlighted' : ''}"
                            id="${project.id}"
                            href="${project.link}"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open Live Demo"
                        >
                            <div class="project-image">
                                <div class="project-connector"></div>
                                ${project.video ? `
                                    <video class="hero-bg-video" autoplay loop muted playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                                        <source src="${project.video}" type="video/mp4">
                                    </video>
                                ` : project.image ? `
                                    <img src="${project.image}" alt="${project.title}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                                ` : `
                                    <div class="project-placeholder" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--bg-tertiary); display: flex; align-items: center; justify-content: center;">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.2;"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                    </div>
                                `}
                                ${project.isActive ? `
                                <div class="viewport-overlay">
                                    <span class="stat-tag">SYSTEM::ACTIVE</span>
                                    <span class="stat-tag">60 FPS</span>
                                </div>
                                ` : ''}
                                <div class="project-overlay-cta">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </div>
                            </div>
                            <div class="project-content">
                                <div class="flex-between">
                                    <h3>${project.title}</h3>
                                    <div class="live-link-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </div>
                                </div>
                                <p>${project.description}</p>
                                <div class="project-tech">
                                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                                </div>
                            </div>
                        </a>
                    `).join('')}
                </div>

                <div class="gallery-section">
                    <h3 class="gallery-title">SYSTEM_SNAPSHOTS</h3>
                    <div class="gallery-3d-container">
                        <div class="gallery-track">
                            ${projectImages.map((img, i) => `
                                <div class="gallery-item" style="--i: ${i}">
                                    <img src="${img}" alt="Editor Screenshot ${i + 1}" loading="lazy">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function attachEvents(): void { }

    function afterMount(): void { }

    function mount(parent: HTMLElement): void {
        mountComponent(element, parent, render, attachEvents, afterMount);
    }

    function update(): void {
        updateComponent(element, render, attachEvents, afterMount);
    }

    return { element, mount, update };
}
