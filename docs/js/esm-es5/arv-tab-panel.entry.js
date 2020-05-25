import { r as registerInstance, h, H as Host } from './index-8fd6d07a.js';
var tabPanelCss = ":host{display:none;height:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:1em}:host(.isActive){display:block}";
var TabPanel = /** @class */ (function () {
    function TabPanel(hostRef) {
        registerInstance(this, hostRef);
    }
    TabPanel.prototype.render = function () {
        var cls = {
            isActive: this.isActive
        };
        return (h(Host, { class: cls }, h("slot", null)));
    };
    return TabPanel;
}());
TabPanel.style = tabPanelCss;
export { TabPanel as arv_tab_panel };
