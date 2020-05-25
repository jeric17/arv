export declare class MyThemeSection {
    themeSettings: {
        '--primary-color': string;
        '--primary-light-color': string;
        '--primary-dark-color': string;
        '--primary-text-color': string;
        '--secondary-color': string;
        '--secondary-light-color': string;
        '--secondary-dark-color': string;
        '--secondary-text-color': string;
        '--default-color': string;
        '--default-light-color': string;
        '--default-dark-color': string;
        '--default-text-color': string;
        '--light-color': string;
        '--light-text-color': string;
        '--dark-color': string;
        '--dark-text-color': string;
        '--error-color': string;
        '--error-light-color': string;
        '--error-dark-color': string;
        '--error-text-color': string;
        '--warning-color': string;
        '--warning-light-color': string;
        '--warning-dark-color': string;
        '--warning-text-color': string;
        '--success-color': string;
        '--success-light-color': string;
        '--success-dark-color': string;
        '--success-text-color': string;
    };
    radius: string;
    componentWillLoad(): void;
    valueChange: (event: any) => boolean;
    radiusChange: (event: any) => void;
    render(): any;
}
