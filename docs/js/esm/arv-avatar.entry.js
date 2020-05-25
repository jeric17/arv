import { r as registerInstance, h, H as Host } from './index-8fd6d07a.js';

const avatarCss = ":host{background-color:var(--default-shade);border-radius:100%;display:block;height:var(--avatar-normal);min-height:var(--avatar-normal);min-width:var(--avatar-normal);overflow:hidden;width:var(--avatar-normal)}img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}:host(.small){height:var(--avatar-small);min-height:var(--avatar-small);min-width:var(--avatar-small);width:var(--avatar-small)}:host(.large){height:var(--avatar-large);min-height:var(--avatar-large);min-width:var(--avatar-large);width:var(--avatar-large)}";

const Avatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { class: cls }, h("img", { src: this.imgSrc, alt: this.alt })));
    }
};
Avatar.style = avatarCss;

export { Avatar as arv_avatar };
