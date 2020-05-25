import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8fd6d07a.js';
var draggableCss = ".top,.bottom{min-height:2px;height:4px}.topContent{-webkit-animation:show;animation:show}.isTopOver,.isBottomOver,.isTopOver.horizontalLine,.isBottomOver.horizontalLine{background-color:var(--primary-color)}arv-icon{--default-icon-color:#565656;cursor:move}.disabled arv-icon{cursor:not-allowed}.primary arv-icon{--default-icon-color:var(--primary-color)}.secondary arv-icon{--default-icon-color:var(--secondary-color)}.slotWrapper{position:relative;z-index:1;display:block}.horizontal{display:-ms-flexbox;display:flex;position:relative;padding:0 2px;-webkit-box-sizing:border-box;box-sizing:border-box}.horizontalLine{width:2px;position:absolute;height:100%}.isBottomOver.horizontalLine{right:0}";
var Draggable = /** @class */ (function () {
    function Draggable(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.showIcon = true;
        this.color = 'default';
        this.disabled = false;
        this.direction = 'vertical';
        this.onDragOver = function (evt) {
            evt.preventDefault();
            _this.isOver = true;
            _this.applyEvent(evt, 'over', 'itemOver');
        };
        this.onDragStart = function (evt) {
            console.log('dragstart');
            evt.dataTransfer.dropEffect = 'copy';
            _this.applyEvent(evt, 'start', 'itemStart');
        };
        this.onDragEnter = function (evt) {
            console.log('dragenter');
            _this.applyEvent(evt, 'enter', 'itemEnter');
        };
        this.onDragLeave = function (evt) {
            _this.applyEvent(evt, 'leave', 'itemLeave');
            _this.isOver = false;
        };
        this.onDragEnd = function (evt) {
            _this.applyEvent(evt, 'end', 'itemEnd');
        };
        this.onDragExit = function (evt) {
            _this.applyEvent(evt, 'exit', 'itemExit');
        };
        this.onDrag = function (evt) {
            console.log('drag');
            _this.applyEvent(evt, 'drag', 'itemDrag');
        };
        this.onDrop = function (evt) {
            console.log('draggable', evt);
            evt.preventDefault();
            var key = evt.dataTransfer.getData('Text');
            _this.applyEvent(evt, 'drop', 'itemDrop', {
                target: key
            });
        };
        this.onDragTop = function () {
            if (_this.isTopOver) {
                return false;
            }
            _this.isTopOver = true;
        };
        this.onDragLeaveTop = function () {
            _this.isTopOver = false;
        };
        this.onDropTop = function (evt) {
            evt.preventDefault();
            _this.isTopOver = false;
            var key = evt.dataTransfer.getData('Text');
            _this.applyEvent(evt, 'dropTop', 'itemDropTop', {
                target: key
            });
            _this.applyEvent(evt, 'dropLeft', 'itemDropLeft', {
                target: key
            });
        };
        this.onDragBottom = function () {
            if (_this.isBottomOver) {
                return false;
            }
            _this.isBottomOver = true;
        };
        this.onDragLeaveBottom = function () {
            _this.isBottomOver = false;
        };
        this.onDropBottom = function (evt) {
            evt.preventDefault();
            _this.isBottomOver = false;
            var key = evt.dataTransfer.getData('Text');
            _this.applyEvent(evt, 'dropBottom', 'itemDropBottom', {
                target: key
            });
            _this.applyEvent(evt, 'dropRight', 'itemDropRight', {
                target: key
            });
        };
        this.itemDrag = createEvent(this, "itemDrag", 7);
        this.itemDrop = createEvent(this, "itemDrop", 7);
        this.itemStart = createEvent(this, "itemStart", 7);
        this.itemOver = createEvent(this, "itemOver", 7);
        this.itemEnter = createEvent(this, "itemEnter", 7);
        this.itemEnd = createEvent(this, "itemEnd", 7);
        this.itemExit = createEvent(this, "itemExit", 7);
        this.itemLeave = createEvent(this, "itemLeave", 7);
        this.itemDropTop = createEvent(this, "itemDropTop", 7);
        this.itemDropBottom = createEvent(this, "itemDropBottom", 7);
        this.itemDropLeft = createEvent(this, "itemDropLeft", 7);
        this.itemDropRight = createEvent(this, "itemDropRight", 7);
    }
    Draggable.prototype.applyEvent = function (evt, propName, eventName, options) {
        if (options === void 0) { options = {}; }
        evt.dataTransfer.setData('text/plain', this.hashKey);
        if (this[propName]) {
            this[propName](evt, this.hashKey, options);
        }
        var data = {
            dragEvent: evt,
            key: this.hashKey
        };
        this[eventName].emit(Object.assign(Object.assign({}, data), options));
    };
    Draggable.prototype.render = function () {
        var isVertical = this.direction === 'vertical';
        var rootClass = {
            draggable: true,
            isOver: this.isOver,
            primary: this.color === 'primary',
            secondary: this.color === 'secondary',
            disabled: this.disabled,
            horizontal: !isVertical
        };
        var topClass = {
            top: true,
            isTopOver: this.isTopOver,
            horizontalLine: !isVertical
        };
        var bottomClass = {
            bottom: true,
            isBottomOver: this.isBottomOver,
            horizontalLine: !isVertical
        };
        return (h("div", { class: rootClass, onDragEnd: this.onDragEnd, onDragExit: this.onDragExit, onDragEnter: this.onDragEnter, onDragLeave: this.onDragLeave, onDragOver: this.onDragOver, onDragStart: this.onDragStart, onDrop: this.onDrop, onDrag: this.onDrag, draggable: !this.disabled }, h("div", { class: topClass, onDragEnter: this.onDragTop, onDragLeave: this.onDragLeaveTop, onDrop: this.onDropTop }), h("arv-flex", { class: "slotWrapper", items: "center" }, this.showIcon && (h("arv-icon", { icon: "drag_indicator", noMargin: true })), h("slot", null)), h("slot", null), this.isLast && (h("div", { class: bottomClass, onDragEnter: this.onDragBottom, onDragLeave: this.onDragLeaveBottom, onDrop: this.onDropBottom }))));
    };
    Object.defineProperty(Draggable.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Draggable;
}());
Draggable.style = draggableCss;
export { Draggable as arv_draggable };
