import { Color } from '../../interface';
export declare class Accordion {
    el: HTMLElement;
    /**
     * Color variant to use.
     */
    color: Color;
    /**
     * Listens for the event when accordion item is clicked.
     *
     * @param event.detail index number of the accordion item.
     */
    arvToggleAccordionHandler(event: CustomEvent): void;
    componentDidLoad(): void;
    render(): any;
}
