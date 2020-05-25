import { Component, Prop, Host, h } from '@stencil/core';
export class Badge {
    render() {
        const cls = {
            'arv-invisible': this.invisible
        };
        const val = (!this.disableComma && this.value) ?
            Number(this.value).toLocaleString() :
            this.value;
        return (h(Host, { class: cls },
            h("div", { class: "value" }, val),
            h("slot", null)));
    }
    static get is() { return "arv-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["badge.css"]
    }; }
    static get styleUrls() { return {
        "$": ["badge.css"]
    }; }
    static get properties() { return {
        "invisible": {
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
                "text": "Will hide the badge."
            },
            "attribute": "invisible",
            "reflect": false
        },
        "value": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "number | string",
                "resolved": "number | string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Value of the badge to show."
            },
            "attribute": "value",
            "reflect": false
        },
        "disableComma": {
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
                "text": "Value will not render commas."
            },
            "attribute": "disable-comma",
            "reflect": false
        }
    }; }
}
