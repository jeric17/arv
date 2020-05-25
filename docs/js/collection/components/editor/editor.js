import { Component, h, Event, Prop, Element, Method } from '@stencil/core';
export class Editor {
    constructor() {
        this.disabledTools = [];
        this.blur = () => {
            this.editorOnBlur.emit();
        };
    }
    async setValue(value) {
        const editorContent = this.el.shadowRoot.querySelector('.editor');
        editorContent.innerHTML = value;
    }
    async getValue() {
        const editorContent = this.el.shadowRoot.querySelector('.editor');
        return editorContent.innerHTML;
    }
    formatBlock(block) {
        document.execCommand('formatBlock', false, block);
    }
    imageGet() {
        if (this.handleImage) {
            const editorContent = this.el.shadowRoot.querySelector('.editor');
            this.handleImage(editorContent);
        }
    }
    getImage() {
        const editorContent = this.el.shadowRoot.querySelector('.editor');
        const file = this.el.shadowRoot.querySelector('input[type=file]')['files'][0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            const dataURI = reader.result;
            const img = document.createElement('img');
            img.src = dataURI;
            editorContent.appendChild(img);
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    showLink() {
        const url = prompt('Enter the URL');
        document.execCommand('createLink', false, url);
    }
    size(s) {
        document.execCommand('fontSize', false, s);
    }
    comm(c, v = null) {
        document.execCommand(c, false, v);
    }
    render() {
        const rootClassNames = {
            root: true
        };
        const controls = [
            {
                icon: 'format_bold',
                comm: 'bold',
            },
            {
                icon: 'format_underline',
                comm: 'underline',
            },
            {
                icon: 'format_italic',
                comm: 'italic',
            },
            {
                icon: 'format_strikethrough',
                comm: 'strikeThrough',
            },
            {
                icon: 'format_list_numbered',
                comm: 'insertOrderedList',
            },
            {
                icon: 'format_list_bulleted',
                comm: 'insertUnorderedList',
            },
            {
                icon: 'format_align_center',
                comm: 'justifyCenter',
            },
            {
                icon: 'format_align_left',
                comm: 'justifyLeft',
            },
            {
                icon: 'format_align_right',
                comm: 'justifyRight',
            },
            {
                icon: 'format_align_justify',
                comm: 'justifyFull',
            },
            {
                icon: 'format_clear',
                comm: 'removeFormat',
            },
            {
                icon: 'undo',
                comm: 'undo',
            },
            {
                icon: 'redo',
                comm: 'redo',
            },
            {
                icon: 'link_off',
                comm: 'unlink',
            }
        ].filter(d => {
            return !this.disabledTools.includes(d.comm);
        });
        const headings = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
        const sizes = [1, 2, 3, 4, 5, 6, 7];
        const controlsWrapper = (h("div", { class: "control" },
            controls.map((d, i) => (h("arv-button", { key: i, onClick: this.comm.bind(this, d.comm), icon: d.icon, variant: "flat-icon", rounded: false }))),
            h("arv-button", { onClick: this.showLink.bind(this), icon: "insert_link", variant: "flat-icon", rounded: false }),
            h("arv-menu", { xPosition: "left" },
                h("div", { slot: "menu" },
                    h("arv-button", { icon: "title", variant: "flat-icon", rounded: false })),
                h("div", { class: "headingList", slot: "menu-list" }, headings.map((d, i) => (h("arv-button", { rounded: false, key: i, onClick: this.formatBlock.bind(this, d), full: true },
                    "Heading ",
                    i + 1))))),
            h("arv-menu", { xPosition: "left" },
                h("div", { slot: "menu" },
                    h("arv-button", { icon: "format_size", variant: "flat-icon", rounded: false })),
                h("div", { class: "headingList", slot: "menu-list" }, sizes.map(d => (h("arv-button", { rounded: false, key: d, onClick: this.size.bind(this, d), full: true }, d))))),
            h("span", { class: "inputWrapper" },
                h("arv-icon", { onClick: this.imageGet.bind(this), icon: "image" }),
                !Boolean(this.handleImage) && (h("input", { class: "input", onChange: this.getImage.bind(this), type: "file", accept: "image/*" })))));
        return (h("div", { class: rootClassNames },
            h("arv-flex", { layout: "column" },
                controlsWrapper,
                h("arv-divider", null),
                h("div", { class: "editor", contenteditable: true, onBlur: this.blur }))));
    }
    static get is() { return "arv-editor"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["editor.css"]
    }; }
    static get styleUrls() { return {
        "$": ["editor.css"]
    }; }
    static get properties() { return {
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
        "disabledTools": {
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
        "handleImage": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(editor: any) => void",
                "resolved": "(editor: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get events() { return [{
            "method": "editorOnBlur",
            "name": "editorOnBlur",
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
    static get methods() { return {
        "setValue": {
            "complexType": {
                "signature": "(value: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
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
        },
        "getValue": {
            "complexType": {
                "signature": "() => Promise<string>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<string>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
