'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');
const helpers = require('./helpers-72bf351a.js');
const _commonjsHelpers = require('./_commonjsHelpers-72d386ba.js');

const dividerCss = ":host{width:100%;border-bottom-width:1px;border-bottom-style:solid;border-color:var(--default-highlight)}";

const Divider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const cls = {
            'arv-vertical': this.isVertical
        };
        return (index.h(index.Host, { class: cls }));
    }
};
Divider.style = dividerCss;

const flexCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.expanded){height:100%;width:100%}";

const Flex = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const cls = {
            expanded: this.expanded,
        };
        const styles = Object.assign({ 'flex-direction': this.direction, 'justify-content': this.justify, 'align-items': this.alignItems, 'flex-wrap': this.wrap, 'flex': this.flex }, this.styles);
        return (index.h(index.Host, { class: cls, style: styles }, index.h("slot", null)));
    }
};
Flex.style = flexCss;

const headerCss = ":host{-ms-flex-align:center;align-items:center;background-color:var(--default-bg);-webkit-box-shadow:1px 2px 4px rgba(3, 3, 3, 0.2);box-shadow:1px 2px 4px rgba(3, 3, 3, 0.2);-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;min-height:64px;padding:0 1.5em;width:100%}:host(.no-shadow){-webkit-box-shadow:0 0 0 transparent;box-shadow:0 0 0 transparent}:host(.primary){background-color:var(--primary-color);color:var(--primary-text-color)}:host(.secondary){background-color:var(--secondary-color);color:var(--secondary-text-color)}:host(.success){background-color:var(--success-color);color:var(--success-text-color)}:host(.warning){background-color:var(--warning-color);color:var(--warning-text-color)}:host(.danger){background-color:var(--danger-color);color:var(--danger-text-color)}:host(.dark){background-color:var(--dark-color);color:var(--dark-text-color)}:host(.light){background-color:var(--light-color);color:var(--light-text-color)}:host(.sticky){position:-webkit-sticky;position:sticky}:host(.fixed){position:fixed}:host(.absolute){position:absolute}:host(.relative){position:relative}";

const Header = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Position of the header
         */
        this.position = 'static';
    }
    render() {
        const cls = Object.assign(Object.assign(Object.assign({}, helpers.generateAttrValue(this.color)), helpers.generateAttrValue(this.position)), { 'no-shadow': this.noShadow });
        return (index.h(index.Host, { class: cls }, index.h("slot", null)));
    }
};
Header.style = headerCss;

const iconCss = ".material-icons{font-family:var(--icon-font-family, 'Material Icons');font-weight:normal;font-style:normal;font-size:var(--icon-size);line-height:1rem;letter-spacing:normal;text-transform:none;display:block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;color:var(--icon-color);-webkit-transition:all 0.3s;transition:all 0.3s}:host{display:block}.small{font-size:0.8rem;line-height:0.8rem}.large{font-size:2rem;line-height:2rem}.primary{color:var(--primary-color)}.secondary{color:var(--secondary-color)}.warning{color:var(--warning-color)}.success{color:var(--success-color)}.danger{color:var(--danger-color)}.light{color:var(--light-color)}.dark{color:var(--dark-color)}";

const Icon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const rootCls = Object.assign(Object.assign({ 'material-icons': true }, helpers.generateAttrValue(this.color)), helpers.generateAttrValue(this.size));
        return (index.h("span", { style: this.styles, class: rootCls }, this.icon));
    }
};
Icon.style = iconCss;

const inputCss = ":host,.control,#input{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.row){-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}:host(.hasIcon) #input{padding:0 1.5em 0 2.5em}:host(.row) label{margin:0 1em}:host(.flex){display:-ms-flexbox;display:flex}#input{background-color:var(--default-bg);border-color:var(--default-highlight);border-radius:var(--radius);border-style:solid;border-width:2px;color:var(--font-color);font-size:1rem;line-height:2.5em;outline:none;padding:0 1.5em;-webkit-transition:all 0.3s;transition:all 0.3s}#input:hover,#input:focus{border-color:var(--default-shade)}#input:focus{background-color:var(--default-shade)}:host(.primary) #input:hover,:host(.primary) #input:focus{border-color:var(--primary-color)}:host(.secondary) #input:hover,:host(.secondary) #input:focus{border-color:var(--secondary-color)}:host(.success) #input:hover,:host(.success) #input:focus{border-color:var(--success-color)}:host(.warning) #input:hover,:host(.warning) #input:focus{border-color:var(--warning-color)}:host(.danger) #input:hover,:host(.danger) #input:focus{border-color:var(--danger-color)}:host(.light) #input:hover,:host(.light) #input:focus{border-color:var(--light-color)}:host(.dark) #input:hover,:host(.dark) #input:focus{border-color:var(--dark-color)}label{display:block;line-height:2.5em}.control{position:relative}arv-icon{position:absolute;top:12px;left:12px}#input:disabled{cursor:not-allowed;background-color:var(--disabled-color) !important;color:var(--disabled-text-color);border-color:var(--disabled-color) !important}:host(.small) #input{font-size:0.8rem}:host(.small) arv-icon{--icon-size:0.8rem;top:10px}:host(.small) label{font-size:0.8rem}:host(.large) #input{font-size:1.2rem}:host(.large) arv-icon{--icon-size:1.2rem;top:16px}:host(.large) label{font-size:1.2rem}:host(.full),:host(.full) .control,:host(.full) #input{width:100%}";

const Input = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Sets autocomplete for the input.
         */
        this.autocomplete = 'off';
        /**
         * Activates autocorrect for the input.
         */
        this.autocorrect = 'off';
        /**
         * Sets autofocus once the input loads.
         */
        this.autofocus = false;
        /**
         * type of input element.
         */
        this.type = 'text';
        /**
         * Value of the input element.
         */
        this.value = '';
        this.input = () => {
            this.value = this.inputEl.value;
        };
        this.blur = event => {
            this.arvBlur.emit(event);
        };
        this.focus = event => {
            this.arvFocus.emit(event);
        };
        this.keydown = event => {
            this.arvKeydown.emit(event);
        };
        this.arvBlur = index.createEvent(this, "arvBlur", 7);
        this.arvChange = index.createEvent(this, "arvChange", 7);
        this.arvFocus = index.createEvent(this, "arvFocus", 7);
        this.arvKeydown = index.createEvent(this, "arvKeydown", 7);
    }
    valueChanged() {
        this.arvChange.emit(this.value);
        if (this.inputChange) {
            this.inputChange(this.value);
        }
    }
    /**
     * Public api that returns the input element.
     */
    async getInputElement() {
        return this.inputEl;
    }
    async inputFocus() {
        if (this.inputEl) {
            this.inputEl.focus();
        }
    }
    render() {
        const cls = Object.assign(Object.assign(Object.assign({}, helpers.generateAttrValue(this.color)), helpers.generateAttrValue(this.size)), { hasIcon: Boolean(this.icon), row: this.flexDirection && this.flexDirection.indexOf('row') > -1, flex: this.flexDirection === 'column-reverse', full: this.full });
        const labelStyle = {};
        if (this.labelWidth) {
            Object.assign(labelStyle, {
                width: this.labelWidth,
                minWidth: this.labelWidth
            });
        }
        const rootStyles = {};
        if (this.flexDirection) {
            rootStyles.flexDirection = this.flexDirection;
        }
        const props = {
            id: 'input',
            autoComplete: this.autocomplete,
            autoCorrect: this.autocorrect,
            autoFocus: this.autofocus,
            disabled: this.disabled,
            min: this.min,
            max: this.max,
            minLength: this.minlength,
            maxLength: this.maxlength,
            name: this.name,
            placeholder: this.placeholder,
            value: this.value,
            onInput: this.input,
            onBlur: this.blur,
            onFocus: this.focus,
            onKeyDown: this.keydown,
        };
        return (index.h(index.Host, { style: rootStyles, class: cls }, index.h("label", { style: labelStyle, htmlFor: "input", class: "label" }, this.label), index.h("div", { class: "control" }, this.icon && (index.h("arv-icon", { icon: this.icon })), !Boolean(this.rows) && (index.h("input", Object.assign({ type: this.type, ref: input => this.inputEl = input }, props))), Boolean(this.rows) && (index.h("textarea", Object.assign({ ref: input => this.inputEl = input }, props))))));
    }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};
