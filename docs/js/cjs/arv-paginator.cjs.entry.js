'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const paginatorCss = ".root{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.pages{display:-ms-flexbox;display:flex}.pageItem{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-width:32px;min-height:32px;width:32px;height:32px;margin-right:4px;margin-left:4px;border-radius:100%;border-width:1px;border-style:solid;cursor:pointer}.pageItem.active{color:var(--default-text-color, #fff)}.primary .pageItem{--default-text-color:var(--primary-dark-color);border-color:var(--primary-color);color:var(--primary-dark-color)}.primary .pageItem.active{background-color:var(--primary-color);color:var(--primary-text-color)}.secondary .pageItem{--default-text-color:var(--secondary-dark-color);border-color:var(--secondary-color);color:var(--secondary-dark-color)}.secondary .pageItem.active{background-color:var(--secondary-color);color:var(--primary-text-color)}.root:first-child{margin-right:0}.root:last-child{margin-left:0}.pageItem.prev{margin-right:16px}.pageItem.next{margin-left:16px}.pageItem.noBorder{cursor:auto;border-color:transparent}.invi{opacity:0}";

const Paginator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.arvChange = index.createEvent(this, "arvChange", 7);
    }
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
            return index.h("span", null);
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
        return (index.h("div", { class: classNames }, index.h("div", { class: "pages" }, this.currentPage !== 1 && (index.h("div", { class: {
                pageItem: true,
                prev: true,
            } }, index.h("arv-button", { buttonClick: this.onPrev.bind(this), styles: { backgroundColor: 'transparent' }, icon: "chevron_left", variant: "flat-icon" }))), result.map(d => {
            const value = (() => {
                if (!d) {
                    return '...';
                }
                return d;
            })();
            return (index.h("div", { onClick: () => {
                    if (value !== '...') {
                        this.onPageClick(d);
                    }
                }, class: {
                    pageItem: true,
                    noBorder: value === '...',
                    active: this.currentPage === d
                } }, value));
        }), this.currentPage !== numberOfPages && (index.h("div", { class: "pageItem next" }, index.h("arv-button", { buttonClick: this.onNext.bind(this), styles: { backgroundColor: 'transparent' }, icon: "chevron_right", variant: "flat-icon", padded: false })))), index.h("arv-divider", null), index.h("arv-text", null, currentPageOffset + 1, " - ", toOffset, " of ", this.totalItems)));
    }
};
Paginator.style = paginatorCss;

exports.arv_paginator = Paginator;
