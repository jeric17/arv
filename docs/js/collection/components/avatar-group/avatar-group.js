import { Component, Element, Prop, Event, Watch, State, Host, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class AvatarGroup {
    /**
     * Updates children styling once max value has changed.
     */
    maxHandler() {
        this.init();
    }
    /**
     * Adds style attributes, dislay and margin-left, to avatar elements.
     */
    componentDidLoad() {
        this.init();
    }
    init() {
        const avatars = Array.from(this.el.children);
        const max = this.max - 1;
        avatars.forEach((node, index) => {
            if (index > 0) {
                node.style.marginLeft = '-15%';
            }
            else {
                node.style.marginLeft = '';
            }
            if (index > max) {
                node.style.display = 'none';
            }
            else {
                node.style.display = '';
            }
        });
    }
    render() {
        const cls = Object.assign({}, generateAttrValue(this.size));
        const childrenLength = this.el.children.length;
        let extra = 0;
        if (this.max &&
            childrenLength > this.max) {
            extra = childrenLength - this.max;
        }
        return (h(Host, { class: cls },
            h("slot", null),
            Boolean(extra) && (h("div", { onClick: () => this.arvMore.emit(), class: "more" },
                "+",
                extra))));
    }
    static get is() { return "arv-avatar-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["avatar-group.css"]
    }; }
    static get styleUrls() { return {
        "$": ["avatar-group.css"]
    }; }
    static get properties() { return {
        "max": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Maximun number of avatars to show."
            },
            "attribute": "max",
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
    static get states() { return {
        "extra": {}
    }; }
    static get events() { return [{
            "method": "arvMore",
            "name": "arvMore",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when .more is clicked."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "max",
            "methodName": "maxHandler"
        }]; }
}
