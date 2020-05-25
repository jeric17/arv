import { Component, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class Switch {
    constructor() {
        this.click = () => {
            if (this.disabled) {
                return false;
            }
            this.value = !this.value;
        };
    }
    render() {
        const classNames = Object.assign(Object.assign({ root: true, active: this.value }, generateAttrValue(this.color)), { disabled: this.disabled });
        const cls = {
            col: this.flexDirection && this.flexDirection.indexOf('column') > -1
        };
        const styles = (() => {
            if (this.flexDirection) {
                return {
                    flexDirection: this.flexDirection
                };
            }
            return {};
        })();
        return (h(Host, { style: styles, class: cls },
            this.label && (h("span", { class: "label" }, this.label)),
            h("slot", { name: "label" }),
            h("div", { onClick: this.click, class: classNames },
                h("div", { class: "bar" }),
                h("div", { class: "circle" }))));
    }
    static get is() { return "arv-switch"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["switch.css"]
    }; }
    static get styleUrls() { return {
        "$": ["switch.css"]
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
        "disabled": {
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
                "text": "Disables the element."
            },
            "attribute": "disabled",
            "reflect": false
        },
        "flexDirection": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'row' | 'column' | 'column-reverse' | 'row-reverse'",
                "resolved": "\"column\" | \"column-reverse\" | \"row\" | \"row-reverse\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Layout direction of label and switch element."
            },
            "attribute": "flex-direction",
            "reflect": false
        },
        "label": {
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
                "text": "Label of the element."
            },
            "attribute": "label",
            "reflect": false
        },
        "value": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "value",
            "reflect": false
        }
    }; }
}
