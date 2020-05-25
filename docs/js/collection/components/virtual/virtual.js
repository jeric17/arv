import { Component, Prop, Event, Host, h } from '@stencil/core';
/**
 * Dynamically added component to display a dialog component
 * on top of the page.
 * slot - content of the dialog component
 */
export class Virtual {
    render() {
        const cls = {
            scrollable: this.scrollable
        };
        return (h(Host, { class: cls },
            h("div", { class: "wrapper" },
                h("div", { onClick: () => {
                        if (!this.disableBgClose) {
                            this.arvVirtualClose.emit();
                        }
                    }, class: "backdrop" }),
                h("div", { class: "content" },
                    h("div", { class: "header" },
                        this.dialogTitle && (h("h1", { class: "title" }, this.dialogTitle)),
                        h("slot", { name: "header" }),
                        h("arv-button", { class: "close-btn", "is-icon": true, onClick: () => {
                                this.arvVirtualClose.emit();
                            } },
                            h("arv-icon", { icon: "clear" }))),
                    h("div", { class: "inner" },
                        h("slot", null))))));
    }
    static get is() { return "arv-virtual"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["virtual.css"]
    }; }
    static get styleUrls() { return {
        "$": ["virtual.css"]
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
            "method": "arvVirtualClose",
            "name": "arvVirtualClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Trigger close handler."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
