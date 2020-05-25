'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const myTestingComponentCss = ":host{--uploader-bg:#e1faff}";

const MyTestingComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("arv-container", { height: "100vh", width: "500px" }, index.h("arv-text", { truncate: true }, index.h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus reiciendis non fugit esse sequi sint! Illum, corporis consequuntur aspernatur asperiores numquam quas quod libero, voluptatibus voluptate nesciunt dolorem sequi!")))));
    }
    get el() { return index.getElement(this); }
};
MyTestingComponent.style = myTestingComponentCss;

exports.my_testing_component = MyTestingComponent;
