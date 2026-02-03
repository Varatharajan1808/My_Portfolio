import { createComponent, mountComponent, updateComponent } from '../core/BaseComponent';
import profileImage from '../assets/Varatharajan_photo.png';
import resume from '../assets/resume.pdf';
import '../Style/Hero.css';

// Types
interface HeroProps {
    scrollToContact: () => void;
}

const variants = [
    { id: 'RENDER_ENGINE_3D', label: 'GEOMETRY_VIEW' },
    { id: 'CODE_CORE', label: 'SYSTEM_LOGS' },
    { id: 'HUD_ANALYTICS', label: 'TELEMETRY' },
    { id: 'SHADER_SYSTEM', label: 'CORE_FLUX' }
];

// Component
export function createHero(props: HeroProps) {
    const config = createComponent<HeroProps>(props);
    const element: HTMLElement = config.element;
    element.id = 'home';
    element.className = 'hero-section';

    let activeVariant = 0;
    let autoPlayInterval: any;
    let mousePos = { x: 50, y: 50 };

    function render(): string {
        return `
            <div class="hero-container">
                <div class="hero-content">
                    <div class="hero-profile">
                        <img src="${profileImage}" alt="Varatharajan" class="hero-image" />
                    </div>
                    <span class="hero-role fade-in">Graphics Engineer</span>
                    <h1 class="hero-title fade-in">
                        <span> Varatharajan T</span>
                    </h1>
                    <p class="hero-description fade-in">
                        Specializing in high-performance rendering pipelines and GPGPU optimizations using WebGL and WebGPU.
                    </p>
                    <div class="hero-buttons fade-in">
                        <button class="btn-primary" id="contact-btn">
                            INITIALIZE_CONTACT
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <a href="${resume}" download="Varatharajan_Resume.pdf" class="btn-secondary">
                            DOWNLOAD_RESUME
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="hero-visual fade-in">
                    <div class="engine-viewport-mockup" id="hero-viewport">
                        <div class="viewport-header">
                            <span>LIVE_VARIANT::${variants[activeVariant].id}</span>
                            <span>60 FPS</span>
                        </div>
                        <div class="viewport-content variant-${variants[activeVariant].id.toLowerCase()}" style="--mouse-x: ${mousePos.x}%; --mouse-y: ${mousePos.y}%;">
                            ${renderVariantContent()}
                            
                            <div class="variant-controls">
                                <button class="v-btn prev" id="v-prev" title="Previous Variant">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                </button>
                                <button class="v-btn next" id="v-next" title="Next Variant">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </button>
                            </div>

                            <div class="variant-picker">
                                ${variants.map((v, i) => `
                                    <button class="p-btn ${i === activeVariant ? 'active' : ''}" data-index="${i}">
                                        <span class="p-label">${v.label}</span>
                                        <span class="p-dot"></span>
                                    </button>
                                `).join('')}
                            </div>

                            <div class="tech-stats-overlay">
                                <div>RESOLUTION: 1920x1080</div>
                                <div>BACKEND: ${activeVariant === 0 ? 'WEBGL_2.0' : activeVariant === 3 ? 'SHADER_CORE' : 'WEBGL_2.0'}</div>
                                <div>SIGNAL: ${variants[activeVariant].label}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderVariantContent(): string {
        switch (variants[activeVariant].id) {
            case 'RENDER_ENGINE_3D':
                return `
                    <div class="v-3d-container">
                        <div class="v-3d-object">
                            <div class="side top"></div>
                            <div class="side bottom"></div>
                            <div class="side left"></div>
                            <div class="side right"></div>
                            <div class="side front"></div>
                            <div class="side back"></div>
                        </div>
                        <div class="v-3d-grid"></div>
                    </div>
                `;
            case 'CODE_CORE':
                return `
                    <div class="v-code-terminal">
                        <div class="code-line">>> INITIALIZING RENDERING PIPELINE...</div>
                        <div class="code-line">>> LOADING SHADER_CORE_04...</div>
                        <div class="code-line">>> RESOLVING VERTEX_BUFFERS...</div>
                        <div class="code-line">>> ALL SYSTEMS NOMINAL.</div>
                        <div class="code-cursor"></div>
                    </div>
                `;
            case 'HUD_ANALYTICS':
                return `
                    <div class="v-hud-analytics">
                        <div class="hud-telemetry">
                            <div class="t-item"><span>FPS</span><span class="t-value">60.0</span></div>
                            <div class="t-item"><span>LATENCY</span><span class="t-value">16.6ms</span></div>
                            <div class="t-item"><span>DRAW_CALLS</span><span class="t-value">128</span></div>
                        </div>
                        <div class="hud-bars">
                            <div class="hud-bar"><div class="fill" style="height: 70%"></div></div>
                            <div class="hud-bar"><div class="fill" style="height: 40%"></div></div>
                            <div class="hud-bar"><div class="fill" style="height: 90%"></div></div>
                            <div class="hud-bar"><div class="fill" style="height: 60%"></div></div>
                        </div>
                        <div class="hud-circle-container">
                            <div class="hud-circle"></div>
                            <div class="hud-circle outer"></div>
                        </div>
                    </div>
                `;
            case 'SHADER_SYSTEM':
                return `
                    <div class="v-shader-system">
                        <div class="shader-noise"></div>
                        <div class="shader-interactive-gradient"></div>
                        <div class="shader-hex-grid"></div>
                        <div class="shader-glow"></div>
                    </div>
                `;
            default:
                return '';
        }
    }

    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            activeVariant = (activeVariant + 1) % variants.length;
            update();
        }, 8000);
    }

    function attachEvents(): void {
        const contactBtn = element.querySelector('#contact-btn');
        const nextBtn = element.querySelector('#v-next');
        const prevBtn = element.querySelector('#v-prev');
        const pBtns = element.querySelectorAll('.p-btn');
        const viewport = element.querySelector('#hero-viewport');

        contactBtn?.addEventListener('click', () => props.scrollToContact());

        nextBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            activeVariant = (activeVariant + 1) % variants.length;
            startAutoPlay();
            update();
        });

        prevBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            activeVariant = (activeVariant - 1 + variants.length) % variants.length;
            startAutoPlay();
            update();
        });

        pBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const index = parseInt((e.currentTarget as HTMLElement).dataset.index || '0');
                activeVariant = index;
                startAutoPlay();
                update();
            });
        });

        viewport?.addEventListener('mousemove', (e: any) => {
            if (activeVariant !== 3) return; // Only track for shader variant
            const rect = viewport.getBoundingClientRect();
            mousePos.x = ((e.clientX - rect.left) / rect.width) * 100;
            mousePos.y = ((e.clientY - rect.top) / rect.height) * 100;

            const content = viewport.querySelector('.viewport-content') as HTMLElement;
            if (content) {
                content.style.setProperty('--mouse-x', `${mousePos.x}%`);
                content.style.setProperty('--mouse-y', `${mousePos.y}%`);
            }
        });
    }

    function afterMount(): void {
        startAutoPlay();
    }

    function mount(parent: HTMLElement): void {
        mountComponent(element, parent, render, attachEvents, afterMount);
    }

    function update(): void {
        updateComponent(element, render, attachEvents, afterMount);
    }

    function unmount(): void {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
    }

    return { element, mount, update, unmount };
}
