import { createComponent, mountComponent, updateComponent } from '../core/BaseComponent';
import { createState, StateManager } from '../core/State';
import emailjs from '@emailjs/browser';
import '../Style/ContactSection.css';
import '../Style/ContactForm.css';
import '../Style/ContactInfo.css';
import '../Style/ContactMethod.css';
import '../Style/ContactHeader.css';
import '../Style/SocialSection.css';

// Types
interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

interface ContactState {
    formData: ContactFormData;
    isSubmitting: boolean;
}

// Component
export function createContactSection() {
    const config = createComponent({});
    const element: HTMLElement = config.element;
    element.id = 'contact';
    element.className = 'contact-section-wrapper';

    const state: StateManager<ContactState> = createState<ContactState>({
        formData: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        isSubmitting: false
    });

    function render(): string {
        const { formData, isSubmitting } = state.get();
        return `
            <div class="contact-wrapper">
                <section class="contact-section">
                    <div class="contact-container">
                        <div class="contact-header">
                            <h2 class="contact-title">COMM_INTERFACE</h2>
                            <p class="contact-subtitle">READY_FOR_COMMUNICATION // ARCHITECTING_SOLUTIONS</p>
                            <div class="contact-divider"></div>
                        </div>

                        <div class="contact-content">
                            <div class="contact-form-wrapper">
                                <form class="contact-form" id="contact-form" autocomplete="off">
                                    <div class="form-row">
                                        <div class="form-group">
                                            <input type="text" id="firstName" name="firstName" class="form-input" value="${formData.firstName}" required placeholder=" ">
                                            <label for="firstName" class="form-label">FIRST_NAME</label>
                                            <div class="form-underline"></div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" id="lastName" name="lastName" class="form-input" value="${formData.lastName}" required placeholder=" ">
                                            <label for="lastName" class="form-label">LAST_NAME</label>
                                            <div class="form-underline"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" id="email" name="email" class="form-input" value="${formData.email}" required placeholder=" ">
                                        <label for="email" class="form-label">EMAIL_ADDRESS</label>
                                        <div class="form-underline"></div>
                                    </div>
                                    <div class="form-group">
                                        <textarea id="message" name="message" rows="5" class="form-input" required placeholder=" ">${formData.message}</textarea>
                                        <label for="message" class="form-label">SIGNAL_CONTENT</label>
                                        <div class="form-underline"></div>
                                    </div>
                                    <button type="submit" class="submit-btn ${isSubmitting ? 'submitting' : ''}" ${isSubmitting ? 'disabled' : ''}>
                                        <span>${isSubmitting ? 'BUFFERING...' : 'EMIT_SIGNAL'}</span>
                                        <div class="submit-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </button>
                                </form>
                            </div>

                            <div class="contact-info">
                                <div class="info-section">
                                    <h3 class="info-title">SIGNAL_TARGETS</h3>
                                    <p class="info-description">
                                        Open for technical collaboration, rendering research, and large-scale engine development.
                                        Use the secure channels below to initialize a handshake.
                                    </p>
                                </div>

                                <div class="contact-methods">
                                    <div class="contact-method">
                                        <div class="method-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </svg>
                                        </div>
                                        <div class="method-content">
                                            <span class="method-label">MAIL_SERVICE</span>
                                            <a href="mailto:ciazvanish2000@gmail.com" class="method-link">ciazvanish2000@gmail.com</a>
                                        </div>
                                    </div>

                                    <div class="contact-method">
                                        <div class="method-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
                                            </svg>
                                        </div>
                                        <div class="method-content">
                                            <span class="method-label">SIGNAL_ENDPOINT</span>
                                            <span class="method-text">+91 9659309280</span>
                                        </div>
                                    </div>

                                    <div class="contact-method">
                                        <div class="method-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </div>
                                        <div class="method-content">
                                            <span class="method-label">GEOSPATIAL_COORDS</span>
                                            <span class="method-text">Chennai, TN, IN</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="social-section">
                                    <h4 class="social-title">EXTERNAL_RESOURCES</h4>
                                    <div class="social-links">
                                        <a href="https://www.linkedin.com/in/t-varatharajan-20a753245/" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                        </a>
                                        <a href="https://github.com/Varatharajan1808" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                        <a href="https://www.instagram.com/vanish.vanish?igsh=M3MxdTQwbjY5NWVl" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                        </a>
                                        <a href="https://wa.me/919659309280" target="_blank" rel="noopener noreferrer" class="social-link" title="WhatsApp">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 4.5l-1.1 5.5Z"></path></svg>
                                        </a>
                                    </div>
                                </div>

                                <div class="contact-bottom">
                                    <div class="availability-status">
                                        <div class="status-indicator"></div>
                                        <span>SYSTEM_READY: AVAILABLE</span>
                                    </div>
                                    <div class="response-time">LATENCY: &lt;24HR</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    async function handleSubmit(e: Event): Promise<void> {
        e.preventDefault();
        const { formData } = state.get();

        state.update({ isSubmitting: true });
        update(); // Re-render for buffering state

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            alert('Please enter a valid email address');
            state.update({ isSubmitting: false });
            update();
            return;
        }

        const serviceID = 'service_nt4lftq';
        const templateID = 'template_jdjoheo';
        const autoReplyTemplateID = 'template_n1qcur2';
        const publicKey = 'PHNdXWOqvvzJRRR21';

        const notificationData = {
            from_firstName: formData.firstName,
            from_lastName: formData.lastName,
            from_email: formData.email,
            message: formData.message
        };

        const autoReplyData = {
            to_name: `${formData.firstName} ${formData.lastName}`.trim(),
            to_email: formData.email,
            message: formData.message
        };

        try {
            await Promise.all([
                emailjs.send(serviceID, templateID, notificationData, publicKey),
                emailjs.send(serviceID, autoReplyTemplateID, autoReplyData, publicKey)
            ]);
            alert('Message sent! Check your email for confirmation.');
            state.update({
                formData: { firstName: '', lastName: '', email: '', message: '' },
                isSubmitting: false
            });
            update(); // Re-render to clear form
        } catch (error) {
            console.error('Full error details:', error);
            alert('Failed to send message. Please try again later.');
            state.update({ isSubmitting: false });
            update();
        }
    }

    function attachEvents(): void {
        const form = element.querySelector('#contact-form') as HTMLFormElement;
        if (form) {
            form.addEventListener('submit', (e) => handleSubmit(e));

            const inputs = form.querySelectorAll('.form-input');
            inputs.forEach(input => {
                input.addEventListener('input', (e) => {
                    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
                    const { formData } = state.get();

                    // Update state silently without triggering fill re-render
                    state.update({
                        formData: {
                            ...formData,
                            [target.name]: target.value
                        }
                    });
                });
            });
        }
    }

    function afterMount(): void { }

    function mount(parent: HTMLElement): void {
        // Removed global state subscription to prevent focus loss during typing
        mountComponent(element, parent, render, attachEvents, afterMount);
    }

    function update(): void {
        // Store focus status and selection
        const activeId = document.activeElement?.id;
        const selectionStart = (document.activeElement as HTMLInputElement | HTMLTextAreaElement)?.selectionStart;
        const selectionEnd = (document.activeElement as HTMLInputElement | HTMLTextAreaElement)?.selectionEnd;

        updateComponent(element, render, attachEvents, afterMount);

        // Restore focus
        if (activeId) {
            const el = element.querySelector(`#${activeId}`) as HTMLInputElement | HTMLTextAreaElement;
            if (el) {
                el.focus();
                if (typeof selectionStart === 'number' && typeof selectionEnd === 'number') {
                    el.setSelectionRange(selectionStart, selectionEnd);
                }
            }
        }
    }

    return { element, mount, update };
}