Input.style = inputCss;

const listCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%}";

const List = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("slot", null));
    }
};
List.style = listCss;

const listItemCss = ":host{-ms-flex-align:center;align-items:center;background-color:var(--default-bg);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-ms-flexbox;display:flex;min-height:36px;padding:0 1em;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;width:100%}:host(:hover){background-color:var(--default-highlight)}:host(.primary-active.active){background-color:var(--primary-color);color:var(--primary-text-color)}:host(.secondary-active.active){background-color:var(--secondary-color);color:var(--secondary-text-color)}:host(.dark-active.active){background-color:var(--dark-color);color:var(--dark-text-color)}:host(.light-active.active){background-color:var(--light-color);color:var(--light-text-color)}";

const ListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const cls = Object.assign(Object.assign({}, helpers.generateAttrValue(this.color)), { [`${this.activeColor}-active`]: Boolean(this.activeColor), active: this.isActive });
        return (index.h(index.Host, { class: cls }, index.h("slot", null)));
    }
};
ListItem.style = listItemCss;

const menuItemCss = ":host{background-color:var(--default-bg);cursor:pointer;display:block;line-height:2.5em;padding:0 1em;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}:host(:hover){background-color:var(--default-highlight)}";

const MenuItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.arvMenuSelect = index.createEvent(this, "arvMenuSelect", 7);
    }
    render() {
        return (index.h(index.Host, { onClick: () => this.arvMenuSelect.emit(this.value) }, !this.hideValue && (index.h("arv-text", { wrap: "nowrap" }, index.h("slot", { name: "value" }))), index.h("slot", null)));
    }
};
MenuItem.style = menuItemCss;

const paperCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:var(--radius);background-color:var(--default-bg);display:block}:host(.shadow-2){-webkit-box-shadow:1px 1px 3px 1px rgba(3, 3, 3, 0.3);box-shadow:1px 1px 3px 1px rgba(3, 3, 3, 0.3)}:host(.shadow-1){-webkit-box-shadow:1px 1px 3px rgba(3, 3, 3, 0.2);box-shadow:1px 1px 3px rgba(3, 3, 3, 0.2)}:host(.shadow-0){-webkit-box-shadow:0px 1px 2px rgba(3, 3, 3, 0.05);box-shadow:0px 1px 2px rgba(3, 3, 3, 0.05)}:host(.outlined){-webkit-box-shadow:0px 0px 0px rgba(0, 0, 0, 0);box-shadow:0px 0px 0px rgba(0, 0, 0, 0);border-width:1px;border-color:var(--default-highlight);border-style:solid}";

const Paper = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * How much shadow to be applied.
         */
        this.shadowLevel = 1;
    }
    render() {
        const cls = {
            'shadow-0': this.shadowLevel === 0,
            'shadow-1': this.shadowLevel === 1,
            'shadow-2': this.shadowLevel === 2,
            outlined: this.outlined,
        };
        return (index.h(index.Host, { class: cls }, index.h("slot", null)));
    }
};
Paper.style = paperCss;

const selectCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.full){width:100%;display:-ms-flexbox;display:flex}:host(.full) .control{width:100%}:host(.row){-ms-flex-align:center;align-items:center}:host(.disabled) .select{background-color:var(---disabled-color);cursor:not-allowed}:host(.disabled) .value{color:var(--disabled-text-color)}:host(.disabled) arv-icon{--icon-color:var(--disabled-text-color)}.items{border-radius:var(--radius);-webkit-box-shadow:0px 2px 2px rgba(3, 3, 3, 0.2);box-shadow:0px 2px 2px rgba(3, 3, 3, 0.2);-webkit-box-sizing:border-box;box-sizing:border-box;display:none;margin-bottom:2em;max-height:300px;min-width:100%;outline:none;overflow-y:scroll;position:absolute;z-index:99}:host(.isOpen) .items{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.row) label{margin:0 1em}.select{-ms-flex-align:center;align-items:center;border-color:var(--default-highlight);border-radius:var(--radius);border-style:solid;border-width:1px;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;background-color:var(--default-bg);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0 0 0 1.5em;-webkit-transition:all 0.3s;transition:all 0.3s}label,.value{line-height:2.5em;min-height:2.5em}.control{position:relative}arv-icon{margin:0 8px}:host(.primary.isOpen) .select,:host(.primary) .select:hover{border-color:var(--primary-color)}:host(.secondary.isOpen) .select,:host(.secondary) .select:hover{border-color:var(--secondary-color)}:host(.success.isOpen) .select,:host(.success) .select:hover{border-color:var(--success-color)}:host(.warning.isOpen) .select,:host(.warning) .select:hover{border-color:var(--warning-color)}:host(.danger.isOpen) .select,:host(.danger) .select:hover{border-color:var(--danger-color)}:host(.dark.isOpen) .select,:host(.dark) .select:hover{border-color:var(--dark-color)}:host(.light.isOpen) .select,:host(.light) .select:hover{border-color:var(--light-color)}";

const Select = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.arvSelectChange = index.createEvent(this, "arvSelectChange", 7);
    }
    /**
     * Listens to a arvMenuSelect event from MenuItem
     * component to fire the close function. The
     * value received will be included in
     * arvSelectChange event.
     *
     * @param value - value from MenuItem component
     */
    async onMenuSelect(value) {
        const data = this.valueWithEvent ? value : value.detail;
        await this.close();
        this.arvSelectChange.emit(data);
        if (this.selectChange) {
            this.selectChange(data);
        }
    }
    open() {
        if (this.disabled) {
            return false;
        }
        this.isOpen = true;
        const el = this.el.shadowRoot.querySelector('.items');
        setTimeout(() => {
            // Try block to bypass jest error
            try {
                el.focus();
            }
            catch (e) { }
        }, 100);
    }
    blur() {
        this.close();
    }
    render() {
        const hostCls = Object.assign(Object.assign({ full: this.full, isOpen: this.isOpen }, helpers.generateAttrValue(this.color)), { row: false, disabled: this.disabled });
        const styles = {
            flexDirection: this.flexDirection
        };
        const labelStyle = {};
        if (this.labelWidth) {
            Object.assign(labelStyle, {
                width: this.labelWidth,
                minWidth: this.labelWidth
            });
        }
        if (this.flexDirection && this.flexDirection.indexOf('row') > -1) {
            hostCls.row = true;
        }
        return (index.h(index.Host, { class: hostCls, style: styles }, index.h("label", { style: labelStyle }, this.label), index.h("div", { class: "control" }, index.h("div", { onClick: () => this.open(), class: "select" }, index.h("span", { class: "value" }, this.value || this.placeholder), index.h("slot", { name: "value" }), index.h("arv-icon", { icon: "keyboard_arrow_down" })), index.h("div", { onBlur: () => this.blur(), tabIndex: -1, class: "items" }, index.h("slot", null)))));
    }
    close() {
        return helpers.delay(() => {
            this.isOpen = false;
        }, 300);
    }
    get el() { return index.getElement(this); }
};
Select.style = selectCss;

const sidePaneCss = ":host{border-right-color:var(--default-highlight);border-right-width:1px;border-right-style:solid;height:100vh;min-width:240px;overflow-y:scroll}";

