import { Component, Host, h, Event, Prop, Watch, State } from '@stencil/core';
import { generateAttrValue } from '../../utils/helpers';
/**
 * @slot header - Positioned between table title and table data.
 * @slot footer - Positioned at the bottom after the table.
 */
export class Table {
    constructor() {
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
            return (h("arv-flex", { wrap: "wrap" }, value.map(d => (h("span", { class: "rowItemArrayItem" }, d)))));
        }
        return value;
    }
    render() {
        const cls = Object.assign({}, generateAttrValue(this.color));
        const trClass = {
            tr: true
        };
        return (h(Host, { class: cls },
            h("div", { class: "heading" },
                Boolean(this.tableTitle) && (h("h1", { class: "table-title" }, this.tableTitle)),
                h("slot", { name: "header" })),
            h("table", Object.assign({ class: "table" }, this.tableProps),
                h("thead", null,
                    h("tr", { class: "tr" },
                        this.tableHeadersData.map(headerItem => (h("th", { onClick: this.thItemClick.bind(this, headerItem), class: "th" }, headerItem))),
                        Boolean(this.controls.length) && (h("th", { class: "th" })))),
                h("tbody", null, this.tableDataArray.map(rowData => {
                    const [id, ...dataBody] = rowData;
                    return (h("tr", { "data-id": id, class: trClass, onClick: this.trItemClick.bind(this, rowData) },
                        dataBody.map(rowItem => (h("td", { class: "td", onClick: this.tdItemClick.bind(this, rowItem) }, this.generateRowItem(rowItem)))),
                        Boolean(this.controls.length) && (h("td", { class: "td controls" },
                            h("arv-flex", { justify: "flex-end" }, this.controls.map(ctrlItem => (h("arv-button", { color: this.color, variant: "ghost", icon: ctrlItem.icon, onClick: () => ctrlItem.fn(rowData), "is-icon": true }))))))));
                }))),
            h("div", { class: "footer" },
                h("slot", { name: "footer" }))));
    }
    static get is() { return "arv-table"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["table.css"]
    }; }
    static get styleUrls() { return {
        "$": ["table.css"]
    }; }
    static get properties() { return {
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Color",
                "resolved": "string",
                "references": {
                    "Color": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Color variant to set."
            },
            "attribute": "color",
            "reflect": false
        },
        "controls": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "{ icon: string, fn: (data: any) => any }[]",
                "resolved": "{ icon: string; fn: (data: any) => any; }[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "This serves as the buttons on the right side of the row. It renders a\nbutton icon which calls the callback function that has the whole\nrow as the argument."
            },
            "defaultValue": "[]"
        },
        "tableData": {
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
                "text": "Table data to render."
            },
            "attribute": "table-data",
            "reflect": false,
            "defaultValue": "[]"
        },
        "tableHeaders": {
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
                "text": "Table header to render."
            },
            "attribute": "table-headers",
            "reflect": false
        },
        "tableProps": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "{}",
                "resolved": "{}",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Table element attributes to be added on the table element."
            },
            "defaultValue": "{}"
        },
        "tableTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Title of the table."
            },
            "attribute": "table-title",
            "reflect": false
        },
        "select": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(row: any) => void",
                "resolved": "(row: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Callback prop function will be triggered on row click."
            }
        }
    }; }
    static get states() { return {
        "tableDataArray": {},
        "tableHeadersData": {}
    }; }
    static get events() { return [{
            "method": "arvRowClick",
            "name": "arvRowClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted on table row click."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "arvHeaderClick",
            "name": "arvHeaderClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted on th click."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "arvRowItemClick",
            "name": "arvRowItemClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted on td click."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get watchers() { return [{
            "propName": "tableData",
            "methodName": "handleTableData"
        }, {
            "propName": "tableHeaders",
            "methodName": "handleTableHeaders"
        }]; }
}
