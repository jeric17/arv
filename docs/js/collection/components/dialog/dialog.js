import { Component, Event, Element, Prop, Watch, h } from '@stencil/core';
export class Dialog {
    constructor() {
        /**
         * Disables background click to close.
         */
        this.disableBgClose = false;
    }
    isOpenChanged(value) {
        if (value) {
            this.open();
        }
    }
    componentWillLoad() {
        this.dialogId = Math.ceil(Math.random() * 1000000000);
    }
    componentDidLoad() {
        if (this.isOpen) {
            this.open();
        }
    }
    /**
     * Handle close
     */
    close() {
        this.isOpen = false;
        this.arvDialogClose.emit();
    }
    render() {
        return (h("slot", null));
    }
    /**
     * Will append the dialog content to document and
     * add event listener to virtual component.
     */
    open() {
        const el = this.el;
        const arvVirtual = document.createElement('arv-virtual');
        const elChildren = Array.from(this.el.children);
        /**
         * Apply dialog attributes to arv-virtual component.
         */
        arvVirtual.setAttribute('dialog-title', this.dialogTitle || '');
        arvVirtual.setAttribute('disable-bg-close', String(this.disableBgClose));
        arvVirtual.setAttribute('scrollable', String(this.scrollable));
        arvVirtual.setAttribute('dialog-id', String(this.dialogId));
        /**
         * Return the elements back to the arv-dialog element.
         */
        arvVirtual.addEventListener('arvVirtualClose', () => {
            el.setAttribute('is-open', 'false');
            elChildren.forEach(node => {
                el.appendChild(node);
            });
            document.body.removeChild(arvVirtual);
        });
        /**
         * Transfer children to arv-virtual component.
         */
        elChildren.forEach(node => {
            arvVirtual.appendChild(node);
        });
        /**
         * Add the arv-virtual component to document body.
         */
        document.body.appendChild(arvVirtual);
    }
    static get is() { return "arv-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dialog.css"]
    }; }
    static get styleUrls() { return {
        "$": ["dialog.css"]
    }; }
    static get properties() { return {
        "dialogTitle": {
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
                "text": "Dialog title shown at the header part."
            },
            "attribute": "dialog-title",
            "reflect": false
        },
        "disableBgClose": {
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
                "text": "Disables background click to close."
            },
            "attribute": "disable-bg-close",
            "reflect": false,
            "defaultValue": "false"
        },
        "isOpen": {
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
                "text": "Will show the dialog."
            },
            "attribute": "is-open",
            "reflect": false
        },
        "scrollable": {
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
                "text": "Scrollable dialog box. For dialog boxes that\nexceeds the screen."
            },
            "attribute": "scrollable",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "arvDialogClose",
            "name": "arvDialogClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Listen to this event to handle close"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "isOpen",
            "methodName": "isOpenChanged"
        }]; }
}
