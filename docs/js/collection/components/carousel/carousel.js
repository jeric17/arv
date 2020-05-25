import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';
export class Carousel {
    constructor() {
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
        return (h("div", { class: "root" },
            h("div", { class: "content" },
                Boolean(this.imageSource.length) && h(ImageContent, null),
                !Boolean(this.imageSource.length) && (h("arv-flex", { justify: "center", items: "center" },
                    h("arv-icon", { icon: "image" })))),
            h("div", { class: "control" },
                h("arv-flex", { justify: "between", items: "center" },
                    this.imageSource.length > 1 && (h("div", { onClick: this.clickLeft.bind(this), class: "control-item control-item__left" },
                        h("arv-flex", { justify: "center", items: "center" },
                            h("arv-button", { color: "light", size: "large", icon: "chevron_left", variant: "ghost-icon" })))),
                    Boolean(this.externalUrl) && (h("a", { href: this.externalUrl, target: this.target, "aria-hidden": "true", class: "middle" })),
                    this.imageSource.length > 1 && (h("div", { onClick: this.clickRight.bind(this), class: "control-item control-item__right" },
                        h("arv-flex", { justify: "center", items: "center" },
                            h("arv-button", { color: "light", size: "large", icon: "chevron_right", variant: "ghost-icon" }))))))));
    }
    static get is() { return "arv-carousel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["carousel.css"]
    }; }
    static get styleUrls() { return {
        "$": ["carousel.css"]
    }; }
    static get properties() { return {
        "externalUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "external-url",
            "reflect": false
        },
        "images": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "images",
            "reflect": false
        },
        "loading": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "loading",
            "reflect": false
        },
        "target": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "target",
            "reflect": false
        }
    }; }
    static get states() { return {
        "imageSource": {},
        "transitioning": {},
        "currentIndex": {},
        "direction": {}
    }; }
    static get watchers() { return [{
            "propName": "images",
            "methodName": "handleImages"
        }]; }
    static get listeners() { return [{
            "name": "touchstart",
            "method": "handleTouchStart",
            "target": undefined,
            "capture": false,
            "passive": true
        }, {
            "name": "touchend",
            "method": "handleTouchEnd",
            "target": undefined,
            "capture": false,
            "passive": true
        }]; }
}
