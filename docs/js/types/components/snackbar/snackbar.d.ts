import { Color } from '../../interface';
export declare class Snackbar {
    /**
     * Flag to let the virtual snackbar to update
     * if it is already opened.
     */
    counter: number;
    /**
     * Reference to the host element.
     */
    el: HTMLElement;
    /**
     * If the snackbar is open.
     */
    isOPen: boolean;
    /**
     * Color variant to use.
     */
    color?: Color;
    /**
     * Text content of the snackbar.
     */
    message?: string;
    /**
     * How long will the snackbar show.
     */
    duration: number;
    /**
     * Will not render the snackbar's close button.
     */
    hideClose: boolean;
    /**
     * An icon on the left side of the snackbar.
     */
    icon?: string;
    /**
     * Position of the snack bar in horizontal axis.
     */
    xPosition: 'left' | 'right' | 'center';
    /**
     * Position of the snack bar in vertical axis.
     */
    yPosition: 'top' | 'bottom' | 'center';
    /**
     * Opens up a snackbar.
     */
    open(): Promise<void>;
    private initOpen;
    render(): any;
}
