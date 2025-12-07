// SocialSection component - vanilla TypeScript
interface SocialLink {
  href: string;
  className: string;
  title: string;
  icon: string;
}

export function createSocialSection(): HTMLDivElement {
  const section = document.createElement('div');
  section.className = 'social-section';

  const title = document.createElement('h4');
  title.className = 'social-title';
  title.textContent = 'Connect with me';

  const socialLinks = document.createElement('div');
  socialLinks.className = 'social-links';

  const socials: SocialLink[] = [
    {
      href: 'https://www.linkedin.com/in/t-varatharajan-20a753245/',
      className: 'linkedin',
      title: 'LinkedIn',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>`
    },
    {
      href: 'https://github.com/Varatharajan1808',
      className: 'github',
      title: 'GitHub',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>`
    },
    {
      href: 'https://www.instagram.com/vanish.vanish?igsh=M3MxdTQwbjY5NWVl',
      className: 'instagram',
      title: 'Instagram',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 2a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5z"/>
      </svg>`
    }
  ];

  socials.forEach(({ href, className, title, icon }: SocialLink) => {
    const link = document.createElement('a');
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = `social-link ${className}`;
    link.title = title;
    link.innerHTML = icon;
    socialLinks.appendChild(link);
  });

  section.appendChild(title);
  section.appendChild(socialLinks);

  return section;
}
