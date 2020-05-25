import { Component, Event, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class AccordionItem {
    constructor() {
        this.active = false;
        this.toggle = () => {
            this.active = !this.active;
            this.arvToggleAccordion.emit(this.itemIndex);
        };
    }
    render() {
        const cls = Object.assign(Object.assign({}, generateAttrValue(this.color)), { active: this.active });
        return (h(Host, { class: cls },
            h("div", { class: "title", onClick: this.toggle },
                h("slot", { name: "title" })),
            h("div", { class: "content" },
                h("slot", null),
                h("arv-divider", null))));
    }
    static get is() { return "arv-accordion-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["accordion-item.css"]
    }; }
    static get styleUrls() { return {
        "$": ["accordion-item.css"]
    }; }
    static get properties() { return {
        "active": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "active",
            "reflect": true,
            "defaultValue": "false"
        },
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
                "text": ""
            },
            "attribute": "color",
            "reflect": false
        },
        "itemIndex": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "item-index",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "arvToggleAccordion",
            "name": "arvToggleAccordion",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            }
        }]; }
}
