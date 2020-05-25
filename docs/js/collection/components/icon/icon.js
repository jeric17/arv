import { Component, h, Prop } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class Icon {
    render() {
        const rootCls = Object.assign(Object.assign({ 'material-icons': true }, generateAttrValue(this.color)), generateAttrValue(this.size));
        return (h("span", { style: this.styles, class: rootCls }, this.icon));
    }
    static get is() { return "arv-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["icon.css"]
    }; }
    static get styleUrls() { return {
        "$": ["icon.css"]
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
                "text": "Size variant to use."
            },
            "attribute": "size",
            "reflect": false
        },
        "icon": {
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
                "text": "Name of the icon to use"
            },
            "attribute": "icon",
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
                "text": "Css styles to extend the component's ui"
            }
        },
        "withButtonIcon": {
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
                "text": "Deprecated props."
            },
            "attribute": "with-button-icon",
            "reflect": false
        },
        "noMargin": {
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
            "attribute": "no-margin",
            "reflect": false
        }
    }; }
}
