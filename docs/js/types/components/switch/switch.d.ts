import { Color } from '../../interface';
export declare class Switch {
    /**
     * Color variant to set.
     */
    color: Color;
    /**
     * Disables the element.
     */
    disabled: boolean;
    /**
     * Layout direction of label and switch element.
     */
    flexDirection?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
    /**
     * Label of the element.
     */
    label?: string;
    value: boolean;
    click: () => boolean;
    render(): any;
}
