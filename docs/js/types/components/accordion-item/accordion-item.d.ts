import { EventEmitter } from '../../stencil-public-runtime';
import { Color } from '../../interface';
export declare class AccordionItem {
    active: boolean;
    color: Color;
    itemIndex: number;
    arvToggleAccordion: EventEmitter<number>;
    toggle: () => void;
    render(): any;
}
