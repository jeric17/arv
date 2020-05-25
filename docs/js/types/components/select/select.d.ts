import { EventEmitter } from '../../stencil-public-runtime';
import { Color } from '../../interface';
/**
 * @slot value - custom component to display the value.
 * @slot - menu items
 */
export declare class Select {
    /**
     * Reference to the host element.
     */
    el: HTMLElement;
    /**
     * Shows the select menu items
     */
    isOpen: boolean;
    /**
     * Color variant to use.
     */
    color: Color;
    /**
     * Disables the element.
     */
    disabled?: boolean;
    /**
     * Position of label and select component value.
     */
    flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse' | string;
    /**
     * Will occupy the available width space.
     */
    full: boolean;
    /**
     * Label of the select component.
     */
    label?: string;
    /**
     * Sets the min-width and width of the label.
     */
    labelWidth?: string;
    placeholder?: string;
    /**
     * Callback function triggered on menu select.
     */
    selectChange: (data: any) => void;
    /**
     * Value to display in the select component.
     */
    value?: string;
    /**
     * The value on selectChange will also return the event object.
     */
    valueWithEvent?: boolean;
    /**
     * Event fired if the menu item is clicked.
     */
    arvSelectChange: EventEmitter<any>;
    /**
     * Listens to a arvMenuSelect event from MenuItem
     * component to fire the close function. The
     * value received will be included in
     * arvSelectChange event.
     *
     * @param value - value from MenuItem component
     */
    onMenuSelect(value: any): Promise<void>;
    open(): boolean;
    blur(): void;
    render(): any;
    private close;
}
