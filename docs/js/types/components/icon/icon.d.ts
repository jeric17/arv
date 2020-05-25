import { Color, Size } from '../../interface';
export declare class Icon {
    /**
     * Color variant to use.
     */
    color: Color;
    /**
     * Size variant to use.
     */
    size: Size;
    /**
     * Name of the icon to use
     */
    icon: string;
    /**
     * Css styles to extend the component's ui
     */
    styles: {
        [key: string]: string;
    };
    /**
     * Deprecated props.
     */
    withButtonIcon: boolean;
    noMargin: boolean;
    render(): any;
}
