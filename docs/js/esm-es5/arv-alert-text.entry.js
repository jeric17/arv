import { r as registerInstance, h, H as Host } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';
var alertTextCss = ":host{background-color:var(--default-bg);color:var(--font-color);width:100%;border-radius:var(--radius);-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 1em}:host(.primary){background-color:var(--primary-color);color:var(--primary-text-color)}:host(.secondary){background-color:var(--secondary-color);color:var(--secondary-text-color)}:host(.success){background-color:var(--success-color);color:var(--success-text-color)}:host(.warning){background-color:var(--warning-color);color:var(--warning-text-color)}:host(.danger){background-color:var(--danger-color);color:var(--danger-text-color)}";
var AlertText = /** @class */ (function () {
    function AlertText(hostRef) {
        registerInstance(this, hostRef);
    }
    AlertText.prototype.render = function () {
        var cls = Object.assign({}, generateAttrValue(this.color));
        return (h(Host, { class: cls }, h("slot", null)));
    };
    return AlertText;
}());
AlertText.style = alertTextCss;
export { AlertText as arv_alert_text };
