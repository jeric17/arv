import { Component, State, Event, h } from '@stencil/core';
export class DocNav {
    constructor() {
        this.items = [
            'Accordion',
            'AlertText',
            'Avatar',
            'AvatarGroup',
            'Badge',
            'Button',
            'Checkbox',
            'Chip',
            'Dialog',
            'Flex',
            'Header',
            'Icon',
            'Input',
            'Menu',
            'Paper',
            'ProgressCircular',
            'Radio',
            'Select',
            'Snackbar',
            'Stepper',
            'Switch',
            'Table',
            'Tabs',
            'Tooltip'
        ];
        this.selectedItem = 'Accordion';
        this.click = (itemName) => {
            this.docSelectComponent.emit(itemName);
            this.selectedItem = itemName;
        };
    }
    render() {
        return (h("arv-side-pane", null,
            h("arv-list", null, this.items.map(item => (h("arv-list-item", { "active-color": "light", isActive: this.selectedItem === item, onClick: () => this.click(item) }, item))))));
    }
    static get is() { return "doc-nav"; }
    static get encapsulation() { return "shadow"; }
    static get states() { return {
        "selectedItem": {}
    }; }
    static get events() { return [{
            "method": "docSelectComponent",
            "name": "docSelectComponent",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }]; }
}
