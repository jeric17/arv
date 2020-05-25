import { Component, h, Prop } from '@stencil/core';
export class Loader {
    constructor() {
        this.color = 'primary';
    }
    render() {
        const rootClassNames = {
            root: true,
            contained: this.contained
        };
        const spinnerClassNames = {
            spinner: true,
            primary: this.color === 'primary',
            secondary: this.color === 'secondary',
            warning: this.color === 'warning',
            error: this.color === 'error',
            success: this.color === 'success',
            xsmall: this.size === 'xsmall',
            small: this.size === 'small',
            large: this.size === 'large'
        };
        return (h("div", { class: rootClassNames },
            h("arv-flex", { layout: "column", justify: "center", items: "center" },
                h("div", { class: spinnerClassNames }),
                h("slot", null))));
    }
    static get is() { return "arv-loader"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["loader.css"]
    }; }
    static get styleUrls() { return {
        "$": ["loader.css"]
    }; }
    static get properties() { return {
        "color": {
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
                "text": ""
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "'primary'"
        },
        "contained": {
            "type": "boolean",
            "mutable": false,
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
            "attribute": "contained",
            "reflect": false
        },
        "size": {
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
                "text": ""
            },
            "attribute": "size",
            "reflect": false
        }
    }; }
}
