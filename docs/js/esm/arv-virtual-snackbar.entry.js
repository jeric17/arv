import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';

const virtualSnackbarCss = "@-webkit-keyframes out{from{opacity:1}to{opacity:0}}@keyframes out{from{opacity:1}to{opacity:0}}@-webkit-keyframes in{from{opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes in{from{opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}:host{top:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;position:fixed;z-index:9999;width:100vw}.snackbar{-webkit-animation:in 0.3s;animation:in 0.3s;-webkit-transform-origin:center;transform-origin:center;background-color:var(--default-bg);border-radius:var(--radius);-webkit-box-shadow:1px 2px 3px rgba(3, 3, 3, 0.3);box-shadow:1px 2px 3px rgba(3, 3, 3, 0.3);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--font-color);margin:1em;padding:0.7em 0.25em 0.7em 1em;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host(.hideClose) .snackbar{padding:1em}:host(.out){-webkit-animation:out 0.3s forwards;animation:out 0.3s forwards}:host(.verticalCenter){top:calc(100vh - 50%)}:host(.bottom){top:auto;bottom:0}:host(.left){-ms-flex-pack:start;justify-content:flex-start}:host(.right){-ms-flex-pack:end;justify-content:flex-end}:host(.primary) .snackbar{background-color:var(--primary-color);color:var(--primary-text-color);--icon-color:var(--primary-text-color)}:host(.secondary) .snackbar{background-color:var(--secondary-color);color:var(--secondary-text-color);--icon-color:var(--secondary-text-color)}:host(.success) .snackbar{background-color:var(--success-color);color:var(--success-text-color);--icon-color:var(--success-text-color)}:host(.warning) .snackbar{background-color:var(--warning-color);color:var(--warning-text-color);--icon-color:var(--warning-text-color)}:host(.danger) .snackbar{background-color:var(--danger-color);color:var(--danger-text-color);--icon-color:var(--danger-text-color)}:host(.dark) .snackbar{background-color:var(--dark-color);color:var(--dark-text-color);--icon-color:var(--dark-text-color)}:host(.light) .snackbar{background-color:var(--light-color);color:var(--light-text-color);--icon-color:var(--light-text-color)}.sb-icon{margin-right:1em}.sb-btn{margin-left:1em}";

const VirtualSnackbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.durationTimeout = null;
        this.color = '';
        /**
         * Position of the snack bar in horizontal axis.
         */
        this.xPosition = 'center';
        /**
         * Position of the snack bar in vertical axis.
         */
        this.yPosition = 'top';
        this.close = () => {
            this.el.classList.add('out');
            setTimeout(() => {
                this.arvVirtualSnackbarClose.emit();
            }, 300);
        };
        this.closeBtnClick = () => {
            clearTimeout(this.durationTimeout);
            this.close();
        };
        this.arvVirtualSnackbarClose = createEvent(this, "arvVirtualSnackbarClose", 7);
    }
    async durationCheck() {
        this.init();
    }
    componentDidLoad() {
        this.init();
    }
    disconnectedCallback() {
        clearTimeout(this.durationTimeout);
    }
    init() {
        if (!this.duration) {
            return false;
        }
        clearTimeout(this.durationTimeout);
        this.durationTimeout = setTimeout(() => {
            this.close();
        }, this.duration);
    }
    render() {
        const cls = Object.assign({ top: this.yPosition === 'top', bottom: this.yPosition === 'bottom', left: this.xPosition === 'left', right: this.xPosition === 'right', verticalCenter: this.yPosition === 'center', horizontalCenter: this.xPosition === 'center', hideClose: this.hideClose }, generateAttrValue(this.color));
        return (h(Host, { class: cls }, h("div", { class: "snackbar" }, this.icon && (h("arv-icon", { class: "sb-icon", icon: this.icon })), h("arv-text", { wrap: "nowrap" }, this.message), h("slot", null), !this.hideClose && (h("arv-button", { class: "sb-btn", onClick: this.closeBtnClick, color: this.color, icon: "clear", "is-icon": true })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "counter": ["durationCheck"]
    }; }
};
VirtualSnackbar.style = virtualSnackbarCss;

export { VirtualSnackbar as arv_virtual_snackbar };
