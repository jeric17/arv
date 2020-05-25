export declare const Paginator: {
    name: string;
    element: string;
    slot: boolean;
    events: {
        name: string;
        description: string;
    }[];
    propsDescription: {
        name: string;
        type: string;
        description: string;
    }[];
    props: ({
        name: string;
        type: string;
        data: string[];
        value: string;
    } | {
        name: string;
        type: string;
        value: number;
        data?: undefined;
    } | {
        name: string;
        type: string;
        value: (evt: any) => void;
        data?: undefined;
    })[];
};
