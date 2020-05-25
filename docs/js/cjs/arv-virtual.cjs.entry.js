'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const virtualCss = ":host{-ms-flex-align:center;align-items:center;display:block;display:-ms-flexbox;display:flex;height:100vh;-ms-flex-pack:center;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:9999}.backdrop{background-color:var(--backdrop-color);height:100%;left:0;position:absolute;top:0;width:100%}.content{background-color:var(--default-bg);border-radius:var(--radius);margin:2em 0;z-index:9}.inner{-webkit-box-sizing:border-box;box-sizing:border-box;padding:1em}.header{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0 1em}.wrapper{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;-ms-flex-pack:center;justify-content:center;pointer-events:painted;width:100%;z-index:9}:host(.scrollable) .wrapper{-ms-flex-align:start;align-items:flex-start;overflow-y:scroll}";

const Virtual = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.arvVirtualClose = index.createEvent(this, "arvVirtualClose", 7);
    }
    render() {
        const cls = {
            scrollable: this.scrollable
        };
        return (index.h(index.Host, { class: cls }, index.h("div", { class: "wrapper" }, index.h("div", { onClick: () => {
                if (!this.disableBgClose) {
                    this.arvVirtualClose.emit();
                }
            }, class: "backdrop" }), index.h("div", { class: "content" }, index.h("div", { class: "header" }, this.dialogTitle && (index.h("h1", { class: "title" }, this.dialogTitle)), index.h("slot", { name: "header" }), index.h("arv-button", { class: "close-btn", "is-icon": true, onClick: () => {
                this.arvVirtualClose.emit();
            } }, index.h("arv-icon", { icon: "clear" }))), index.h("div", { class: "inner" }, index.h("slot", null))))));
    }
};
Virtual.style = virtualCss;

exports.arv_virtual = Virtual;
