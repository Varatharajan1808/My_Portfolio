// ContactInfo component - vanilla TypeScript
import { createContactMethod } from './ContactMethod.ts';
import { createSocialSection } from './SocialSection.ts';

export function createContactInfo(): HTMLDivElement {
  const info = document.createElement('div');
  info.className = 'contact-info';

  // Info section
  const infoSection = document.createElement('div');
  infoSection.className = 'info-section';

  const infoTitle = document.createElement('h3');
  infoTitle.className = 'info-title';
  infoTitle.textContent = 'Get In Touch';

  const infoDescription = document.createElement('p');
  infoDescription.className = 'info-description';
  infoDescription.textContent = "I'm always ready to take on bold challenges and contribute to impactful, innovative projects. Whether you've got a clear vision or just want to explore possibilities, I'd love to connect and see how we can build something great together.";

  infoSection.appendChild(infoTitle);
  infoSection.appendChild(infoDescription);

  // Contact methods
  const contactMethods = document.createElement('div');
  contactMethods.className = 'contact-methods';

  // Email
  const emailIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`;
  const emailContent = '<a href="mailto:ciazvanish2000@gmail.com" class="method-link">ciazvanish2000@gmail.com</a>';
  contactMethods.appendChild(createContactMethod(emailIcon, 'Email', emailContent, 'email'));

  // Phone
  const phoneIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>`;
  contactMethods.appendChild(createContactMethod(phoneIcon, 'Phone', '+91 9659309280', 'phone'));

  // Location 
  const locationIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>`;
  contactMethods.appendChild(createContactMethod(locationIcon, 'Located in', 'Chennai, Tamil Nadu, India', 'location'));

  // Social section
  const socialSection = createSocialSection();

  // Contact bottom
  const contactBottom = document.createElement('div');
  contactBottom.className = 'contact-bottom';

  const availabilityStatus = document.createElement('div');
  availabilityStatus.className = 'availability-status';

  const statusIndicator = document.createElement('div');
  statusIndicator.className = 'status-indicator';

  const statusText = document.createElement('span');
  statusText.textContent = 'Available for new projects';

  availabilityStatus.appendChild(statusIndicator);
  availabilityStatus.appendChild(statusText);

  const responseTime = document.createElement('div');
  responseTime.className = 'response-time';
  responseTime.textContent = 'Usually responds within 24 hours';

  contactBottom.appendChild(availabilityStatus);
  contactBottom.appendChild(responseTime);

  // Assemble
  info.appendChild(infoSection);
  info.appendChild(contactMethods);
  info.appendChild(socialSection);
  info.appendChild(contactBottom);

  return info;
}
