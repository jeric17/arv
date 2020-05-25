import { Component, Element, State, Prop, Host, Method, h } from '@stencil/core';
export class Snackbar {
    constructor() {
        /**
         * Flag to let the virtual snackbar to update
         * if it is already opened.
         */
        this.counter = 0;
        /**
         * If the snackbar is open.
         */
        this.isOPen = false;
        /**
         * Will not render the snackbar's close button.
         */
        this.hideClose = false;
        /**
         * Position of the snack bar in horizontal axis.
         */
        this.xPosition = 'center';
        /**
         * Position of the snack bar in vertical axis.
         */
        this.yPosition = 'top';
    }
    /**
     * Opens up a snackbar.
     */
    async open() {
        this.initOpen();
    }
    initOpen() {
        const el = this.el;
        /**
         * If the snackbar is arealy opened. Update the counter attribute
         * to notify the virtual snackbar and let it handle
         * updating the duration.
         */
        if (this.isOPen) {
            const virtual = document.body.querySelector('arv-virtual-snackbar');
            virtual.setAttribute('counter', String(this.counter));
            this.counter++;
            return this.el;
        }
        /**
         * Create element.
         */
        const virtual = document.createElement('arv-virtual-snackbar');
        const elChildren = Array.from(this.el.children);
        /**
         * Apply prop attributes.
         */
        if (this.color) {
            virtual.setAttribute('color', String(this.color));
        }
        virtual.setAttribute('duration', String(this.duration));
        virtual.setAttribute('message', String(this.message || ''));
        virtual.setAttribute('counter', String(this.counter));
        virtual.setAttribute('x-position', this.xPosition);
        virtual.setAttribute('y-position', this.yPosition);
        if (this.icon) {
            virtual.setAttribute('icon', this.icon);
        }
        if (this.hideClose) {
            virtual.setAttribute('hide-close', 'true');
        }
        /**
         * Listen to close event.
         */
        virtual.addEventListener('arvVirtualSnackbarClose', () => {
            elChildren.forEach(node => {
                el.appendChild(node);
            });
            document.body.removeChild(virtual);
            this.isOPen = false;
        });
        /**
         * Transfer children to arv-virtual component.
         */
        elChildren.forEach(node => {
            virtual.appendChild(node);
        });
        document.body.appendChild(virtual);
        this.counter++;
        this.isOPen = true;
        /**
         * Just return the host element.
         */
        return this.el;
    }
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "arv-snackbar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["snackbar.css"]
    }; }
    static get styleUrls() { return {
        "$": ["snackbar.css"]
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
                "text": "Text content of the snackbar."
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
                "text": "How long will the snackbar show."
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
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Will not render the snackbar's close button."
            },
            "attribute": "hide-close",
            "reflect": false,
            "defaultValue": "false"
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
                "text": "An icon on the left side of the snackbar."
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
        }
    }; }
    static get states() { return {
        "isOPen": {}
    }; }
    static get methods() { return {
        "open": {
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
                "text": "Opens up a snackbar.",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
