'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');
const helpers = require('./helpers-72bf351a.js');

const tooltipCss = "@-webkit-keyframes in{from{opacity:0}to{opacity:1}}@keyframes in{from{opacity:0}to{opacity:1}}:host{display:inline;position:relative}.tooltip-message{display:none;position:absolute;background-color:var(--tooltip-bg);border-radius:var(--radius);color:var(--tooltip-text);padding:0 0.5em;line-height:1.5rem;left:50%;top:-4px;-webkit-transform:translate(-50%, -100%);transform:translate(-50%, -100%);-webkit-animation:in 0.3s;animation:in 0.3s;white-space:nowrap}:host(:hover) .tooltip-message{display:block}.tooltip-message:hover{display:block}:host(.bottom) .tooltip-message{bottom:-4px;-webkit-transform:translate(-50%, 100%);transform:translate(-50%, 100%);top:auto}:host(.left) .tooltip-message{-webkit-transform:translate(-100%, -50%);transform:translate(-100%, -50%);top:50%;left:-4px}:host(.right) .tooltip-message{-webkit-transform:translate(100%, -50%);transform:translate(100%, -50%);top:50%;left:auto;right:-4px}:host(.primary) .tooltip-message{background-color:var(--primary-color);color:var(--primary-text-color)}:host(.secondary) .tooltip-message{background-color:var(--secondary-color);color:var(--secondary-text-color)}:host(.success) .tooltip-message{background-color:var(--success-color);color:var(--success-text-color)}:host(.warning) .tooltip-message{background-color:var(--warning-color);color:var(--warning-text-color)}:host(.danger) .tooltip-message{background-color:var(--danger-color);color:var(--danger-text-color)}:host(.dark) .tooltip-message{background-color:var(--dark-color);color:var(--dark-text-color)}:host(.light) .tooltip-message{background-color:var(--light-color);color:var(--light-text-color)}";

const Tooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Tooltip position
         */
        this.position = 'top';
    }
    render() {
        const cls = Object.assign({ [this.position]: true }, helpers.generateAttrValue(this.color));
        return (index.h(index.Host, { class: cls }, index.h("span", { class: "tooltip-message" }, this.message, index.h("slot", { name: "tooltip" })), index.h("slot", null)));
    }
};
Tooltip.style = tooltipCss;

exports.arv_tooltip = Tooltip;