const SidePane = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", { name: "header" }), index.h("slot", null), index.h("slot", { name: "footer" })));
    }
};
SidePane.style = sidePaneCss;

const spacerCss = ":host{height:var(--spacer-height)}:host(.vertical){height:0px;width:var(--spacer-width)}";

const Spacer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const cls = {
            vertical: this.vertical
        };
        return index.h(index.Host, { class: cls });
    }
};
Spacer.style = spacerCss;

const switchCss = ".root{cursor:pointer;height:24px;min-width:38px;width:38px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0 4px}.bar{background-color:var(--default-darker);border-radius:20px;width:100%;height:16px}.circle{-webkit-transition:all 0.3s;transition:all 0.3s;background-color:var(--default-highlight);border-radius:12px;height:24px;width:24px;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:0px;left:0px;border-color:var(--default-shade);border-width:1px;border-style:solid}.circle,.bar{-webkit-box-shadow:0px 1px 1px rgba(3,3,3,0.2);box-shadow:0px 1px 1px rgba(3,3,3,0.2)}.active .circle{left:14px;background-color:#fff;border-color:var(--default-highlight);border-width:9px}.active .bar{background-color:var(--default-shade)}.active.primary .circle{border-color:var(--primary-highlight)}.active.primary .bar{background-color:var(--primary-shade)}.active.secondary .circle{border-color:var(--secondary-highlight)}.active.secondary .bar{background-color:var(--secondary-shade)}.active.success .circle{border-color:var(--success-highlight)}.active.success .bar{background-color:var(--success-shade)}.active.warning .circle{border-color:var(--warning-highlight)}.active.warning .bar{background-color:var(--warning-shade)}.active.danger .circle{border-color:var(--danger-highlight)}.active.danger .bar{background-color:var(--danger-shade)}.active.dark .circle{border-color:var(--dark-highlight)}.active.dark .bar{background-color:var(--dark-shade)}.active.light .circle{border-color:var(--light-highlight)}.active.light .bar{background-color:var(--light-shade)}.disabled .circle{background-color:var(--disabled-color) !important;border-color:var(--disabled-highlight) !important}.disabled .bar{background-color:var(--disabled-shade) !important}.disabled{cursor:not-allowed}";

const Switch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.click = () => {
            if (this.disabled) {
                return false;
            }
            this.value = !this.value;
        };
    }
    render() {
        const classNames = Object.assign(Object.assign({ root: true, active: this.value }, helpers.generateAttrValue(this.color)), { disabled: this.disabled });
        const cls = {
            col: this.flexDirection && this.flexDirection.indexOf('column') > -1
        };
        const styles = (() => {
            if (this.flexDirection) {
                return {
                    flexDirection: this.flexDirection
                };
            }
            return {};
        })();
        return (index.h(index.Host, { style: styles, class: cls }, this.label && (index.h("span", { class: "label" }, this.label)), index.h("slot", { name: "label" }), index.h("div", { onClick: this.click, class: classNames }, index.h("div", { class: "bar" }), index.h("div", { class: "circle" }))));
    }
};
Switch.style = switchCss;

const textCss = ":host{color:var(--text-color)}:host(.primary){color:var(--primary-color)}:host(.secondary){color:var(--secondary-color)}:host(.light){color:var(--light-text-color)}:host(.dark){color:var(--dark-text-color)}:host(.warning){color:var(--warning-color)}:host(.danger){color:var(--danger-color)}:host(.success){color:var(--success-color)}:host(.textShadow){text-shadow:1px 1px 1px rgba(3, 3, 3, 0.8)}:host(.truncate){white-space:nowrap}";

const Text = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const cls = Object.assign(Object.assign({}, helpers.generateAttrValue(this.color)), { truncate: this.truncate, shadow: this.shadow });
        if (this.truncate && this.el.children.length) {
            const node = this.el.children[0];
            node.style.textOverflow = 'ellipsis';
            node.style.width = '100%';
            node.style.overflow = 'hidden';
        }
        if (this.wrap && this.el.children.length) {
            const node = this.el.children[0];
            node.style.whiteSpace = this.wrap;
        }
        return (index.h(index.Host, { class: cls }, index.h("slot", null)));
    }
    get el() { return index.getElement(this); }
};
Text.style = textCss;

const Accordion = {
    element: 'arv-accordion',
    slot: `
    <arv-accordion-item>
      <p slot="title">First Item</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere nisi tenetur ullam cumque. Provident dolor, neque laboriosam nesciunt labore sit quam at molestias quasi, nisi eveniet animi dolorum. Fugiat!
      </p>
    </arv-accordion-item>
    <arv-accordion-item>
      <p slot="title">Second Item</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere nisi tenetur ullam cumque. Provident dolor, neque laboriosam nesciunt labore sit quam at molestias quasi, nisi eveniet animi dolorum. Fugiat!
      </p>
    </arv-accordion-item>
  `,
    props: [{
            name: 'color',
            type: 'color',
            value: ''
        }]
};

const AlertText = {
    element: 'arv-alert-text',
    slot: '<p>Hello World</p>',
    props: [
        {
            name: 'color',
            type: 'color'
        }
    ]
};

const Avatar = {
    name: 'Avatar',
    element: 'arv-avatar',
    slot: false,
    props: [
        {
            name: 'img-src',
            type: 'string',
            value: 'https://scitechdaily.com/images/Universe-Expansion.jpg',
            description: 'Image url'
        },
        {
            name: 'size',
            type: 'size',
            value: 'normal'
        },
    ]
};

const imageUrl = 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg';
const imageUrl2 = 'https://scitechdaily.com/images/Universe-Expansion.jpg';
const AvatarGroup = {
    element: 'arv-avatar-group',
    slot: `
    <arv-avatar img-src="${imageUrl}"></arv-avatar>
    <arv-avatar img-src="${imageUrl2}"></arv-avatar>
    <arv-avatar img-src="${imageUrl}"></arv-avatar>
  `,
    props: [
        {
            name: 'max',
            type: 'string',
            value: '2'
        },
        {
            name: 'size',
            type: 'size'
        }
    ]
};

const Badge = {
    element: 'arv-badge',
    slot: `
    <arv-button>Hello</arv-button>
  `,
    props: [
        {
            name: 'value',
            type: 'string',
            value: '1'
        }, {
            name: 'invisible',
            type: 'boolean',
            description: 'Will hide the badge'
        }, {
            name: 'disable-comma',
            type: 'boolean',
            description: 'Will not render a number with commas.'
        }
    ]
};

const Button = {
    name: 'Button',
    element: 'arv-button',
    slot: 'Test Button',
    props: [
        {
            name: 'icon',
            type: 'string'
        },
        {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and select element.'
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'disabled',
            type: 'boolean',
            value: 'false',
            description: 'Disabled state of the button.'
        },
        {
            name: 'full',
            type: 'boolean',
            value: 'false',
            description: 'Occupies the available width.'
        },
        {
            name: 'size',
            type: 'size',
        },
        {
            name: 'variant',
            type: 'oneOf',
            data: ['raised', 'ghost'],
            value: 'raised',
            description: 'Button ui variant.'
        },
        {
            name: 'loading-color',
            type: 'color',
            description: 'color of the circular progress.'
        },
        {
            name: 'loading',
            type: 'boolean',
            description: 'shows a circular progress.'
        },
        {
            name: 'loading-text',
            type: 'string',
            description: 'shows a loading text'
        }
    ],
};

const Checkbox = {
    element: 'arv-checkbox',
    slot: false,
    props: [
        {
            name: 'label',
            type: 'string',
            description: 'Label of the checkbox',
            value: 'Label'
        }, {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and select element.'
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'size',
            type: 'size'
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Disabled state of the element.'
        }
    ]
};

