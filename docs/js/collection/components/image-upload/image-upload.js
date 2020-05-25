import { Component, h, Element, Event, Prop } from '@stencil/core';
export class ImageUpload {
    change(evt) {
        this.arvUploadImage.emit({
            target: evt.target,
            files: evt.target.files
        });
        if (this.uploadImage) {
            this.uploadImage(evt.target);
        }
    }
    removeItem() {
        const input = this.el.shadowRoot.querySelector('input');
        input.value = null;
        this.arvRemoveImage.emit();
        if (this.removeImage) {
            this.removeImage();
        }
    }
    render() {
        const rootClassNames = {
            root: true,
            xsmall: this.size === 'xsmall',
            small: this.size === 'small',
            large: this.size === 'large',
            disabled: this.disabled
        };
        const imgClassNames = {
            img: true
        };
        const imgStyle = {};
        if (this.imgSrc) {
            imgStyle['background-image'] = `url(${this.imgSrc})`;
        }
        const text = (() => {
            if (this.imgSrc) {
                return 'Change Image';
            }
            return 'Upload Image';
        })();
        return (h("div", { class: rootClassNames },
            this.imgSrc && (h("div", { class: "remove-button" },
                h("arv-button", { disabled: this.disabled, buttonClick: this.removeItem.bind(this), icon: "close", variant: "raised-icon" }))),
            h("div", { class: imgClassNames, style: imgStyle }, !this.imgSrc && h("arv-icon", { size: "xlarge", icon: "photo" })),
            h("div", { class: "hover" },
                h("span", { class: "hoverText" }, text)),
            h("input", { disabled: this.disabled, class: "input", type: "file", onChange: this.change.bind(this) })));
    }
    static get is() { return "arv-image-upload"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["image-upload.css"]
    }; }
    static get styleUrls() { return {
        "$": ["image-upload.css"]
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
        "hashKey": {
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
            "attribute": "hash-key",
            "reflect": false
        },
        "size": {
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
            "attribute": "size",
            "reflect": false
        },
        "imgSrc": {
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
            "attribute": "img-src",
            "reflect": false
        },
        "uploadImage": {
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
        "removeImage": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "() => void",
                "resolved": "() => void",
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
            "method": "arvUploadImage",
            "name": "arvUploadImage",
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
            "method": "arvRemoveImage",
            "name": "arvRemoveImage",
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
