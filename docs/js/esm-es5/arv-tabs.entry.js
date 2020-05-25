import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';
var tabsCss = ":host{background-color:var(--default-bg);border-radius:var(--radius);width:100%;height:100%;overflow:hidden}:host(.noActiveHeader) .tabName.active .tempBorder{width:100%;display:block}arv-icon{margin-bottom:4px}.tempBorder{display:none}.tempBorder,.border{position:absolute;height:2px;bottom:0px;left:0;background-color:var(--default-darker);-webkit-transition:all 0.3s;transition:all 0.3s}.header{display:-ms-flexbox;display:flex;-webkit-box-shadow:0px 0px 3px 2px rgba(3, 3, 3, 0.27);box-shadow:0px 0px 3px 2px rgba(3, 3, 3, 0.27);position:relative;-ms-flex-wrap:nowrap;flex-wrap:nowrap;background-color:var(--default-shade)}.tabName{white-space:nowrap;padding:1em 2em;cursor:pointer;background-color:transparent;-webkit-transition:all 0.3s;transition:all 0.3s;width:100%;text-align:center;color:var(--font-color);position:relative}.tabName.active,.tabName:hover{background-color:var(--default-highlight)}:host(.right) .header{-ms-flex-pack:start;justify-content:flex-start}:host(.center) .header{-ms-flex-pack:center;justify-content:center}:host(.left) .header{-ms-flex-pack:end;justify-content:flex-end}:host(.right) .tabName,:host(.center) .tabName,:host(.left) .tabName{width:auto}:host(.primary) .header{background-color:var(--primary-color)}:host(.primary) .tabName{color:var(--primary-text-color)}:host(.primary) .tabName.active,:host(.primary) .tabName:hover{background-color:var(--primary-highlight)}:host(.primary) .border,:host(.primary) .tempBorder{background-color:var(--secondary-color)}:host(.secondary) .header{background-color:var(--secondary-color)}:host(.secondary) .tabName{color:var(--secondary-text-color)}:host(.secondary) .tabName.active,:host(.secondary) .tabName:hover{background-color:var(--secondary-highlight)}:host(.secondary) .border,:host(.secondary) .tempBorder{background-color:var(--primary-color)}:host(.success) .header{background-color:var(--success-color)}:host(.success) .tabName{color:var(--success-text-color)}:host(.success) .tabName.active,:host(.success) .tabName:hover{background-color:var(--success-highlight)}:host(.success) .border,:host(.success) .tempBorder{background-color:var(--primary-color)}:host(.warning) .header{background-color:var(--warning-color)}:host(.warning) .tabName{color:var(--warning-text-color)}:host(.warning) .tabName.active,:host(.warning) .tabName:hover{background-color:var(--warning-highlight)}:host(.warning) .border,:host(.warning) .tempBorder{background-color:var(--primary-color)}:host(.danger) .header{background-color:var(--danger-color)}:host(.danger) .tabName{color:var(--danger-text-color)}:host(.danger) .tabName.active,:host(.danger) .tabName:hover{background-color:var(--danger-highlight)}:host(.danger) .border,:host(.danger) .tempBorder{background-color:var(--primary-color)}:host(.dark) .header{background-color:var(--dark-color)}:host(.dark) .tabName{color:var(--dark-text-color)}:host(.dark) .tabName.active,:host(.dark) .tabName:hover{background-color:var(--dark-highlight)}:host(.dark) .border,:host(.dark) .tempBorder{background-color:var(--light-color)}:host(.light) .header{background-color:var(--light-color)}:host(.light) .tabName{color:var(--light-text-color)}:host(.light) .tabName.active,:host(.light) .tabName:hover{background-color:var(--light-highlight)}:host(.light) .border,:host(.light) .tempBorder{background-color:var(--dark-color)}";
var Tabs = /** @class */ (function () {
    function Tabs(hostRef) {
        var _this = this;
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
        this.tabClick = function (index) {
            _this.setActiveHeader(index);
            _this.activeIndex = index;
            _this.arvTabClick.emit(index);
            Array.from(_this.el.children).forEach(function (item, i) {
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
    Tabs.prototype.alignmentChanged = function () {
        var _this = this;
        setTimeout(function () {
            _this.counter++;
        }, 0);
    };
    /**
     * Adds item-index attribute to children.
     */
    Tabs.prototype.componentDidLoad = function () {
        Array.from(this.el.children).forEach(function (item, index) {
            item.setAttribute('item-index', String(index));
            if (!index) {
                item.setAttribute('is-active', 'true');
            }
            else {
                item.setAttribute('is-active', 'false');
            }
        });
    };
    Tabs.prototype.borderCls = function (index) {
        var tabNames = this.el.shadowRoot.querySelectorAll('.tabName');
        var item = tabNames[index];
        if (!item) {
            return {};
        }
        var header = this.el.shadowRoot.querySelector('.header');
        var headerLeft = header.getBoundingClientRect().left;
        var _a = item.getBoundingClientRect(), itemLeft = _a.left, itemWidth = _a.width;
        var style = {
            left: itemLeft - headerLeft + "px",
            width: itemWidth + "px"
        };
        return style;
    };
    Tabs.prototype.setActiveHeader = function (index) {
        if (index === void 0) { index = 0; }
        var headers = this.el.shadowRoot.querySelectorAll('.tabName');
        this.activeHeader = headers[index];
    };
    Tabs.prototype.render = function () {
        var _this = this;
        var hostCls = Object.assign(Object.assign(Object.assign({}, generateAttrValue(this.color)), generateAttrValue(this.tabAlignment)), { noActiveHeader: !Boolean(this.activeHeader) });
        var tabNames = JSON.parse(this.tabNames);
        return (h(Host, { class: hostCls }, h("div", { class: "header" }, tabNames.map(function (item, index) {
            var tabCls = {
                tabName: true,
                active: index === _this.activeIndex,
            };
            return (h("div", { onClick: function () { return _this.tabClick(index); }, class: tabCls }, item.icon && (h("arv-icon", { icon: item.icon })), h("span", null, item.name), h("div", { class: "tempBorder" })));
        }), h("span", { class: "filler" }), h("div", { class: "border", style: this.borderCls(this.activeIndex) })), h("slot", null)));
    };
    Object.defineProperty(Tabs.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabs, "watchers", {
        get: function () {
            return {
                "tabAlignment": ["alignmentChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return Tabs;
}());
Tabs.style = tabsCss;
export { Tabs as arv_tabs };
