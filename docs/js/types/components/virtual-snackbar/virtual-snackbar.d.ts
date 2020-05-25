import { EventEmitter } from '../../stencil-public-runtime';
import { Color } from '../../interface';
export declare class VirtualSnackbar {
    durationTimeout: any;
    el: HTMLElement;
    color?: Color;
    message?: string;
    duration: number;
    hideClose?: boolean;
    icon?: string;
    /**
     * Position of the snack bar in horizontal axis.
     */
    xPosition: 'left' | 'right' | 'center';
    /**
     * Position of the snack bar in vertical axis.
     */
    yPosition: 'top' | 'bottom' | 'center';
    counter: number;
    durationCheck(): Promise<void>;
    arvVirtualSnackbarClose: EventEmitter;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    init(): boolean;
    close: () => void;
    closeBtnClick: () => void;
    render(): any;
}
