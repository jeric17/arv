'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');
const helpers = require('./helpers-72bf351a.js');

const alertTextCss = ":host{background-color:var(--default-bg);color:var(--font-color);width:100%;border-radius:var(--radius);-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 1em}:host(.primary){background-color:var(--primary-color);color:var(--primary-text-color)}:host(.secondary){background-color:var(--secondary-color);color:var(--secondary-text-color)}:host(.success){background-color:var(--success-color);color:var(--success-text-color)}:host(.warning){background-color:var(--warning-color);color:var(--warning-text-color)}:host(.danger){background-color:var(--danger-color);color:var(--danger-text-color)}";

const AlertText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const cls = Object.assign({}, helpers.generateAttrValue(this.color));
        return (index.h(index.Host, { class: cls }, index.h("slot", null)));
    }
};
AlertText.style = alertTextCss;

exports.arv_alert_text = AlertText;
