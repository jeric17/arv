'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const menuCss = ":host{outline:none;position:relative}@-webkit-keyframes scale-up{from{-webkit-transform:scaleY(0);transform:scaleY(0)}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes scale-up{from{-webkit-transform:scaleY(0);transform:scaleY(0)}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes hide{from{opacity:1}to{opacity:0}}@keyframes hide{from{opacity:1}to{opacity:0}}.top{bottom:0}.right{left:1em}.left{right:1em}.content{-webkit-animation:scale-up 0.1s ease-out forwards;animation:scale-up 0.1s ease-out forwards;display:none;position:absolute;margin:0;padding:0;z-index:11;-webkit-transform-origin:top right;transform-origin:top right;background-color:var(--default-bg);-webkit-box-shadow:0px 1px 3px rgba(3, 3, 3, 0.2);box-shadow:0px 1px 3px rgba(3, 3, 3, 0.2);border-radius:var(--radius);overflow:hidden}.content.top{-webkit-transform-origin:bottom right;transform-origin:bottom right}.isOpen{display:block}.menu-trigger{cursor:pointer}.listHide{-webkit-animation:hide 0.2s forwards;animation:hide 0.2s forwards}";

const Menu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * timeout delay.
         */
        this.delay = 300;
        /**
         * Reference of menu list to show or hide.
         */
        this.isOpen = false;
        /**
         * top and bottom position of content.
         */
        this.yPosition = 'bottom';
        /**
         * let and right position of content.
         */
        this.xPosition = 'right';
        this.menuTriggerClick = () => {
            this.toggle();
        };
        this.menuListClick = () => {
            setTimeout(() => {
                this.isOpen = false;
            }, this.delay);
        };
    }
    blurHandler() {
        this.isOpen = false;
    }
    toggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            // dismiss jest error
            try {
                this.el.focus();
            }
            catch (e) { }
            const content = this.el.shadowRoot.querySelector('.content');
            if (this.yPosition === 'top') {
                const menutriggerEl = this.el.shadowRoot.querySelector('.menu-trigger');
                content.style.marginBottom = `${menutriggerEl.clientHeight}px`;
            }
            else {
                content.style.marginBottom = '';
            }
        }
    }
    render() {
        const contentCls = {
            content: true,
            top: this.yPosition === 'top',
            bottom: this.yPosition === 'bottom',
            left: this.xPosition === 'left',
            right: this.xPosition === 'right',
            isOpen: this.isOpen
        };
        return (index.h(index.Host, { tabIndex: -1 }, index.h("div", { class: "menu-trigger", onClick: this.menuTriggerClick }, index.h("slot", null)), index.h("div", { class: contentCls }, index.h("slot", { name: "content" }), index.h("div", { onClick: this.menuListClick, class: "menu-list" }, index.h("slot", { name: "menu-list" })))));
    }
    get el() { return index.getElement(this); }
};
Menu.style = menuCss;

exports.arv_menu = Menu;
