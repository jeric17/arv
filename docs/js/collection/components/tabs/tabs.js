import { Component, Element, Event, State, Prop, Host, Watch, h } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
export class Tabs {
    constructor() {
        this.activeHeader = null;
        this.counter = 0;
        /**
         * Current active tab index.
         */
        this.activeIndex = 0;
        /**
         * Tab names to appear in the tab header.
         */
        this.tabNames = '[]';
        /**
         * Set the active index and emit event on tab click. Also manage is-active
         * attribute on children.
         */
        this.tabClick = (index) => {
            this.setActiveHeader(index);
            this.activeIndex = index;
            this.arvTabClick.emit(index);
            Array.from(this.el.children).forEach((item, i) => {
                if (i === index) {
                    item.setAttribute('is-active', 'true');
                }
                else {
                    item.setAttribute('is-active', 'false');
                }
            });
        };
    }
    alignmentChanged() {
        setTimeout(() => {
            this.counter++;
        }, 0);
    }
    /**
     * Adds item-index attribute to children.
     */
    componentDidLoad() {
        Array.from(this.el.children).forEach((item, index) => {
            item.setAttribute('item-index', String(index));
            if (!index) {
                item.setAttribute('is-active', 'true');
            }
            else {
                item.setAttribute('is-active', 'false');
            }
        });
    }
    borderCls(index) {
        const tabNames = this.el.shadowRoot.querySelectorAll('.tabName');
        const item = tabNames[index];
        if (!item) {
            return {};
        }
        const header = this.el.shadowRoot.querySelector('.header');
        const { left: headerLeft } = header.getBoundingClientRect();
        const { left: itemLeft, width: itemWidth } = item.getBoundingClientRect();
        const style = {
            left: `${itemLeft - headerLeft}px`,
            width: `${itemWidth}px`
        };
        return style;
    }
    setActiveHeader(index = 0) {
        const headers = this.el.shadowRoot.querySelectorAll('.tabName');
        this.activeHeader = headers[index];
    }
    render() {
        const hostCls = Object.assign(Object.assign(Object.assign({}, generateAttrValue(this.color)), generateAttrValue(this.tabAlignment)), { noActiveHeader: !Boolean(this.activeHeader) });
        const tabNames = JSON.parse(this.tabNames);
        return (h(Host, { class: hostCls },
            h("div", { class: "header" },
                tabNames.map((item, index) => {
                    const tabCls = {
                        tabName: true,
                        active: index === this.activeIndex,
                    };
                    return (h("div", { onClick: () => this.tabClick(index), class: tabCls },
                        item.icon && (h("arv-icon", { icon: item.icon })),
                        h("span", null, item.name),
                        h("div", { class: "tempBorder" })));
                }),
                h("span", { class: "filler" }),
                h("div", { class: "border", style: this.borderCls(this.activeIndex) })),
            h("slot", null)));
    }
    static get is() { return "arv-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tabs.css"]
    }; }
    static get styleUrls() { return {
        "$": ["tabs.css"]
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
        "tabNames": {
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
                "text": "Tab names to appear in the tab header."
            },
            "attribute": "tab-names",
            "reflect": false,
            "defaultValue": "'[]'"
        },
        "tabAlignment": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'right' | 'center' | 'left'",
                "resolved": "\"center\" | \"left\" | \"right\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Alignment of tab headers."
            },
            "attribute": "tab-alignment",
            "reflect": false
        }
    }; }
    static get states() { return {
        "counter": {},
        "activeIndex": {}
    }; }
    static get events() { return [{
            "method": "arvTabClick",
            "name": "arvTabClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted on tab header click."
            },
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "tabAlignment",
            "methodName": "alignmentChanged"
        }]; }
}
