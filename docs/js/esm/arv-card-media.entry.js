import { r as registerInstance, h } from './index-8fd6d07a.js';

const cardMediaCss = ":host{width:100%}.arv-card-media{padding-top:var(--card-media-height);background-position:center;background-size:cover;background-color:#efefef}";

const CardMedia = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const styles = {
            'background-image': `url(${this.imageSrc})`
        };
        return (h("div", { class: "arv-card-media", style: styles }));
    }
};
CardMedia.style = cardMediaCss;

export { CardMedia as arv_card_media };
