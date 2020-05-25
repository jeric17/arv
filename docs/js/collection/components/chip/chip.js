import { Component, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class Chip {
    render() {
        const cls = Object.assign(Object.assign({}, generateAttrValue(this.color)), generateAttrValue(this.size));
        return (h(Host, { class: cls },
            h("slot", null)));
    }
    static get is() { return "arv-chip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["chip.css"]
    }; }
    static get styleUrls() { return {
        "$": ["chip.css"]
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
                "text": "Color variant to set."
            },
            "attribute": "color",
            "reflect": false
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Size",
                "resolved": "string",
                "references": {
                    "Size": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Size variant to set."
            },
            "attribute": "size",
            "reflect": false
        }
    }; }
}
