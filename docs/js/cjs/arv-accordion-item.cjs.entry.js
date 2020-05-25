'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');
const helpers = require('./helpers-72bf351a.js');

const accordionItemCss = ".content{display:none}.title{-ms-flex-align:center;align-items:center;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:var(--default-highlight);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-ms-flexbox;display:flex;padding:0 1em;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;background-color:var(--title-bg);color:var(--title-color)}.content{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--default-shade);padding:1em}.title:hover{background-color:var(--title-bg-hover)}:host(.active) .title{border-bottom:none}:host(.active) .content{display:block}";

const AccordionItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.active = false;
        this.toggle = () => {
            this.active = !this.active;
            this.arvToggleAccordion.emit(this.itemIndex);
        };
        this.arvToggleAccordion = index.createEvent(this, "arvToggleAccordion", 7);
    }
    render() {
        const cls = Object.assign(Object.assign({}, helpers.generateAttrValue(this.color)), { active: this.active });
        return (index.h(index.Host, { class: cls }, index.h("div", { class: "title", onClick: this.toggle }, index.h("slot", { name: "title" })), index.h("div", { class: "content" }, index.h("slot", null), index.h("arv-divider", null))));
    }
};
AccordionItem.style = accordionItemCss;

exports.arv_accordion_item = AccordionItem;
