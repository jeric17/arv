'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const cardMediaCss = ":host{width:100%}.arv-card-media{padding-top:var(--card-media-height);background-position:center;background-size:cover;background-color:#efefef}";

const CardMedia = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const styles = {
            'background-image': `url(${this.imageSrc})`
        };
        return (index.h("div", { class: "arv-card-media", style: styles }));
    }
};
CardMedia.style = cardMediaCss;

exports.arv_card_media = CardMedia;
