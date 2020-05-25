import { EventEmitter } from '../../stencil-public-runtime';
import { Color, Size, FlexDirection } from '../../interface';
export declare class Checkbox {
    /**
     * Color variant to set.
     */
    color?: Color;
    /**
     * Disables the input element.
     */
    disabled?: boolean;
    /**
     * Checked flag for the input element.
     */
    checked?: boolean;
    /**
     * flex direction of the label and the input.
     */
    flexDirection: FlexDirection;
    /**
     * Will show a indeterminate state.
     */
    indeterminate?: boolean;
    /**
     * Label of the check box
     */
    label: string;
    /**
     * Size variant to use.
     */
    size: Size;
    /**
     * Input value of the checkbox
     */
    value?: string;
    /**
     * Emitted if checked prop has changed.
     */
    arvChange: EventEmitter<boolean>;
    change: () => boolean;
    render(): any;
}
