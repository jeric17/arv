import { EventEmitter } from '../../stencil-public-runtime';
export declare class Dialog {
    dialogId?: number;
    /**
     * Reference to component element.
     */
    el: HTMLElement;
    /**
     * Dialog title shown at the header part.
     */
    dialogTitle?: string;
    /**
     * Disables background click to close.
     */
    disableBgClose: boolean;
    /**
     * Will show the dialog.
     */
    isOpen: boolean;
    /**
   * Scrollable dialog box. For dialog boxes that
   * exceeds the screen.
   */
    scrollable?: boolean;
    isOpenChanged(value: boolean): void;
    /**
     * Listen to this event to handle close
     */
    arvDialogClose: EventEmitter;
    componentWillLoad(): void;
    componentDidLoad(): void;
    /**
     * Handle close
     */
    close(): void;
    render(): any;
    /**
     * Will append the dialog content to document and
     * add event listener to virtual component.
     */
    private open;
}
