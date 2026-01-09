// Experience component - vanilla TypeScript
interface ExperienceItem {
    role: string;
    company: string;
    date: string;
    description: string;
}

export function createExperience(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'experience';

    const container = document.createElement('div');
    container.className = 'container';

    // Section header
    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'section-header';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = 'Experience';

    const subtitle = document.createElement('p');
    subtitle.className = 'section-subtitle';
    subtitle.textContent = 'My professional journey';

    const divider = document.createElement('div');
    divider.className = 'section-divider';

    sectionHeader.appendChild(title);
    sectionHeader.appendChild(subtitle);
    sectionHeader.appendChild(divider);

    // Timeline
    const timeline = document.createElement('div');
    timeline.className = 'timeline';

    const experiences: ExperienceItem[] = [
        {
            role: 'Software Developer – Immersive Web Graphics ',
            company: 'Hexr Factory',
            date: 'Sep 11, 2023 - Present',
            description: 'Developed a production-grade custom 3D rendering engine using WebGL and WebGPU, featuring modular PBR shaders (GLSL/WGSL), optimized GLTF pipelines, real-time lighting and physics integration, achieving 60 FPS performance for scalable, interactive web-based 3D applications.'
        },
    ];

    experiences.forEach(({ role, company, date, description }: ExperienceItem) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        const marker = document.createElement('div');
        marker.className = 'timeline-marker';

        const content = document.createElement('div');
        content.className = 'timeline-content';

        const h3 = document.createElement('h3');
        h3.textContent = role;

        const companySpan = document.createElement('span');
        companySpan.className = 'timeline-company';
        companySpan.textContent = company;

        const dateSpan = document.createElement('span');
        dateSpan.className = 'timeline-date';
        dateSpan.textContent = date;

        const p = document.createElement('p');
        p.textContent = description;

        content.appendChild(h3);
        content.appendChild(companySpan);
        content.appendChild(dateSpan);
        content.appendChild(p);

        timelineItem.appendChild(marker);
        timelineItem.appendChild(content);
        timeline.appendChild(timelineItem);
    });

    container.appendChild(sectionHeader);
    container.appendChild(timeline);
    section.appendChild(container);

    return section;
}
