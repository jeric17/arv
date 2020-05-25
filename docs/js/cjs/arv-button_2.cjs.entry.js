'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');
const helpers = require('./helpers-72bf351a.js');

const buttonCss = ":host(.full){width:100%}button{background-color:var(--default-bg);border-radius:var(--radius);border:none;color:var(--font-color);cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;font-size:1em;font-family:inherit;outline:none;padding:0 0.75em;-webkit-transition:all 0.3s;transition:all 0.3s;width:100%}button:hover{background-color:var(--default-shade)}button:disabled{cursor:not-allowed;background-color:var(--disabled-color) !important;color:var(--disabled-text-color) !important}.isIcon{padding:12px}.content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;line-height:3em}.boxed{border-radius:0}.primary{background-color:var(--primary-color);color:var(--primary-text-color)}.primary:hover{background-color:var(--primary-shade)}.secondary{background-color:var(--secondary-color);color:var(--secondary-text-color)}.secondary:hover{background-color:var(--secondary-shade)}.success{background-color:var(--success-color);color:var(--success-text-color)}.success:hover{background-color:var(--success-shade)}.warning{background-color:var(--warning-color);color:var(--warning-text-color)}.warning:hover{background-color:var(--warning-shade)}.danger{background-color:var(--danger-color);color:var(--danger-text-color)}.danger:hover{background-color:var(--danger-shade)}.light{background-color:var(--light-color);color:var(--light-text-color)}.light:hover{background-color:var(--light-shade)}.dark{background-color:var(--dark-color);color:var(--dark-text-color)}.dark:hover{background-color:var(--dark-shade)}.small{font-size:0.8rem}.large{font-size:1.2rem}.raised{-webkit-box-shadow:0px 1px 3px rgba(3, 3, 3, 0.3);box-shadow:0px 1px 3px rgba(3, 3, 3, 0.3)}.raised:hover{-webkit-box-shadow:0px 2px 4px rgba(3, 3, 3, 0.3);box-shadow:0px 2px 4px rgba(3, 3, 3, 0.3)}.ghost{background-color:transparent;color:var(--fonr-color)}.primary.ghost:hover{color:var(--primary-text-color)}.secondary.ghost:hover{color:var(--secondary-text-color)}.success.ghost:hover{color:var(--success-text-color)}.warning.ghost:hover{color:var(--warning-text-color)}.danger.ghost:hover{color:var(--danger-text-color)}.dark.ghost:hover{color:var(--dark-text-color)}.light.ghost:hover{color:var(--light-text-color)}arv-icon{margin:0 4px}.loadingText{display:none}:host(.isLoading) .buttonText{display:none}:host(.isLoading) .loadingText{display:block}";

const Button = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const hostCls = {
            full: this.full,
            hasIcon: Boolean(this.icon),
            isLoading: this.loading,
        };
        const rootCls = Object.assign(Object.assign(Object.assign(Object.assign({}, helpers.generateAttrValue(this.color)), helpers.generateAttrValue(this.size)), helpers.generateAttrValue(this.variant)), { boxed: this.boxed, isIcon: this.isIcon });
        const buttonStyle = {};
        if (this.flexDirection) {
            buttonStyle.flexDirection = this.flexDirection;
        }
        return (index.h(index.Host, { class: hostCls }, index.h("button", { style: this.styles, class: rootCls, disabled: this.disabled }, index.h("span", { class: "content", style: buttonStyle }, this.loading && (index.h("arv-progress-circular", { color: this.loadingColor, size: "small" })), this.icon && (index.h("arv-icon", { icon: this.icon })), index.h("slot", { name: "start" }), index.h("div", { class: "buttonText" }, index.h("slot", null)), index.h("span", { class: "loadingText" }, this.loadingText), index.h("slot", { name: "end" })))));
    }
    get el() { return index.getElement(this); }
};
Button.style = buttonCss;

const progressCircularCss = "@-webkit-keyframes expand{from{stroke-dashoffset:126}to{stroke-dashoffset:0}}@keyframes expand{from{stroke-dashoffset:126}to{stroke-dashoffset:0}}@-webkit-keyframes rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;background-color:transparent !important;padding:0.5em}.wrapper{-webkit-animation:rotate 1.5s infinite cubic-bezier(0.0, 0.0, 0.2, 1);animation:rotate 1.5s infinite cubic-bezier(0.0, 0.0, 0.2, 1);width:44px;height:44px;-webkit-transform-origin:center;transform-origin:center}.circle{-webkit-animation:expand 1.5s infinite cubic-bezier(0.0, 0.0, 0.2, 1);animation:expand 1.5s infinite cubic-bezier(0.0, 0.0, 0.2, 1);stroke-dasharray:126;stroke:var(--default-highlight)}:host(.primary) .circle{stroke:var(--primary-color)}:host(.secondary) .circle{stroke:var(--secondary-color)}:host(.success) .circle{stroke:var(--success-color)}:host(.warning) .circle{stroke:var(--warning-color)}:host(.danger) .circle{stroke:var(--danger-color)}:host(.dark) .circle{stroke:var(--dark-color)}:host(.light) .circle{stroke:var(--light-color)}:host(.small) .wrapper{width:30px;height:30px}:host(.large) .wrapper{width:60px;height:60px}";

const ProgressCircular = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const cls = Object.assign(Object.assign({}, helpers.generateAttrValue(this.color)), helpers.generateAttrValue(this.size));
        return (index.h(index.Host, { class: cls }, index.h("div", { class: "wrapper" }, index.h("svg", { viewBox: "22 22 44 44" }, index.h("circle", { class: "circle", cx: "44", cy: "44", r: "20.2", fill: "none", "stroke-width": "3.6" }))), index.h("div", { class: "content" }, index.h("slot", null))));
    }
};
ProgressCircular.style = progressCircularCss;

exports.arv_button = Button;
exports.arv_progress_circular = ProgressCircular;
