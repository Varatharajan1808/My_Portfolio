// Hero component - vanilla TypeScript
import profileImage from '../assets/Varatharajan_photo.png';
import type { ScrollToContact } from '../types.ts';

interface FloatingCard {
  icon: string;
  title: string;
  text: string;
}

export function createHero(scrollToContact: ScrollToContact): HTMLElement {
  const section = document.createElement('section');
  section.className = 'hero-section';
  section.id = 'home';

  const heroContainer = document.createElement('div');
  heroContainer.className = 'hero-container';

  // Hero content
  const heroContent = document.createElement('div');
  heroContent.className = 'hero-content';

  // Profile image
  const img = document.createElement('img');
  img.src = profileImage;
  img.alt = 'Profile';
  img.className = 'hero-image';

  // Title
  const title = document.createElement('h1');
  title.className = 'hero-title fade-in';
  title.textContent = 'WELCOME';

  // Subtitle
  const subtitle = document.createElement('p');
  subtitle.className = 'hero-subtitle fade-in';
  subtitle.textContent = `I'm T VARATHARAJAN `;

  // Role
  const role = document.createElement('h4');
  role.className = 'hero-role fade-in';
  role.textContent = 'Graphics Engineer';

  // Description
  const description = document.createElement('p');
  description.className = 'hero-description fade-in';
  description.textContent = 'Graphics Engineer specializing in WebGL & WebGPU, focused on real-time rendering, custom engines, and high-performance web-based 3D graphics.';

  // Buttons
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'hero-buttons';

  // Hire Me button
  const hireMeBtn = document.createElement('button');
  hireMeBtn.className = 'btn-primary';
  hireMeBtn.innerHTML = `
    <span>Hire Me</span>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  `;
  hireMeBtn.addEventListener('click', scrollToContact);

  // Download Resume button
  const resumeBtn = document.createElement('a');
  resumeBtn.href = '/TVaratharajan.pdf';
  resumeBtn.download = 'VARATHARAJAN_RESUME.pdf';
  resumeBtn.className = 'btn-secondary flex items-center gap-2';
  resumeBtn.innerHTML = `
    <span>Download Resume</span>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  `;

  buttonsDiv.appendChild(hireMeBtn);
  buttonsDiv.appendChild(resumeBtn);

  heroContent.appendChild(img);
  heroContent.appendChild(title);
  heroContent.appendChild(subtitle);
  heroContent.appendChild(role);
  heroContent.appendChild(description);
  heroContent.appendChild(buttonsDiv);

  // Floating cards
  const heroVisual = document.createElement('div');
  heroVisual.className = 'hero-visual';

  const floatingElements = document.createElement('div');
  floatingElements.className = 'floating-elements';

  const cards: FloatingCard[] = [
    { icon: '💻', title: 'Development Expertise', text: '3D GameEngine Developer with modern frameworks and best practices' },
    { icon: '⚡', title: 'Performance Optimization', text: 'Building fast, efficient applications with optimized code' },
    { icon: '📈', title: 'Scalable Architecture', text: 'Designing systems that grow with your business needs' },
  ];

  cards.forEach(({ icon, title, text }: FloatingCard) => {
    const card = document.createElement('div');
    card.className = 'floating-card';

    const cardIcon = document.createElement('div');
    cardIcon.className = 'card-icon';
    cardIcon.textContent = icon;

    const span = document.createElement('span');
    span.textContent = title.split(' ')[0];

    const messageBox = document.createElement('div');
    messageBox.className = 'message-box';

    const h4 = document.createElement('h4');
    h4.textContent = title;

    const p = document.createElement('p');
    p.textContent = text;

    messageBox.appendChild(h4);
    messageBox.appendChild(p);

    card.appendChild(cardIcon);
    card.appendChild(span);
    card.appendChild(messageBox);

    floatingElements.appendChild(card);
  });

  heroVisual.appendChild(floatingElements);

  heroContainer.appendChild(heroContent);
  heroContainer.appendChild(heroVisual);
  section.appendChild(heroContainer);

  return section;
}
