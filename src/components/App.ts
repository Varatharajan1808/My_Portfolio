import { createComponent, mountComponent, updateComponent } from '../core/BaseComponent';
import { createState, StateManager } from '../core/State';
import { createProjectEntry } from './ProjectEntry';
import { createNavbar } from './Navbar';
import { createHero } from './Hero';
import { createAbout } from './About';
import { createSkills } from './Skills';
import { createExperience } from './Experience';
import { createProjects } from './Projects';
import { createContactSection } from './ContactSection';
import '../Style/Root.css';

// Types
interface AppState {
    isProjectOpen: boolean;
    isExiting: boolean;
}

// Component
export function createApp() {
    const config = createComponent({});
    const element: HTMLElement = config.element;

    const state: StateManager<AppState> = createState<AppState>({
        isProjectOpen: false,
        isExiting: false
    });

    let activeComponents: any[] = [];
    let unsubscribe: () => void;

    function handleEnterProject(): void {
        state.update({ isExiting: true });
        setTimeout(() => {
            state.update({ isProjectOpen: true, isExiting: false });
            window.scrollTo(0, 0);
        }, 800);
    }

    function scrollToContact(): void {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    }

    function scrollToSection(sectionId: string): void {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    }

    function render(): string {
        const { isProjectOpen, isExiting } = state.get();

        if (!isProjectOpen) {
            return `<div id="entry-container" class="entry-wrapper ${isExiting ? 'fade-out' : ''}"></div>`;
        }

        return `
            <div class="app-wrapper fade-in-scale">
                <div class="viewport-hud">
                    <div class="hud-corner hud-top-left"></div>
                    <div class="hud-corner hud-top-right"></div>
                    <div class="hud-corner hud-bottom-left"></div>
                    <div class="hud-corner hud-bottom-right"></div>

                    <div class="hud-labels hud-label-tl">SYS_STATUS::STABLE</div>
                    <div class="hud-labels hud-label-tr">GFX_ENGINE::v2.0</div>
                    <div class="hud-labels hud-label-bl">COORD::40.7128N_74.0060W</div>
                    <div class="hud-labels hud-label-br">RENDER_PIPELINE::WEBGPU_ACTIVE</div>
                </div>
                <div id="navbar-container"></div>
                <div id="hero-container"></div>
                <div id="about-container"></div>
                <div id="skills-container"></div>
                <div id="experience-container"></div>
                <div id="projects-container"></div>
                <div id="contact-container"></div>
            </div>
        `;
    }

    function attachEvents(): void { }

    function afterMount(): void {
        const { isProjectOpen } = state.get();
        if (!isProjectOpen) {
            const entryContainer = element.querySelector('#entry-container') as HTMLElement;
            if (entryContainer) {
                const projectEntry = createProjectEntry({ onEnter: handleEnterProject });
                projectEntry.mount(entryContainer);
            }
        } else {
            mountPortfolioComponents();
        }
    }

    function clearActiveComponents(): void {
        activeComponents.forEach(comp => {
            if (comp.unmount) comp.unmount();
        });
        activeComponents = [];
    }

    function mountPortfolioComponents(): void {
        clearActiveComponents();
        const containers = {
            navbar: element.querySelector('#navbar-container') as HTMLElement,
            hero: element.querySelector('#hero-container') as HTMLElement,
            about: element.querySelector('#about-container') as HTMLElement,
            skills: element.querySelector('#skills-container') as HTMLElement,
            experience: element.querySelector('#experience-container') as HTMLElement,
            projects: element.querySelector('#projects-container') as HTMLElement,
            contact: element.querySelector('#contact-container') as HTMLElement,
        };

        const navbar = createNavbar({ scrollToSection });
        const hero = createHero({ scrollToContact });
        const about = createAbout();
        const skills = createSkills();
        const experience = createExperience();
        const projects = createProjects();
        const contact = createContactSection();

        if (containers.navbar) navbar.mount(containers.navbar);
        if (containers.hero) hero.mount(containers.hero);
        if (containers.about) about.mount(containers.about);
        if (containers.skills) skills.mount(containers.skills);
        if (containers.experience) experience.mount(containers.experience);
        if (containers.projects) projects.mount(containers.projects);
        if (containers.contact) contact.mount(containers.contact);

        activeComponents = [navbar, hero, about, skills, experience, projects, contact];
    }

    function mount(parent: HTMLElement): void {
        unsubscribe = state.subscribe(() => update());
        mountComponent(element, parent, render, attachEvents, afterMount);
    }

    function update(): void {
        updateComponent(element, render, attachEvents, afterMount);
    }

    function unmount(): void {
        clearActiveComponents();
        if (unsubscribe) unsubscribe();
    }

    return { element, mount, update, unmount };
}
