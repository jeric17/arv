'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const containerCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.container{-webkit-box-sizing:border-box;box-sizing:border-box}.full{height:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.hidden{display:none}.max1080{max-width:1080px}.responsive{padding-left:24px;padding-right:24px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.primary{background-color:var(--primary-color);--default-dark-text:var(--primary-text-color)}.secondary{background-color:var(--secondary-color);--default-dark-text:var(--secondary-text-color)}.warning{background-color:var(--warning-color);--default-dark-text:var(--warning-text-color)}.light{background-color:var(--light-color);--default-dark-text:var(--dark-text-color)}.dark{background-color:var(--dark-color);--default-dark-text:var(--light-text-color)}.scrollable{overflow-y:scroll}@media (min-width: 1128px){.responsive{padding-left:80px;padding-right:80px}}";

const Container = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleClick(event) {
        if (this.containerClick) {
            this.containerClick(event);
        }
    }
    render() {
        const rootClassNames = {
            container: true,
            full: this.full,
            hidden: this.hidden,
            responsive: this.variant === 'responsive',
            max1080: this.max1080,
            primary: this.color === 'primary',
            secondary: this.color === 'secondary',
            warning: this.color === 'warning',
            light: this.color === 'light',
            dark: this.color === 'dark',
            scrollable: this.scrollable
        };
        const style = {
            height: this.height,
            width: this.width,
            padding: this.padding,
            margin: this.margin,
            position: this.position,
        };
        const styles = Object.assign(Object.assign({}, this.styles), style);
        return (index.h("div", { style: styles, class: rootClassNames }, index.h("slot", null)));
    }
};
Container.style = containerCss;

exports.arv_container = Container;
