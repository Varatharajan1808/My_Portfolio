// Main entry point for vanilla JavaScript portfolio
import './index.css';
import './Style/Root.css';
import './Style/Navbar.css';
import './Style/Hero.css';
import './Style/About.css';
import './Style/Skills.css';
import './Style/Experience.css';
import './Style/Project.css';
import './Style/ContactMethod.css';
import './Style/ContactForm.css';
import './Style/ContactInfo.css';
import './Style/ContactHeader.css';
import './Style/ContactSection.css';
import './Style/SocialSection.css';

import { createApp } from './Component/App.ts';

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    if (root) {
        const app = createApp();
        root.appendChild(app);
    }
});
