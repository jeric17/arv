import { r as registerInstance, h } from './index-8fd6d07a.js';

const carouselCss = ":host,.root{position:relative;height:100%;width:100%;overflow:hidden;background-color:#efefef}@-webkit-keyframes right-to-left{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(0%);transform:translateX(0%)}}@keyframes right-to-left{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(0%);transform:translateX(0%)}}.content,.imageContent,.imageContentItem{height:100%}.imageContent{display:-ms-flexbox;display:flex;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.imageContentItem{background-position:center;background-size:cover;min-width:100%;width:100%}.control{position:absolute;top:0;height:100%;width:100%;z-index:1}.right{animation:right-to-left 0.5s reverse ease-in-out}.left{-webkit-animation:right-to-left 0.5s ease-in-out;animation:right-to-left 0.5s ease-in-out}.control-item{--light-text-color:#fff;--default-light-color:transparent;display:none;height:100%;cursor:pointer}.middle{display:block;width:100%;height:100%}.root:hover .control-item{display:var(--show-controls, block)}.control-item__left{background:-webkit-gradient(linear, right top, left top, from(transparent), to(rgba(0, 0, 0, 0.25))) !important;background:linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%) !important}.control-item__right{background:-webkit-gradient(linear, left top, right top, from(transparent), to(rgba(0, 0, 0, 0.25))) !important;background:linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%) !important}";

const Carousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.imageSource = [];
        this.transitioning = true;
        this.currentIndex = 0;
    }
    handleImages() {
        this.load();
    }
    handleTouchStart(event) {
        const touch = event.changedTouches[0];
        this.touchX = touch.clientX;
    }
    handleTouchEnd(event) {
        const touch = event.changedTouches[0];
        const { clientX } = touch;
        if (this.touchX < clientX) {
            this.clickLeft();
        }
        else {
            this.clickRight();
        }
        this.touchX = 0;
    }
    componentWillLoad() {
        this.load();
    }
    load() {
        if (!this.images) {
            this.imageSource = [];
            return false;
        }
        if (typeof this.images !== 'string') {
            this.imageSource = this.images;
            return false;
        }
        try {
            const images = JSON.parse(this.images);
            this.imageSource = images;
        }
        catch (e) {
            console.error(e);
        }
    }
    _componentDidLoad() {
        setTimeout(() => {
            this.transitioning = false;
            this.direction = '';
        }, 300);
    }
    clickRight() {
        let index = this.currentIndex;
        if (index >= this.imageSource.length - 1) {
            index = 0;
        }
        else {
            index += 1;
        }
        this.currentIndex = index;
        this.direction = 'right';
        this.transitioning = true;
        setTimeout(() => {
            this.transitioning = false;
            this.direction = '';
        }, 500);
    }
    clickLeft() {
        let index = this.currentIndex;
        if (!index) {
            index = this.imageSource.length - 1;
        }
        else {
            index -= 1;
        }
        this.currentIndex = index;
        this.direction = 'left';
        this.transitioning = true;
        setTimeout(() => {
            this.transitioning = false;
            this.direction = '';
        }, 500);
    }
    render() {
        const ImageContent = () => {
            const classNames = {
                imageContent: true,
                right: this.direction === 'right',
                left: this.direction === 'left',
            };
            const content = (() => {
                const _c = this.imageSource.slice(this.currentIndex, this.currentIndex + 2);
                const l = this.imageSource.length;
                if (this.direction === 'left' && this.currentIndex === l - 1) {
                    return [this.imageSource[l - 1], this.imageSource[0], this.imageSource[l - 1]];
                }
                if (this.direction === 'left') {
                    return _c;
                }
                if (this.currentIndex === 0) {
                    return [this.imageSource[l - 1]].concat(_c);
                }
                if (this.currentIndex === (l - 1)) {
                    return this.imageSource.slice(l - 2, l).concat(this.imageSource[0]);
                }
                if (this.currentIndex > (l - 1)) {
                    return [this.imageSource[l - 1], this.imageSource[0], this.imageSource[l - 1]];
                }
                const sliced = this.imageSource.slice(this.currentIndex - 1, this.currentIndex + 2);
                return sliced;
            })();
            return (h("div", { class: classNames }, content.map(d => {
                const bg = `url(${d.imageUrl})`;
                return (h("div", { class: "imageContentItem", style: { 'background-image': bg } }));
            })));
        };
        return (h("div", { class: "root" }, h("div", { class: "content" }, Boolean(this.imageSource.length) && h(ImageContent, null), !Boolean(this.imageSource.length) && (h("arv-flex", { justify: "center", items: "center" }, h("arv-icon", { icon: "image" })))), h("div", { class: "control" }, h("arv-flex", { justify: "between", items: "center" }, this.imageSource.length > 1 && (h("div", { onClick: this.clickLeft.bind(this), class: "control-item control-item__left" }, h("arv-flex", { justify: "center", items: "center" }, h("arv-button", { color: "light", size: "large", icon: "chevron_left", variant: "ghost-icon" })))), Boolean(this.externalUrl) && (h("a", { href: this.externalUrl, target: this.target, "aria-hidden": "true", class: "middle" })), this.imageSource.length > 1 && (h("div", { onClick: this.clickRight.bind(this), class: "control-item control-item__right" }, h("arv-flex", { justify: "center", items: "center" }, h("arv-button", { color: "light", size: "large", icon: "chevron_right", variant: "ghost-icon" }))))))));
    }
    static get watchers() { return {
        "images": ["handleImages"]
    }; }
};
Carousel.style = carouselCss;

export { Carousel as arv_carousel };
