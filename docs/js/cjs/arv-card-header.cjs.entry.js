'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const cardHeaderCss = ":host{display:block;width:100%}.card-header{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0.5em}";

const CardHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /* oneOf: [default, primary, secondary] */
        this.color = 'default';
    }
    render() {
        const Avatar = () => (index.h("arv-avatar", { imgSrc: this.avatarImage }));
        const Title = () => (index.h("arv-text", null, this.titleHeader));
        const SubHeader = () => (index.h("arv-text", { style: { width: '100%' } }, this.subHeader));
        return (index.h("div", { style: this.styles, class: "card-header" }, index.h("arv-flex", { justify: "between" }, this.avatarImage && index.h(Avatar, null), this.avatarImage && index.h("arv-divider", null), index.h("arv-flex", null, this.titleHeader && index.h(Title, null), this.subHeader && index.h(SubHeader, null)), this.action && this.action)));
    }
};
CardHeader.style = cardHeaderCss;

exports.arv_card_header = CardHeader;
