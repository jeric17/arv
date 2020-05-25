export declare const Table: {
    name: string;
    element: string;
    slot: string;
    onLoad: (el: HTMLElement) => void;
    props: ({
        name: string;
        type: string;
        value: string;
        description: string;
        data?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        data: string;
        value?: undefined;
    } | {
        name: string;
        type: string;
        value?: undefined;
        description?: undefined;
        data?: undefined;
    })[];
};
