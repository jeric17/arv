import { Component, Host, Element, Prop, Watch, h } from '@stencil/core';
import Prism from 'prismjs';
import cssCoy from 'prismjs/themes/prism-coy.css';
import cssTomorrow from 'prismjs/themes/prism-tomorrow.css';
export class DocHtml {
    constructor() {
        this.config = {};
        this.settings = [];
    }
    settingsHandler() {
        this.init();
    }
    get htmlCode() {
        const { element, slot } = this.config;
        return `
    <${element} ${this.propsString}>
         ${slot || ''}
    </${element}>
`;
    }
    get propsString() {
        return this.settings.map(d => {
            if (!d.value) {
                return '';
            }
            return `${d.name}="${d.value}"`;
        }).filter(d => d).join(` `);
    }
    componentDidLoad() {
        this.init();
    }
    render() {
        return (h(Host, null,
            this.isDark && (h("style", null, cssTomorrow)),
            !this.isDark && (h("style", null, cssCoy)),
            h("arv-flex", { direction: "column" },
                h("arv-spacer", null),
                h("h2", null, "Html"),
                h("arv-divider", null),
                h("arv-spacer", null),
                h("pre", null,
                    h("code", { class: "language-html" })))));
    }
    init() {
        const html = Prism.highlight(this.htmlCode, Prism.languages.html, 'html');
        this.el.shadowRoot.querySelector('code').innerHTML = html;
    }
    static get is() { return "doc-html"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["html.css"]
    }; }
    static get styleUrls() { return {
        "$": ["html.css"]
    }; }
    static get properties() { return {
        "config": {
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
            "attribute": "config",
            "reflect": false,
            "defaultValue": "{}"
        },
        "isDark": {
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
                "text": ""
            },
            "attribute": "is-dark",
            "reflect": false
        },
        "settings": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "any[]",
                "resolved": "any[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "settings",
            "methodName": "settingsHandler"
        }]; }
}
