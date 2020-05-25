import { r as registerInstance, c as createEvent, h, H as Host } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';
var tableCss = ":host{width:100%;border-radius:var(--radius);background-color:var(--default-bg);overflow:hidden;-webkit-box-shadow:0 1px 3px 1px rgba(0, 0, 0, 0.08), 0 2px 3px rgba(0,0,0,0.12);box-shadow:0 1px 3px 1px rgba(0, 0, 0, 0.08), 0 2px 3px rgba(0,0,0,0.12)}.table{position:relative;width:100%;overflow:hidden;border-spacing:0;border-collapse:collapse;color:var(--font-color)}.table-title{font-size:1.2rem;margin:0.5em}.td,.th{font-weight:normal;text-align:left;padding:1rem 2.5rem 1rem 1rem;border-bottom-width:1px;border-bottom-style:solid;border-color:var(--default-highlight)}.th{font-size:0.8rem;opacity:0.8}.td{font-size:0.9rem}tr{-webkit-transition:background-color 0.3s;transition:background-color 0.3s}tbody tr:hover{background-color:var(--default-highlight)}tbody tr:hover .controls{opacity:1}.rowItemArrayItem{margin:0 .5em 0.5em 0;border-width:1px;border-style:solid;border-color:var(--default-shade);border-radius:var(--radius);padding:0.25em 0.5em;font-size:0.8rem;white-space:pre-wrap}.controls{opacity:0}.trClickable{cursor:pointer}:host(.primary){background-color:var(--primary-color);color:var(--primary-text-color)}:host(.primary) .table{color:var(--primary-text-color)}:host(.primary) tbody tr:hover{background-color:var(--primary-shade)}:host(.primary) td,:host(.primary) th,:host(.primary) .rowItemArrayItem{border-color:var(--primary-highlight)}:host(.secondary){background-color:var(--secondary-color);color:var(--secondary-text-color)}:host(.secondary) .table{color:var(--secondary-text-color)}:host(.secondary) tbody tr:hover{background-color:var(--secondary-shade)}:host(.secondary) td,:host(.secondary) th,:host(.secondary) .rowItemArrayItem{border-color:var(--secondary-highlight)}:host(.success){background-color:var(--success-color);color:var(--success-text-color)}:host(.success) .table{color:var(--success-text-color)}:host(.success) tbody tr:hover{background-color:var(--success-shade)}:host(.success) td,:host(.success) th,:host(.success) .rowItemArrayItem{border-color:var(--success-highlight)}:host(.warning){background-color:var(--warning-color);color:var(--warning-text-color)}:host(.warning) .table{color:var(--warning-text-color)}:host(.warning) tbody tr:hover{background-color:var(--warning-shade)}:host(.warning) td,:host(.warning) th,:host(.warning) .rowItemArrayItem{border-color:var(--warning-highlight)}:host(.danger){background-color:var(--danger-color);color:var(--danger-text-color)}:host(.danger) .table{color:var(--danger-text-color)}:host(.danger) tbody tr:hover{background-color:var(--danger-shade)}:host(.danger) td,:host(.danger) th,:host(.danger) .rowItemArrayItem{border-color:var(--danger-highlight)}:host(.dark){background-color:var(--dark-color);color:var(--dark-text-color)}:host(.dark) .table{color:var(--dark-text-color)}:host(.dark) tbody tr:hover{background-color:var(--dark-shade)}:host(.dark) td,:host(.dark) th,:host(.dark) .rowItemArrayItem{border-color:var(--dark-highlight)}:host(.light){background-color:var(--light-color);color:var(--light-text-color)}:host(.light) .table{color:var(--light-text-color)}:host(.light) tbody tr:hover{background-color:var(--light-shade)}:host(.light) td,:host(.light) th,:host(.light) .rowItemArrayItem{border-color:var(--light-highlight)}";
var Table = /** @class */ (function () {
    function Table(hostRef) {
        registerInstance(this, hostRef);
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
        this.arvRowClick = createEvent(this, "arvRowClick", 7);
        this.arvHeaderClick = createEvent(this, "arvHeaderClick", 7);
        this.arvRowItemClick = createEvent(this, "arvRowItemClick", 7);
    }
    /**
     * Will parse tableData.
     */
    Table.prototype.handleTableData = function () {
        this.load('tableData', 'tableDataArray');
    };
    /**
     * Will parse tableHeader.
     */
    Table.prototype.handleTableHeaders = function () {
        this.load('tableHeaders', 'tableHeadersData');
    };
    Table.prototype.componentWillLoad = function () {
        this.load('tableHeaders', 'tableHeadersData');
        this.load('tableData', 'tableDataArray');
    };
    Table.prototype.load = function (src, dest) {
        if (!this[src]) {
            this[dest] = [];
            return false;
        }
        if (typeof this[src] !== 'string') {
            this[dest] = this[src];
            return false;
        }
        try {
            var steps = JSON.parse(this[src]);
            this[dest] = steps;
        }
        catch (e) {
            console.error(e);
        }
    };
    Table.prototype.thItemClick = function (item) {
        this.arvHeaderClick.emit(item);
    };
    Table.prototype.trItemClick = function (item) {
        this.arvRowClick.emit(item);
        if (this.select) {
            this.select(item);
        }
    };
    Table.prototype.tdItemClick = function (item) {
        this.arvRowItemClick.emit(item);
    };
    Table.prototype.generateRowItem = function (value) {
        if (typeof value === 'string') {
            return value;
        }
        if (Array.isArray(value)) {
            return (h("arv-flex", { wrap: "wrap" }, value.map(function (d) { return (h("span", { class: "rowItemArrayItem" }, d)); })));
        }
        return value;
    };
    Table.prototype.render = function () {
        var _this = this;
        var cls = Object.assign({}, generateAttrValue(this.color));
        var trClass = {
            tr: true
        };
        return (h(Host, { class: cls }, h("div", { class: "heading" }, Boolean(this.tableTitle) && (h("h1", { class: "table-title" }, this.tableTitle)), h("slot", { name: "header" })), h("table", Object.assign({ class: "table" }, this.tableProps), h("thead", null, h("tr", { class: "tr" }, this.tableHeadersData.map(function (headerItem) { return (h("th", { onClick: _this.thItemClick.bind(_this, headerItem), class: "th" }, headerItem)); }), Boolean(this.controls.length) && (h("th", { class: "th" })))), h("tbody", null, this.tableDataArray.map(function (rowData) {
            var id = rowData[0], dataBody = rowData.slice(1);
            return (h("tr", { "data-id": id, class: trClass, onClick: _this.trItemClick.bind(_this, rowData) }, dataBody.map(function (rowItem) { return (h("td", { class: "td", onClick: _this.tdItemClick.bind(_this, rowItem) }, _this.generateRowItem(rowItem))); }), Boolean(_this.controls.length) && (h("td", { class: "td controls" }, h("arv-flex", { justify: "flex-end" }, _this.controls.map(function (ctrlItem) { return (h("arv-button", { color: _this.color, variant: "ghost", icon: ctrlItem.icon, onClick: function () { return ctrlItem.fn(rowData); }, "is-icon": true })); }))))));
        }))), h("div", { class: "footer" }, h("slot", { name: "footer" }))));
    };
    Object.defineProperty(Table, "watchers", {
        get: function () {
            return {
                "tableData": ["handleTableData"],
                "tableHeaders": ["handleTableHeaders"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return Table;
}());
Table.style = tableCss;
var myThemeSectionCss = ":host{overflow-y:scroll;width:100%;height:100%}";
var MyThemeSection = /** @class */ (function () {
    function MyThemeSection(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
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
        this.valueChange = function (event) {
            if (!event) {
                return false;
            }
            var _a = event.target, value = _a.value, name = _a.name;
            var themeSettings = JSON.parse(JSON.stringify(_this.themeSettings));
            themeSettings[name] = value;
            _this.themeSettings = themeSettings;
            window['themeSettings'] = themeSettings;
            document.body.style.setProperty(name, value);
        };
        this.radiusChange = function (event) {
            var value = event.target.value;
            _this.radius = value;
            window['radius'] = _this.radius;
            document.body.style.setProperty('--radius', value);
        };
    }
    MyThemeSection.prototype.componentWillLoad = function () {
        if (window['themeSettings']) {
            this.themeSettings = window['themeSettings'];
        }
        if (window['radius']) {
            this.radius = window['radius'];
        }
    };
    MyThemeSection.prototype.render = function () {
        var _this = this;
        var keys = Object.keys(this.themeSettings);
        return (h("arv-flex", { fullHeight: true, layout: "column", padded: true }, h("arv-text", null, "Theming"), h("arv-divider", null), h("arv-text", null, "Arv ui library uses css variables to control the overall theme"), h("arv-divider", null), h("arv-text", null, "Current theme settings:"), keys.map(function (item) { return (h("arv-flex", { items: "end" }, h("arv-input", { name: item, label: item, value: _this.themeSettings[item] }), h("arv-divider", { "is-vertical": true }), h("arv-input", { type: "color", name: item, value: _this.themeSettings[item] }))); }), h("arv-input", { label: "--radius", value: this.radius }), h("arv-divider", null)));
    };
    return MyThemeSection;
}());
MyThemeSection.style = myThemeSectionCss;
export { Table as arv_table, MyThemeSection as my_theme_section };
