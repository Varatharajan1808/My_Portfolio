// Simple state management with types
export interface Listener<T> {
    (state: T): void;
}

export interface StateManager<T> {
    get: () => T;
    update: (patch: Partial<T>) => void;
    subscribe: (listener: Listener<T>) => () => void;
}

export function createState<T extends object>(initialData: T): StateManager<T> {
    let data: T = { ...initialData };
    let listeners: Listener<T>[] = [];

    function notify(): void {
        listeners.forEach(listener => listener(data));
    }

    return {
        get: () => data,
        update: (patch: Partial<T>) => {
            data = { ...data, ...patch };
            notify();
        },
        subscribe: (listener: Listener<T>) => {
            listeners.push(listener);
            return () => {
                listeners = listeners.filter(l => l !== listener);
            };
        }
    };
}