const Chip = {
    element: 'arv-chip',
    slot: 'HelloWorld!',
    props: [{
            name: 'color',
            type: 'color'
        }, {
            name: 'size',
            type: 'size'
        }]
};

const Dialog = {
    element: 'arv-dialog',
    slot: `
    <p slot="header">Header from slot</p>
    <div style="width: 300px;">
      <h1>Hello World!</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, accusamus tempora inventore delectus impedit quisquam ratione? Ab architecto exercitationem deserunt reprehenderit eligendi, sunt nihil eos quo praesentium sed dolores laudantium?
      </p>
      <arv-select value="select">
        <arv-menu-item>
          <span slot="value">Menu 1</span>
        </arv-menu-item>
        <arv-menu-item>
          <span slot="value">Menu 2</span>
        </arv-menu-item>
        <arv-menu-item>
          <span slot="value">Menu 3</span>
        </arv-menu-item>
      </arv-select>
    </div>
  `,
    containerContent: `
    <arv-button color="secondary" size="large">Open Dialog</arv-button>
  `,
    onLoad: (el) => {
        const button = el.querySelector('arv-button');
        const dialog = el.querySelector('arv-dialog');
        button.addEventListener('click', () => {
            dialog.setAttribute('is-open', 'true');
        });
    },
    props: [
        {
            name: 'dialog-title',
            type: 'string',
            value: 'Title',
            description: 'Title at the header of the dialog box.'
        },
        {
            name: 'is-open',
            type: 'boolean',
            value: 'false',
            disabled: true,
            description: 'Opens the dialog box.'
        },
        {
            name: 'disable-bg-close',
            type: 'boolean',
            description: 'Disables closing of dialog box on background(backdrop) click.'
        },
        {
            name: 'scrollable',
            type: 'boolean',
            description: 'Scrollable dialog box.'
        }
    ],
};

const Flex$1 = {
    name: 'Flex',
    element: 'arv-flex',
    slot: `
    <arv-button color="primary">Primary</arv-button>
    <arv-button color="secondary">Secondary</arv-button>
    <arv-button color="danger">Danger</arv-button>
  `,
    props: [{
            name: 'expanded',
            type: 'boolean',
            value: 'true',
            description: 'Occupies 100% of height and width of the parent element.'
        }, {
            name: 'align-items',
            type: 'oneOf',
            value: '',
            data: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
            description: 'Aligns flex items along the cross axis of the current line of the flex container.'
        }, {
            name: 'direction',
            type: 'oneOf',
            value: '',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.'
        }, {
            name: 'justify',
            type: 'oneOf',
            value: '',
            data: ['center', 'space-between', 'space-around', 'flex-start', 'flex-end'],
            description: 'Aligns flex items along the main axis of the current line of the flex container.'
        }, {
            name: 'wrap',
            type: 'oneOf',
            data: ['wrap', 'no-wrap', 'wrap-reverse'],
            value: '',
            description: 'Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.'
        }]
};

const Header$1 = {
    element: 'arv-header',
    slot: '<arv-flex>Hello World</arv-flex>',
    props: [
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'position',
            type: 'oneOf',
            data: ['static', 'absolute', 'relative', 'fixed', 'sticky', 'inherit'],
            value: 'static',
            description: 'Position of the header'
        },
        {
            name: 'no-shadow',
            type: 'boolean',
            description: 'Will not add a drop shadow to the header'
        }
    ],
};

const Icon$1 = {
    element: 'arv-icon',
    slot: false,
    description: [
        'Renders a material icon from https://material.io/tools/icons/?style=baseline'
    ],
    props: [
        {
            name: 'icon',
            type: 'string',
            value: 'event',
            description: 'material icon from https://material.io/tools/icons/?style=baseline'
        },
        {
            name: 'size',
            type: 'size'
        }
    ]
};

const Input$1 = {
    element: 'arv-input',
    slot: false,
    props: [
        {
            name: 'icon',
            type: 'string',
            value: 'edit',
            description: 'Material Icon to add at the left side of the input.'
        },
        {
            name: 'label',
            type: 'string',
            value: 'Username',
            description: 'Text to be put in the label element.'
        },
        {
            name: 'placeholder',
            type: 'string',
            value: 'Username',
            description: 'Input placeholder'
        }, {
            name: 'rows',
            type: 'string',
            value: '',
            description: 'Rows for the textarea. Automatically renders a textarea element.'
        }, {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and input element.'
        }, {
            name: 'color',
            type: 'color'
        },
        {
            name: 'size',
            type: 'size'
        },
        {
            name: 'full',
            type: 'boolean',
            description: 'Will occupy a full width style.'
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Disables the input element.'
        },
    ]
};

const Menu = {
    element: 'arv-menu',
    slot: `
    <arv-button is-icon><arv-icon icon="account_box"></arv-icon></arv-button>
    <div slot="content">
      <h1>Hello</h1>
    </div>
    <div slot="menu-list">
      <arv-menu-item>
        <span slot="value">Menu Item 1</span>
      </arv-menu-item>
      <arv-menu-item>
        <span slot="value">Menu Item 2</span>
      </arv-menu-item>
      <arv-menu-item>
        <span slot="value">Menu Item 3</span>
      </arv-menu-item>
    </div>
  `,
    props: [
        {
            name: 'x-position',
            type: 'oneOf',
            data: ['left', 'right'],
            value: 'left'
        },
        {
            name: 'y-position',
            type: 'oneOf',
            data: ['top', 'bottom'],
            value: 'bottom'
        },
    ]
};

const Paper$1 = {
    element: 'arv-paper',
    slot: '<h1>Paper Content</h1>',
    props: [
        {
            name: 'shadow-level',
            type: 'oneOf',
            data: [0, 1, 2],
            value: 1,
            description: 'Thickness of the drop shadow from 0 to 2.'
        }, {
            name: 'outlined',
            type: 'boolean',
            description: 'Border only, will not add drop shadow.'
        }
    ]
};

const ProgressCircular = {
    element: 'arv-progress-circular',
    slot: 'Loading',
    props: [
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'size',
            type: 'size'
        }
    ]
};

const ProgressLinear = {
    element: 'arv-progress-linear',
    slot: 'Loading',
    props: [
        {
            name: 'color',
            type: 'color'
        }
    ]
};

const Radio = {
    element: 'arv-radio',
    slot: false,
    props: [
        {
            name: 'label',
            type: 'string',
            description: 'Label of the input radio element.',
            value: 'Label'
        }, {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and select element.'
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'size',
            type: 'size'
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Disabled state of the element.'
        }
    ]
};

const Select$1 = {
    element: 'arv-select',
    slot: `
    <arv-menu-item>
      <span slot="value">Menu Item 1</span>
    </arv-menu-item>
    <arv-menu-item>
      <span slot="value">Menu Item 2</span>
    </arv-menu-item>
    <arv-menu-item hide-value>
      <span slot="value">Menu Item 3</span>
    </arv-menu-item>
  `,
    props: [{
            name: 'label',
            type: 'string',
            description: 'Label of the input select component.',
            value: 'Label'
        }, {
            name: 'value',
            type: 'string',
            value: 'My Value',
            description: 'Explicitly set the value of the select element.'
        }, {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and select element.'
        }, {
            name: 'color',
            type: 'color'
        }, {
            name: 'size',
            type: 'size'
        }, {
            name: 'full',
            type: 'boolean',
            description: 'Occupies a full width select element.'
        }, {
            name: 'disabled',
            type: 'boolean',
            description: 'Disabled state of the element.'
        }]
};

