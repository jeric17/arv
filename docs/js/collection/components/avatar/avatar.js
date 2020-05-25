import { Component, Prop, Host, h } from '@stencil/core';
export class Avatar {
    constructor() {
        /**
         * Size variant to set.
         */
        this.size = 'normal';
    }
    render() {
        const cls = {
            small: this.size === 'small',
            normal: this.size === 'normal',
            large: this.size === 'large',
        };
        return (h(Host, { class: cls },
            h("img", { src: this.imgSrc, alt: this.alt })));
    }
    static get is() { return "arv-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["avatar.css"]
    }; }
    static get styleUrls() { return {
        "$": ["avatar.css"]
    }; }
    static get properties() { return {
        "alt": {
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
                "text": "Alt attr of the img element."
            },
            "attribute": "alt",
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
                "text": "Image source of the img element"
            },
            "attribute": "img-src",
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
                "text": "Size variant to set."
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "'normal'"
        }
    }; }
}
