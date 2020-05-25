import { r as registerInstance, h, H as Host } from './index-8fd6d07a.js';

const formControlCss = ":host{width:100%}.root{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0.25em 0;padding:0.25em 0;width:100%}";

const FormControl = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
FormControl.style = formControlCss;

export { FormControl as arv_form_control };
