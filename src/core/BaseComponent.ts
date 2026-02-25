// Simple component interface with basic types
export interface ComponentConfig<P> {
    props: P;
    element: HTMLElement;
}

export interface Component<P> {
    element: HTMLElement;
    props: P;
    render: () => string;
    attachEvents: () => void;
    afterMount: () => void;
    mount: (parent: HTMLElement) => void;
    update: () => void;
    unmount?: () => void;
}

export function createComponent<P>(
    props: P,
    tagName: string = 'div'
): ComponentConfig<P> {
    return {
        props,
        element: document.createElement(tagName)
    };
}

export function mountComponent(
    element: HTMLElement,
    parent: HTMLElement,
    render: () => string,
    attachEvents: () => void,
    afterMount: () => void
): void {
    element.innerHTML = render();
    attachEvents();
    parent.appendChild(element);
    afterMount();
}

export function updateComponent(
    element: HTMLElement,
    render: () => string,
    attachEvents: () => void,
    afterMount: () => void
): void {
    element.innerHTML = render();
    attachEvents();
    afterMount();
}

export function unmountComponent(
    element: HTMLElement,
    unmount?: () => void
): void {
    if (unmount) unmount();
    element.innerHTML = '';
}
