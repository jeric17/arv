import { EventEmitter } from '../../stencil-public-runtime';
import { Color } from '../../interface';
/**
 * @slot header - Positioned between table title and table data.
 * @slot footer - Positioned at the bottom after the table.
 */
export declare class Table {
    /**
     * Table data to display. The first element of the array will not
     * be shown. It is used as a placeholder for the ID.
     */
    tableDataArray: any[];
    tableHeadersData: string[];
    /**
     * Color variant to set.
     */
    color: Color;
    /**
     * This serves as the buttons on the right side of the row. It renders a
     * button icon which calls the callback function that has the whole
     * row as the argument.
     */
    controls: {
        icon: string;
        fn: (data: any) => any;
    }[];
    /**
     * Table data to render.
     */
    tableData: any;
    /**
     * Will parse tableData.
     */
    handleTableData(): void;
    /**
     * Table header to render.
     */
    tableHeaders: any;
    /**
     * Will parse tableHeader.
     */
    handleTableHeaders(): void;
    /**
     * Table element attributes to be added on the table element.
     */
    tableProps: {};
    /**
     * Title of the table.
     */
    tableTitle: string;
    /**
     * Callback prop function will be triggered on row click.
     */
    select: (row: any) => void;
    /**
     * Emitted on table row click.
     */
    arvRowClick: EventEmitter;
    /**
     * Emitted on th click.
     */
    arvHeaderClick: EventEmitter;
    /**
     * Emitted on td click.
     */
    arvRowItemClick: EventEmitter;
    componentWillLoad(): void;
    load(src: string, dest: string): boolean;
    thItemClick(item: any): void;
    trItemClick(item: any): void;
    tdItemClick(item: any): void;
    private generateRowItem;
    render(): any;
}
