interface Window {
    grecaptcha: {
        ready(callback: () => void): void;
        execute(siteKey: string, options: { action: string }): Promise<string>;
        render(element: HTMLElement, options: { sitekey: string; callback?: (token: string) => void }): string;
        reset(widgetId: number): void;
        getResponse(widgetId: number): string;
    };
}
