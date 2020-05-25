export declare class DocHtml {
    el: HTMLElement;
    config: any;
    isDark?: boolean;
    settings: any[];
    settingsHandler(): void;
    get htmlCode(): string;
    get propsString(): string;
    componentDidLoad(): void;
    render(): any;
    private init;
}
