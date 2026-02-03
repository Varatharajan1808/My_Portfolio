import { createComponent, mountComponent, updateComponent } from '../core/BaseComponent';
import '../Style/Project.css';
import img1 from '../assets/projects/editor_1.png';
import img2 from '../assets/projects/editor_2.png';
import img3 from '../assets/projects/editor_3.png';
import img4 from '../assets/projects/editor_4.png';
import img5 from '../assets/projects/editor_5.png';
import img6 from '../assets/projects/editor_6.png';
import ProjectVideo from '../assets/projects/ProjectVideo.mp4';

const projectImages = [img1, img2, img3, img4, img5, img6];

// Types
interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
}

// Component
export function createProjects() {
    const config = createComponent({});
    const element: HTMLElement = config.element;
    element.id = 'projects';
    element.className = 'section';

    const gltfViewer: Project = {
        title: "Custom Web-Based 3D Editor",
        description: `Architected a high-performance web-based 3D rendering engine from scratch using JavaScript and TypeScript, featuring a full Physically Based Rendering (PBR) pipeline with multi-light support.
        Implemented a complete glTF 2.0 asset workflow and hierarchical scene system with frustum culling, transform gizmos, and professional-grade real-time editor tooling.`,
        tech: ["Typescript", "Javascript", "WebGL"],
        link: "https://varatha3deditor.vercel.app/"
    };

    function render(): string {
        return `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">ACTIVE_PROJECTS</h2>
                    <p class="section-subtitle">Principal research and development output</p>
                    <div class="section-divider"></div>
                </div>

                <div class="projects-grid">
                    <div
                        class="project-card highlighted"
                        id="project-card-gltf"
                        title="Open Live Demo"
                    >
                        <div class="project-image">
                            <div class="project-connector"></div>
                            <video class="hero-bg-video" autoplay loop muted playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                                <source src="${ProjectVideo}" type="video/mp4">
                            </video>
                            <div class="viewport-overlay">
                                <span class="stat-tag">SYSTEM::ACTIVE</span>
                                <span class="stat-tag">60 FPS</span>
                            </div>
                            <div class="project-overlay-cta">
                                <span class="cta-text">OPEN LIVE DEMO</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </div>
                        </div>
                        <div class="project-content">
                            <div class="flex-between">
                                <h3>${gltfViewer.title}</h3>
                                <div class="live-link-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </div>
                            </div>
                            <p>${gltfViewer.description}</p>
                            <div class="project-tech">
                                ${gltfViewer.tech.map(t => `<span>${t}</span>`).join('')}
                            </div>
                        </div>
                    </div>
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

    function attachEvents(): void {
        const card = element.querySelector('#project-card-gltf');
        if (card) {
            card.addEventListener('click', () => {
                window.open(gltfViewer.link, '_blank');
            });
        }
    }

    function afterMount(): void { }

    function mount(parent: HTMLElement): void {
        mountComponent(element, parent, render, attachEvents, afterMount);
    }

    function update(): void {
        updateComponent(element, render, attachEvents, afterMount);
    }

    return { element, mount, update };
}
