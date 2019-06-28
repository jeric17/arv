import { Component, h, State} from '@stencil/core';

@Component({
  tag: 'acd-select-test',
  shadow: true
})
export class SelectTest {
  @State() selectedItems = [];

  onSelectChange = d => {
    this.selectedItems = this.selectedItems.concat(d.detail);
  }

  render() {
    return (
      <arv-container width="200px">
        <arv-select
          selectChange={this.onSelectChange}
          value={this.selectedItems}
          position="top"
          multiple
        >
          {[1,2,3,4,5,6,7,8].map(d => (
            <arv-select-option value={d}>{d}</arv-select-option>
          ))}
        </arv-select>
      </arv-container>
    );
  }
}
