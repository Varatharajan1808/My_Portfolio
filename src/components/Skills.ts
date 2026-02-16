import { createComponent, mountComponent, updateComponent } from '../core/BaseComponent';
import '../Style/Skills.css';

// Types
interface SkillCategory {
    category: string;
    tags: string[];
}

// Component
export function createSkills() {
    const config = createComponent({});
    const element: HTMLElement = config.element;
    element.id = 'skills';
    element.className = 'section';

    const skills: SkillCategory[] = [
        {
            category: "GRAPHICS_&_RENDERING",
            tags: ["WebGL", "WebGPU", "GPU Pipelines", "Shaders", "Render Passes", "Draw Submission", "Depth Testing", "Framebuffers", "Post-Processing", "Blinn-Phong", "Gamma Correction"]
        },
        {
            category: "ENGINE_&_SYSTEMS",
            tags: ["Scene Graph Systems", "Transform Hierarchies", "Render Loop", "Frame Lifecycle", "Resource Management", "Asset Management", "FPS Debugging", "Draw Call Analysis"]
        },
        {
            category: "3D_DATA_&_MATERIALS",
            tags: ["glTF 2.0", "Buffers & Accessors", "Node Hierarchies", "Texture Baking", "PBR Textures", "Albedo Maps", "Normal Maps", "AO Maps", "Roughness Maps"]
        },
        {
            category: "ARCHITECTURE_&_MATH",
            tags: ["TypeScript", "Linear Algebra", "Computational Geometry", "Entity Component System(ECS)", "Transformation Math"]
        },
        {
            category: "GRAPHICS_KNOWLEDGE",
            tags: ["MVP Pipeline", "Normal Matrix", "Forward/Deferred Shading", "Resource Lifecycle", "GPU Memory Layout"]
        },
        {
            category: "TOOLS",
            tags: ["Git", "GitHub", "Blender", "VS Code", "Chrome DevTools"]
        }
    ];

    function render(): string {
        return `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">TECHNICAL_CAPABILITIES</h2>
                    <p class="section-subtitle">Core competencies in graphics engineering</p>
                    <div class="section-divider"></div>
                </div>
                <div class="skills-grid">
                    ${skills.map(skill => `
                        <div class="skill-category">
                            <h3>${skill.category}</h3>
                            <div class="skill-tags">
                                ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
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
