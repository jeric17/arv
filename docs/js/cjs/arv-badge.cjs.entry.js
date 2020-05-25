'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const badgeCss = ":host{position:relative}.value{background-color:var(--badge-color);color:var(--badge-text-color);min-width:20px;height:20px;border-radius:20px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:0.8em;position:absolute;top:-10px;right:-10px;padding:0 4px;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.arv-invisible) .value{display:none}";

const Badge = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const cls = {
            'arv-invisible': this.invisible
        };
        const val = (!this.disableComma && this.value) ?
            Number(this.value).toLocaleString() :
            this.value;
        return (index.h(index.Host, { class: cls }, index.h("div", { class: "value" }, val), index.h("slot", null)));
    }
};
Badge.style = badgeCss;

exports.arv_badge = Badge;
