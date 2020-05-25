import { r as registerInstance, c as createEvent, h } from './index-8fd6d07a.js';
var paginatorCss = ".root{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.pages{display:-ms-flexbox;display:flex}.pageItem{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-width:32px;min-height:32px;width:32px;height:32px;margin-right:4px;margin-left:4px;border-radius:100%;border-width:1px;border-style:solid;cursor:pointer}.pageItem.active{color:var(--default-text-color, #fff)}.primary .pageItem{--default-text-color:var(--primary-dark-color);border-color:var(--primary-color);color:var(--primary-dark-color)}.primary .pageItem.active{background-color:var(--primary-color);color:var(--primary-text-color)}.secondary .pageItem{--default-text-color:var(--secondary-dark-color);border-color:var(--secondary-color);color:var(--secondary-dark-color)}.secondary .pageItem.active{background-color:var(--secondary-color);color:var(--primary-text-color)}.root:first-child{margin-right:0}.root:last-child{margin-left:0}.pageItem.prev{margin-right:16px}.pageItem.next{margin-left:16px}.pageItem.noBorder{cursor:auto;border-color:transparent}.invi{opacity:0}";
var Paginator = /** @class */ (function () {
    function Paginator(hostRef) {
        registerInstance(this, hostRef);
        this.arvChange = createEvent(this, "arvChange", 7);
    }
    Paginator.prototype.onNext = function () {
        var target = this.currentPage + 1;
        if (this.select) {
            this.select(target);
        }
        this.arvChange.emit(target);
    };
    Paginator.prototype.onPrev = function () {
        var target = this.currentPage - 1;
        if (this.select) {
            this.select(target);
        }
        this.arvChange.emit(target);
    };
    Paginator.prototype.numberLoop = function (max, x, i, arr) {
        if (i === void 0) { i = 1; }
        if (arr === void 0) { arr = []; }
        if (i > x) {
            return arr;
        }
        if (i > max) {
            return arr;
        }
        arr.push(i);
        return this.numberLoop(max, x, i + 1, arr);
    };
    Paginator.prototype.onPageClick = function (d) {
        if (this.select) {
            this.select(d);
        }
        this.arvChange.emit(d);
    };
    Paginator.prototype.render = function () {
        var _this = this;
        // const diameter = 2;
        var maxVisiblePages = 5;
        var numberOfPages = Math.ceil(this.totalItems / this.itemsPerPage);
        var pageArray = this.numberLoop(numberOfPages, numberOfPages);
        if (numberOfPages === 1) {
            return h("span", null);
        }
        var visiblePages = (function () {
            if (numberOfPages < maxVisiblePages) {
                return pageArray;
            }
            if (_this.currentPage >= (numberOfPages - 3)) {
                return _this.numberLoop(numberOfPages, numberOfPages, numberOfPages - 4);
            }
            if (_this.currentPage >= 4) {
                return _this.numberLoop(numberOfPages, _this.currentPage + 2, _this.currentPage - 2);
            }
            return _this.numberLoop(numberOfPages, 5, _this.currentPage);
        })();
        var l = visiblePages.length;
        var result = (function () {
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
        var currentPageOffset = (this.currentPage - 1) * this.itemsPerPage;
        var targetToOffset = currentPageOffset + this.itemsPerPage;
        var toOffset = targetToOffset <= this.totalItems ? targetToOffset : this.totalItems;
        var classNames = {
            root: true,
            'default': this.color === 'default',
            primary: this.color === 'primary',
            secondary: this.color === 'secondary',
            light: this.color === 'light',
            dark: this.color === 'dark',
        };
        return (h("div", { class: classNames }, h("div", { class: "pages" }, this.currentPage !== 1 && (h("div", { class: {
                pageItem: true,
                prev: true,
            } }, h("arv-button", { buttonClick: this.onPrev.bind(this), styles: { backgroundColor: 'transparent' }, icon: "chevron_left", variant: "flat-icon" }))), result.map(function (d) {
            var value = (function () {
                if (!d) {
                    return '...';
                }
                return d;
            })();
            return (h("div", { onClick: function () {
                    if (value !== '...') {
                        _this.onPageClick(d);
                    }
                }, class: {
                    pageItem: true,
                    noBorder: value === '...',
                    active: _this.currentPage === d
                } }, value));
        }), this.currentPage !== numberOfPages && (h("div", { class: "pageItem next" }, h("arv-button", { buttonClick: this.onNext.bind(this), styles: { backgroundColor: 'transparent' }, icon: "chevron_right", variant: "flat-icon", padded: false })))), h("arv-divider", null), h("arv-text", null, currentPageOffset + 1, " - ", toOffset, " of ", this.totalItems)));
    };
    return Paginator;
}());
Paginator.style = paginatorCss;
export { Paginator as arv_paginator };
