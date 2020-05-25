export declare class Menu {
    /**
     * timeout delay.
     */
    delay: number;
    /**
     * Reference to host element.
     */
    el: HTMLElement;
    /**
     * Reference of menu list to show or hide.
     */
    isOpen: boolean;
    /**
     * top and bottom position of content.
     */
    yPosition: 'top' | 'bottom';
    /**
     * let and right position of content.
     */
    xPosition: 'left' | 'right';
    /**
     * Click outside of the menu will not trigger close.
     */
    disableBgclose?: boolean;
    blurHandler(): void;
    menuTriggerClick: () => void;
    menuListClick: () => void;
    private toggle;
    render(): any;
}
