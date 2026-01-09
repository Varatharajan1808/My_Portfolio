// About component - vanilla TypeScript
export function createAbout(): HTMLElement {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'about';

    const container = document.createElement('div');
    container.className = 'container';

    // Section header
    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'section-header';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = 'About Me';

    const subtitle = document.createElement('p');
    subtitle.className = 'section-subtitle';
    subtitle.textContent = 'Get to know me better';

    const divider = document.createElement('div');
    divider.className = 'section-divider';

    sectionHeader.appendChild(title);
    sectionHeader.appendChild(subtitle);
    sectionHeader.appendChild(divider);

    // About content
    const aboutContent = document.createElement('div');
    aboutContent.className = 'about-content';

    const aboutText = document.createElement('div');
    aboutText.className = 'about-text';

    const description = document.createElement('p');
    description.textContent = "I'm a passionate Graphics Engineer who thrives on working with diverse technologies. From web development to emerging tech, I enjoy building efficient, scalable, and impactful solutions that solve real-world problems and push the boundaries of innovation.";

    // Stats grid
    const statsGrid = document.createElement('div');
    statsGrid.className = 'stats-grid';

    interface Stat {
        number: string;
        label: string;
    }


    const stats: Stat[] = [
        { number: '2+', label: 'Years Experience' },
        { number: '2+', label: 'Projects Worked' },
        { number: '5+', label: 'Technologies' }
    ];

    stats.forEach(({ number, label }: Stat) => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';

        const statNumber = document.createElement('span');
        statNumber.className = 'stat-number';
        statNumber.textContent = number;

        const statLabel = document.createElement('span');
        statLabel.className = 'stat-label';
        statLabel.textContent = label;

        statItem.appendChild(statNumber);
        statItem.appendChild(statLabel);
        statsGrid.appendChild(statItem);
    });

    aboutText.appendChild(description);
    aboutText.appendChild(statsGrid);
    aboutContent.appendChild(aboutText);

    container.appendChild(sectionHeader);
    container.appendChild(aboutContent);
    section.appendChild(container);

    return section;
}
