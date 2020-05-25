import { r as registerInstance, c as createEvent, h, H as Host } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';

const radioCss = ":host{cursor:pointer;position:relative;display:-ms-flexbox;display:flex;margin:4px;-ms-flex-align:center;align-items:center}label{margin:0 1em}input{display:none}:host(.disabled){cursor:not-allowed}:host(.flex-column) label,:host(.flex-column-reverse) label{margin:1em 0}.control{-ms-flex-align:center;align-items:center;border-color:var(--default-highlight);background-color:var(--default-bg);border-radius:100%;border-style:solid;border-width:var(--radio-border-width);-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:20px;-ms-flex-pack:center;justify-content:center;min-height:20px;min-width:20px;padding:var(--radio-padding);-webkit-transition:all 0.3s;transition:all 0.3s;width:20px}.indicator{border-radius:100%;height:100%;width:100%;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transform:scale(0);transform:scale(0);background-color:var(--default-shade)}:host(.checked) .indicator{-webkit-transform:scale(1);transform:scale(1)}:host(.primary.checked) .control{border-color:var(--primary-color)}:host(.primary) .indicator{background-color:var(--primary-shade)}:host(.secondary.checked) .control{border-color:var(--secondary-color)}:host(.secondary) .indicator{background-color:var(--secondary-shade)}:host(.success.checked) .control{border-color:var(--success-color)}:host(.success) .indicator{background-color:var(--success-shade)}:host(.warning.checked) .control{border-color:var(--warning-color)}:host(.warning) .indicator{background-color:var(--warning-shade)}:host(.danger.checked) .control{border-color:var(--danger-color)}:host(.danger) .indicator{background-color:var(--danger-shade)}:host(.dark.checked) .control{border-color:var(--dark-color)}:host(.dark) .indicator{background-color:var(--dark-shade)}:host(.light.checked) .control{border-color:var(--light-color)}:host(.light) .indicator{background-color:var(--light-shade)}:host(.large) .control{min-height:30px;min-width:30px;height:30px;width:30px}:host(.small) .control{min-height:14px;min-width:14px;height:14px;width:14px;border-width:1px}";

const Radio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.change = () => {
            if (this.disabled) {
                return false;
            }
            this.checked = !this.checked;
            this.arvChange.emit(this.checked);
        };
        this.arvChange = createEvent(this, "arvChange", 7);
    }
    render() {
        const hostCls = Object.assign(Object.assign(Object.assign({}, generateAttrValue(this.size)), generateAttrValue(this.color)), { disabled: this.disabled, checked: this.checked });
        let hostStyles = {};
        if (this.flexDirection) {
            hostStyles = {
                flexDirection: this.flexDirection,
            };
            hostCls[`flex-${this.flexDirection}`] = true;
        }
        return (h(Host, { class: hostCls, style: hostStyles, onClick: this.change }, h("label", { class: "label" }, this.label), h("div", { class: "control" }, h("div", { class: "indicator" })), h("input", { disabled: this.disabled, type: "radio", value: this.value, checked: this.checked })));
    }
};
Radio.style = radioCss;

export { Radio as arv_radio };
