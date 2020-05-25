import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8fd6d07a.js';

const draggableCss = ".top,.bottom{min-height:2px;height:4px}.topContent{-webkit-animation:show;animation:show}.isTopOver,.isBottomOver,.isTopOver.horizontalLine,.isBottomOver.horizontalLine{background-color:var(--primary-color)}arv-icon{--default-icon-color:#565656;cursor:move}.disabled arv-icon{cursor:not-allowed}.primary arv-icon{--default-icon-color:var(--primary-color)}.secondary arv-icon{--default-icon-color:var(--secondary-color)}.slotWrapper{position:relative;z-index:1;display:block}.horizontal{display:-ms-flexbox;display:flex;position:relative;padding:0 2px;-webkit-box-sizing:border-box;box-sizing:border-box}.horizontalLine{width:2px;position:absolute;height:100%}.isBottomOver.horizontalLine{right:0}";

const Draggable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showIcon = true;
        this.color = 'default';
        this.disabled = false;
        this.direction = 'vertical';
        this.onDragOver = (evt) => {
            evt.preventDefault();
            this.isOver = true;
            this.applyEvent(evt, 'over', 'itemOver');
        };
        this.onDragStart = (evt) => {
            console.log('dragstart');
            evt.dataTransfer.dropEffect = 'copy';
            this.applyEvent(evt, 'start', 'itemStart');
        };
        this.onDragEnter = (evt) => {
            console.log('dragenter');
            this.applyEvent(evt, 'enter', 'itemEnter');
        };
        this.onDragLeave = (evt) => {
            this.applyEvent(evt, 'leave', 'itemLeave');
            this.isOver = false;
        };
        this.onDragEnd = (evt) => {
            this.applyEvent(evt, 'end', 'itemEnd');
        };
        this.onDragExit = (evt) => {
            this.applyEvent(evt, 'exit', 'itemExit');
        };
        this.onDrag = (evt) => {
            console.log('drag');
            this.applyEvent(evt, 'drag', 'itemDrag');
        };
        this.onDrop = (evt) => {
            console.log('draggable', evt);
            evt.preventDefault();
            const key = evt.dataTransfer.getData('Text');
            this.applyEvent(evt, 'drop', 'itemDrop', {
                target: key
            });
        };
        this.onDragTop = () => {
            if (this.isTopOver) {
                return false;
            }
            this.isTopOver = true;
        };
        this.onDragLeaveTop = () => {
            this.isTopOver = false;
        };
        this.onDropTop = (evt) => {
            evt.preventDefault();
            this.isTopOver = false;
            const key = evt.dataTransfer.getData('Text');
            this.applyEvent(evt, 'dropTop', 'itemDropTop', {
                target: key
            });
            this.applyEvent(evt, 'dropLeft', 'itemDropLeft', {
                target: key
            });
        };
        this.onDragBottom = () => {
            if (this.isBottomOver) {
                return false;
            }
            this.isBottomOver = true;
        };
        this.onDragLeaveBottom = () => {
            this.isBottomOver = false;
        };
        this.onDropBottom = (evt) => {
            evt.preventDefault();
            this.isBottomOver = false;
            const key = evt.dataTransfer.getData('Text');
            this.applyEvent(evt, 'dropBottom', 'itemDropBottom', {
                target: key
            });
            this.applyEvent(evt, 'dropRight', 'itemDropRight', {
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
    applyEvent(evt, propName, eventName, options = {}) {
        evt.dataTransfer.setData('text/plain', this.hashKey);
        if (this[propName]) {
            this[propName](evt, this.hashKey, options);
        }
        const data = {
            dragEvent: evt,
            key: this.hashKey
        };
        this[eventName].emit(Object.assign(Object.assign({}, data), options));
    }
    render() {
        const isVertical = this.direction === 'vertical';
        const rootClass = {
            draggable: true,
            isOver: this.isOver,
            primary: this.color === 'primary',
            secondary: this.color === 'secondary',
            disabled: this.disabled,
            horizontal: !isVertical
        };
        const topClass = {
            top: true,
            isTopOver: this.isTopOver,
            horizontalLine: !isVertical
        };
        const bottomClass = {
            bottom: true,
            isBottomOver: this.isBottomOver,
            horizontalLine: !isVertical
        };
        return (h("div", { class: rootClass, onDragEnd: this.onDragEnd, onDragExit: this.onDragExit, onDragEnter: this.onDragEnter, onDragLeave: this.onDragLeave, onDragOver: this.onDragOver, onDragStart: this.onDragStart, onDrop: this.onDrop, onDrag: this.onDrag, draggable: !this.disabled }, h("div", { class: topClass, onDragEnter: this.onDragTop, onDragLeave: this.onDragLeaveTop, onDrop: this.onDropTop }), h("arv-flex", { class: "slotWrapper", items: "center" }, this.showIcon && (h("arv-icon", { icon: "drag_indicator", noMargin: true })), h("slot", null)), h("slot", null), this.isLast && (h("div", { class: bottomClass, onDragEnter: this.onDragBottom, onDragLeave: this.onDragLeaveBottom, onDrop: this.onDropBottom }))));
    }
    get el() { return getElement(this); }
};
Draggable.style = draggableCss;

export { Draggable as arv_draggable };
