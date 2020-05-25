import { r as registerInstance, h } from './index-8fd6d07a.js';
var cardMediaCss = ":host{width:100%}.arv-card-media{padding-top:var(--card-media-height);background-position:center;background-size:cover;background-color:#efefef}";
var CardMedia = /** @class */ (function () {
    function CardMedia(hostRef) {
        registerInstance(this, hostRef);
    }
    CardMedia.prototype.render = function () {
        var styles = {
            'background-image': "url(" + this.imageSrc + ")"
        };
        return (h("div", { class: "arv-card-media", style: styles }));
    };
    return CardMedia;
}());
CardMedia.style = cardMediaCss;
export { CardMedia as arv_card_media };
