'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const multipleInputCss = ".item{margin-bottom:8px}";

const MultipleInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.values = [];
        this.arvAdd = index.createEvent(this, "arvAdd", 7);
        this.arvUpdate = index.createEvent(this, "arvUpdate", 7);
        this.arvInputChange = index.createEvent(this, "arvInputChange", 7);
        this.arvInputEnter = index.createEvent(this, "arvInputEnter", 7);
        this.arvRemove = index.createEvent(this, "arvRemove", 7);
    }
    triggerUpdate(data) {
        if (this.update && typeof this.update === 'function') {
            this.update(data);
        }
        this.arvUpdate.emit(data);
    }
    change(index, event) {
        event.index = index;
        if (this.inputChange && typeof this.inputChange === 'function') {
            this.inputChange(event);
        }
        this.arvInputChange.emit(event);
        const values = [...this.values];
        values[index] = event.target.value;
        this.triggerUpdate(values);
    }
    enter(index, event) {
        event.index = index;
        if (this.inputEnter && typeof this.inputEnter === 'function') {
            this.inputEnter(event);
        }
        this.arvInputEnter.emit(event);
    }
    addItem(event) {
        if (this.add && typeof this.add === 'function') {
            this.add(event);
        }
        this.arvAdd.emit(event);
        this.triggerUpdate(this.values.concat([event.target.value]));
        const addInput = this.el.shadowRoot.querySelector('.addInput');
        addInput.clear();
    }
    removeItem(index) {
        if (this.removeValue && typeof this.removeValue === 'function') {
            this.removeValue(index);
        }
        this.arvRemove.emit(index);
        const values = [...this.values];
        values.splice(index, 1);
        this.triggerUpdate(values);
    }
    render() {
        return (index.h("arv-flex", { layout: "column" }, this.values.map((value, index$1) => (index.h("arv-flex", { class: "item" }, index.h("arv-input", { disabled: this.disabled, value: value }), index.h("arv-divider", null), index.h("arv-button", { buttonClick: this.removeItem.bind(this, index$1), variant: "flat-icon", icon: "close" })))), index.h("arv-form-control", null, index.h("arv-input", { class: "addInput", placeholder: this.placeholder, disabled: this.disabled }))));
    }
    get el() { return index.getElement(this); }
};
MultipleInput.style = multipleInputCss;

exports.arv_multiple_input = MultipleInput;
