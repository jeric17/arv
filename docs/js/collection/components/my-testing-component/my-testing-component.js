import { Component, Element, State, h } from '@stencil/core';
export class MyTestingComponent {
    render() {
        return (h("div", null,
            h("arv-container", { height: "100vh", width: "500px" },
                h("arv-text", { truncate: true },
                    h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus reiciendis non fugit esse sequi sint! Illum, corporis consequuntur aspernatur asperiores numquam quas quod libero, voluptatibus voluptate nesciunt dolorem sequi!")))));
    }
    static get is() { return "my-testing-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-testing-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-testing-component.css"]
    }; }
    static get states() { return {
        "checked": {}
    }; }
    static get elementRef() { return "el"; }
}
