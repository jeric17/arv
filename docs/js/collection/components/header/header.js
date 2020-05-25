import { Component, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class Header {
    constructor() {
        /**
         * Position of the header
         */
        this.position = 'static';
    }
    render() {
        const cls = Object.assign(Object.assign(Object.assign({}, generateAttrValue(this.color)), generateAttrValue(this.position)), { 'no-shadow': this.noShadow });
        return (h(Host, { class: cls },
            h("slot", null)));
    }
    static get is() { return "arv-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["header.css"]
    }; }
    static get styleUrls() { return {
        "$": ["header.css"]
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
                "text": "Set the Color variant."
            },
            "attribute": "color",
            "reflect": false
        },
        "position": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'static' | 'inherit' | 'absolute' | 'relative' | 'fixed' | 'sticky'",
                "resolved": "\"absolute\" | \"fixed\" | \"inherit\" | \"relative\" | \"static\" | \"sticky\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Position of the header"
            },
            "attribute": "position",
            "reflect": false,
            "defaultValue": "'static'"
        },
        "noShadow": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Will not show a dropshadow."
            },
            "attribute": "no-shadow",
            "reflect": false
        }
    }; }
}
