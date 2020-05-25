import { Color } from '../../interface';
export declare class Text {
    el: HTMLElement;
    /**
     * Color variant to use.
     */
    color: Color;
    /**
     * Will apply a text shadow.
     */
    shadow?: boolean;
    /**
     * Truncates the text with ellipsis.
     */
    truncate?: boolean;
    /**
     * Whitespace
     */
    wrap?: 'break-spaces' | 'pre' | 'pre-wrap' | 'normal' | 'nowrap' | 'wrap';
    render(): any;
}
