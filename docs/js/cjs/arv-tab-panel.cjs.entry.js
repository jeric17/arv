'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const tabPanelCss = ":host{display:none;height:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:1em}:host(.isActive){display:block}";

const TabPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const cls = {
            isActive: this.isActive
        };
        return (index.h(index.Host, { class: cls }, index.h("slot", null)));
    }
};
TabPanel.style = tabPanelCss;

exports.arv_tab_panel = TabPanel;
