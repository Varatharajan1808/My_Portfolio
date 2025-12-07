// ContactMethod component - vanilla TypeScript
export function createContactMethod(
    icon: string,
    label: string,
    content: string,
    type: string
): HTMLDivElement {
    const method = document.createElement('div');
    method.className = 'contact-method';

    const methodIcon = document.createElement('div');
    methodIcon.className = `method-icon ${type}-icon`;
    methodIcon.innerHTML = icon;

    const methodContent = document.createElement('div');
    methodContent.className = 'method-content';

    const methodLabel = document.createElement('div');
    methodLabel.className = 'method-label';
    methodLabel.textContent = label;

    const methodText = document.createElement('div');
    methodText.className = 'method-text';

    if (typeof content === 'string') {
        methodText.innerHTML = content;
    }

    methodContent.appendChild(methodLabel);
    methodContent.appendChild(methodText);

    method.appendChild(methodIcon);
    method.appendChild(methodContent);

    return method;
}
