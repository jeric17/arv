import { Component, h, Event, Prop } from '@stencil/core';
export class Paginator {
    onNext() {
        const target = this.currentPage + 1;
        if (this.select) {
            this.select(target);
        }
        this.arvChange.emit(target);
    }
    onPrev() {
        const target = this.currentPage - 1;
        if (this.select) {
            this.select(target);
        }
        this.arvChange.emit(target);
    }
    numberLoop(max, x, i = 1, arr = []) {
        if (i > x) {
            return arr;
        }
        if (i > max) {
            return arr;
        }
        arr.push(i);
        return this.numberLoop(max, x, i + 1, arr);
    }
    onPageClick(d) {
        if (this.select) {
            this.select(d);
        }
        this.arvChange.emit(d);
    }
    render() {
        // const diameter = 2;
        const maxVisiblePages = 5;
        const numberOfPages = Math.ceil(this.totalItems / this.itemsPerPage);
        const pageArray = this.numberLoop(numberOfPages, numberOfPages);
        if (numberOfPages === 1) {
            return h("span", null);
        }
        const visiblePages = (() => {
            if (numberOfPages < maxVisiblePages) {
                return pageArray;
            }
            if (this.currentPage >= (numberOfPages - 3)) {
                return this.numberLoop(numberOfPages, numberOfPages, numberOfPages - 4);
            }
            if (this.currentPage >= 4) {
                return this.numberLoop(numberOfPages, this.currentPage + 2, this.currentPage - 2);
            }
            return this.numberLoop(numberOfPages, 5, this.currentPage);
        })();
        const l = visiblePages.length;
        const result = (() => {
            if (l < 3) {
                return visiblePages;
            }
            if (visiblePages[0] === 1 &&
                (visiblePages[l - 1] === numberOfPages - 1) &&
                visiblePages[l - 1] !== numberOfPages) {
                visiblePages.pop();
                return visiblePages.concat([null, numberOfPages]);
            }
            if (visiblePages[0] === 1 &&
                visiblePages[l - 1] === numberOfPages - 1) {
                return visiblePages.concat(numberOfPages);
            }
            if (visiblePages[0] === 2 &&
                visiblePages[l - 1] !== numberOfPages) {
                visiblePages.pop();
                return [1].concat(visiblePages).concat([null, numberOfPages]);
            }
            if (visiblePages[0] !== 1 &&
                visiblePages[0] !== 2 &&
                visiblePages[l - 1] !== numberOfPages) {
                return [1, null].concat(visiblePages).concat([null, numberOfPages]);
            }
            if (visiblePages[0] === 2 &&
                visiblePages[1] !== 3 &&
                visiblePages[l - 1] === numberOfPages) {
                visiblePages.shift();
                return [1, null].concat(visiblePages);
            }
            if (visiblePages[0] === 2) {
                return [1].concat(visiblePages);
            }
            if (visiblePages[0] !== 2 &&
                visiblePages[0] !== 1) {
                return [1, null].concat(visiblePages);
            }
            if (visiblePages[0] === 1 &&
                visiblePages[l - 1] !== numberOfPages - 1 &&
                visiblePages[l - 1] !== numberOfPages) {
                return visiblePages.concat([null, numberOfPages]);
            }
            if (visiblePages[0] === 1 &&
                visiblePages[l - 1] !== numberOfPages) {
                return visiblePages.concat(numberOfPages);
            }
            return visiblePages;
        })();
        const currentPageOffset = (this.currentPage - 1) * this.itemsPerPage;
        const targetToOffset = currentPageOffset + this.itemsPerPage;
        const toOffset = targetToOffset <= this.totalItems ? targetToOffset : this.totalItems;
        const classNames = {
            root: true,
            'default': this.color === 'default',
            primary: this.color === 'primary',
            secondary: this.color === 'secondary',
            light: this.color === 'light',
            dark: this.color === 'dark',
        };
        return (h("div", { class: classNames },
            h("div", { class: "pages" },
                this.currentPage !== 1 && (h("div", { class: {
                        pageItem: true,
                        prev: true,
                    } },
                    h("arv-button", { buttonClick: this.onPrev.bind(this), styles: { backgroundColor: 'transparent' }, icon: "chevron_left", variant: "flat-icon" }))),
                result.map(d => {
                    const value = (() => {
                        if (!d) {
                            return '...';
                        }
                        return d;
                    })();
                    return (h("div", { onClick: () => {
                            if (value !== '...') {
                                this.onPageClick(d);
                            }
                        }, class: {
                            pageItem: true,
                            noBorder: value === '...',
                            active: this.currentPage === d
                        } }, value));
                }),
                this.currentPage !== numberOfPages && (h("div", { class: "pageItem next" },
                    h("arv-button", { buttonClick: this.onNext.bind(this), styles: { backgroundColor: 'transparent' }, icon: "chevron_right", variant: "flat-icon", padded: false })))),
            h("arv-divider", null),
            h("arv-text", null,
                currentPageOffset + 1,
                " - ",
                toOffset,
                " of ",
                this.totalItems)));
    }
    static get is() { return "arv-paginator"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["paginator.css"]
    }; }
    static get styleUrls() { return {
        "$": ["paginator.css"]
    }; }
    static get properties() { return {
        "color": {
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
                "text": ""
            },
            "attribute": "color",
            "reflect": false
        },
        "currentPage": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "current-page",
            "reflect": false
        },
        "itemsPerPage": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "items-per-page",
            "reflect": false
        },
        "select": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(index: number) => void",
                "resolved": "(index: number) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "totalItems": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "total-items",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "arvChange",
            "name": "arvChange",
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
