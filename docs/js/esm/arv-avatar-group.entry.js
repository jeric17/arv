import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-8fd6d07a.js';
import { g as generateAttrValue } from './helpers-5034f609.js';

const avatarGroupCss = ":host{display:-ms-flexbox;display:flex}:host(.large){--avatar-normal:var(--avatar-large)}:host(.small){--avatar-normal:var(--avatar-small)}:host(.large) .more{font-size:1.8em}:host(.small) .more{font-size:0.8em}.more{width:var(--avatar-normal);height:var(--avatar-normal);min-width:var(--avatar-normal);min-height:var(--avatar-normal);background-color:var(--default-shade);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:100%;margin-left:-15%;font-size:1.5em}";

const AvatarGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.arvMore = createEvent(this, "arvMore", 7);
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
        const cls = Object.assign({}, generateAttrValue(this.size));
        const childrenLength = this.el.children.length;
        let extra = 0;
        if (this.max &&
            childrenLength > this.max) {
            extra = childrenLength - this.max;
        }
        return (h(Host, { class: cls }, h("slot", null), Boolean(extra) && (h("div", { onClick: () => this.arvMore.emit(), class: "more" }, "+", extra))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "max": ["maxHandler"]
    }; }
};
AvatarGroup.style = avatarGroupCss;

export { AvatarGroup as arv_avatar_group };
