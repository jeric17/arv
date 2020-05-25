import { r as registerInstance, h, H as Host } from './index-8fd6d07a.js';
var badgeCss = ":host{position:relative}.value{background-color:var(--badge-color);color:var(--badge-text-color);min-width:20px;height:20px;border-radius:20px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:0.8em;position:absolute;top:-10px;right:-10px;padding:0 4px;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.arv-invisible) .value{display:none}";
var Badge = /** @class */ (function () {
    function Badge(hostRef) {
        registerInstance(this, hostRef);
    }
    Badge.prototype.render = function () {
        var cls = {
            'arv-invisible': this.invisible
        };
        var val = (!this.disableComma && this.value) ?
            Number(this.value).toLocaleString() :
            this.value;
        return (h(Host, { class: cls }, h("div", { class: "value" }, val), h("slot", null)));
    };
    return Badge;
}());
Badge.style = badgeCss;
export { Badge as arv_badge };