const Snackbar = {
    element: 'arv-snackbar',
    containerContent: `
    <arv-button color="warning">Open Snackbar</arv-button>
  `,
    onLoad: (el) => {
        const button = el.querySelector('arv-button');
        const snackbar = el.querySelector('arv-snackbar');
        button.addEventListener('click', () => {
            snackbar.open();
        });
    },
    slot: `
    <arv-spacer vertical></arv-spacer>
    <span>Slot content</span>
  `,
    props: [{
            name: 'icon',
            type: 'string',
            value: 'check',
            description: 'Icon of the snackbar.'
        }, {
            name: 'message',
            type: 'string',
            value: 'Hello World!',
            description: 'Snackbar text content.'
        }, {
            name: 'duration',
            type: 'string',
            value: 3000,
            description: 'duration in millis to show the snackbar.'
        }, {
            name: 'color',
            type: 'color'
        }, {
            name: 'x-position',
            type: 'oneOf',
            data: ['left', 'right', 'center'],
            description: 'horizontal position of the snackbar.'
        }, {
            name: 'y-position',
            type: 'oneOf',
            data: ['top', 'bottom', 'center'],
            description: 'vertical position of the snackbar.'
        }, {
            name: 'hide-close',
            type: 'boolean',
            description: 'Will hide the close button.'
        }]
};

const steps = [{
        "done": true,
        "title": "StepOne"
    }, {
        "done": false,
        "title": "StepTwo"
    }, {
        "done": false,
        "title": "StepThree"
    }];
const Stepper = {
    element: 'arv-stepper',
    slot: false,
    containerContent: `
    <arv-button
      class="back"
      color="secondary"
      icon="chevron_left"
    >Back</arv-button>
    <arv-spacer vertical></arv-spacer>
    <arv-button
      class="next"
      color="secondary"
      icon="chevron_right"
      flex-direction="row-reverse"
    >Next</arv-button>
  `,
    onLoad: (el) => {
        const nextBtn = el.querySelector('.next');
        const backBtn = el.querySelector('.back');
        const stepper = el.querySelector('arv-stepper');
        nextBtn.addEventListener('click', () => {
            stepper.next();
        });
        backBtn.addEventListener('click', () => {
            stepper.back();
        });
    },
    props: [
        {
            name: 'steps',
            type: 'string',
            value: JSON.stringify(steps)
        }, {
            name: 'active-index',
            type: 'string',
            value: '0'
        }, {
            name: 'color',
            type: 'color'
        }
    ],
};

const Switch$1 = {
    element: 'arv-switch',
    slot: false,
    props: [
        {
            name: 'label',
            type: 'string',
            description: 'Label of the input radio element.',
            value: 'Label'
        }, {
            name: 'flex-direction',
            type: 'oneOf',
            data: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Layout direction of label and select element.'
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'size',
            type: 'size',
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Disabled state'
        }
    ]
};

const Tabs = {
    name: 'Tabs',
    element: 'arv-tabs',
    slot: `
    <arv-tab-panel>
      <h2>Item 1</h2>
    </arv-tab-panel>
    <arv-tab-panel>
      <h2>Item 2</h2>
    </arv-tab-panel>
    <arv-tab-panel>
      <h2>Item 3</h2>
    </arv-tab-panel>
  `,
    props: [
        {
            name: 'tab-names',
            type: 'string',
            value: JSON.stringify([{ "icon": "favorite", "name": "One" }, { "icon": "explore", "name": "Two" }, { "icon": "stars", "name": "Three" }])
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'tab-alignment',
            type: 'oneOf',
            data: ['right', 'center', 'left']
        }
    ]
};

const data = [
    [1, 'John', 'The quick brown,fox jumps over,the lazy dog'.split(',')],
    [2, 'Jane', 'Doe'],
];
const headers = [
    'FirstName', 'LastName'
];
const Table = {
    name: 'Table',
    element: 'arv-table',
    slot: `
    <arv-flex align-items="center" style="padding: 0.5em" slot="header">
      <arv-icon icon="favorite"></arv-icon>
      <arv-spacer vertical></arv-spacer>
      <span>Header from slot</span>
    </arv-flex>
    <span style="padding: 0.5em" slot="footer">
      Footer from slot
    </span>
  `,
    onLoad: (el) => {
        const tableEl = el.querySelector('arv-table');
        tableEl.controls = [
            {
                icon: 'create',
                fn: data => alert(JSON.stringify(data)),
            }
        ];
    },
    props: [
        {
            name: 'table-title',
            type: 'string',
            value: '',
            description: 'Title of the table'
        },
        {
            name: 'table-data',
            type: 'string',
            value: JSON.stringify(data),
            description: 'table data, the first element of the child array is not visible, serves as a placeholder for the ID'
        },
        {
            name: 'table-headers',
            type: 'string',
            value: JSON.stringify(headers),
            description: 'Table header'
        },
        {
            name: 'controls',
            type: 'code',
            description: 'Adds button controls to the right side of the table row.',
            data: `
const tableEl = document.querySelector('arv-table');
tableEl.controls = [
  {
    icon: 'create',
    fn: data => alert(JSON.stringify(data)),
  }
];
      `
        },
        {
            name: 'color',
            type: 'color'
        }
    ]
};

const Tooltip = {
    name: 'Tooltip',
    element: 'arv-tooltip',
    slot: `
    <arv-button variant="raised">Hello</arv-button>
    <arv-text slot="tooltip" wrap="nowrap">
      <p>Custom content</p>
    </arv-text>
  `,
    props: [
        {
            name: 'message',
            type: 'string',
            value: 'hello'
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'position',
            type: 'oneOf',
            data: ['top', 'bottom', 'right', 'left'],
            value: 'top',
        }
    ]
};



const comps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Accordion: Accordion,
  AlertText: AlertText,
  Avatar: Avatar,
  AvatarGroup: AvatarGroup,
  Badge: Badge,
  Button: Button,
  Checkbox: Checkbox,
  Chip: Chip,
  Dialog: Dialog,
  Flex: Flex$1,
  Header: Header$1,
  Icon: Icon$1,
  Input: Input$1,
  Menu: Menu,
  Paper: Paper$1,
  ProgressCircular: ProgressCircular,
  ProgressLinear: ProgressLinear,
  Radio: Radio,
  Select: Select$1,
  Snackbar: Snackbar,
  Stepper: Stepper,
  Switch: Switch$1,
  Tabs: Tabs,
  Table: Table,
  Tooltip: Tooltip
});

const contentCss = "@-webkit-keyframes show{from{opacity:0}to{opacity:1}}@keyframes show{from{opacity:0}to{opacity:1}}:host{-webkit-animation:show 0.3s;animation:show 0.3s;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:100%;overflow:hidden;position:relative;width:100%}#sample{-ms-flex-align:center;align-items:center;background-color:var(--darker);border-radius:var(--radius);-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:100%;-ms-flex-pack:center;justify-content:center;min-height:180px;padding:2em}.sample-wrapper{position:-webkit-sticky;position:sticky;top:-30px;z-index:9}footer{margin-top:64px;min-height:1px}.root{overflow-y:scroll;padding:0 1em}";

const DocContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    applyHtmlSample(item) {
        this.settings = comps[item].props;
        this.addComponent(item);
    }
    settingsChanged(value) {
        const settings = value.detail;
        this.settings = settings.settings;
        this.demoComponent.setAttribute(settings.item.name, settings.item.value);
    }
    componentWillLoad() {
        this.settings = comps[this.selectedComponent].props;
    }
    componentDidLoad() {
        this.addComponent(this.selectedComponent);
    }
    addComponent(item) {
        const { slot, props, containerContent, element, wrapper, onLoad } = comps[item];
        const container = this.el.shadowRoot.getElementById('sample');
        const wrapperEl = document.createElement('div');
        const compEl = document.createElement(element);
        compEl.setAttribute('id', 'demoComponent');
        if (slot) {
            compEl.innerHTML = slot;
        }
        props.forEach(d => {
            if (d.value) {
                compEl.setAttribute(d.name, d.value);
            }
        });
        if (containerContent) {
            container.innerHTML = containerContent;
        }
        else {
            container.innerHTML = '';
        }
        if (!wrapper) {
            container.appendChild(compEl);
        }
        else {
            wrapperEl.innerHTML = wrapper;
            wrapperEl.children[0].appendChild(compEl);
            container.appendChild(wrapperEl);
        }
        this.demoComponent = compEl;
        if (onLoad) {
            onLoad(container);
        }
    }
    render() {
        if (!this.selectedComponent) {
            return null;
        }
        const selectedComp = comps[this.selectedComponent];
        return (index.h("arv-flex", { class: "root", direction: "column", expanded: true }, index.h("h1", null, this.selectedComponent), index.h("arv-divider", null), index.h("p", null), index.h("arv-paper", { class: "sample-wrapper", "shadow-level": "0" }, index.h("div", { id: "sample" })), index.h("doc-control", { settings: selectedComp.props }), index.h("doc-html", { isDark: this.isDark, config: selectedComp, settings: this.settings }), index.h("footer", null)));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "selectedComponent": ["applyHtmlSample"]
    }; }
};
DocContent.style = contentCss;

const controlCss = ".control-description{margin-left:2.5em}pre{background-color:var(--default-highlight);border-radius:var(--radius);overflow-x:scroll;color:var(--font-color)}";

