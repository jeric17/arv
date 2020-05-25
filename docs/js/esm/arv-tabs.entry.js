import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';

const tabsCss = ":host{background-color:var(--default-bg);border-radius:var(--radius);width:100%;height:100%;overflow:hidden}:host(.noActiveHeader) .tabName.active .tempBorder{width:100%;display:block}arv-icon{margin-bottom:4px}.tempBorder{display:none}.tempBorder,.border{position:absolute;height:2px;bottom:0px;left:0;background-color:var(--default-darker);-webkit-transition:all 0.3s;transition:all 0.3s}.header{display:-ms-flexbox;display:flex;-webkit-box-shadow:0px 0px 3px 2px rgba(3, 3, 3, 0.27);box-shadow:0px 0px 3px 2px rgba(3, 3, 3, 0.27);position:relative;-ms-flex-wrap:nowrap;flex-wrap:nowrap;background-color:var(--default-shade)}.tabName{white-space:nowrap;padding:1em 2em;cursor:pointer;background-color:transparent;-webkit-transition:all 0.3s;transition:all 0.3s;width:100%;text-align:center;color:var(--font-color);position:relative}.tabName.active,.tabName:hover{background-color:var(--default-highlight)}:host(.right) .header{-ms-flex-pack:start;justify-content:flex-start}:host(.center) .header{-ms-flex-pack:center;justify-content:center}:host(.left) .header{-ms-flex-pack:end;justify-content:flex-end}:host(.right) .tabName,:host(.center) .tabName,:host(.left) .tabName{width:auto}:host(.primary) .header{background-color:var(--primary-color)}:host(.primary) .tabName{color:var(--primary-text-color)}:host(.primary) .tabName.active,:host(.primary) .tabName:hover{background-color:var(--primary-highlight)}:host(.primary) .border,:host(.primary) .tempBorder{background-color:var(--secondary-color)}:host(.secondary) .header{background-color:var(--secondary-color)}:host(.secondary) .tabName{color:var(--secondary-text-color)}:host(.secondary) .tabName.active,:host(.secondary) .tabName:hover{background-color:var(--secondary-highlight)}:host(.secondary) .border,:host(.secondary) .tempBorder{background-color:var(--primary-color)}:host(.success) .header{background-color:var(--success-color)}:host(.success) .tabName{color:var(--success-text-color)}:host(.success) .tabName.active,:host(.success) .tabName:hover{background-color:var(--success-highlight)}:host(.success) .border,:host(.success) .tempBorder{background-color:var(--primary-color)}:host(.warning) .header{background-color:var(--warning-color)}:host(.warning) .tabName{color:var(--warning-text-color)}:host(.warning) .tabName.active,:host(.warning) .tabName:hover{background-color:var(--warning-highlight)}:host(.warning) .border,:host(.warning) .tempBorder{background-color:var(--primary-color)}:host(.danger) .header{background-color:var(--danger-color)}:host(.danger) .tabName{color:var(--danger-text-color)}:host(.danger) .tabName.active,:host(.danger) .tabName:hover{background-color:var(--danger-highlight)}:host(.danger) .border,:host(.danger) .tempBorder{background-color:var(--primary-color)}:host(.dark) .header{background-color:var(--dark-color)}:host(.dark) .tabName{color:var(--dark-text-color)}:host(.dark) .tabName.active,:host(.dark) .tabName:hover{background-color:var(--dark-highlight)}:host(.dark) .border,:host(.dark) .tempBorder{background-color:var(--light-color)}:host(.light) .header{background-color:var(--light-color)}:host(.light) .tabName{color:var(--light-text-color)}:host(.light) .tabName.active,:host(.light) .tabName:hover{background-color:var(--light-highlight)}:host(.light) .border,:host(.light) .tempBorder{background-color:var(--dark-color)}";

const Tabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.arvTabClick = createEvent(this, "arvTabClick", 7);
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
        return (h(Host, { class: hostCls }, h("div", { class: "header" }, tabNames.map((item, index) => {
            const tabCls = {
                tabName: true,
                active: index === this.activeIndex,
            };
            return (h("div", { onClick: () => this.tabClick(index), class: tabCls }, item.icon && (h("arv-icon", { icon: item.icon })), h("span", null, item.name), h("div", { class: "tempBorder" })));
        }), h("span", { class: "filler" }), h("div", { class: "border", style: this.borderCls(this.activeIndex) })), h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "tabAlignment": ["alignmentChanged"]
    }; }
};
Tabs.style = tabsCss;

export { Tabs as arv_tabs };
