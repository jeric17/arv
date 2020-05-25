'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const formControlCss = ":host{width:100%}.root{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0.25em 0;padding:0.25em 0;width:100%}";

const FormControl = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
FormControl.style = formControlCss;

exports.arv_form_control = FormControl;
