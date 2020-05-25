import { Component, Event, Method, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
import { Watch } from '@stencil/core';
export class Input {
    constructor() {
        /**
         * Sets autocomplete for the input.
         */
        this.autocomplete = 'off';
        /**
         * Activates autocorrect for the input.
         */
        this.autocorrect = 'off';
        /**
         * Sets autofocus once the input loads.
         */
        this.autofocus = false;
        /**
         * type of input element.
         */
        this.type = 'text';
        /**
         * Value of the input element.
         */
        this.value = '';
        this.input = () => {
            this.value = this.inputEl.value;
        };
        this.blur = event => {
            this.arvBlur.emit(event);
        };
        this.focus = event => {
            this.arvFocus.emit(event);
        };
        this.keydown = event => {
            this.arvKeydown.emit(event);
        };
    }
    valueChanged() {
        this.arvChange.emit(this.value);
        if (this.inputChange) {
            this.inputChange(this.value);
        }
    }
    /**
     * Public api that returns the input element.
     */
    async getInputElement() {
        return this.inputEl;
    }
    async inputFocus() {
        if (this.inputEl) {
            this.inputEl.focus();
        }
    }
    render() {
        const cls = Object.assign(Object.assign(Object.assign({}, generateAttrValue(this.color)), generateAttrValue(this.size)), { hasIcon: Boolean(this.icon), row: this.flexDirection && this.flexDirection.indexOf('row') > -1, flex: this.flexDirection === 'column-reverse', full: this.full });
        const labelStyle = {};
        if (this.labelWidth) {
            Object.assign(labelStyle, {
                width: this.labelWidth,
                minWidth: this.labelWidth
            });
        }
        const rootStyles = {};
        if (this.flexDirection) {
            rootStyles.flexDirection = this.flexDirection;
        }
        const props = {
            id: 'input',
            autoComplete: this.autocomplete,
            autoCorrect: this.autocorrect,
            autoFocus: this.autofocus,
            disabled: this.disabled,
            min: this.min,
            max: this.max,
            minLength: this.minlength,
            maxLength: this.maxlength,
            name: this.name,
            placeholder: this.placeholder,
            value: this.value,
            onInput: this.input,
            onBlur: this.blur,
            onFocus: this.focus,
            onKeyDown: this.keydown,
        };
        return (h(Host, { style: rootStyles, class: cls },
            h("label", { style: labelStyle, htmlFor: "input", class: "label" }, this.label),
            h("div", { class: "control" },
                this.icon && (h("arv-icon", { icon: this.icon })),
                !Boolean(this.rows) && (h("input", Object.assign({ type: this.type, ref: input => this.inputEl = input }, props))),
                Boolean(this.rows) && (h("textarea", Object.assign({ ref: input => this.inputEl = input }, props))))));
    }
    static get is() { return "arv-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["input.css"]
    }; }
    static get styleUrls() { return {
        "$": ["input.css"]
    }; }
    static get properties() { return {
        "autocomplete": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'on' | 'off'",
                "resolved": "\"off\" | \"on\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets autocomplete for the input."
            },
            "attribute": "autocomplete",
            "reflect": false,
            "defaultValue": "'off'"
        },
        "autocorrect": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'on' | 'off'",
                "resolved": "\"off\" | \"on\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Activates autocorrect for the input."
            },
            "attribute": "autocorrect",
            "reflect": false,
            "defaultValue": "'off'"
        },
        "autofocus": {
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
                "text": "Sets autofocus once the input loads."
            },
            "attribute": "autofocus",
            "reflect": false,
            "defaultValue": "false"
        },
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
                "text": "Sets the color variant to use."
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
                "text": "Disableds the input element."
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Sets a full width input"
            },
            "attribute": "full",
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
                "text": "Material icon to use."
            },
            "attribute": "icon",
            "reflect": false
        },
        "inputChange": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(value: any) => void",
                "resolved": "(value: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Callback prop function triggered on value change."
            }
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
                "text": "Label of the input."
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
        "max": {
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
                "text": "max value for a ranged type"
            },
            "attribute": "max",
            "reflect": false
        },
        "maxlength": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Maximum character length"
            },
            "attribute": "maxlength",
            "reflect": false
        },
        "min": {
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
                "text": "min value for a ranged type"
            },
            "attribute": "min",
            "reflect": false
        },
        "minlength": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Minimum character length"
            },
            "attribute": "minlength",
            "reflect": false
        },
        "name": {
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
                "text": "Name of the input element."
            },
            "attribute": "name",
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
                "text": "Placeholder text for the input element."
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "rows": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Number of rows for the textarea. Will automatically\nrender a textarea element."
            },
            "attribute": "rows",
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
                "text": "Sets the size variant to use."
            },
            "attribute": "size",
            "reflect": false
        },
        "type": {
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
                "text": "type of input element."
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'text'"
        },
        "value": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "string | number | null",
                "resolved": "number | string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Value of the input element."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get events() { return [{
            "method": "arvBlur",
            "name": "arvBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Blur event from input"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "arvChange",
            "name": "arvChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when this.value changes"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "arvFocus",
            "name": "arvFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when input has focus"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "arvKeydown",
            "name": "arvKeydown",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "keydown event emitted from input element."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "getInputElement": {
            "complexType": {
                "signature": "() => Promise<any>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any>"
            },
            "docs": {
                "text": "Public api that returns the input element.",
                "tags": []
            }
        },
        "inputFocus": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "valueChanged"
        }]; }
}
