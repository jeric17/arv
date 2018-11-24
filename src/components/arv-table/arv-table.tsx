import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-table',
  styleUrl: 'arv-table.css',
  shadow: true
})
export class Table {
  @Prop() activeSort: string;

  @Prop() controls = [];

  @Prop() multiSelectable: boolean;  

  @Prop() selectable: boolean;

  @Prop() sortable: boolean;

  @Prop() isAscending: boolean;

  @Prop() styles = {
    table: {},
    tbody: {},
    tr: {},
    td: {},
    thead: {},
    th: {},
    tfoot: {},
  };

  @Prop() tableData: any = [];

  @Prop() tableHeaders: string[] = [];

  @Prop() tableProps = {};

  @Event() rowClick: EventEmitter;

  @Event() rowItemClick: EventEmitter;

  @Event() headerClick: EventEmitter;  

  thItemClick(item, evt) {
    this.headerClick.emit({
      evt,
      item
    });
  }

  trItemClick(item, evt) { 
    this.rowClick.emit({
      evt,
      item  
    });  
  }

  tdItemClick(item, evt) {
    this.rowItemClick.emit({
      evt,
      item  
    })  
  }

  private generateRowItem(value) {
    if (typeof value === 'string') {
      return value;  
    }

    if (Array.isArray(value)) {
      return value.map(d => (
        <span class="rowItemArrayItem">
          {d}
        </span>
      ));
    }

    return value;
  }

  render() {
    const rootClassNames = {
      root: true,
      sortable: this.sortable,
      ascending: this.isAscending
    };

    return (
      <table
        style={this.styles.table}
        class={rootClassNames}
        {...this.tableProps}>

        <thead style={this.styles.thead}>
          <tr
            class="tr" 
            style={this.styles.tr}>
            {this.multiSelectable && (
              <th class="th thCheckbox" style={this.styles.th}><arv-checkbox /></th>  
            )}
            {this.tableHeaders.map(headerItem => (
              <th
                onClick={this.thItemClick.bind(this, headerItem)}
                class={{
                  th: true,
                  thActive: this.sortable && (headerItem === this.activeSort)
                }}
                style={this.styles.th}>
                  {headerItem}
                </th>
            ))}
            {this.controls.length && (<th class="th" style={this.styles.th}></th>)}
          </tr>
        </thead>

        <tbody style={this.styles.tbody}>
          {this.tableData.map(rowData => {
            const [id, ...dataBody] = rowData;
            
            return (<tr
              data-id={id}
              class="tr"
              onClick={this.trItemClick.bind(this, rowData)}
              style={this.styles.tr}>
              {(this.selectable || this.multiSelectable) && (
                <td class="td tdCheckbox"><arv-checkbox /></td>  
              )}

              {dataBody.map(rowItem => (
                <td
                  class="td"
                  onClick={this.tdItemClick.bind(this, rowItem)}
                  style={this.styles.td}>
                  {this.generateRowItem(rowItem)}
                </td>
              ))}
              {this.controls.length && (
                <td class="td controls">
                  <arv-flex>
                    {this.controls.map(ctrlItem => (
                      <arv-button
                        variant="flat-icon"
                        icon={ctrlItem.icon}
                        buttonClick={() => ctrlItem.fn(rowData)}></arv-button>
                    ))}
                  </arv-flex>
                </td>  
              )}
          </tr>)})}
        </tbody>

      </table>
    );
  }
}
