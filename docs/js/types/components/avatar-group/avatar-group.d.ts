import { EventEmitter } from '../../stencil-public-runtime';
import { Size } from '../../interface';
export declare class AvatarGroup {
    /**
     * Reference to host element.
     */
    el: HTMLElement;
    /**
     * Excess avatars that is not shown due to the max attribute.
     */
    extra: number;
    /**
     * Maximun number of avatars to show.
     */
    max?: number;
    /**
     * Updates children styling once max value has changed.
     */
    maxHandler(): void;
    /**
     * Size variant to set.
     */
    size: Size;
    /**
     * Emitted when .more is clicked.
     */
    arvMore: EventEmitter;
    /**
     * Adds style attributes, dislay and margin-left, to avatar elements.
     */
    componentDidLoad(): void;
    private init;
    render(): any;
}
