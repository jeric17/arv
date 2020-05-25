import { Component, Prop, Element, Listen, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class Accordion {
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
        return (h(Host, { class: cls },
            h("slot", null)));
    }
    static get is() { return "arv-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["accordion.css"]
    }; }
    static get styleUrls() { return {
        "$": ["accordion.css"]
    }; }
    static get properties() { return {
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Color",
                "resolved": "string",
                "references": {
                    "Color": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Color variant to use."
            },
            "attribute": "color",
            "reflect": true
        }
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "arvToggleAccordion",
            "method": "arvToggleAccordionHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
