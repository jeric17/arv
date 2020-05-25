import { Component, h, Element, Event, Prop } from '@stencil/core';
export class MultipleInput {
    constructor() {
        this.values = [];
    }
    triggerUpdate(data) {
        if (this.update && typeof this.update === 'function') {
            this.update(data);
        }
        this.arvUpdate.emit(data);
    }
    change(index, event) {
        event.index = index;
        if (this.inputChange && typeof this.inputChange === 'function') {
            this.inputChange(event);
        }
        this.arvInputChange.emit(event);
        const values = [...this.values];
        values[index] = event.target.value;
        this.triggerUpdate(values);
    }
    enter(index, event) {
        event.index = index;
        if (this.inputEnter && typeof this.inputEnter === 'function') {
            this.inputEnter(event);
        }
        this.arvInputEnter.emit(event);
    }
    addItem(event) {
        if (this.add && typeof this.add === 'function') {
            this.add(event);
        }
        this.arvAdd.emit(event);
        this.triggerUpdate(this.values.concat([event.target.value]));
        const addInput = this.el.shadowRoot.querySelector('.addInput');
        addInput.clear();
    }
    removeItem(index) {
        if (this.removeValue && typeof this.removeValue === 'function') {
            this.removeValue(index);
        }
        this.arvRemove.emit(index);
        const values = [...this.values];
        values.splice(index, 1);
        this.triggerUpdate(values);
    }
    render() {
        return (h("arv-flex", { layout: "column" },
            this.values.map((value, index) => (h("arv-flex", { class: "item" },
                h("arv-input", { disabled: this.disabled, value: value }),
                h("arv-divider", null),
                h("arv-button", { buttonClick: this.removeItem.bind(this, index), variant: "flat-icon", icon: "close" })))),
            h("arv-form-control", null,
                h("arv-input", { class: "addInput", placeholder: this.placeholder, disabled: this.disabled }))));
    }
    static get is() { return "arv-multiple-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["multiple-input.css"]
    }; }
    static get styleUrls() { return {
        "$": ["multiple-input.css"]
    }; }
    static get properties() { return {
        "add": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(e: any) => void",
                "resolved": "(e: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "inputChange": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(e: any) => void",
                "resolved": "(e: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "inputEnter": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(e: any) => void",
                "resolved": "(e: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "removeValue": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(e: any) => void",
                "resolved": "(e: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "update": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(e: any) => void",
                "resolved": "(e: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
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
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false
        },
        "values": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "string[]",
                "resolved": "string[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        },
        "placeholder": {
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
            "attribute": "placeholder",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "arvAdd",
            "name": "arvAdd",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "arvUpdate",
            "name": "arvUpdate",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "arvInputChange",
            "name": "arvInputChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "arvInputEnter",
            "name": "arvInputEnter",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "arvRemove",
            "name": "arvRemove",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
