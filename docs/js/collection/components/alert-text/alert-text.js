import { Component, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class AlertText {
    render() {
        const cls = Object.assign({}, generateAttrValue(this.color));
        return (h(Host, { class: cls },
            h("slot", null)));
    }
    static get is() { return "arv-alert-text"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["alert-text.css"]
    }; }
    static get styleUrls() { return {
        "$": ["alert-text.css"]
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
        }
    }; }
}
