import { r as registerInstance, c as createEvent, h, H as Host } from './index-8fd6d07a.js';

const virtualCss = ":host{-ms-flex-align:center;align-items:center;display:block;display:-ms-flexbox;display:flex;height:100vh;-ms-flex-pack:center;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:9999}.backdrop{background-color:var(--backdrop-color);height:100%;left:0;position:absolute;top:0;width:100%}.content{background-color:var(--default-bg);border-radius:var(--radius);margin:2em 0;z-index:9}.inner{-webkit-box-sizing:border-box;box-sizing:border-box;padding:1em}.header{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0 1em}.wrapper{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;-ms-flex-pack:center;justify-content:center;pointer-events:painted;width:100%;z-index:9}:host(.scrollable) .wrapper{-ms-flex-align:start;align-items:flex-start;overflow-y:scroll}";

const Virtual = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.arvVirtualClose = createEvent(this, "arvVirtualClose", 7);
    }
    render() {
        const cls = {
            scrollable: this.scrollable
        };
        return (h(Host, { class: cls }, h("div", { class: "wrapper" }, h("div", { onClick: () => {
                if (!this.disableBgClose) {
                    this.arvVirtualClose.emit();
                }
            }, class: "backdrop" }), h("div", { class: "content" }, h("div", { class: "header" }, this.dialogTitle && (h("h1", { class: "title" }, this.dialogTitle)), h("slot", { name: "header" }), h("arv-button", { class: "close-btn", "is-icon": true, onClick: () => {
                this.arvVirtualClose.emit();
            } }, h("arv-icon", { icon: "clear" }))), h("div", { class: "inner" }, h("slot", null))))));
    }
};
Virtual.style = virtualCss;

export { Virtual as arv_virtual };
