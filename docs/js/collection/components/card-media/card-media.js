import { Component, h, Prop } from '@stencil/core';
export class CardMedia {
    render() {
        const styles = {
            'background-image': `url(${this.imageSrc})`
        };
        return (h("div", { class: "arv-card-media", style: styles }));
    }
    static get is() { return "arv-card-media"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card-media.css"]
    }; }
    static get styleUrls() { return {
        "$": ["card-media.css"]
    }; }
    static get properties() { return {
        "imageSrc": {
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
            "attribute": "image-src",
            "reflect": false
        }
    }; }
}
