export declare class DocContent {
    demoComponent: HTMLElement;
    el: HTMLElement;
    settings: any[];
    isDark?: boolean;
    selectedComponent: string;
    applyHtmlSample(item: any): void;
    settingsChanged(value: any): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private addComponent;
    render(): any;
}
