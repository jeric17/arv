import { Color, Size } from '../../interface';
/**
 * @slot - Content or middle content of the button.
 * @slot start - Left content of the button.
 * @slot end - Right content of the button.*
 */
export declare class Button {
    /**
     * Reference to the host element.
     */
    el: HTMLElement;
    /**
     * Color variant to use.
     */
    color?: Color;
    /**
     * Flex direction layout of icon and button content.
     */
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    /**
     * Material icon to show inside the button.
     */
    icon?: string;
    /**
     * Render as an icon button.
    */
    isIcon?: boolean;
    /**
     * Displays a circular progress.
     */
    loading?: boolean;
    /**
     * Circular progress color.
     */
    loadingColor?: Color;
    /**
     * On loading state will show this string instead.
     */
    loadingText?: string;
    /**
     * Size variant to use.
     */
    size?: Size;
    /**
     * Button variant to use.
     */
    variant?: 'raised' | 'ghost' | string;
    /**
     * Fullwidth button.
     */
    full?: boolean;
    /**
     * Disable the button.
     */
    disabled?: boolean;
    /**
     * Edged corners.
     */
    boxed?: boolean;
    /**
     * Css styles to extend the component's ui
     */
    styles?: {
        [key: string]: string;
    };
    /**
     * Deprecated props
     */
    textAlign?: any;
    buttonClick?: any;
    rounded?: any;
    padded?: any;
    render(): any;
}
