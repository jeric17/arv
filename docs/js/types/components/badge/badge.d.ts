export declare class Badge {
    /**
     * Will hide the badge.
     */
    invisible?: boolean;
    /**
     * Value of the badge to show.
     */
    value?: number | string;
    /**
     * Value will not render commas.
     */
    disableComma?: boolean;
    render(): any;
}
