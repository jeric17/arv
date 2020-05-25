import { Component, Host, h, Event, EventEmitter, Prop, Watch, State } from '@stencil/core';
import { Color } from '../../interface';
import { generateAttrValue } from '../../utils/helpers';

/**
 * @slot header - Positioned between table title and table data.
 * @slot footer - Positioned at the bottom after the table.
 */
@Component({
  tag: 'arv-table',
  styleUrl: 'table.css',
  shadow: true
})
export class Table {

  /**
   * Table data to display. The first element of the array will not
   * be shown. It is used as a placeholder for the ID.
   */
  @State() tableDataArray: any[];

  /*
   * Table header
   */
  @State() tableHeadersData: string[];

  /**
   * Color variant to set.
   */
  @Prop() color: Color;

  /**
   * This serves as the buttons on the right side of the row. It renders a
   * button icon which calls the callback function that has the whole
   * row as the argument.
   */
  @Prop() controls: { icon: string, fn: (data: any) => any }[] = [];

  /**
   * Table data to render.
   */
  @Prop() tableData: any = [];

  /**
   * Will parse tableData.
   */
  @Watch('tableData')
  handleTableData() {
    this.load('tableData', 'tableDataArray');
  }

  /**
   * Table header to render.
   */
  @Prop() tableHeaders: any;

  /**
   * Will parse tableHeader.
   */
  @Watch('tableHeaders')
  handleTableHeaders() {
    this.load('tableHeaders', 'tableHeadersData');
  }

  /**
   * Table element attributes to be added on the table element.
   */
  @Prop() tableProps = {};

  /**
   * Title of the table.
   */
  @Prop() tableTitle: string;

  /**
   * Callback prop function will be triggered on row click.
   */
  @Prop() select: (row: any) => void;

  /**
   * Emitted on table row click.
   */
  @Event() arvRowClick: EventEmitter;

  /**
   * Emitted on th click.
   */
  @Event() arvHeaderClick: EventEmitter;

  /**
   * Emitted on td click.
   */
  @Event() arvRowItemClick: EventEmitter;

  componentWillLoad() {
    this.load('tableHeaders', 'tableHeadersData');
    this.load('tableData', 'tableDataArray');
  }

  load(src: string, dest: string) {
    if (!this[src]) {
      this[dest] = [];
      return false;
    }
    if (typeof this[src] !== 'string') {
      this[dest] = this[src];
      return false;
    }
    try {
      const steps = JSON.parse(this[src]);
      this[dest] = steps;
    } catch (e) {
      console.error(e);
    }
  }

  thItemClick(item) {
    this.arvHeaderClick.emit(item);
  }

  trItemClick(item) {
    this.arvRowClick.emit(item);
    if (this.select) {
      this.select(item);
    }
  }

  tdItemClick(item) {
    this.arvRowItemClick.emit(item)
  }

  private generateRowItem(value) {
    if (typeof value === 'string') {
      return value;
    }

    if (Array.isArray(value)) {
      return (
        <arv-flex wrap="wrap">
          {value.map(d => (
            <span class="rowItemArrayItem">
              {d}
            </span>
          ))}
        </arv-flex>
      );
    }

    return value;
  }

  render() {

    const cls = {
      ...generateAttrValue(this.color),
    };

    const trClass = {
      tr: true
    };

    return (
      <Host class={cls}>
        <div class="heading">
          {Boolean(this.tableTitle) && (
            <h1 class="table-title">{this.tableTitle}</h1>
          )}
          <slot name="header"></slot>
        </div>
        <table
          class="table"
          {...this.tableProps}>

          <thead>
            <tr class="tr">
              {this.tableHeadersData.map(headerItem => (
                <th
                  onClick={this.thItemClick.bind(this, headerItem)}
                  class="th"
                >
                  {headerItem}
                </th>
              ))}
              {Boolean(this.controls.length) && (<th class="th"></th>)}
            </tr>
          </thead>

          <tbody>
            {this.tableDataArray.map(rowData => {
              const [id, ...dataBody] = rowData;
              return (
                <tr
                  data-id={id}
                  class={trClass}
                  onClick={this.trItemClick.bind(this, rowData)}
                >
                  {dataBody.map(rowItem => (
                    <td
                      class="td"
                      onClick={this.tdItemClick.bind(this, rowItem)}
                    >
                      {this.generateRowItem(rowItem)}
                    </td>
                  ))}
                  {Boolean(this.controls.length) && (
                    <td class="td controls">
                      <arv-flex justify="flex-end">
                        {this.controls.map(ctrlItem => (
                          <arv-button
                            color={this.color}
                            variant="ghost"
                            icon={ctrlItem.icon}
                            onClick={() => ctrlItem.fn(rowData)}
                            is-icon
                          ></arv-button>
                        ))}
                      </arv-flex>
                    </td>
                  )}
                </tr>)
            })}
          </tbody>
        </table>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </Host>
    );
  }
}
