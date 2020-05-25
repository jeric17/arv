'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const avatarCss = ":host{background-color:var(--default-shade);border-radius:100%;display:block;height:var(--avatar-normal);min-height:var(--avatar-normal);min-width:var(--avatar-normal);overflow:hidden;width:var(--avatar-normal)}img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}:host(.small){height:var(--avatar-small);min-height:var(--avatar-small);min-width:var(--avatar-small);width:var(--avatar-small)}:host(.large){height:var(--avatar-large);min-height:var(--avatar-large);min-width:var(--avatar-large);width:var(--avatar-large)}";

const Avatar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Size variant to set.
         */
        this.size = 'normal';
    }
    render() {
        const cls = {
            small: this.size === 'small',
            normal: this.size === 'normal',
            large: this.size === 'large',
        };
        return (index.h(index.Host, { class: cls }, index.h("img", { src: this.imgSrc, alt: this.alt })));
    }
};
Avatar.style = avatarCss;

exports.arv_avatar = Avatar;
