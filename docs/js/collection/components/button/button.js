import { Component, Element, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
/**
 * @slot - Content or middle content of the button.
 * @slot start - Left content of the button.
 * @slot end - Right content of the button.*
 */
export class Button {
    render() {
        const hostCls = {
            full: this.full,
            hasIcon: Boolean(this.icon),
            isLoading: this.loading,
        };
        const rootCls = Object.assign(Object.assign(Object.assign(Object.assign({}, generateAttrValue(this.color)), generateAttrValue(this.size)), generateAttrValue(this.variant)), { boxed: this.boxed, isIcon: this.isIcon });
        const buttonStyle = {};
        if (this.flexDirection) {
            buttonStyle.flexDirection = this.flexDirection;
        }
        return (h(Host, { class: hostCls },
            h("button", { style: this.styles, class: rootCls, disabled: this.disabled },
                h("span", { class: "content", style: buttonStyle },
                    this.loading && (h("arv-progress-circular", { color: this.loadingColor, size: "small" })),
                    this.icon && (h("arv-icon", { icon: this.icon })),
                    h("slot", { name: "start" }),
                    h("div", { class: "buttonText" },
                        h("slot", null)),
                    h("span", { class: "loadingText" }, this.loadingText),
                    h("slot", { name: "end" })))));
    }
    static get is() { return "arv-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Color variant to use."
            },
            "attribute": "color",
            "reflect": false
        },
        "flexDirection": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'row' | 'row-reverse' | 'column' | 'column-reverse'",
                "resolved": "\"column\" | \"column-reverse\" | \"row\" | \"row-reverse\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Flex direction layout of icon and button content."
            },
            "attribute": "flex-direction",
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Material icon to show inside the button."
            },
            "attribute": "icon",
            "reflect": false
        },
        "isIcon": {
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
                "text": "Render as an icon button."
            },
            "attribute": "is-icon",
            "reflect": false
        },
        "loading": {
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
                "text": "Displays a circular progress."
            },
            "attribute": "loading",
            "reflect": false
        },
        "loadingColor": {
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Circular progress color."
            },
            "attribute": "loading-color",
            "reflect": false
        },
        "loadingText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "On loading state will show this string instead."
            },
            "attribute": "loading-text",
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Size variant to use."
            },
            "attribute": "size",
            "reflect": false
        },
        "variant": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'raised' | 'ghost' | string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Button variant to use."
            },
            "attribute": "variant",
            "reflect": false
        },
        "full": {
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
                "text": "Fullwidth button."
            },
            "attribute": "full",
            "reflect": false
        },
        "disabled": {
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
                "text": "Disable the button."
            },
            "attribute": "disabled",
            "reflect": false
        },
        "boxed": {
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
                "text": "Edged corners."
            },
            "attribute": "boxed",
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Css styles to extend the component's ui"
            }
        },
        "textAlign": {
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
                "text": "Deprecated props"
            },
            "attribute": "text-align",
            "reflect": false
        },
        "buttonClick": {
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
            "attribute": "button-click",
            "reflect": false
        },
        "rounded": {
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
            "attribute": "rounded",
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
        }
    }; }
    static get elementRef() { return "el"; }
}