const DocControl = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'dark', 'light'];
        this.settings = [];
        this.generateField = (item, index$1) => {
            const labelWidth = '100px';
            const control = (() => {
                if (item.type === 'color') {
                    return (index.h("arv-select", { label: item.name || 'color', labelWidth: labelWidth, "flex-direction": "row", value: item.value || 'Select', selectChange: data => {
                            this.dataChange(data, index$1);
                        }, full: true }, index.h("arv-menu-item", { value: "" }, "None"), this.colors.map((color) => (index.h("arv-menu-item", { value: color }, color)))));
                }
                if (item.type === 'boolean') {
                    const dataArray = ['true', 'false'];
                    return (index.h("arv-select", { label: item.name, labelWidth: labelWidth, "flex-direction": "row", value: item.value || 'Select', selectChange: data => {
                            this.dataChange(data, index$1);
                        }, full: true }, dataArray.map((d) => (index.h("arv-menu-item", { value: d }, d)))));
                }
                if (item.type === 'size') {
                    const dataArray = ['small', 'normal', 'large'];
                    return (index.h("arv-select", { label: item.name, labelWidth: labelWidth, "flex-direction": "row", value: item.value || 'Select', selectChange: data => {
                            this.dataChange(data, index$1);
                        }, full: true }, dataArray.map((d) => (index.h("arv-menu-item", { value: d }, d)))));
                }
                if (item.type === 'oneOf') {
                    return (index.h("arv-select", { label: item.name, labelWidth: labelWidth, "flex-direction": "row", value: item.value || 'Select', selectChange: data => {
                            this.dataChange(data, index$1);
                        }, full: true }, index.h("arv-menu-item", { value: "" }, "None"), item.data.map((d) => (index.h("arv-menu-item", { value: d }, d)))));
                }
                if (item.type === 'string') {
                    return (index.h("arv-input", { inputChange: data => {
                            this.dataChange(data, index$1);
                        }, labelWidth: labelWidth, label: item.name, value: item.value }));
                }
                if (item.type === 'code') {
                    return [
                        index.h("span", null, item.name),
                        index.h("pre", null, index.h("code", null, item.data))
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
                index.h("arv-flex", { "align-items": "center" }, index.h("div", { style: controlWidth }, control), index.h("p", { class: "control-description" }, description)),
                index.h("arv-spacer", null)
            ];
        };
        this.docSettingsChange = index.createEvent(this, "docSettingsChange", 7);
    }
    render() {
        return (index.h("arv-flex", { direction: "column" }, index.h("h2", null, "Props"), index.h("arv-divider", null), index.h("arv-spacer", null), index.h("arv-flex", { direction: "column", wrap: "wrap", expanded: true }, this.settings.map(this.generateField))));
    }
    dataChange(data, index) {
        this.settings[index].value = data;
        this.settings = this.settings.concat();
        this.docSettingsChange.emit({
            settings: this.settings,
            item: this.settings[index]
        });
    }
};
DocControl.style = controlCss;

const homeCss = ":host{display:block;height:100vh}svg{cursor:pointer;fill:#fff}";

const Home = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isDark = false;
        this.selectedComponent = 'Accordion';
        this.changeMode = () => {
            document.body.classList.toggle('dark');
            this.isDark = !this.isDark;
        };
    }
    docSelectComponentHandler(event) {
        const { detail: componentName } = event;
        this.selectedComponent = null;
        setTimeout(() => {
            this.selectedComponent = componentName;
        }, 100);
    }
    render() {
        const cls = {
            dark: this.isDark
        };
        return (index.h(index.Host, { class: cls }, index.h("arv-flex", { expanded: true }, index.h("doc-nav", { class: cls }), index.h("arv-flex", { direction: "column", expanded: true }, index.h("arv-header", { color: "primary", position: "sticky" }, index.h("arv-flex", { justify: "space-between", "align-items": "center", expanded: true }, index.h("h2", null, "Arv UI"), index.h("arv-spacer", { vertical: true }), index.h("arv-switch", { onClick: this.changeMode }), index.h("arv-flex", { "align-items": "center" }, index.h("p", null, "v.1.0.1"), index.h("arv-spacer", { vertical: true }), index.h("a", { href: "https://github.com/jeric17/arv" }, index.h("svg", { height: "32", class: "octicon octicon-mark-github", viewBox: "0 0 16 16", version: "1.1", width: "32", "aria-hidden": "true" }, index.h("path", { "fill-rule": "evenodd", d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" })))))), Boolean(this.selectedComponent) && (index.h("doc-content", { isDark: this.isDark, selectedComponent: this.selectedComponent }))))));
    }
};
Home.style = homeCss;

var prism = _commonjsHelpers.createCommonjsModule(function (module) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;


var _ = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function encode(tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function deepClone(o, visited) {
			var clone, id, type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = {};
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					o.forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return clone;

				default:
					return o;
			}
		},

		/**
		 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
		 *
		 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
		 *
		 * @param {Element} element
		 * @returns {string}
		 */
		getLanguage: function (element) {
			while (element && !lang.test(element.className)) {
				element = element.parentElement;
			}
			if (element) {
				return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
			}
			return 'none';
		},

		/**
		 * Returns the script element that is currently executing.
		 *
		 * This does __not__ work for line script element.
		 *
		 * @returns {HTMLScriptElement | null}
		 */
		currentScript: function () {
			if (typeof document === 'undefined') {
				return null;
			}
			if ('currentScript' in document) {
				return document.currentScript;
			}

			// IE11 workaround
			// we'll get the src of the current script by parsing IE11's error stack trace
			// this will not work for inline scripts

			try {
				throw new Error();
			} catch (err) {
				// Get file src url from stack. Specifically works with the format of stack traces in IE.
				// A stack will look like this:
				//
				// Error
				//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
				//    at Global code (http://localhost/components/prism-core.js:606:1)

				var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
				if (src) {
					var scripts = document.getElementsByTagName('script');
					for (var i in scripts) {
						if (scripts[i].src == src) {
							return scripts[i];
						}
					}
				}
				return null;
			}
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need an object and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			container: container,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

		_.hooks.run('before-all-elements-highlight', env);

		for (var i = 0, element; element = env.elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language = _.util.getLanguage(element);
		var grammar = _.languages[language];

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		var parent = element.parentNode;
		if (parent && parent.nodeName.toLowerCase() === 'pre') {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		function insertHighlightedCode(highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	tokenize: function(text, grammar) {
		var rest = grammar.rest;
		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		var tokenList = new LinkedList();
		addAfter(tokenList, tokenList.head, text);

		matchGrammar(text, tokenList, grammar, tokenList.head, 0);

		return toArray(tokenList);
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};

_self.Prism = _;

function Token(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || '').length|0;
	this.greedy = !!greedy;
}

Token.stringify = function stringify(o, language) {
	if (typeof o == 'string') {
		return o;
	}
	if (Array.isArray(o)) {
		var s = '';
		o.forEach(function (e) {
			s += stringify(e, language);
		});
		return s;
	}

	var env = {
		type: o.type,
		content: stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	var aliases = o.alias;
	if (aliases) {
		if (Array.isArray(aliases)) {
			Array.prototype.push.apply(env.classes, aliases);
		} else {
			env.classes.push(aliases);
		}
	}

	_.hooks.run('wrap', env);

	var attributes = '';
	for (var name in env.attributes) {
		attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
};

/**
 * @param {string} text
 * @param {LinkedList<string | Token>} tokenList
 * @param {any} grammar
 * @param {LinkedListNode<string | Token>} startNode
 * @param {number} startPos
 * @param {boolean} [oneshot=false]
 * @param {string} [target]
 */
function matchGrammar(text, tokenList, grammar, startNode, startPos, oneshot, target) {
	for (var token in grammar) {
		if (!grammar.hasOwnProperty(token) || !grammar[token]) {
			continue;
		}

		var patterns = grammar[token];
		patterns = Array.isArray(patterns) ? patterns : [patterns];

		for (var j = 0; j < patterns.length; ++j) {
			if (target && target == token + ',' + j) {
				return;
			}

			var pattern = patterns[j],
				inside = pattern.inside,
				lookbehind = !!pattern.lookbehind,
				greedy = !!pattern.greedy,
				lookbehindLength = 0,
				alias = pattern.alias;

			if (greedy && !pattern.pattern.global) {
				// Without the global flag, lastIndex won't work
				var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
				pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
			}

			pattern = pattern.pattern || pattern;

			for ( // iterate the token list and keep track of the current token/string position
				var currentNode = startNode.next, pos = startPos;
				currentNode !== tokenList.tail;
				pos += currentNode.value.length, currentNode = currentNode.next
			) {

				var str = currentNode.value;

				if (tokenList.length > text.length) {
					// Something went terribly wrong, ABORT, ABORT!
					return;
				}

				if (str instanceof Token) {
					continue;
				}

				var removeCount = 1; // this is the to parameter of removeBetween

				if (greedy && currentNode != tokenList.tail.prev) {
					pattern.lastIndex = pos;
					var match = pattern.exec(text);
					if (!match) {
						break;
					}

					var from = match.index + (lookbehind && match[1] ? match[1].length : 0);
					var to = match.index + match[0].length;
					var p = pos;

					// find the node that contains the match
					p += currentNode.value.length;
					while (from >= p) {
						currentNode = currentNode.next;
						p += currentNode.value.length;
					}
					// adjust pos (and p)
					p -= currentNode.value.length;
					pos = p;

					// the current node is a Token, then the match starts inside another Token, which is invalid
					if (currentNode.value instanceof Token) {
						continue;
					}

					// find the last node which is affected by this match
					for (
						var k = currentNode;
						k !== tokenList.tail && (p < to || (typeof k.value === 'string' && !k.prev.value.greedy));
						k = k.next
					) {
						removeCount++;
						p += k.value.length;
					}
					removeCount--;

					// replace with the new match
					str = text.slice(pos, p);
					match.index -= pos;
				} else {
					pattern.lastIndex = 0;

					var match = pattern.exec(str);
				}

				if (!match) {
					if (oneshot) {
						break;
					}

					continue;
				}

				if (lookbehind) {
					lookbehindLength = match[1] ? match[1].length : 0;
				}

				var from = match.index + lookbehindLength,
					match = match[0].slice(lookbehindLength),
					to = from + match.length,
					before = str.slice(0, from),
					after = str.slice(to);

				var removeFrom = currentNode.prev;

				if (before) {
					removeFrom = addAfter(tokenList, removeFrom, before);
					pos += before.length;
				}

				removeRange(tokenList, removeFrom, removeCount);

				var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
				currentNode = addAfter(tokenList, removeFrom, wrapped);

				if (after) {
					addAfter(tokenList, currentNode, after);
				}


				if (removeCount > 1)
					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, true, token + ',' + j);

				if (oneshot)
					break;
			}
		}
	}
}

/**
 * @typedef LinkedListNode
 * @property {T} value
 * @property {LinkedListNode<T> | null} prev The previous node.
 * @property {LinkedListNode<T> | null} next The next node.
 * @template T
 */

/**
 * @template T
 */
function LinkedList() {
	/** @type {LinkedListNode<T>} */
	var head = { value: null, prev: null, next: null };
	/** @type {LinkedListNode<T>} */
	var tail = { value: null, prev: head, next: null };
	head.next = tail;

	/** @type {LinkedListNode<T>} */
	this.head = head;
	/** @type {LinkedListNode<T>} */
	this.tail = tail;
	this.length = 0;
}

/**
 * Adds a new node with the given value to the list.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {T} value
 * @returns {LinkedListNode<T>} The added node.
 * @template T
 */
function addAfter(list, node, value) {
	// assumes that node != list.tail && values.length >= 0
	var next = node.next;

	var newNode = { value: value, prev: node, next: next };
	node.next = newNode;
	next.prev = newNode;
	list.length++;

	return newNode;
}
/**
 * Removes `count` nodes after the given node. The given node will not be removed.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {number} count
 * @template T
 */
function removeRange(list, node, count) {
	var next = node.next;
	for (var i = 0; i < count && next !== list.tail; i++) {
		next = next.next;
	}
	node.next = next;
	next.prev = node;
	list.length -= i;
}
/**
 * @param {LinkedList<T>} list
 * @returns {T[]}
 * @template T
 */
function toArray(list) {
	var array = [];
	var node = list.head.next;
	while (node !== list.tail) {
		array.push(node.value);
		node = node.next;
	}
	return array;
}


if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

//Get current script and highlight
var script = _.util.currentScript();

if (script) {
	_.filename = script.src;

	if (script.hasAttribute('data-manual')) {
		_.manual = true;
	}
}

function highlightAutomaticallyCallback() {
	if (!_.manual) {
		_.highlightAll();
	}
}

if (!_.manual) {
	// If the document state is "loading", then we'll use DOMContentLoaded.
	// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
	// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
	// might take longer one animation frame to execute which can create a race condition where only some plugins have
	// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
	// See https://github.com/PrismJS/prism/issues/2102
	var readyState = document.readyState;
	if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
		document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
	} else {
		if (window.requestAnimationFrame) {
			window.requestAnimationFrame(highlightAutomaticallyCallback);
		} else {
			window.setTimeout(highlightAutomaticallyCallback, 16);
		}
	}
}

return _;

})(_self);

if ( module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof _commonjsHelpers.commonjsGlobal !== 'undefined') {
	_commonjsHelpers.commonjsGlobal.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': {
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
		greedy: true
	},
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				}
				// See rest below
			}
		},
		'url': {
			pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/
			}
		},
		'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
		'important': /!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, markup.tag);
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	/**
	 * @param {Element} [container=document]
	 */
	self.Prism.fileHighlight = function(container) {
		container = container || document;

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
			// ignore if already loaded
			if (pre.hasAttribute('data-src-loaded')) {
				return;
			}

			// load current
			var src = pre.getAttribute('data-src');

			var language, parent = pre;
			var lang = /\blang(?:uage)?-([\w-]+)\b/i;
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (pre.className.match(lang) || [, ''])[1];
			}

			if (!language) {
				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
				language = Extensions[extension] || extension;
			}

			var code = document.createElement('code');
			code.className = 'language-' + language;

			pre.textContent = '';

			code.textContent = 'Loading…';

			pre.appendChild(code);

			var xhr = new XMLHttpRequest();

			xhr.open('GET', src, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {

					if (xhr.status < 400 && xhr.responseText) {
						code.textContent = xhr.responseText;

						Prism.highlightElement(code);
						// mark as loaded
						pre.setAttribute('data-src-loaded', '');
					}
					else if (xhr.status >= 400) {
						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
					}
					else {
						code.textContent = '✖ Error: File does not exist or is empty';
					}
				}
			};

			xhr.send(null);
		});
	};

	document.addEventListener('DOMContentLoaded', function () {
		// execute inside handler, for dropping Event as argument
		self.Prism.fileHighlight();
	});

})();
});

