import { r as registerInstance, c as createEvent, h, H as Host } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';
var accordionItemCss = ".content{display:none}.title{-ms-flex-align:center;align-items:center;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:var(--default-highlight);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-ms-flexbox;display:flex;padding:0 1em;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;background-color:var(--title-bg);color:var(--title-color)}.content{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--default-shade);padding:1em}.title:hover{background-color:var(--title-bg-hover)}:host(.active) .title{border-bottom:none}:host(.active) .content{display:block}";
var AccordionItem = /** @class */ (function () {
    function AccordionItem(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.active = false;
        this.toggle = function () {
            _this.active = !_this.active;
            _this.arvToggleAccordion.emit(_this.itemIndex);
        };
        this.arvToggleAccordion = createEvent(this, "arvToggleAccordion", 7);
    }
    AccordionItem.prototype.render = function () {
        var cls = Object.assign(Object.assign({}, generateAttrValue(this.color)), { active: this.active });
        return (h(Host, { class: cls }, h("div", { class: "title", onClick: this.toggle }, h("slot", { name: "title" })), h("div", { class: "content" }, h("slot", null), h("arv-divider", null))));
    };
    return AccordionItem;
}());
AccordionItem.style = accordionItemCss;
export { AccordionItem as arv_accordion_item };
