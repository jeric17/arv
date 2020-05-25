import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Dynamically added component to display a dialog component
 * on top of the page.
 * slot - content of the dialog component
 */
export declare class Virtual {
    /**
     * Dialog title shown at the header part.
     */
    dialogTitle?: string;
    /**
     * Disables background click to close.
     */
    disableBgClose: boolean;
    /**
     * Scrollable dialog box. For dialog boxes that
     * exceeds the screen.
     */
    scrollable?: boolean;
    /**
     * Trigger close handler.
     */
    arvVirtualClose: EventEmitter;
    render(): any;
}
