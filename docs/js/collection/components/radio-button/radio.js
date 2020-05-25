import { Component, Event, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class Radio {
    constructor() {
        this.change = () => {
            if (this.disabled) {
                return false;
            }
            this.checked = !this.checked;
            this.arvChange.emit(this.checked);
        };
    }
    render() {
        const hostCls = Object.assign(Object.assign(Object.assign({}, generateAttrValue(this.size)), generateAttrValue(this.color)), { disabled: this.disabled, checked: this.checked });
        let hostStyles = {};
        if (this.flexDirection) {
            hostStyles = {
                flexDirection: this.flexDirection,
            };
            hostCls[`flex-${this.flexDirection}`] = true;
        }
        return (h(Host, { class: hostCls, style: hostStyles, onClick: this.change },
            h("label", { class: "label" }, this.label),
            h("div", { class: "control" },
                h("div", { class: "indicator" })),
            h("input", { disabled: this.disabled, type: "radio", value: this.value, checked: this.checked })));
    }
    static get is() { return "arv-radio"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["radio.css"]
    }; }
    static get styleUrls() { return {
        "$": ["radio.css"]
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Disables the input element."
            },
            "attribute": "disabled",
            "reflect": false
        },
        "checked": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Checked flag for the input element."
            },
            "attribute": "checked",
            "reflect": false
        },
        "flexDirection": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "FlexDirection",
                "resolved": "\"column\" | \"column-reverse\" | \"row\" | \"row-reverse\"",
                "references": {
                    "FlexDirection": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "flex direction of the label and the input."
            },
            "attribute": "flex-direction",
            "reflect": false
        },
        "indeterminate": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Will show a indeterminate state."
            },
            "attribute": "indeterminate",
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
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Label of the radio input."
            },
            "attribute": "label",
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
        "value": {
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
                "text": "Input value of the radio input."
            },
            "attribute": "value",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "arvChange",
            "name": "arvChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted if checked prop has changed."
            },
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            }
        }]; }
}
