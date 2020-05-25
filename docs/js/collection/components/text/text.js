import { Component, Element, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class Text {
    render() {
        const cls = Object.assign(Object.assign({}, generateAttrValue(this.color)), { truncate: this.truncate, shadow: this.shadow });
        if (this.truncate && this.el.children.length) {
            const node = this.el.children[0];
            node.style.textOverflow = 'ellipsis';
            node.style.width = '100%';
            node.style.overflow = 'hidden';
        }
        if (this.wrap && this.el.children.length) {
            const node = this.el.children[0];
            node.style.whiteSpace = this.wrap;
        }
        return (h(Host, { class: cls },
            h("slot", null)));
    }
    static get is() { return "arv-text"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["text.css"]
    }; }
    static get styleUrls() { return {
        "$": ["text.css"]
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
        "shadow": {
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
                "text": "Will apply a text shadow."
            },
            "attribute": "shadow",
            "reflect": false
        },
        "truncate": {
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
                "text": "Truncates the text with ellipsis."
            },
            "attribute": "truncate",
            "reflect": false
        },
        "wrap": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'break-spaces' | 'pre' | 'pre-wrap' | 'normal' | 'nowrap' | 'wrap'",
                "resolved": "\"break-spaces\" | \"normal\" | \"nowrap\" | \"pre\" | \"pre-wrap\" | \"wrap\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Whitespace"
            },
            "attribute": "wrap",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
}
