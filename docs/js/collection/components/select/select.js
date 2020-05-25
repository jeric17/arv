import { Component, Element, Event, State, Prop, Listen, Host, h } from '@stencil/core';
import { generateAttrValue, delay } from '../../utils/helpers';
/**
 * @slot value - custom component to display the value.
 * @slot - menu items
 */
export class Select {
    /**
     * Listens to a arvMenuSelect event from MenuItem
     * component to fire the close function. The
     * value received will be included in
     * arvSelectChange event.
     *
     * @param value - value from MenuItem component
     */
    async onMenuSelect(value) {
        const data = this.valueWithEvent ? value : value.detail;
        await this.close();
        this.arvSelectChange.emit(data);
        if (this.selectChange) {
            this.selectChange(data);
        }
    }
    open() {
        if (this.disabled) {
            return false;
        }
        this.isOpen = true;
        const el = this.el.shadowRoot.querySelector('.items');
        setTimeout(() => {
            // Try block to bypass jest error
            try {
                el.focus();
            }
            catch (e) { }
        }, 100);
    }
    blur() {
        this.close();
    }
    render() {
        const hostCls = Object.assign(Object.assign({ full: this.full, isOpen: this.isOpen }, generateAttrValue(this.color)), { row: false, disabled: this.disabled });
        const styles = {
            flexDirection: this.flexDirection
        };
        const labelStyle = {};
        if (this.labelWidth) {
            Object.assign(labelStyle, {
                width: this.labelWidth,
                minWidth: this.labelWidth
            });
        }
        if (this.flexDirection && this.flexDirection.indexOf('row') > -1) {
            hostCls.row = true;
        }
        return (h(Host, { class: hostCls, style: styles },
            h("label", { style: labelStyle }, this.label),
            h("div", { class: "control" },
                h("div", { onClick: () => this.open(), class: "select" },
                    h("span", { class: "value" }, this.value || this.placeholder),
                    h("slot", { name: "value" }),
                    h("arv-icon", { icon: "keyboard_arrow_down" })),
                h("div", { onBlur: () => this.blur(), tabIndex: -1, class: "items" },
                    h("slot", null)))));
    }
    close() {
        return delay(() => {
            this.isOpen = false;
        }, 300);
    }
    static get is() { return "arv-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["select.css"]
    }; }
    static get styleUrls() { return {
        "$": ["select.css"]
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
                "text": "Disables the element."
            },
            "attribute": "disabled",
            "reflect": false
        },
        "flexDirection": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'row' | 'column' | 'row-reverse' | 'column-reverse' | string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Position of label and select component value."
            },
            "attribute": "flex-direction",
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
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Will occupy the available width space."
            },
            "attribute": "full",
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
                "text": "Label of the select component."
            },
            "attribute": "label",
            "reflect": false
        },
        "labelWidth": {
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
                "text": "Sets the min-width and width of the label."
            },
            "attribute": "label-width",
            "reflect": false
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "selectChange": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(data: any) => void",
                "resolved": "(data: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Callback function triggered on menu select."
            }
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
                "text": "Value to display in the select component."
            },
            "attribute": "value",
            "reflect": false
        },
        "valueWithEvent": {
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
                "text": "The value on selectChange will also return the event object."
            },
            "attribute": "value-with-event",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isOpen": {}
    }; }
    static get events() { return [{
            "method": "arvSelectChange",
            "name": "arvSelectChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event fired if the menu item is clicked."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "arvMenuSelect",
            "method": "onMenuSelect",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
