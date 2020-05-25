import { Component, h, Element, Listen, Prop, State, Host } from '@stencil/core';
export class Menu {
    constructor() {
        /**
         * timeout delay.
         */
        this.delay = 300;
        /**
         * Reference of menu list to show or hide.
         */
        this.isOpen = false;
        /**
         * top and bottom position of content.
         */
        this.yPosition = 'bottom';
        /**
         * let and right position of content.
         */
        this.xPosition = 'right';
        this.menuTriggerClick = () => {
            this.toggle();
        };
        this.menuListClick = () => {
            setTimeout(() => {
                this.isOpen = false;
            }, this.delay);
        };
    }
    blurHandler() {
        this.isOpen = false;
    }
    toggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            // dismiss jest error
            try {
                this.el.focus();
            }
            catch (e) { }
            const content = this.el.shadowRoot.querySelector('.content');
            if (this.yPosition === 'top') {
                const menutriggerEl = this.el.shadowRoot.querySelector('.menu-trigger');
                content.style.marginBottom = `${menutriggerEl.clientHeight}px`;
            }
            else {
                content.style.marginBottom = '';
            }
        }
    }
    render() {
        const contentCls = {
            content: true,
            top: this.yPosition === 'top',
            bottom: this.yPosition === 'bottom',
            left: this.xPosition === 'left',
            right: this.xPosition === 'right',
            isOpen: this.isOpen
        };
        return (h(Host, { tabIndex: -1 },
            h("div", { class: "menu-trigger", onClick: this.menuTriggerClick },
                h("slot", null)),
            h("div", { class: contentCls },
                h("slot", { name: "content" }),
                h("div", { onClick: this.menuListClick, class: "menu-list" },
                    h("slot", { name: "menu-list" })))));
    }
    static get is() { return "arv-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["menu.css"]
    }; }
    static get styleUrls() { return {
        "$": ["menu.css"]
    }; }
    static get properties() { return {
        "yPosition": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'top' | 'bottom'",
                "resolved": "\"bottom\" | \"top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "top and bottom position of content."
            },
            "attribute": "y-position",
            "reflect": false,
            "defaultValue": "'bottom'"
        },
        "xPosition": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'left' | 'right'",
                "resolved": "\"left\" | \"right\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "let and right position of content."
            },
            "attribute": "x-position",
            "reflect": false,
            "defaultValue": "'right'"
        },
        "disableBgclose": {
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
                "text": "Click outside of the menu will not trigger close."
            },
            "attribute": "disable-bgclose",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isOpen": {}
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "blur",
            "method": "blurHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
