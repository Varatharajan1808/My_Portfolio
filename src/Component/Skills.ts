// Skills component - vanilla TypeScript
interface SkillCategory {
    title: string;
    skills: string[];
}

export function createSkills(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'skills';

    const container = document.createElement('div');
    container.className = 'container';

    // Section header
    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'section-header';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = 'Skills & Technologies';

    const subtitle = document.createElement('p');
    subtitle.className = 'section-subtitle';
    subtitle.textContent = 'My journey and current expertise';

    const divider = document.createElement('div');
    divider.className = 'section-divider';

    sectionHeader.appendChild(title);
    sectionHeader.appendChild(subtitle);
    sectionHeader.appendChild(divider);

    // Skills grid
    const skillsGrid = document.createElement('div');
    skillsGrid.className = 'skills-grid';

    const skillCategories: SkillCategory[] = [
        {
            title: 'Programming Languages',
            skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'GLSL', 'WGSL', ]
        },
        {
            title: 'Graphics APIs & Frameworks',
            skills: [ 'WebGL', 'WebGPU', 'Three.js', 'React Three Fiber']
        },
        {
            title: 'Tools & Build Systems',
            skills: ['Blender', 'Git', 'Github', 'VS Code', 'Chrome DevTools', 'Jira']
        },
        {
            title: '3D Asset Pipelines',
            skills: ['GLTF 2.0', 'GLB', 'Texture Optimization', 'Material Authoring']
        }
    ];

    skillCategories.forEach(({ title, skills }: SkillCategory) => {
        const category = document.createElement('div');
        category.className = 'skill-category';

        // Add Glare Effect Element
        const glare = document.createElement('div');
        glare.className = 'card-glare';
        category.appendChild(glare);

        const h3 = document.createElement('h3');
        h3.textContent = title;

        const skillTags = document.createElement('div');
        skillTags.className = 'skill-tags';

        skills.forEach((skill: string) => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;
            skillTags.appendChild(tag);
        });

        category.appendChild(h3);
        category.appendChild(skillTags);

        // 3D Tilt Logic
        category.addEventListener('mousemove', (e) => {
            const rect = category.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation (center is 0,0)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
            const rotateY = ((x - centerX) / centerX) * 10;

            category.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

            // Glare movement
            glare.style.opacity = '1';
            glare.style.transform = `translate(${x}px, ${y}px)`;
        });

        category.addEventListener('mouseleave', () => {
            category.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            glare.style.opacity = '0';
        });

        skillsGrid.appendChild(category);
    });

    container.appendChild(sectionHeader);
    container.appendChild(skillsGrid);
    section.appendChild(container);

    return section;
}
