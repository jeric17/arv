import { Component, State, Element, Listen, Watch, Prop, h } from '@stencil/core';
import * as comps from './components';
export class DocContent {
    applyHtmlSample(item) {
        this.settings = comps[item].props;
        this.addComponent(item);
    }
    settingsChanged(value) {
        const settings = value.detail;
        this.settings = settings.settings;
        this.demoComponent.setAttribute(settings.item.name, settings.item.value);
    }
    componentWillLoad() {
        this.settings = comps[this.selectedComponent].props;
    }
    componentDidLoad() {
        this.addComponent(this.selectedComponent);
    }
    addComponent(item) {
        const { slot, props, containerContent, element, wrapper, onLoad } = comps[item];
        const container = this.el.shadowRoot.getElementById('sample');
        const wrapperEl = document.createElement('div');
        const compEl = document.createElement(element);
        compEl.setAttribute('id', 'demoComponent');
        if (slot) {
            compEl.innerHTML = slot;
        }
        props.forEach(d => {
            if (d.value) {
                compEl.setAttribute(d.name, d.value);
            }
        });
        if (containerContent) {
            container.innerHTML = containerContent;
        }
        else {
            container.innerHTML = '';
        }
        if (!wrapper) {
            container.appendChild(compEl);
        }
        else {
            wrapperEl.innerHTML = wrapper;
            wrapperEl.children[0].appendChild(compEl);
            container.appendChild(wrapperEl);
        }
        this.demoComponent = compEl;
        if (onLoad) {
            onLoad(container);
        }
    }
    render() {
        if (!this.selectedComponent) {
            return null;
        }
        const selectedComp = comps[this.selectedComponent];
        return (h("arv-flex", { class: "root", direction: "column", expanded: true },
            h("h1", null, this.selectedComponent),
            h("arv-divider", null),
            h("p", null),
            h("arv-paper", { class: "sample-wrapper", "shadow-level": "0" },
                h("div", { id: "sample" })),
            h("doc-control", { settings: selectedComp.props }),
            h("doc-html", { isDark: this.isDark, config: selectedComp, settings: this.settings }),
            h("footer", null)));
    }
    static get is() { return "doc-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["content.css"]
    }; }
    static get styleUrls() { return {
        "$": ["content.css"]
    }; }
    static get properties() { return {
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
        "selectedComponent": {
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
            "attribute": "selected-component",
            "reflect": false
        }
    }; }
    static get states() { return {
        "settings": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "selectedComponent",
            "methodName": "applyHtmlSample"
        }]; }
    static get listeners() { return [{
            "name": "docSettingsChange",
            "method": "settingsChanged",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
