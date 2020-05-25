import { r as registerInstance, h, H as Host } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';

const chipCss = ":host{display:-ms-flexbox;display:flex;border-radius:2.2em;line-height:2.2em;border-style:solid;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 1em;border-width:1px;border-color:var(--default-highlight);border-style:solid;background-color:var(--default-bg);color:var(--font-color)}:host(.primary){background-color:var(--primary-color);color:var(--primary-text-color);border-color:var(--primary-highlight)}:host(.secondary){background-color:var(--secondary-color);color:var(--secondary-text-color);border-color:var(--secondary-highlight)}:host(.success){background-color:var(--success-color);color:var(--success-text-color);border-color:var(--success-highlight)}:host(.warning){background-color:var(--warning-color);color:var(--warning-text-color);border-color:var(--warning-highlight)}:host(.danger){background-color:var(--danger-color);color:var(--danger-text-color);border-color:var(--danger-highlight)}:host(.dark){background-color:var(--dark-color);color:var(--dark-text-color);border-color:var(--dark-highlight)}:host(.light){background-color:var(--light-color);color:var(--light-text-color);border-color:var(--light-highlight)}:host(.large){line-height:3em;font-size:1.3em}:host(.small){line-height:1.8em;font-size:0.8em}";

const Chip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const cls = Object.assign(Object.assign({}, generateAttrValue(this.color)), generateAttrValue(this.size));
        return (h(Host, { class: cls }, h("slot", null)));
    }
};
Chip.style = chipCss;

export { Chip as arv_chip };
