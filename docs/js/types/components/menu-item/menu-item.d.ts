import { EventEmitter } from '../../stencil-public-runtime';
export declare class MenuItem {
    /**
     * Value to pass in the arvMenuSelect event.
     */
    value: any;
    hideValue?: boolean;
    /**
     * Event emitted when clicked.
     */
    arvMenuSelect: EventEmitter<any>;
    render(): any;
}
