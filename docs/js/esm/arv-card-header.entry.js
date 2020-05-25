import { r as registerInstance, h } from './index-8fd6d07a.js';

const cardHeaderCss = ":host{display:block;width:100%}.card-header{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0.5em}";

const CardHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /* oneOf: [default, primary, secondary] */
        this.color = 'default';
    }
    render() {
        const Avatar = () => (h("arv-avatar", { imgSrc: this.avatarImage }));
        const Title = () => (h("arv-text", null, this.titleHeader));
        const SubHeader = () => (h("arv-text", { style: { width: '100%' } }, this.subHeader));
        return (h("div", { style: this.styles, class: "card-header" }, h("arv-flex", { justify: "between" }, this.avatarImage && h(Avatar, null), this.avatarImage && h("arv-divider", null), h("arv-flex", null, this.titleHeader && h(Title, null), this.subHeader && h(SubHeader, null)), this.action && this.action)));
    }
};
CardHeader.style = cardHeaderCss;

export { CardHeader as arv_card_header };
