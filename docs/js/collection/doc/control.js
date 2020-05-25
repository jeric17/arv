import { Component, Prop, Event, h } from '@stencil/core';
export class DocControl {
    constructor() {
        this.colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'dark', 'light'];
        this.settings = [];
        this.generateField = (item, index) => {
            const labelWidth = '100px';
            const control = (() => {
                if (item.type === 'color') {
                    return (h("arv-select", { label: item.name || 'color', labelWidth: labelWidth, "flex-direction": "row", value: item.value || 'Select', selectChange: data => {
                            this.dataChange(data, index);
                        }, full: true },
                        h("arv-menu-item", { value: "" }, "None"),
                        this.colors.map((color) => (h("arv-menu-item", { value: color }, color)))));
                }
                if (item.type === 'boolean') {
                    const dataArray = ['true', 'false'];
                    return (h("arv-select", { label: item.name, labelWidth: labelWidth, "flex-direction": "row", value: item.value || 'Select', selectChange: data => {
                            this.dataChange(data, index);
                        }, full: true }, dataArray.map((d) => (h("arv-menu-item", { value: d }, d)))));
                }
                if (item.type === 'size') {
                    const dataArray = ['small', 'normal', 'large'];
                    return (h("arv-select", { label: item.name, labelWidth: labelWidth, "flex-direction": "row", value: item.value || 'Select', selectChange: data => {
                            this.dataChange(data, index);
                        }, full: true }, dataArray.map((d) => (h("arv-menu-item", { value: d }, d)))));
                }
                if (item.type === 'oneOf') {
                    return (h("arv-select", { label: item.name, labelWidth: labelWidth, "flex-direction": "row", value: item.value || 'Select', selectChange: data => {
                            this.dataChange(data, index);
                        }, full: true },
                        h("arv-menu-item", { value: "" }, "None"),
                        item.data.map((d) => (h("arv-menu-item", { value: d }, d)))));
                }
                if (item.type === 'string') {
                    return (h("arv-input", { inputChange: data => {
                            this.dataChange(data, index);
                        }, labelWidth: labelWidth, label: item.name, value: item.value }));
                }
                if (item.type === 'code') {
                    return [
                        h("span", null, item.name),
                        h("pre", null,
                            h("code", null, item.data))
                    ];
                }
            })();
            const description = (() => {
                if (item.description) {
                    return item.description;
                }
                if (item.type === 'size') {
                    return 'Size variant to set.';
                }
                if (item.type === 'color') {
                    return 'Color variant to set.';
                }
            })();
            const controlWidth = (() => {
                if (item.type === 'code') {
                    return { width: '500px', minWidth: '500px' };
                }
                return { width: '300px', minWidth: '300px' };
            })();
            return [
                h("arv-flex", { "align-items": "center" },
                    h("div", { style: controlWidth }, control),
                    h("p", { class: "control-description" }, description)),
                h("arv-spacer", null)
            ];
        };
    }
    render() {
        return (h("arv-flex", { direction: "column" },
            h("h2", null, "Props"),
            h("arv-divider", null),
            h("arv-spacer", null),
            h("arv-flex", { direction: "column", wrap: "wrap", expanded: true }, this.settings.map(this.generateField))));
    }
    dataChange(data, index) {
        this.settings[index].value = data;
        this.settings = this.settings.concat();
        this.docSettingsChange.emit({
            settings: this.settings,
            item: this.settings[index]
        });
    }
    static get is() { return "doc-control"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["control.css"]
    }; }
    static get styleUrls() { return {
        "$": ["control.css"]
    }; }
    static get properties() { return {
        "settings": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "settings",
            "reflect": false,
            "defaultValue": "[]"
        }
    }; }
    static get events() { return [{
            "method": "docSettingsChange",
            "name": "docSettingsChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
