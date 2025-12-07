// Navbar component - vanilla TypeScript
import type { ScrollToSection } from '../types.ts';
import tvrLogo from '../assets/TVR_LOGO.png';

export function createNavbar(scrollToSection: ScrollToSection): HTMLElement {
    const nav = document.createElement('nav');
    nav.className = 'top-nav';

    const navContainer = document.createElement('div');
    navContainer.className = 'nav-container';

    // Logo
    const logo = document.createElement('div');
    logo.className = 'logo';
    
    const logoImg = document.createElement('img');
    logoImg.className = 'logo-img';
    logoImg.src = tvrLogo;
    logoImg.alt = 'TVR Logo';
    logoImg.style.width = '80px';
    logoImg.style.height = '30px';
    
    logo.appendChild(logoImg);

    // Navigation links
    const navLinks = document.createElement('ul');
    navLinks.className = 'nav-links';

    const sections: string[] = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${section}`;
        a.textContent = section.charAt(0).toUpperCase() + section.slice(1);

        a.addEventListener('click', (e: Event) => {
            e.preventDefault();
            scrollToSection(section);
        });

        li.appendChild(a);
        navLinks.appendChild(li);
    });

    navContainer.appendChild(logo);
    navContainer.appendChild(navLinks);
    nav.appendChild(navContainer);

    return nav;
}