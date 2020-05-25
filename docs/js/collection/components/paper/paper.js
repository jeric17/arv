import { Component, Prop, Host, h } from '@stencil/core';
export class Paper {
    constructor() {
        /**
         * How much shadow to be applied.
         */
        this.shadowLevel = 1;
    }
    render() {
        const cls = {
            'shadow-0': this.shadowLevel === 0,
            'shadow-1': this.shadowLevel === 1,
            'shadow-2': this.shadowLevel === 2,
            outlined: this.outlined,
        };
        return (h(Host, { class: cls },
            h("slot", null)));
    }
    static get is() { return "arv-paper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["paper.css"]
    }; }
    static get styleUrls() { return {
        "$": ["paper.css"]
    }; }
    static get properties() { return {
        "shadowLevel": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "0 | 1 | 2",
                "resolved": "0 | 1 | 2",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "How much shadow to be applied."
            },
            "attribute": "shadow-level",
            "reflect": false,
            "defaultValue": "1"
        },
        "outlined": {
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
                "text": "Border only, no shadows."
            },
            "attribute": "outlined",
            "reflect": false
        }
    }; }
}