const prismCoyCss = "code[class*=\"language-\"],pre[class*=\"language-\"]{color:black;background:none;font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=\"language-\"]{position:relative;margin:.5em 0;overflow:visible;padding:0}pre[class*=\"language-\"]>code{position:relative;border-left:10px solid #358ccb;-webkit-box-shadow:-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;box-shadow:-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;background-color:#fdfdfd;background-image:-webkit-gradient(linear, left top, left bottom, color-stop(50%, transparent), color-stop(50%, rgba(69, 142, 209, 0.04)));background-image:linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);background-size:3em 3em;background-origin:content-box;background-attachment:local}code[class*=\"language\"]{max-height:inherit;height:inherit;padding:0 1em;display:block;overflow:auto}:not(pre)>code[class*=\"language-\"],pre[class*=\"language-\"]{background-color:#fdfdfd;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin-bottom:1em}:not(pre)>code[class*=\"language-\"]{position:relative;padding:.2em;border-radius:0.3em;color:#c92c2c;border:1px solid rgba(0, 0, 0, 0.1);display:inline;white-space:normal}pre[class*=\"language-\"]:before,pre[class*=\"language-\"]:after{content:'';z-index:-2;display:block;position:absolute;bottom:0.75em;left:0.18em;width:40%;height:20%;max-height:13em;-webkit-box-shadow:0px 13px 8px #979797;box-shadow:0px 13px 8px #979797;-webkit-transform:rotate(-2deg);-moz-transform:rotate(-2deg);-ms-transform:rotate(-2deg);-o-transform:rotate(-2deg);transform:rotate(-2deg)}:not(pre)>code[class*=\"language-\"]:after,pre[class*=\"language-\"]:after{right:0.75em;left:auto;-webkit-transform:rotate(2deg);-moz-transform:rotate(2deg);-ms-transform:rotate(2deg);-o-transform:rotate(2deg);transform:rotate(2deg)}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:#7D8B99}.token.punctuation{color:#5F6364}.token.property,.token.tag,.token.boolean,.token.number,.token.function-name,.token.constant,.token.symbol,.token.deleted{color:#c92c2c}.token.selector,.token.attr-name,.token.string,.token.char,.token.function,.token.builtin,.token.inserted{color:#2f9c0a}.token.operator,.token.entity,.token.url,.token.variable{color:#a67f59;background:rgba(255, 255, 255, 0.5)}.token.atrule,.token.attr-value,.token.keyword,.token.class-name{color:#1990b8}.token.regex,.token.important{color:#e90}.language-css .token.string,.style .token.string{color:#a67f59;background:rgba(255, 255, 255, 0.5)}.token.important{font-weight:normal}.token.bold{font-weight:bold}.token.italic{font-style:italic}.token.entity{cursor:help}.token.namespace{opacity:.7}@media screen and (max-width: 767px){pre[class*=\"language-\"]:before,pre[class*=\"language-\"]:after{bottom:14px;-webkit-box-shadow:none;box-shadow:none}}.token.tab:not(:empty):before,.token.cr:before,.token.lf:before{color:#e0d7d1}pre[class*=\"language-\"].line-numbers.line-numbers{padding-left:0}pre[class*=\"language-\"].line-numbers.line-numbers code{padding-left:3.8em}pre[class*=\"language-\"].line-numbers.line-numbers .line-numbers-rows{left:0}pre[class*=\"language-\"][data-line]{padding-top:0;padding-bottom:0;padding-left:0}pre[data-line] code{position:relative;padding-left:4em}pre .line-highlight{margin-top:0}";

const prismTomorrowCss = "code[class*=\"language-\"],pre[class*=\"language-\"]{color:#ccc;background:none;font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=\"language-\"]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=\"language-\"],pre[class*=\"language-\"]{background:#2d2d2d}:not(pre)>code[class*=\"language-\"]{padding:.1em;border-radius:.3em;white-space:normal}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:#999}.token.punctuation{color:#ccc}.token.tag,.token.attr-name,.token.namespace,.token.deleted{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.number,.token.function{color:#f08d49}.token.property,.token.class-name,.token.constant,.token.symbol{color:#f8c555}.token.selector,.token.important,.token.atrule,.token.keyword,.token.builtin{color:#cc99cd}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable{color:#7ec699}.token.operator,.token.entity,.token.url{color:#67cdcc}.token.important,.token.bold{font-weight:bold}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}";

const htmlCss = "code{background-color:var(--darker);white-space:pre-wrap !important}pre{background-color:var(--darker);border-radius:var(--radius);-webkit-box-sizing:border-box;box-sizing:border-box;padding:1em}";

const DocHtml = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.config = {};
        this.settings = [];
    }
    settingsHandler() {
        this.init();
    }
    get htmlCode() {
        const { element, slot } = this.config;
        return `
    <${element} ${this.propsString}>
         ${slot || ''}
    </${element}>
`;
    }
    get propsString() {
        return this.settings.map(d => {
            if (!d.value) {
                return '';
            }
            return `${d.name}="${d.value}"`;
        }).filter(d => d).join(` `);
    }
    componentDidLoad() {
        this.init();
    }
    render() {
        return (index.h(index.Host, null, this.isDark && (index.h("style", null, prismTomorrowCss)), !this.isDark && (index.h("style", null, prismCoyCss)), index.h("arv-flex", { direction: "column" }, index.h("arv-spacer", null), index.h("h2", null, "Html"), index.h("arv-divider", null), index.h("arv-spacer", null), index.h("pre", null, index.h("code", { class: "language-html" })))));
    }
    init() {
        const html = prism.highlight(this.htmlCode, prism.languages.html, 'html');
        this.el.shadowRoot.querySelector('code').innerHTML = html;
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "settings": ["settingsHandler"]
    }; }
};
DocHtml.style = htmlCss;

const DocNav = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.docSelectComponent = index.createEvent(this, "docSelectComponent", 7);
    }
    render() {
        return (index.h("arv-side-pane", null, index.h("arv-list", null, this.items.map(item => (index.h("arv-list-item", { "active-color": "light", isActive: this.selectedItem === item, onClick: () => this.click(item) }, item))))));
    }
};

exports.arv_divider = Divider;
exports.arv_flex = Flex;
exports.arv_header = Header;
exports.arv_icon = Icon;
exports.arv_input = Input;
exports.arv_list = List;
exports.arv_list_item = ListItem;
exports.arv_menu_item = MenuItem;
exports.arv_paper = Paper;
exports.arv_select = Select;
exports.arv_side_pane = SidePane;
exports.arv_spacer = Spacer;
exports.arv_switch = Switch;
exports.arv_text = Text;
exports.doc_content = DocContent;
exports.doc_control = DocControl;
exports.doc_home = Home;
exports.doc_html = DocHtml;
exports.doc_nav = DocNav;
