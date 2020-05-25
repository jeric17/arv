export declare const Dialog: {
    element: string;
    slot: string;
    containerContent: string;
    onLoad: (el: HTMLElement) => void;
    props: ({
        name: string;
        type: string;
        value: string;
        description: string;
        disabled?: undefined;
    } | {
        name: string;
        type: string;
        value: string;
        disabled: boolean;
        description: string;
    } | {
        name: string;
        type: string;
        description: string;
        value?: undefined;
        disabled?: undefined;
    })[];
};
