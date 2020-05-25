import { r as registerInstance, h, g as getElement } from './index-8fd6d07a.js';

const myTestingComponentCss = ":host{--uploader-bg:#e1faff}";

const MyTestingComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("arv-container", { height: "100vh", width: "500px" }, h("arv-text", { truncate: true }, h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus reiciendis non fugit esse sequi sint! Illum, corporis consequuntur aspernatur asperiores numquam quas quod libero, voluptatibus voluptate nesciunt dolorem sequi!")))));
    }
    get el() { return getElement(this); }
};
MyTestingComponent.style = myTestingComponentCss;

export { MyTestingComponent as my_testing_component };
