import { Component, Prop, Host, h } from '@stencil/core';
export class Flex {
    render() {
        const cls = {
            expanded: this.expanded,
        };
        const styles = Object.assign({ 'flex-direction': this.direction, 'justify-content': this.justify, 'align-items': this.alignItems, 'flex-wrap': this.wrap, 'flex': this.flex }, this.styles);
        return (h(Host, { class: cls, style: styles },
            h("slot", null)));
    }
    static get is() { return "arv-flex"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["flex.css"]
    }; }
    static get styleUrls() { return {
        "$": ["flex.css"]
    }; }
    static get properties() { return {
        "alignItems": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'",
                "resolved": "\"baseline\" | \"center\" | \"flex-end\" | \"flex-start\" | \"stretch\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "align-items",
            "reflect": false
        },
        "direction": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'row' | 'column' | 'row-reverse' | 'column-reverse'",
                "resolved": "\"column\" | \"column-reverse\" | \"row\" | \"row-reverse\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "direction",
            "reflect": false
        },
        "flex": {
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
            "attribute": "flex",
            "reflect": false
        },
        "justify": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end' | string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "justify",
            "reflect": false
        },
        "styles": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "{ [key: string]: string }",
                "resolved": "{ [key: string]: string; }",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "wrap": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'wrap' | 'no-wrap' | 'wrap-reverse'",
                "resolved": "\"no-wrap\" | \"wrap\" | \"wrap-reverse\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "wrap",
            "reflect": false
        },
        "expanded": {
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
            "attribute": "expanded",
            "reflect": false
        },
        "layout": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Deprecated props."
            },
            "attribute": "layout",
            "reflect": false
        },
        "padded": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "padded",
            "reflect": false
        },
        "items": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "items",
            "reflect": false
        },
        "full": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "full",
            "reflect": false
        },
        "fullHeight": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "full-height",
            "reflect": false
        }
    }; }
}
