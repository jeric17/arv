import { r as registerInstance, h, g as getElement } from './index-8fd6d07a.js';
var bbBoltsCss = "#bolt{min-height:400px;width:100%}code{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1em;background-color:#141f46;color:#fff;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-x:scroll}pre{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.html-elem{color:#ffe000}.html-attr{color:#ef40ef}.html-attr-value{color:#40ef4d}.html-slot{color:#FFF}";
var Bolts = /** @class */ (function () {
    function Bolts(hostRef) {
        registerInstance(this, hostRef);
        this.items = [];
    }
    Bolts.prototype.componentDidLoad = function () {
        if (!this.items.length) {
            return false;
        }
        this.setItem(0);
    };
    Bolts.prototype.onPropsChange = function (name, value) {
        var props = this.selectedItem.props;
        var newProps = props.map(function (d) {
            if (d.name === name) {
                d.value = value;
            }
            return d;
        });
        this.selectedItem = Object.assign(Object.assign({}, this.selectedItem), { props: newProps });
        this.generate();
    };
    Bolts.prototype.generateOneOf = function (item) {
        var _this = this;
        var name = item.name, value = item.value;
        return (h("arv-select", { label: name, value: value, selectChange: function (e) {
                if (!e) {
                    return false;
                }
                _this.onPropsChange(name, e.detail);
            } }, item.data.map(function (d) { return (h("arv-select-option", { selected: value === d, value: d }, d)); })));
    };
    Bolts.prototype.generateBoolean = function (item) {
        var _this = this;
        var name = item.name, value = item.value;
        return (h("arv-select", { label: name, value: value, selectChange: function (e) {
                if (!e) {
                    return false;
                }
                _this.onPropsChange(name, e.detail);
            } }, h("arv-select-option", { selected: value, value: "true" }, "true"), h("arv-select-option", { selected: value === 'false', value: "false" }, "false")));
    };
    Bolts.prototype.generateString = function (item) {
        var name = item.name, value = item.value;
        return (h("arv-input", { label: name, type: "text", value: value }));
    };
    Bolts.prototype.generateObj = function (item) {
        console.log({ item: item });
    };
    Bolts.prototype.generateObj2 = function (item) {
        console.log({ item: item });
    };
    Bolts.prototype.setControls = function () {
        var _this = this;
        if (!this.selectedItem) {
            return false;
        }
        var props = this.selectedItem.props;
        return props.map(function (d) {
            var type = d.type;
            if (type === 'oneOf') {
                return _this.generateOneOf(d);
            }
            if (type === 'boolean') {
                return _this.generateBoolean(d);
            }
            if (type === 'string') {
                return _this.generateString(d);
            }
            if (type === 'object') {
                return _this.generateObj(d);
            }
            if (type === 'object2') {
                return _this.generateObj2(d);
            }
        });
    };
    Bolts.prototype.setItem = function (index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        if (this.themeMode) {
            this.themeMode = false;
            setTimeout(function () {
                _this.selectedItem = _this.items[index];
                _this.generate();
            }, 100);
            return false;
        }
        this.selectedItem = this.items[index];
        this.generate();
    };
    Bolts.prototype.generate = function () {
        var _a = this.selectedItem, element = _a.element, slot = _a.slot, props = _a.props, eventsData = _a.eventsData, wrapper = _a.wrapper;
        var container = this.el.shadowRoot.querySelector('#bolt');
        var slotContent = slot ? slot.replace(/</g, '&lt').replace(/>/g, '&gt') : '';
        var codeText = this.addProps(element, props, slot);
        if (wrapper) {
            var div = document.createElement('div');
            div.innerHTML = wrapper;
            if (!this.selectedItem.htmlMode) {
                div.children[0].innerHTML = codeText;
            }
            container.innerHTML = div.innerHTML;
        }
        else {
            container.innerHTML = codeText;
        }
        var componentElem = container.querySelector(this.selectedItem.element);
        props.forEach(function (d) {
            if (d.type === 'object2' || d.type === 'array') {
                componentElem[d.name] = d.value;
            }
            if (d.type !== 'object') {
                return false;
            }
            try {
                var obj = JSON.parse(d.value);
                componentElem[d.name] = obj;
            }
            catch (e) {
                console.log(e.message);
            }
        });
        if (eventsData) {
            eventsData.map(function (d) {
                componentElem.addEventListener(d.name, function (evt) { return d.fn(evt, componentElem); });
            });
        }
        var reSlot = new RegExp(slot, 'g');
        var codeContainerHTML = container.innerHTML.replace(reSlot, '');
        props.forEach(function (d) {
            var name = d.displayName ? d.displayName : d.name;
            codeContainerHTML = codeContainerHTML.replace(" " + name, "\n  " + name);
        });
        var code = codeContainerHTML
            .replace(slot, 'SLOT')
            .replace('></', '\n></')
            .replace(/</g, '&lt')
            .replace(/>/g, '&gt')
            .split('\n');
        code[0] = "<span class=\"html-elem\">" + code[0];
        code[code.length - 1] = "<span class=\"html-elem\">" + code[code.length - 1];
        code[code.length - 1] = code[code.length - 1].replace('&gt&lt', "&gt<span class=\"html-slot\">\n  " + (slotContent || '') + "\n</span>&lt");
        var codes = code.map(function (d, i) {
            if (i === 0 || i === code.length - 1) {
                return d;
            }
            var values = d.split('=');
            return [
                "<span class=\"html-attr\">" + values[0] + "</span>",
                '<span class="html-eql">=<span>',
                "<span class=\"html-attr-value\">" + values[1] + "</span>",
                '<br/>'
            ].join('');
        });
        var codeContent = codes.join('</span><span>').replace('::', '=').replace('---', '=>') + "</span>";
        var codeElem = this.el.shadowRoot.querySelector('code');
        codeElem.innerHTML = codeContent;
        /* if (slot) {
         *   const span = document.createElement('span');
         *   span.innerHTML = slot;
         *   container.lastElementChild.appendChild(span);
         * } */
    };
    Bolts.prototype.addProps = function (element, props, _slot) {
        var slot = (function () {
            if (!_slot || _slot === 'false') {
                return '';
            }
            return _slot;
        })();
        var propsString = props.reduce(function (c, n) {
            if (n.type === 'object' || n.type === 'object2') {
                return c;
            }
            if (!n.value) {
                return c;
            }
            var name = n.displayName ? n.displayName : n.name;
            var value = n.displayValue ? n.displayValue : n.value;
            return c + " " + name + "='" + value + "'";
        }, '');
        return "<" + element + " " + propsString + ">" + slot + "</" + element + ">";
    };
    Bolts.prototype.slotChanged = function (slot) {
        this.selectedItem = Object.assign(Object.assign({}, this.selectedItem), { slot: slot });
        this.generate();
    };
    Bolts.prototype.wrapperChanged = function (wrapper) {
        this.selectedItem = Object.assign(Object.assign({}, this.selectedItem), { wrapper: wrapper });
        this.generate();
    };
    Bolts.prototype.eventDescription = function () {
        if (!this.selectedItem || !this.selectedItem.events) {
            return false;
        }
        var headers = ['Name', 'Description'];
        var data = this.selectedItem.events.map(function (d) { return [0, d.name, d.description]; });
        return (h("arv-table", { "table-title": "Events", tableData: data, tableHeaders: headers }));
    };
    Bolts.prototype.propsDescription = function () {
        if (!this.selectedItem || !this.selectedItem.propsDescription) {
            return false;
        }
        var headers = ['Name', 'Type', 'Description'];
        var data = this.selectedItem.propsDescription.map(function (d) { return [0, d.name, d.type, d.description]; });
        return (h("arv-table", { "table-title": "Props", tableData: data, tableHeaders: headers }));
    };
    Bolts.prototype.cssVariablesDescription = function () {
        if (!this.selectedItem || !this.selectedItem.cssVariables) {
            return false;
        }
        var headers = ['Name', 'Description'];
        var data = this.selectedItem.cssVariables.map(function (d) { return [0, d.name, d.description]; });
        return (h("arv-table", { "table-title": "CSS Variables", tableData: data, tableHeaders: headers }));
    };
    Bolts.prototype.toggleTheme = function () {
        this.themeMode = !this.themeMode;
    };
    Bolts.prototype.render = function () {
        var _this = this;
        var List = function () { return (h("arv-container", { height: "100vh", width: "200px", color: "dark", scrollable: true }, h("arv-flex", { layout: "column" }, h("arv-flex", { padded: true, full: false }, h("arv-text", { color: "light" }, "arv@0.5.1")), h("arv-button", { color: _this.themeMode ? 'primary' : 'light', variant: _this.themeMode ? 'raised' : 'ghost', buttonClick: _this.toggleTheme.bind(_this), full: true }, "Theming"), h("arv-flex", { padded: true, full: false }, h("arv-text", { color: "primary" }, "Components")), _this.items.map(function (d, i) {
            return (h("arv-button", { color: (!_this.themeMode && _this.selectedItem && (_this.selectedItem.name === d.name)) ? 'primary' : 'light', variant: (!_this.themeMode && _this.selectedItem && (_this.selectedItem.name === d.name)) ? 'raised' : 'ghost', onClick: function () { return _this.setItem(i); }, boxed: true, full: true }, d.name));
        }), h("arv-flex", { padded: true, full: false }, h("arv-text", { color: "primary" }, "Installation")), [
            { name: 'Angular', target: 'https://stenciljs.com/docs/angular' },
            { name: 'React', target: 'https://stenciljs.com/docs/react' },
            { name: 'Vue', target: 'https://stenciljs.com/docs/vue' },
        ].map(function (d) {
            return (h("arv-button", { buttonClick: function () {
                    window.open(d.target);
                }, color: "light", variant: "ghost", full: true }, d.name));
        })))); };
        var slot = this.selectedItem ? this.selectedItem.slot : '';
        var wrapper = this.selectedItem ? this.selectedItem.wrapper : '';
        var SlotControl = function () { return (h("arv-input", { label: "Slot", value: slot })); };
        var WrapperControl = function () { return (h("arv-input", { label: "wrapper", value: wrapper })); };
        var Controls = function () { return (h("arv-container", { height: "100vh", width: "300px", scrollable: true }, h("arv-flex", { layout: "column", padded: true }, h("arv-text", null, "Attributes"), h("arv-divider", null), _this.selectedItem && _this.selectedItem.wrapper && (h(WrapperControl, null)), _this.selectedItem && _this.selectedItem.slot !== false && (h(SlotControl, null)), _this.setControls(), h("arv-divider", null)))); };
        var Content = function () { return (h("arv-flex", { style: { backgroundColor: '#efefef', overflowY: 'scroll' }, justify: "start", items: "start", layout: "column", padded: true }, h("arv-flex", { justify: "end" }, h("a", { href: "https://github.com/jeric17/arv" }, h("svg", { height: "32", class: "octicon octicon-mark-github", viewBox: "0 0 16 16", version: "1.1", width: "32", "aria-hidden": "true" }, h("path", { "fill-rule": "evenodd", d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" })))), h("arv-divider", null), _this.selectedItem && (h("arv-flex", { layout: "column" }, _this.selectedItem.description && _this.selectedItem.description.map(function (d) { return (h("arv-text", null, d)); }))), h("arv-divider", null), h("arv-text", null, "Demo"), h("arv-flex", { style: { 'backgroundColor': '#fff', 'height': '300px' }, items: "center", justify: "center", padded: true, id: "bolt" }), h("pre", null, h("code", null)), _this.propsDescription(), h("arv-divider", null), _this.eventDescription(), h("arv-divider", null), _this.cssVariablesDescription(), h("arv-divider", null))); };
        return (h("arv-container", { height: "100vh", full: true }, h("arv-flex", { items: "stretch" }, h(List, null), !this.themeMode && h(Controls, null), !this.themeMode && h(Content, null), this.themeMode && h("my-theme-section", null))));
    };
    Object.defineProperty(Bolts.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Bolts;
}());
Bolts.style = bbBoltsCss;
export { Bolts as bb_bolts };
