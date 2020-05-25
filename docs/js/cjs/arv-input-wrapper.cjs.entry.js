'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const inputWrapperCss = "arv-input-wrapper input,arv-input-wrapper textarea{font-family:var(--font-family);background-color:#fff;border-radius:var(--radius, 2px);border-width:1px;border-style:solid;border-color:#efefef;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--default-font-color, #343434);font-size:var(--input-font-size, 0.9rem);line-height:2rem;margin:0;outline:none;padding:0 1em;-webkit-transition:all 0.3s;transition:all 0.3s;width:100%}arv-input-wrapper input::-webkit-input-placeholder{color:#999;font-size:0.8rem}arv-input-wrapper input::-moz-placeholder{color:#999;font-size:0.8rem}arv-input-wrapper input:-ms-input-placeholder{color:#999;font-size:0.8rem}arv-input-wrapper input::-ms-input-placeholder{color:#999;font-size:0.8rem}arv-input-wrapper input::placeholder{color:#999;font-size:0.8rem}arv-input-wrapper input:hover,arv-input-wrapper input:focus,arv-input-wrapper textarea:hover,arv-input-wrapper textarea:focus{border-color:var(--primary-color)}arv-input-wrapper{display:block;width:100%}";

const InputWrapper = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "arv-input-wrapper" }, index.h("slot", null)));
    }
};
InputWrapper.style = inputWrapperCss;

exports.arv_input_wrapper = InputWrapper;
