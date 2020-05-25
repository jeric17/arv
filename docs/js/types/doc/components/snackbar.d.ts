export declare const Snackbar: {
    element: string;
    containerContent: string;
    onLoad: (el: HTMLElement) => void;
    slot: string;
    props: ({
        name: string;
        type: string;
        value: string;
        description: string;
        data?: undefined;
    } | {
        name: string;
        type: string;
        value: number;
        description: string;
        data?: undefined;
    } | {
        name: string;
        type: string;
        value?: undefined;
        description?: undefined;
        data?: undefined;
    } | {
        name: string;
        type: string;
        data: string[];
        description: string;
        value?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        value?: undefined;
        data?: undefined;
    })[];
};
