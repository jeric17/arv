'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const loaderCss = "@-webkit-keyframes ui-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ui-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fade-in-out{0%{opacity:0.5}50%{opacity:1}100%{opacity:0.5}}@keyframes fade-in-out{0%{opacity:0.5}50%{opacity:1}100%{opacity:0.5}}.contained{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%;position:absolute;width:100%;z-index:1;background-color:var(--loader-bg, rgba(51, 51, 51, 0.1))}.spinner{-webkit-animation:ui-spin 0.5s linear infinite;animation:ui-spin 0.5s linear infinite;border-radius:50%;border-style:solid;border-color:#f3f3f3;border-width:6px;border-top-width:6px;border-top-style:solid;height:80px;min-height:80px;min-width:80px;width:80px}.spinner.primary{border-top-color:var(--primary-color)}.spinner.secondary{border-top-color:var(--secondary-color)}.spinner.warning{border-top-color:var(--warning-color)}.spinner.error{border-top-color:var(--error-color)}.spinner.success{border-top-color:var(--success-color)}.spinner.small{border-width:3px;border-top-width:3px;height:40px;min-height:40px;min-width:40px;width:40px}.spinner.xsmall{border-width:2px;border-top-width:2px;height:20px;min-height:20px;min-width:20px;width:20px}";

const Loader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = 'primary';
    }
    render() {
        const rootClassNames = {
            root: true,
            contained: this.contained
        };
        const spinnerClassNames = {
            spinner: true,
            primary: this.color === 'primary',
            secondary: this.color === 'secondary',
            warning: this.color === 'warning',
            error: this.color === 'error',
            success: this.color === 'success',
            xsmall: this.size === 'xsmall',
            small: this.size === 'small',
            large: this.size === 'large'
        };
        return (index.h("div", { class: rootClassNames }, index.h("arv-flex", { layout: "column", justify: "center", items: "center" }, index.h("div", { class: spinnerClassNames }), index.h("slot", null))));
    }
};
Loader.style = loaderCss;

exports.arv_loader = Loader;
