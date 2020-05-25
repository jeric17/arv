var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8fd6d07a.js';
var multipleInputCss = ".item{margin-bottom:8px}";
var MultipleInput = /** @class */ (function () {
    function MultipleInput(hostRef) {
        registerInstance(this, hostRef);
        this.values = [];
        this.arvAdd = createEvent(this, "arvAdd", 7);
        this.arvUpdate = createEvent(this, "arvUpdate", 7);
        this.arvInputChange = createEvent(this, "arvInputChange", 7);
        this.arvInputEnter = createEvent(this, "arvInputEnter", 7);
        this.arvRemove = createEvent(this, "arvRemove", 7);
    }
    MultipleInput.prototype.triggerUpdate = function (data) {
        if (this.update && typeof this.update === 'function') {
            this.update(data);
        }
        this.arvUpdate.emit(data);
    };
    MultipleInput.prototype.change = function (index, event) {
        event.index = index;
        if (this.inputChange && typeof this.inputChange === 'function') {
            this.inputChange(event);
        }
        this.arvInputChange.emit(event);
        var values = __spreadArrays(this.values);
        values[index] = event.target.value;
        this.triggerUpdate(values);
    };
    MultipleInput.prototype.enter = function (index, event) {
        event.index = index;
        if (this.inputEnter && typeof this.inputEnter === 'function') {
            this.inputEnter(event);
        }
        this.arvInputEnter.emit(event);
    };
    MultipleInput.prototype.addItem = function (event) {
        if (this.add && typeof this.add === 'function') {
            this.add(event);
        }
        this.arvAdd.emit(event);
        this.triggerUpdate(this.values.concat([event.target.value]));
        var addInput = this.el.shadowRoot.querySelector('.addInput');
        addInput.clear();
    };
    MultipleInput.prototype.removeItem = function (index) {
        if (this.removeValue && typeof this.removeValue === 'function') {
            this.removeValue(index);
        }
        this.arvRemove.emit(index);
        var values = __spreadArrays(this.values);
        values.splice(index, 1);
        this.triggerUpdate(values);
    };
    MultipleInput.prototype.render = function () {
        var _this = this;
        return (h("arv-flex", { layout: "column" }, this.values.map(function (value, index) { return (h("arv-flex", { class: "item" }, h("arv-input", { disabled: _this.disabled, value: value }), h("arv-divider", null), h("arv-button", { buttonClick: _this.removeItem.bind(_this, index), variant: "flat-icon", icon: "close" }))); }), h("arv-form-control", null, h("arv-input", { class: "addInput", placeholder: this.placeholder, disabled: this.disabled }))));
    };
    Object.defineProperty(MultipleInput.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return MultipleInput;
}());
MultipleInput.style = multipleInputCss;
export { MultipleInput as arv_multiple_input };
