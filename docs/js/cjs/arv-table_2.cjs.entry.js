'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');
const helpers = require('./helpers-72bf351a.js');

const tableCss = ":host{width:100%;border-radius:var(--radius);background-color:var(--default-bg);overflow:hidden;-webkit-box-shadow:0 1px 3px 1px rgba(0, 0, 0, 0.08), 0 2px 3px rgba(0,0,0,0.12);box-shadow:0 1px 3px 1px rgba(0, 0, 0, 0.08), 0 2px 3px rgba(0,0,0,0.12)}.table{position:relative;width:100%;overflow:hidden;border-spacing:0;border-collapse:collapse;color:var(--font-color)}.table-title{font-size:1.2rem;margin:0.5em}.td,.th{font-weight:normal;text-align:left;padding:1rem 2.5rem 1rem 1rem;border-bottom-width:1px;border-bottom-style:solid;border-color:var(--default-highlight)}.th{font-size:0.8rem;opacity:0.8}.td{font-size:0.9rem}tr{-webkit-transition:background-color 0.3s;transition:background-color 0.3s}tbody tr:hover{background-color:var(--default-highlight)}tbody tr:hover .controls{opacity:1}.rowItemArrayItem{margin:0 .5em 0.5em 0;border-width:1px;border-style:solid;border-color:var(--default-shade);border-radius:var(--radius);padding:0.25em 0.5em;font-size:0.8rem;white-space:pre-wrap}.controls{opacity:0}.trClickable{cursor:pointer}:host(.primary){background-color:var(--primary-color);color:var(--primary-text-color)}:host(.primary) .table{color:var(--primary-text-color)}:host(.primary) tbody tr:hover{background-color:var(--primary-shade)}:host(.primary) td,:host(.primary) th,:host(.primary) .rowItemArrayItem{border-color:var(--primary-highlight)}:host(.secondary){background-color:var(--secondary-color);color:var(--secondary-text-color)}:host(.secondary) .table{color:var(--secondary-text-color)}:host(.secondary) tbody tr:hover{background-color:var(--secondary-shade)}:host(.secondary) td,:host(.secondary) th,:host(.secondary) .rowItemArrayItem{border-color:var(--secondary-highlight)}:host(.success){background-color:var(--success-color);color:var(--success-text-color)}:host(.success) .table{color:var(--success-text-color)}:host(.success) tbody tr:hover{background-color:var(--success-shade)}:host(.success) td,:host(.success) th,:host(.success) .rowItemArrayItem{border-color:var(--success-highlight)}:host(.warning){background-color:var(--warning-color);color:var(--warning-text-color)}:host(.warning) .table{color:var(--warning-text-color)}:host(.warning) tbody tr:hover{background-color:var(--warning-shade)}:host(.warning) td,:host(.warning) th,:host(.warning) .rowItemArrayItem{border-color:var(--warning-highlight)}:host(.danger){background-color:var(--danger-color);color:var(--danger-text-color)}:host(.danger) .table{color:var(--danger-text-color)}:host(.danger) tbody tr:hover{background-color:var(--danger-shade)}:host(.danger) td,:host(.danger) th,:host(.danger) .rowItemArrayItem{border-color:var(--danger-highlight)}:host(.dark){background-color:var(--dark-color);color:var(--dark-text-color)}:host(.dark) .table{color:var(--dark-text-color)}:host(.dark) tbody tr:hover{background-color:var(--dark-shade)}:host(.dark) td,:host(.dark) th,:host(.dark) .rowItemArrayItem{border-color:var(--dark-highlight)}:host(.light){background-color:var(--light-color);color:var(--light-text-color)}:host(.light) .table{color:var(--light-text-color)}:host(.light) tbody tr:hover{background-color:var(--light-shade)}:host(.light) td,:host(.light) th,:host(.light) .rowItemArrayItem{border-color:var(--light-highlight)}";

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * This serves as the buttons on the right side of the row. It renders a
         * button icon which calls the callback function that has the whole
         * row as the argument.
         */
        this.controls = [];
        /**
         * Table data to render.
         */
        this.tableData = [];
        /**
         * Table element attributes to be added on the table element.
         */
        this.tableProps = {};
        this.arvRowClick = index.createEvent(this, "arvRowClick", 7);
        this.arvHeaderClick = index.createEvent(this, "arvHeaderClick", 7);
        this.arvRowItemClick = index.createEvent(this, "arvRowItemClick", 7);
    }
    /**
     * Will parse tableData.
     */
    handleTableData() {
        this.load('tableData', 'tableDataArray');
    }
    /**
     * Will parse tableHeader.
     */
    handleTableHeaders() {
        this.load('tableHeaders', 'tableHeadersData');
    }
    componentWillLoad() {
        this.load('tableHeaders', 'tableHeadersData');
        this.load('tableData', 'tableDataArray');
    }
    load(src, dest) {
        if (!this[src]) {
            this[dest] = [];
            return false;
        }
        if (typeof this[src] !== 'string') {
            this[dest] = this[src];
            return false;
        }
        try {
            const steps = JSON.parse(this[src]);
            this[dest] = steps;
        }
        catch (e) {
            console.error(e);
        }
    }
    thItemClick(item) {
        this.arvHeaderClick.emit(item);
    }
    trItemClick(item) {
        this.arvRowClick.emit(item);
        if (this.select) {
            this.select(item);
        }
    }
    tdItemClick(item) {
        this.arvRowItemClick.emit(item);
    }
    generateRowItem(value) {
        if (typeof value === 'string') {
            return value;
        }
        if (Array.isArray(value)) {
            return (index.h("arv-flex", { wrap: "wrap" }, value.map(d => (index.h("span", { class: "rowItemArrayItem" }, d)))));
        }
        return value;
    }
    render() {
        const cls = Object.assign({}, helpers.generateAttrValue(this.color));
        const trClass = {
            tr: true
        };
        return (index.h(index.Host, { class: cls }, index.h("div", { class: "heading" }, Boolean(this.tableTitle) && (index.h("h1", { class: "table-title" }, this.tableTitle)), index.h("slot", { name: "header" })), index.h("table", Object.assign({ class: "table" }, this.tableProps), index.h("thead", null, index.h("tr", { class: "tr" }, this.tableHeadersData.map(headerItem => (index.h("th", { onClick: this.thItemClick.bind(this, headerItem), class: "th" }, headerItem))), Boolean(this.controls.length) && (index.h("th", { class: "th" })))), index.h("tbody", null, this.tableDataArray.map(rowData => {
            const [id, ...dataBody] = rowData;
            return (index.h("tr", { "data-id": id, class: trClass, onClick: this.trItemClick.bind(this, rowData) }, dataBody.map(rowItem => (index.h("td", { class: "td", onClick: this.tdItemClick.bind(this, rowItem) }, this.generateRowItem(rowItem)))), Boolean(this.controls.length) && (index.h("td", { class: "td controls" }, index.h("arv-flex", { justify: "flex-end" }, this.controls.map(ctrlItem => (index.h("arv-button", { color: this.color, variant: "ghost", icon: ctrlItem.icon, onClick: () => ctrlItem.fn(rowData), "is-icon": true }))))))));
        }))), index.h("div", { class: "footer" }, index.h("slot", { name: "footer" }))));
    }
    static get watchers() { return {
        "tableData": ["handleTableData"],
        "tableHeaders": ["handleTableHeaders"]
    }; }
};
Table.style = tableCss;

const myThemeSectionCss = ":host{overflow-y:scroll;width:100%;height:100%}";

const MyThemeSection = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("arv-flex", { fullHeight: true, layout: "column", padded: true }, index.h("arv-text", null, "Theming"), index.h("arv-divider", null), index.h("arv-text", null, "Arv ui library uses css variables to control the overall theme"), index.h("arv-divider", null), index.h("arv-text", null, "Current theme settings:"), keys.map((item) => (index.h("arv-flex", { items: "end" }, index.h("arv-input", { name: item, label: item, value: this.themeSettings[item] }), index.h("arv-divider", { "is-vertical": true }), index.h("arv-input", { type: "color", name: item, value: this.themeSettings[item] })))), index.h("arv-input", { label: "--radius", value: this.radius }), index.h("arv-divider", null)));
    }
};
MyThemeSection.style = myThemeSectionCss;

exports.arv_table = Table;
exports.my_theme_section = MyThemeSection;
