export declare class Flex {
    alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    flex: string;
    justify: 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end' | string;
    styles: {
        [key: string]: string;
    };
    wrap: 'wrap' | 'no-wrap' | 'wrap-reverse';
    expanded: boolean;
    /**
     * Deprecated props.
     */
    layout?: any;
    padded?: any;
    items?: any;
    full?: any;
    fullHeight?: any;
    render(): any;
}
