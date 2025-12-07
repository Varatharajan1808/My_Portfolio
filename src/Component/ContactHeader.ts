// ContactHeader component - vanilla TypeScript
export function createContactHeader(): HTMLDivElement {
    const header = document.createElement('div');
    header.className = 'contact-header';

    const title = document.createElement('h2');
    title.className = 'contact-title';
    title.textContent = "Let's Work Together";

    const subtitle = document.createElement('p');
    subtitle.className = 'contact-subtitle';
    subtitle.textContent = "Ready to bring your ideas to life? Let's discuss your project and create something amazing together.";

    const divider = document.createElement('div');
    divider.className = 'contact-divider';

    header.appendChild(title);
    header.appendChild(subtitle);
    header.appendChild(divider);

    return header;
}
