import { EventEmitter } from '../../stencil-public-runtime';
import { Color } from '../../interface';
export declare class Tabs {
    activeHeader: any;
    /**
     * Reference to host element.
     */
    el: HTMLElement;
    counter: number;
    /**
     * Current active tab index.
     */
    activeIndex: number;
    /**
     * Color variant to set.
     */
    color: Color;
    /**
     * Tab names to appear in the tab header.
     */
    tabNames: string;
    /**
     * Alignment of tab headers.
     */
    tabAlignment: 'right' | 'center' | 'left';
    alignmentChanged(): void;
    /**
     * Emitted on tab header click.
     */
    arvTabClick: EventEmitter<number>;
    /**
     * Adds item-index attribute to children.
     */
    componentDidLoad(): void;
    /**
     * Set the active index and emit event on tab click. Also manage is-active
     * attribute on children.
     */
    tabClick: (index: number) => void;
    borderCls(index: number): {};
    private setActiveHeader;
    render(): any;
}
