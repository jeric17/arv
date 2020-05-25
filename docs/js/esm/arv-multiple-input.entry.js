import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8fd6d07a.js';

const multipleInputCss = ".item{margin-bottom:8px}";

const MultipleInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.values = [];
        this.arvAdd = createEvent(this, "arvAdd", 7);
        this.arvUpdate = createEvent(this, "arvUpdate", 7);
        this.arvInputChange = createEvent(this, "arvInputChange", 7);
        this.arvInputEnter = createEvent(this, "arvInputEnter", 7);
        this.arvRemove = createEvent(this, "arvRemove", 7);
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
        return (h("arv-flex", { layout: "column" }, this.values.map((value, index) => (h("arv-flex", { class: "item" }, h("arv-input", { disabled: this.disabled, value: value }), h("arv-divider", null), h("arv-button", { buttonClick: this.removeItem.bind(this, index), variant: "flat-icon", icon: "close" })))), h("arv-form-control", null, h("arv-input", { class: "addInput", placeholder: this.placeholder, disabled: this.disabled }))));
    }
    get el() { return getElement(this); }
};
MultipleInput.style = multipleInputCss;

export { MultipleInput as arv_multiple_input };
