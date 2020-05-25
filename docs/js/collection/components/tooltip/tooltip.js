import { Component, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class Tooltip {
    constructor() {
        /**
         * Tooltip position
         */
        this.position = 'top';
    }
    render() {
        const cls = Object.assign({ [this.position]: true }, generateAttrValue(this.color));
        return (h(Host, { class: cls },
            h("span", { class: "tooltip-message" },
                this.message,
                h("slot", { name: "tooltip" })),
            h("slot", null)));
    }
    static get is() { return "arv-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tooltip.css"]
    }; }
    static get styleUrls() { return {
        "$": ["tooltip.css"]
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
            "reflect": false
        },
        "message": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Tooltip message."
            },
            "attribute": "message",
            "reflect": false
        },
        "position": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'top' | 'bottom' | 'right' | 'left'",
                "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Tooltip position"
            },
            "attribute": "position",
            "reflect": false,
            "defaultValue": "'top'"
        }
    }; }
}
