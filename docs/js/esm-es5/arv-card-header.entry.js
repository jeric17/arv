import { r as registerInstance, h } from './index-8fd6d07a.js';
var cardHeaderCss = ":host{display:block;width:100%}.card-header{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0.5em}";
var CardHeader = /** @class */ (function () {
    function CardHeader(hostRef) {
        registerInstance(this, hostRef);
        /* oneOf: [default, primary, secondary] */
        this.color = 'default';
    }
    CardHeader.prototype.render = function () {
        var _this = this;
        var Avatar = function () { return (h("arv-avatar", { imgSrc: _this.avatarImage })); };
        var Title = function () { return (h("arv-text", null, _this.titleHeader)); };
        var SubHeader = function () { return (h("arv-text", { style: { width: '100%' } }, _this.subHeader)); };
        return (h("div", { style: this.styles, class: "card-header" }, h("arv-flex", { justify: "between" }, this.avatarImage && h(Avatar, null), this.avatarImage && h("arv-divider", null), h("arv-flex", null, this.titleHeader && h(Title, null), this.subHeader && h(SubHeader, null)), this.action && this.action)));
    };
    return CardHeader;
}());
CardHeader.style = cardHeaderCss;
export { CardHeader as arv_card_header };
