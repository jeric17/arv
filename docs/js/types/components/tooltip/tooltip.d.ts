import { Color } from '../../interface';
export declare class Tooltip {
    /**
     * Color variant to use.
     */
    color: Color;
    /**
     * Tooltip message.
     */
    message: string;
    /**
     * Tooltip position
     */
    position: 'top' | 'bottom' | 'right' | 'left';
    render(): any;
}
