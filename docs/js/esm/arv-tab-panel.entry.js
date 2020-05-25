import { r as registerInstance, h, H as Host } from './index-8fd6d07a.js';

const tabPanelCss = ":host{display:none;height:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:1em}:host(.isActive){display:block}";

const TabPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const cls = {
            isActive: this.isActive
        };
        return (h(Host, { class: cls }, h("slot", null)));
    }
};
TabPanel.style = tabPanelCss;

export { TabPanel as arv_tab_panel };
