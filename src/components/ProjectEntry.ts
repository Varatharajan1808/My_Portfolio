import { createComponent, mountComponent, updateComponent } from '../core/BaseComponent';
import '../Style/ProjectEntry.css';

// Types
interface ProjectEntryProps {
    onEnter: () => void;
}

// Component
export function createProjectEntry(props: ProjectEntryProps) {
    const config = createComponent<ProjectEntryProps>(props);
    const element: HTMLElement = config.element;
    element.className = 'project-entry-container-wrapper';

    function render(): string {
        return `
            <div class="project-entry-container">
                <div class="entry-grid-overlay"></div>

                <div class="entry-content">
                    <div class="entry-card" id="entry-card">
                        <div class="entry-card-header">
                            <span class="font-mono text-xs opacity-50">SYSTEM_INITIALIZED</span>
                            <div class="entry-status-dot"></div>
                        </div>

                        <div class="entry-visual">
                            <svg class="engine-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                            <div class="scanline"></div>
                        </div>

                        <div class="entry-info">
                            <h1 class="font-mono">ENGINE_EXPLORER_V2</h1>
                            <p class="font-mono text-xs opacity-70">GRAPHICS_ENGINEER // PORTFOLIO_ENTRY</p>
                        </div>

                        <div class="entry-action">
                            <span class="font-mono text-sm">CLICK_HERE_TO_ENTER</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>

                        <div class="corner-decor top-left"></div>
                        <div class="corner-decor top-right"></div>
                        <div class="corner-decor bottom-left"></div>
                        <div class="corner-decor bottom-right"></div>
                    </div>

                    <div class="entry-stats font-mono">
                        <div class="stat-item">
                            <span class="stat-label">RENDERER</span>
                            <span class="stat-value">WEBGL</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">SHADERS</span>
                            <span class="stat-value">GLSL</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">PERF</span>
                            <span class="stat-value">0.02ms_LATENCY</span>
                        </div>
                    </div>

                    <div class="entry-hint font-mono">
                        <span class="hint-text">CLICK_TO_INITIALIZE_EXPERIENCE</span>
                        <div class="hint-bar"></div>
                    </div>
                </div>
            </div>
        `;
    }

    function attachEvents(): void {
        const card = element.querySelector('#entry-card');
        if (card) {
            card.addEventListener('click', () => props.onEnter());
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
