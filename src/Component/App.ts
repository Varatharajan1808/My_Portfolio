// App component - vanilla TypeScript
import { createNavbar } from './Navbar.ts';
import { createHero } from './Hero.ts';
import { createAbout } from './About.ts';
import { createSkills } from './Skills.ts';
import { createExperience } from './Experience.ts';
import { createProjects } from './Projects.ts';
import { createContactSection } from './ContactSection.ts';
import type { ScrollToSection } from '../types.ts';

export function createApp(): HTMLDivElement {
    const appWrapper = document.createElement('div');
    appWrapper.className = 'app-wrapper';

    // Scroll functions
    const scrollToContact = (): void => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToSection: ScrollToSection = (sectionId: string): void => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Create all components
    const navbar = createNavbar(scrollToSection);
    const hero = createHero(scrollToContact);
    const about = createAbout();
    const skills = createSkills();
    const experience = createExperience();
    const projects = createProjects();
    const contactSection = createContactSection();

    // Global Cursor Glow
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow); // Append to body to ensure it floats above/behind everything independently of app flow

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        cursorGlow.style.background = `radial-gradient(500px circle at ${x}px ${y}px, rgba(42, 250, 223, 0.06), transparent 80%)`;
    });

    // Append all components
    appWrapper.appendChild(navbar);
    appWrapper.appendChild(hero);
    appWrapper.appendChild(about);
    appWrapper.appendChild(skills);
    appWrapper.appendChild(experience);
    appWrapper.appendChild(projects);
    appWrapper.appendChild(contactSection);

    return appWrapper;
}
