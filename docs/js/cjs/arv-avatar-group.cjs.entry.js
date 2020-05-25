'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');
const helpers = require('./helpers-72bf351a.js');

const avatarGroupCss = ":host{display:-ms-flexbox;display:flex}:host(.large){--avatar-normal:var(--avatar-large)}:host(.small){--avatar-normal:var(--avatar-small)}:host(.large) .more{font-size:1.8em}:host(.small) .more{font-size:0.8em}.more{width:var(--avatar-normal);height:var(--avatar-normal);min-width:var(--avatar-normal);min-height:var(--avatar-normal);background-color:var(--default-shade);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:100%;margin-left:-15%;font-size:1.5em}";

const AvatarGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.arvMore = index.createEvent(this, "arvMore", 7);
    }
    /**
     * Updates children styling once max value has changed.
     */
    maxHandler() {
        this.init();
    }
    /**
     * Adds style attributes, dislay and margin-left, to avatar elements.
     */
    componentDidLoad() {
        this.init();
    }
    init() {
        const avatars = Array.from(this.el.children);
        const max = this.max - 1;
        avatars.forEach((node, index) => {
            if (index > 0) {
                node.style.marginLeft = '-15%';
            }
            else {
                node.style.marginLeft = '';
            }
            if (index > max) {
                node.style.display = 'none';
            }
            else {
                node.style.display = '';
            }
        });
    }
    render() {
        const cls = Object.assign({}, helpers.generateAttrValue(this.size));
        const childrenLength = this.el.children.length;
        let extra = 0;
        if (this.max &&
            childrenLength > this.max) {
            extra = childrenLength - this.max;
        }
        return (index.h(index.Host, { class: cls }, index.h("slot", null), Boolean(extra) && (index.h("div", { onClick: () => this.arvMore.emit(), class: "more" }, "+", extra))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "max": ["maxHandler"]
    }; }
};
AvatarGroup.style = avatarGroupCss;

exports.arv_avatar_group = AvatarGroup;
