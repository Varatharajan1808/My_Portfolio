import { createComponent, mountComponent, updateComponent } from '../core/BaseComponent';
import '../Style/Experience.css';

// Component
export function createExperience() {
    const config = createComponent({});
    const element: HTMLElement = config.element;
    element.id = 'experience';
    element.className = 'section';

    function render(): string {
        return `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">WORK_HISTORY</h2>
                    <p class="section-subtitle">Professional experience and academic foundations</p>
                    <div class="section-divider"></div>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <div class="timeline-header">
                                <span class="timeline-company">Hexrfactory Immersive Tech Pvt Ltd</span>
                                <span class="timeline-date">2023 - PRESENT</span>
                            </div>
                            <span class="timeline-title">GRAPHICS_ENGINEER – WebGL/WebGPU</span>
                            <ul class="experience-list">
                                <li><strong>Built a custom rendering engine supporting both WebGL and WebGPU</strong> , designing core systems such as Scene, Renderer, Camera, Mesh, Material, and Light with full control over draw calls and frame execution.</li>
                                <li><strong>Implemented a scene-centric workflow with glTF import/export,</strong> enabling structured scene management, asset interchange, and validation across engines and tools.</li>
                                <li><strong>Developed a unified material and texture system</strong>, supporting PBR parameters, normal maps, alpha transparency, environment maps, and physically accurate surface shading.</li>
                                <li><strong>Authored and optimized GLSL and WGSL shaders</strong> for lighting, material evaluation, mesh transforms, and light interaction, with a focus on quality and GPU efficiency.</li>
                                <li><strong>Implemented advanced WebGPU features,</strong> including PBR, Image-Based Lighting, Global Illumination, ray tracing / path tracing, and animation systems.</li>
                                <li><strong>Owned engine tooling and interaction systems end-to-end,</strong> building transform gizmos, camera and mouse controls, scene management, and continuously improving code structure and performance.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <div class="timeline-header">
                            <span class="timeline-company">MBA in Human Resource Management (HRM)</span>
                            <span class="timeline-date">GRADUATED 2023</span><br>
                            </div>
                            <span class="timeline-title">Alagappa University — Thoothukudi, Tamil Nadu, India</span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                        <div class="timeline-header">
                        <span class="timeline-company">Bachelor of Science in Mathematics</span>
                        <span class="timeline-date">GRADUATED 2020</span><br>
                        </div>
                        <span class="timeline-title">Kamaraj College, Manonmaniam Sundaranar University | Thoothukudi, Tamil Nadu, India</span>
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
