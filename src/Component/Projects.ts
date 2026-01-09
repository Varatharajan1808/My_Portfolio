// Projects component - vanilla TypeScript
interface Project {
    icon: string;
    title: string;
    description: string;
    tech: string[];
}

export function createProjects(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'projects';

    const container = document.createElement('div');
    container.className = 'container';

    // Section header
    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'section-header';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = 'Projects';

    const subtitle = document.createElement('p');
    subtitle.className = 'section-subtitle';
    subtitle.textContent = 'Some of my recent work and explorations';

    const divider = document.createElement('div');
    divider.className = 'section-divider';

    sectionHeader.appendChild(title);
    sectionHeader.appendChild(subtitle);
    sectionHeader.appendChild(divider);

    // Projects grid
    const projectsGrid = document.createElement('div');
    projectsGrid.className = 'projects-grid';

    const projects: Project[] = [
        {
            icon: '🌐',
            title: 'Portfolio Website',
            description: 'Built using JavaScript, TypeScript, and TailwindCSS with responsive UI and strong performance optimization.',
            tech: [`Javascript`, 'TypeScript', 'TailwindCSS']
        },
        {
            icon: '💻',
            title: '3D Custom Game Engine',
            description: 'Developed a real-time rendering engine using WebGL, Javascript and TypeScript; implemented shaders, materials, lighting, raycasting, and core engine architecture.',
            tech: ['WebGL', 'JavaScript', `Typescript`]
        },
    ];

    projects.forEach(({ icon, title, description, tech }: Project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        // Add Glare Effect Element
        const glare = document.createElement('div');
        glare.className = 'card-glare';
        projectCard.appendChild(glare);

        const projectImage = document.createElement('div');
        projectImage.className = 'project-image';

        const placeholder = document.createElement('div');
        placeholder.className = 'project-placeholder';
        placeholder.textContent = icon;

        projectImage.appendChild(placeholder);

        const projectContent = document.createElement('div');
        projectContent.className = 'project-content';

        const h3 = document.createElement('h3');
        h3.textContent = title;

        const p = document.createElement('p');
        p.textContent = description;

        const projectTech = document.createElement('div');
        projectTech.className = 'project-tech';

        tech.forEach((techName: string) => {
            const span = document.createElement('span');
            span.textContent = techName;
            projectTech.appendChild(span);
        });

        projectContent.appendChild(h3);
        projectContent.appendChild(p);
        projectContent.appendChild(projectTech);

        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectContent);

        // 3D Tilt Logic
        projectCard.addEventListener('mousemove', (e) => {
            const rect = projectCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation (center is 0,0)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
            const rotateY = ((x - centerX) / centerX) * 10;

            projectCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

            // Glare movement
            glare.style.opacity = '1';
            glare.style.transform = `translate(${x}px, ${y}px)`;
        });

        projectCard.addEventListener('mouseleave', () => {
            projectCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            glare.style.opacity = '0';
        });

        projectsGrid.appendChild(projectCard);
    });

    container.appendChild(sectionHeader);
    container.appendChild(projectsGrid);
    section.appendChild(container);

    return section;
}
