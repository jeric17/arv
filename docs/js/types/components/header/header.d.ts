import { Color } from '../../interface';
export declare class Header {
    /**
     * Set the Color variant.
     */
    color: Color;
    /**
     * Position of the header
     */
    position: 'static' | 'inherit' | 'absolute' | 'relative' | 'fixed' | 'sticky';
    /**
     * Will not show a dropshadow.
     */
    noShadow?: boolean;
    render(): any;
}
