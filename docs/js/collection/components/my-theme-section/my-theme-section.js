import { Component, h, State } from '@stencil/core';
export class MyThemeSection {
    constructor() {
        this.themeSettings = {
            '--primary-color': '#00e5ff',
            '--primary-light-color': '#6effff',
            '--primary-dark-color': '#00b2cc',
            '--primary-text-color': '#000000',
            '--secondary-color': '#7c4dff',
            '--secondary-light-color': '#b47cff',
            '--secondary-dark-color': '#3f1dcb',
            '--secondary-text-color': '#ffffff',
            '--default-color': '#fafafa',
            '--default-light-color': '#ffffff',
            '--default-dark-color': '#c7c7c7',
            '--default-text-color': '#000000',
            '--light-color': '#f5f5f5',
            '--light-text-color': '#c2c2c2',
            '--dark-color': '#263238',
            '--dark-text-color': '#102027',
            '--error-color': '#f44336',
            '--error-light-color': '#ff7961',
            '--error-dark-color': '#ba000d',
            '--error-text-color': '#000000',
            '--warning-color': '#ff9800',
            '--warning-light-color': '#ffc947',
            '--warning-dark-color': '#c66900',
            '--warning-text-color': '#000000',
            '--success-color': '#8bc34a',
            '--success-light-color': '#bef67a',
            '--success-dark-color': '#5a9216',
            '--success-text-color': '#000000',
        };
        this.radius = '2px';
        this.valueChange = event => {
            if (!event) {
                return false;
            }
            const { target: { value, name } } = event;
            const themeSettings = JSON.parse(JSON.stringify(this.themeSettings));
            themeSettings[name] = value;
            this.themeSettings = themeSettings;
            window['themeSettings'] = themeSettings;
            document.body.style.setProperty(name, value);
        };
        this.radiusChange = event => {
            const { target: { value } } = event;
            this.radius = value;
            window['radius'] = this.radius;
            document.body.style.setProperty('--radius', value);
        };
    }
    componentWillLoad() {
        if (window['themeSettings']) {
            this.themeSettings = window['themeSettings'];
        }
        if (window['radius']) {
            this.radius = window['radius'];
        }
    }
    render() {
        const keys = Object.keys(this.themeSettings);
        return (h("arv-flex", { fullHeight: true, layout: "column", padded: true },
            h("arv-text", null, "Theming"),
            h("arv-divider", null),
            h("arv-text", null, "Arv ui library uses css variables to control the overall theme"),
            h("arv-divider", null),
            h("arv-text", null, "Current theme settings:"),
            keys.map((item) => (h("arv-flex", { items: "end" },
                h("arv-input", { name: item, label: item, value: this.themeSettings[item] }),
                h("arv-divider", { "is-vertical": true }),
                h("arv-input", { type: "color", name: item, value: this.themeSettings[item] })))),
            h("arv-input", { label: "--radius", value: this.radius }),
            h("arv-divider", null)));
    }
    static get is() { return "my-theme-section"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-theme-section.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-theme-section.css"]
    }; }
    static get states() { return {
        "themeSettings": {},
        "radius": {}
    }; }
}
