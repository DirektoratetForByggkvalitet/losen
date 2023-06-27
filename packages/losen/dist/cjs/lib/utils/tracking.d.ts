declare global {
    interface Window {
        _paq?: any[];
    }
}
export declare function track(wizardName: string, id: string, title?: string): void;
export declare function trackEvent(action: string, name?: string): void;
