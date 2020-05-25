import { Component, Prop, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class ProgressCircular {
    render() {
        const cls = Object.assign(Object.assign({}, generateAttrValue(this.color)), generateAttrValue(this.size));
        return (h(Host, { class: cls },
            h("div", { class: "wrapper" },
                h("svg", { viewBox: "22 22 44 44" },
                    h("circle", { class: "circle", cx: "44", cy: "44", r: "20.2", fill: "none", "stroke-width": "3.6" }))),
            h("div", { class: "content" },
                h("slot", null))));
    }
    static get is() { return "arv-progress-circular"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["progress-circular.css"]
    }; }
    static get styleUrls() { return {
        "$": ["progress-circular.css"]
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
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Color variant to set."
            },
            "attribute": "color",
            "reflect": false
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Size",
                "resolved": "string",
                "references": {
                    "Size": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Size variant to set."
            },
            "attribute": "size",
            "reflect": false
        }
    }; }
}
