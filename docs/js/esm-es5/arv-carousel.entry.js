import { r as registerInstance, h } from './index-8fd6d07a.js';
var carouselCss = ":host,.root{position:relative;height:100%;width:100%;overflow:hidden;background-color:#efefef}@-webkit-keyframes right-to-left{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(0%);transform:translateX(0%)}}@keyframes right-to-left{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(0%);transform:translateX(0%)}}.content,.imageContent,.imageContentItem{height:100%}.imageContent{display:-ms-flexbox;display:flex;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.imageContentItem{background-position:center;background-size:cover;min-width:100%;width:100%}.control{position:absolute;top:0;height:100%;width:100%;z-index:1}.right{animation:right-to-left 0.5s reverse ease-in-out}.left{-webkit-animation:right-to-left 0.5s ease-in-out;animation:right-to-left 0.5s ease-in-out}.control-item{--light-text-color:#fff;--default-light-color:transparent;display:none;height:100%;cursor:pointer}.middle{display:block;width:100%;height:100%}.root:hover .control-item{display:var(--show-controls, block)}.control-item__left{background:-webkit-gradient(linear, right top, left top, from(transparent), to(rgba(0, 0, 0, 0.25))) !important;background:linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%) !important}.control-item__right{background:-webkit-gradient(linear, left top, right top, from(transparent), to(rgba(0, 0, 0, 0.25))) !important;background:linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%) !important}";
var Carousel = /** @class */ (function () {
    function Carousel(hostRef) {
        registerInstance(this, hostRef);
        this.imageSource = [];
        this.transitioning = true;
        this.currentIndex = 0;
    }
    Carousel.prototype.handleImages = function () {
        this.load();
    };
    Carousel.prototype.handleTouchStart = function (event) {
        var touch = event.changedTouches[0];
        this.touchX = touch.clientX;
    };
    Carousel.prototype.handleTouchEnd = function (event) {
        var touch = event.changedTouches[0];
        var clientX = touch.clientX;
        if (this.touchX < clientX) {
            this.clickLeft();
        }
        else {
            this.clickRight();
        }
        this.touchX = 0;
    };
    Carousel.prototype.componentWillLoad = function () {
        this.load();
    };
    Carousel.prototype.load = function () {
        if (!this.images) {
            this.imageSource = [];
            return false;
        }
        if (typeof this.images !== 'string') {
            this.imageSource = this.images;
            return false;
        }
        try {
            var images = JSON.parse(this.images);
            this.imageSource = images;
        }
        catch (e) {
            console.error(e);
        }
    };
    Carousel.prototype._componentDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.transitioning = false;
            _this.direction = '';
        }, 300);
    };
    Carousel.prototype.clickRight = function () {
        var _this = this;
        var index = this.currentIndex;
        if (index >= this.imageSource.length - 1) {
            index = 0;
        }
        else {
            index += 1;
        }
        this.currentIndex = index;
        this.direction = 'right';
        this.transitioning = true;
        setTimeout(function () {
            _this.transitioning = false;
            _this.direction = '';
        }, 500);
    };
    Carousel.prototype.clickLeft = function () {
        var _this = this;
        var index = this.currentIndex;
        if (!index) {
            index = this.imageSource.length - 1;
        }
        else {
            index -= 1;
        }
        this.currentIndex = index;
        this.direction = 'left';
        this.transitioning = true;
        setTimeout(function () {
            _this.transitioning = false;
            _this.direction = '';
        }, 500);
    };
    Carousel.prototype.render = function () {
        var _this = this;
        var ImageContent = function () {
            var classNames = {
                imageContent: true,
                right: _this.direction === 'right',
                left: _this.direction === 'left',
            };
            var content = (function () {
                var _c = _this.imageSource.slice(_this.currentIndex, _this.currentIndex + 2);
                var l = _this.imageSource.length;
                if (_this.direction === 'left' && _this.currentIndex === l - 1) {
                    return [_this.imageSource[l - 1], _this.imageSource[0], _this.imageSource[l - 1]];
                }
                if (_this.direction === 'left') {
                    return _c;
                }
                if (_this.currentIndex === 0) {
                    return [_this.imageSource[l - 1]].concat(_c);
                }
                if (_this.currentIndex === (l - 1)) {
                    return _this.imageSource.slice(l - 2, l).concat(_this.imageSource[0]);
                }
                if (_this.currentIndex > (l - 1)) {
                    return [_this.imageSource[l - 1], _this.imageSource[0], _this.imageSource[l - 1]];
                }
                var sliced = _this.imageSource.slice(_this.currentIndex - 1, _this.currentIndex + 2);
                return sliced;
            })();
            return (h("div", { class: classNames }, content.map(function (d) {
                var bg = "url(" + d.imageUrl + ")";
                return (h("div", { class: "imageContentItem", style: { 'background-image': bg } }));
            })));
        };
        return (h("div", { class: "root" }, h("div", { class: "content" }, Boolean(this.imageSource.length) && h(ImageContent, null), !Boolean(this.imageSource.length) && (h("arv-flex", { justify: "center", items: "center" }, h("arv-icon", { icon: "image" })))), h("div", { class: "control" }, h("arv-flex", { justify: "between", items: "center" }, this.imageSource.length > 1 && (h("div", { onClick: this.clickLeft.bind(this), class: "control-item control-item__left" }, h("arv-flex", { justify: "center", items: "center" }, h("arv-button", { color: "light", size: "large", icon: "chevron_left", variant: "ghost-icon" })))), Boolean(this.externalUrl) && (h("a", { href: this.externalUrl, target: this.target, "aria-hidden": "true", class: "middle" })), this.imageSource.length > 1 && (h("div", { onClick: this.clickRight.bind(this), class: "control-item control-item__right" }, h("arv-flex", { justify: "center", items: "center" }, h("arv-button", { color: "light", size: "large", icon: "chevron_right", variant: "ghost-icon" }))))))));
    };
    Object.defineProperty(Carousel, "watchers", {
        get: function () {
            return {
                "images": ["handleImages"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return Carousel;
}());
Carousel.style = carouselCss;
export { Carousel as arv_carousel };
