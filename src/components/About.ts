import { createComponent, mountComponent, updateComponent } from '../core/BaseComponent';
import '../Style/About.css';

// Component
export function createAbout() {
    const config = createComponent({});
    const element: HTMLElement = config.element;
    element.id = 'about';
    element.className = 'section';
    console.log(element);

    function render(): string {
        return `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">SYSTEM_OVERVIEW</h2>
                    <p class="section-subtitle">Biography and technical capabilities</p>
                    <div class="section-divider"></div>
                </div>
                <div class="about-content">
                    <div class="about-text">
                        <p>
                            Graphics Engineer / 3D Engine Developer focused on building high-performance, real-time rendering engines for the web.
I specialize in low-level graphics programming with a strong foundation in GPU architecture, rendering pipelines, and memory management, applicable across both WebGL and WebGPU.
My work emphasizes engine architecture, efficient resource management, shader design, and mathematical correctness, bridging the gap between theory and practical GPU execution to deliver scalable and performance-aware rendering systems.
                        </p>
                        <div class="stats-grid">
                            <div class="stat-item">
                                <span class="stat-label">EXP_LEVEL</span>
                                <span class="stat-number">2+ YEARS</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">PRIMARY_API</span>
                                <span class="stat-number">WEBGL</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">ASSET_PIPELINE</span>
                                <span class="stat-number">GLTF_2.0</span>
                            </div>
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
