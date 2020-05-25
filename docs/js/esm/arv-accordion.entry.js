import { r as registerInstance, h, H as Host, g as getElement } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';

const accordionCss = ":host{--title-bg:var(--default-bg);--title-bg-hover:var(--default-highlight);--title-color:var(--font-color);background-color:var(--default-bg);border-radius:var(--radius);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;width:100%}:host(.primary){--title-bg:var(--primary-color);--title-bg-hover:var(--primary-highlight);--title-color:var(--primary-text-color)}:host(.secondary){--title-bg:var(--secondary-color);--title-bg-hover:var(--secondary-highlight);--title-color:var(--secondary-text-color)}:host(.success){--title-bg:var(--success-color);--title-bg-hover:var(--success-highlight);--title-color:var(--success-text-color)}:host(.warning){--title-bg:var(--warning-color);--title-bg-hover:var(--warning-highlight);--title-color:var(--warning-text-color)}:host(.danger){--title-bg:var(--danger-color);--title-bg-hover:var(--danger-highlight);--title-color:var(--danger-text-color)}";

const Accordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Listens for the event when accordion item is clicked.
     *
     * @param event.detail index number of the accordion item.
     */
    arvToggleAccordionHandler(event) {
        const { detail: activeIndex } = event;
        Array.from(this.el.children).forEach((item, index) => {
            if (activeIndex === index) {
                return false;
            }
            item.setAttribute('active', 'false');
        });
    }
    componentDidLoad() {
        /**
         * Adds item-index  attribute to
         * each child element.
         */
        Array.from(this.el.children).forEach((item, index) => {
            item.setAttribute('item-index', String(index));
        });
    }
    render() {
        const cls = Object.assign({}, generateAttrValue(this.color));
        return (h(Host, { class: cls }, h("slot", null)));
    }
    get el() { return getElement(this); }
};
Accordion.style = accordionCss;

export { Accordion as arv_accordion };
