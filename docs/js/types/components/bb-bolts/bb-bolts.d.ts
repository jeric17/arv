export declare class Bolts {
    el: HTMLElement;
    selectedItem: any;
    codeText: string;
    themeMode: boolean;
    items: any[];
    componentDidLoad(): boolean;
    onPropsChange(name: any, value: any): void;
    generateOneOf(item: any): any;
    generateBoolean(item: any): any;
    generateString(item: any): any;
    generateObj(item: any): void;
    generateObj2(item: any): void;
    setControls(): any;
    setItem(index?: number): boolean;
    generate(): void;
    addProps(element: string, props: any, _slot: any): string;
    slotChanged(slot: string): void;
    wrapperChanged(wrapper: string): void;
    eventDescription(): any;
    propsDescription(): any;
    cssVariablesDescription(): any;
    toggleTheme(): void;
    render(): any;
}
