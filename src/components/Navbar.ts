import { createComponent, mountComponent } from '../core/BaseComponent';
import { createState, StateManager } from '../core/State';
import '../Style/Navbar.css';

// Types
interface NavbarProps {
    scrollToSection: (sectionId: string) => void;
}

interface NavbarState {
    isMenuOpen: boolean;
}

// Component
export function createNavbar(props: NavbarProps) {
    const config = createComponent<NavbarProps>(props);
    const element: HTMLElement = config.element;
    let unsubscribe: () => void;

    const state: StateManager<NavbarState> = createState<NavbarState>({
        isMenuOpen: false
    });

    const navItems = [
        { label: 'INDEX', id: 'home' },
        { label: 'SYSTEM', id: 'about' },
        { label: 'CAPS', id: 'skills' },
        { label: 'LOGS', id: 'experience' },
        { label: 'REPO', id: 'projects' },
        { label: 'SIGNAL', id: 'contact' }
    ];

    function render(): string {
        // Render static structure, classes will be handled by update/mount
        return `
            <nav class="top-nav">
                <div class="nav-container">
                    <div class="logo">
                        <div class="logo-3d-wrapper">
                            <span class="logo-layer base" data-text="TVR">TVR</span>
                            <span class="logo-layer glitch" data-text="TVR">TVR</span>
                            <span class="logo-layer top" data-text="TVR">TVR</span>
                        </div>
                    </div>

                    <button 
                        class="hamburger"
                        aria-label="Toggle menu"
                        id="hamburger-btn"
                    >
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>

                    <ul class="nav-links">
                        ${navItems.map(item => `
                            <li>
                                <a href="#${item.id}" class="nav-link" data-id="${item.id}">
                                    ${item.label}
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </nav>
        `;
    }

    function attachEvents(): void {
        const hamburger = element.querySelector('#hamburger-btn');
        if (hamburger) {
            // Remove old listener if any to prevent duplicates? 
            // BaseComponent's updateComponent re-attaches, but we are NOT calling it anymore.
            // But mountComponent calls it once.
            // We need to ensure we don't bind multiple times if we ever did re-render.
            // Since we are changing update() to NOT re-render, attachEvents is called ONCE at mount.
            // So logical!

            hamburger.addEventListener('click', () => {
                const { isMenuOpen } = state.get();
                state.update({ isMenuOpen: !isMenuOpen });
            });
        }

        const links = element.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const id = (link as HTMLElement).dataset.id;
                if (id) {
                    props.scrollToSection(id);
                    state.update({ isMenuOpen: false });
                }
            });
        });
    }

    function afterMount(): void {
        // Set initial state
        update();
    }

    function mount(parent: HTMLElement): void {
        unsubscribe = state.subscribe(() => update());
        mountComponent(element, parent, render, attachEvents, afterMount);
    }

    function update(): void {
        // Manual DOM update to preserve transitions
        const { isMenuOpen } = state.get();
        const hamburger = element.querySelector('.hamburger');
        const navLinks = element.querySelector('.nav-links');

        if (hamburger && navLinks) {
            if (isMenuOpen) {
                hamburger.classList.add('active');
                navLinks.classList.add('active');
            } else {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        }
    }

    function unmount(): void {
        if (unsubscribe) unsubscribe();
    }

    return { element, mount, update, unmount };
}
