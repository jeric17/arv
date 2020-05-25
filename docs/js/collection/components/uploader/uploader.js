import { Component, h, Prop, Event, State } from '@stencil/core';
export class Uploader {
    constructor() {
        this.onDragEnd = (e) => {
            this.prevent(e);
        };
        this.onDragEnter = (e) => {
            this.prevent(e);
        };
        this.onDragExit = (e) => {
            this.prevent(e);
            this.isDragging = false;
        };
        this.onDragLeave = (e) => {
            this.prevent(e);
            this.isDragging = false;
        };
        this.onDragOver = (e) => {
            this.prevent(e);
            this.dragging();
        };
        this.onDrop = (e) => {
            console.log('uploader', e);
            this.prevent(e);
            this.isDragging = false;
            this.arvFilesChange.emit(e.dataTransfer.files);
        };
        this.inputChange = (e) => {
            this.arvFilesChange.emit(e.target.files);
        };
        this.prevent = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };
        this.dragging = () => {
            if (this.isDragging) {
                return;
            }
            this.isDragging = true;
        };
    }
    get uploadButton() {
        if (this.hideUploadButton) {
            return;
        }
        return (h("label", { class: "label" },
            h("arv-text", { class: "labelText" }, this.uploadText || 'Upload'),
            h("input", { onChange: this.inputChange, id: "file", class: "input", name: "files", type: "file", multiple: true })));
    }
    render() {
        const classNames = {
            root: true,
            isDragging: this.isDragging
        };
        return (h("div", { class: classNames, onDragEnd: this.onDragEnd, onDragExit: this.onDragExit, onDragEnter: this.onDragEnter, onDragLeave: this.onDragLeave, onDragOver: this.onDragOver, onDrop: this.onDrop },
            h("arv-flex", { layout: "column" },
                this.uploadButton,
                h("div", { class: "content-wrapper" },
                    h("slot", null)))));
    }
    static get is() { return "arv-uploader"; }
    static get originalStyleUrls() { return {
        "$": ["uploader.css"]
    }; }
    static get styleUrls() { return {
        "$": ["uploader.css"]
    }; }
    static get properties() { return {
        "hideUploadButton": {
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
            "attribute": "hide-upload-button",
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
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "uploadText": {
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
            "attribute": "upload-text",
            "reflect": false
        },
        "uploadTextVariant": {
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
            "attribute": "upload-text-variant",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isDragging": {}
    }; }
    static get events() { return [{
            "method": "arvFilesChange",
            "name": "arvFilesChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "FileList",
                "resolved": "FileList",
                "references": {
                    "FileList": {
                        "location": "global"
                    }
                }
            }
        }]; }
}
