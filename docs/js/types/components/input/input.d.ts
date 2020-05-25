import { EventEmitter } from '../../stencil-public-runtime';
import { Color, Size } from '../../interface';
export declare class Input {
    /**
     * Reference to the input element.
     */
    private inputEl?;
    /**
     * Sets autocomplete for the input.
     */
    autocomplete: 'on' | 'off';
    /**
     * Activates autocorrect for the input.
     */
    autocorrect: 'on' | 'off';
    /**
     * Sets autofocus once the input loads.
     */
    autofocus: boolean;
    /**
     * Sets the color variant to use.
     */
    color: Color;
    /**
     * Disableds the input element.
     */
    disabled?: boolean;
    /**
     * Position of label and select component value.
     */
    flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse' | string;
    /**
     * Sets a full width input
     */
    full?: boolean;
    /**
     * Material icon to use.
     */
    icon?: string;
    /**
     * Callback prop function triggered on value change.
     */
    inputChange: (value: any) => void;
    /**
     * Label of the input.
     */
    label?: string;
    /**
      * Sets the min-width and width of the label.
      */
    labelWidth?: string;
    /**
     * max value for a ranged type
     */
    max?: string;
    /**
     * Maximum character length
     */
    maxlength?: number;
    /**
     * min value for a ranged type
     */
    min?: string;
    /**
     * Minimum character length
     */
    minlength?: number;
    /**
     * Name of the input element.
     */
    name?: string;
    /**
     * Placeholder text for the input element.
     */
    placeholder?: string;
    /**
     * Number of rows for the textarea. Will automatically
     * render a textarea element.
     */
    rows: number;
    /**
     * Sets the size variant to use.
     */
    size: Size;
    /**
     * type of input element.
     */
    type: string;
    /**
     * Value of the input element.
     */
    value?: string | number | null;
    valueChanged(): void;
    /**
     * Blur event from input
     */
    arvBlur: EventEmitter<any>;
    /**
     * Emitted when this.value changes
     */
    arvChange: EventEmitter<any>;
    /**
     * Emitted when input has focus
     */
    arvFocus: EventEmitter<any>;
    /**
     * keydown event emitted from input element.
     */
    arvKeydown: EventEmitter<any>;
    /**
     * Public api that returns the input element.
     */
    getInputElement(): Promise<any>;
    inputFocus(): Promise<void>;
    input: () => void;
    blur: (event: any) => void;
    focus: (event: any) => void;
    keydown: (event: any) => void;
    render(): any;
}
