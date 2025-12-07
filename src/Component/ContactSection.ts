// ContactSection component - vanilla TypeScript with EmailJS
import emailjs from '@emailjs/browser';
import { createContactHeader } from './ContactHeader.ts';
import { createContactForm } from './ContactForm.ts';
import { createContactInfo } from './ContactInfo.ts';
import type { FormData, EmailData, AutoReplyData } from '../types.ts';

export function createContactSection(): HTMLDivElement {
    // Form state
    let formData: FormData = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    };
    let isSubmitting = false;
 
    // Container
    const wrapper = document.createElement('div');
    wrapper.className = 'min-h-screen bg-gradient-to-br from-slate-50 to-blue-50';

    const section = document.createElement('section');
    section.className = 'contact-section';
    section.id = 'contact';

    const container = document.createElement('div');
    container.className = 'contact-container';

    // Event handlers
    const handleChange = (e: Event): void => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        const { name, value } = target;
        formData = { ...formData, [name]: value };
    };

    const handleSubmit = (e: Event): void => {
        e.preventDefault();

        if (isSubmitting) return;

        // Email validation
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        isSubmitting = true;
        updateSubmitButton(true);

        const serviceID = 'service_nt4lftq';
        const templateID = 'template_jdjoheo';
        const autoReplyTemplateID = 'template_n1qcur2';
        const publicKey = 'PHNdXWOqvvzJRRR21';

        const notificationData: EmailData = {
            from_firstName: formData.firstName,
            from_lastName: formData.lastName,
            from_email: formData.email,
            message: formData.message
        };

        const autoReplyData: AutoReplyData = {
            to_name: `${formData.firstName} ${formData.lastName}`.trim(),
            to_email: formData.email,
            message: formData.message
        };

        Promise.all([
            emailjs.send(serviceID, templateID, notificationData, publicKey),
            emailjs.send(serviceID, autoReplyTemplateID, autoReplyData, publicKey)
        ])
            .then(() => {
                alert('Message sent! Check your email for confirmation.');
                // Reset form
                formData = {
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                };
                resetForm();
            })
            .catch((error: Error) => {
                console.error('Full error details:', error);
                alert(`Failed to send message: ${error.message || 'Please try again later'}`);
            })
            .finally(() => {
                isSubmitting = false;
                updateSubmitButton(false);
            });
    };

    const updateSubmitButton = (submitting: boolean): void => {
        const submitBtn = container.querySelector('.submit-btn') as HTMLButtonElement | null;
        if (submitBtn) {
            submitBtn.disabled = submitting;
            submitBtn.className = `submit-btn ${submitting ? 'submitting' : ''}`;

            const btnText = submitBtn.querySelector('span');
            if (btnText) {
                btnText.textContent = submitting ? 'Sending...' : 'Send Message';
            }

            const btnIcon = submitBtn.querySelector('.submit-icon');
            if (btnIcon) {
                btnIcon.innerHTML = submitting
                    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>`
                    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>`;
            }
        }
    };

    const resetForm = (): void => {
        const form = container.querySelector('.contact-form') as HTMLFormElement | null;
        if (form) {
            form.reset();
        }
    };

    // Create components
    const header = createContactHeader();

    const contactContent = document.createElement('div');
    contactContent.className = 'contact-content';

    const form = createContactForm(formData, handleChange, handleSubmit, isSubmitting);
    const info = createContactInfo();

    contactContent.appendChild(form);
    contactContent.appendChild(info);

    container.appendChild(header);
    container.appendChild(contactContent);
    section.appendChild(container);
    wrapper.appendChild(section);

    return wrapper;
}
