import { Component, h, Prop } from '@stencil/core';
export class CardHeader {
    constructor() {
        /* oneOf: [default, primary, secondary] */
        this.color = 'default';
    }
    render() {
        const Avatar = () => (h("arv-avatar", { imgSrc: this.avatarImage }));
        const Title = () => (h("arv-text", null, this.titleHeader));
        const SubHeader = () => (h("arv-text", { style: { width: '100%' } }, this.subHeader));
        return (h("div", { style: this.styles, class: "card-header" },
            h("arv-flex", { justify: "between" },
                this.avatarImage && h(Avatar, null),
                this.avatarImage && h("arv-divider", null),
                h("arv-flex", null,
                    this.titleHeader && h(Title, null),
                    this.subHeader && h(SubHeader, null)),
                this.action && this.action)));
    }
    static get is() { return "arv-card-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card-header.css"]
    }; }
    static get styleUrls() { return {
        "$": ["card-header.css"]
    }; }
    static get properties() { return {
        "action": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "action",
            "reflect": false
        },
        "avatarImage": {
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
            "attribute": "avatar-image",
            "reflect": false
        },
        "color": {
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
            "attribute": "color",
            "reflect": false,
            "defaultValue": "'default'"
        },
        "subHeader": {
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
            "attribute": "sub-header",
            "reflect": false
        },
        "titleHeader": {
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
            "attribute": "title-header",
            "reflect": false
        },
        "styles": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "styles",
            "reflect": false
        }
    }; }
}
