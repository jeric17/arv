import { Component, Element, Prop, Event, Watch, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class VirtualSnackbar {
    constructor() {
        this.durationTimeout = null;
        this.color = '';
        /**
         * Position of the snack bar in horizontal axis.
         */
        this.xPosition = 'center';
        /**
         * Position of the snack bar in vertical axis.
         */
        this.yPosition = 'top';
        this.close = () => {
            this.el.classList.add('out');
            setTimeout(() => {
                this.arvVirtualSnackbarClose.emit();
            }, 300);
        };
        this.closeBtnClick = () => {
            clearTimeout(this.durationTimeout);
            this.close();
        };
    }
    async durationCheck() {
        this.init();
    }
    componentDidLoad() {
        this.init();
    }
    disconnectedCallback() {
        clearTimeout(this.durationTimeout);
    }
    init() {
        if (!this.duration) {
            return false;
        }
        clearTimeout(this.durationTimeout);
        this.durationTimeout = setTimeout(() => {
            this.close();
        }, this.duration);
    }
    render() {
        const cls = Object.assign({ top: this.yPosition === 'top', bottom: this.yPosition === 'bottom', left: this.xPosition === 'left', right: this.xPosition === 'right', verticalCenter: this.yPosition === 'center', horizontalCenter: this.xPosition === 'center', hideClose: this.hideClose }, generateAttrValue(this.color));
        return (h(Host, { class: cls },
            h("div", { class: "snackbar" },
                this.icon && (h("arv-icon", { class: "sb-icon", icon: this.icon })),
                h("arv-text", { wrap: "nowrap" }, this.message),
                h("slot", null),
                !this.hideClose && (h("arv-button", { class: "sb-btn", onClick: this.closeBtnClick, color: this.color, icon: "clear", "is-icon": true })))));
    }
    static get is() { return "arv-virtual-snackbar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["virtual-snackbar.css"]
    }; }
    static get styleUrls() { return {
        "$": ["virtual-snackbar.css"]
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
                "text": ""
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "''"
        },
        "message": {
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
            "attribute": "message",
            "reflect": false
        },
        "duration": {
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
                "text": ""
            },
            "attribute": "duration",
            "reflect": false
        },
        "hideClose": {
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
                "text": ""
            },
            "attribute": "hide-close",
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
                "text": ""
            },
            "attribute": "icon",
            "reflect": false
        },
        "xPosition": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'left' | 'right' | 'center'",
                "resolved": "\"center\" | \"left\" | \"right\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Position of the snack bar in horizontal axis."
            },
            "attribute": "x-position",
            "reflect": false,
            "defaultValue": "'center'"
        },
        "yPosition": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'top' | 'bottom' | 'center'",
                "resolved": "\"bottom\" | \"center\" | \"top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Position of the snack bar in vertical axis."
            },
            "attribute": "y-position",
            "reflect": false,
            "defaultValue": "'top'"
        },
        "counter": {
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
                "text": ""
            },
            "attribute": "counter",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "arvVirtualSnackbarClose",
            "name": "arvVirtualSnackbarClose",
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
    static get watchers() { return [{
            "propName": "counter",
            "methodName": "durationCheck"
        }]; }
}
