import { r as registerInstance, h, g as getElement } from './index-8fd6d07a.js';
var myTestingComponentCss = ":host{--uploader-bg:#e1faff}";
var MyTestingComponent = /** @class */ (function () {
    function MyTestingComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyTestingComponent.prototype.render = function () {
        return (h("div", null, h("arv-container", { height: "100vh", width: "500px" }, h("arv-text", { truncate: true }, h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus reiciendis non fugit esse sequi sint! Illum, corporis consequuntur aspernatur asperiores numquam quas quod libero, voluptatibus voluptate nesciunt dolorem sequi!")))));
    };
    Object.defineProperty(MyTestingComponent.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return MyTestingComponent;
}());
MyTestingComponent.style = myTestingComponentCss;
export { MyTestingComponent as my_testing_component };
