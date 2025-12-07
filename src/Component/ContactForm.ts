// ContactForm component - vanilla TypeScript
import type { FormData } from '../types.ts';

export function createContactForm(
  formData: FormData,
  handleChange: (e: Event) => void,
  handleSubmit: (e: Event) => void,
  isSubmitting: boolean
): HTMLDivElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'contact-form-wrapper';

  const form = document.createElement('form');
  form.className = 'contact-form';
  form.addEventListener('submit', handleSubmit);

  // First row - First Name and Last Name
  const formRow = document.createElement('div');
  formRow.className = 'form-row';

  // First Name
  const firstNameGroup = createFormGroup('firstName', 'text', 'First Name', formData.firstName, handleChange);
  formRow.appendChild(firstNameGroup);

  // Last Name
  const lastNameGroup = createFormGroup('lastName', 'text', 'Last Name', formData.lastName, handleChange);
  formRow.appendChild(lastNameGroup);

  form.appendChild(formRow);

  // Email
  const emailGroup = createFormGroup('email', 'email', 'Email Address', formData.email, handleChange);
  form.appendChild(emailGroup);

  // Message
  const messageGroup = document.createElement('div');
  messageGroup.className = 'form-group';

  const messageTextarea = document.createElement('textarea');
  messageTextarea.id = 'message';
  messageTextarea.name = 'message';
  messageTextarea.rows = 5;
  messageTextarea.className = 'form-input';
  messageTextarea.value = formData.message;
  messageTextarea.required = true;
  messageTextarea.placeholder = ' ';
  messageTextarea.style.resize = 'vertical';
  messageTextarea.addEventListener('input', handleChange);

  const messageLabel = document.createElement('label');
  messageLabel.htmlFor = 'message';
  messageLabel.className = 'form-label';
  messageLabel.textContent = 'Your Message';

  const messageUnderline = document.createElement('div');
  messageUnderline.className = 'form-underline';

  messageGroup.appendChild(messageTextarea);
  messageGroup.appendChild(messageLabel);
  messageGroup.appendChild(messageUnderline);

  form.appendChild(messageGroup);

  // Submit button
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.className = `submit-btn ${isSubmitting ? 'submitting' : ''}`;
  submitBtn.disabled = isSubmitting;

  const btnText = document.createElement('span');
  btnText.textContent = isSubmitting ? 'Sending...' : 'Send Message';

  const btnIcon = document.createElement('div');
  btnIcon.className = 'submit-icon';
  btnIcon.innerHTML = isSubmitting
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`;

  submitBtn.appendChild(btnText);
  submitBtn.appendChild(btnIcon);

  form.appendChild(submitBtn);
  wrapper.appendChild(form);

  return wrapper;
}

function createFormGroup(
  name: string,
  type: string,
  label: string,
  value: string,
  handleChange: (e: Event) => void
): HTMLDivElement {
  const group = document.createElement('div');
  group.className = 'form-group';

  const input = document.createElement('input');
  input.type = type;
  input.id = name;
  input.name = name;
  input.className = 'form-input';
  input.value = value;
  input.required = true;
  input.placeholder = ' ';
  input.addEventListener('input', handleChange);

  const labelElement = document.createElement('label');
  labelElement.htmlFor = name;
  labelElement.className = 'form-label';
  labelElement.textContent = label;

  const underline = document.createElement('div');
  underline.className = 'form-underline';

  group.appendChild(input);
  group.appendChild(labelElement);
  group.appendChild(underline);

  return group;
}
