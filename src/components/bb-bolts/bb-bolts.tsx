import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'bb-bolts',
  styleUrl: 'bb-bolts.css',
  shadow: true
})
export class Bolts {

  @Element() el: HTMLElement;

  @State() selectedItem: any;

  @Prop() items: any[] = [];

  componentDidLoad() {
    if (!this.items.length) {
      return false;
    }
    this.setItem(0);
  }

  onPropsChange(name, value) {
    const { props } = this.selectedItem;
    const newProps = props.map(d => {
      if (d.name === name) {
        d.value = value;
      }
      return d;
    });

    this.selectedItem = {
      ...this.selectedItem,
      ...{props: newProps}
    };

    this.generate();
  }

  generateOneOf(item) {
    const { name, value } = item;
    return (
      <div>
        <span>{name}</span>
        <select onChange={e => this.onPropsChange(name, e.target['value'])}>
          {item.data.map(d => (
            <option selected={value === d } value={d}>{d}</option>
          ))}
        </select>
      </div>
    );
  }

  generateBoolean(item) {
    const { name, value } = item;
    return (
      <div>
        <span>{name}</span>
        <select onChange={e => this.onPropsChange(name, e.target['value'])}>
          <option selected={value} value="true">true</option>
          <option selected={value === 'false' } value="false">false</option>
        </select>
      </div>
    );
  }

  generateString(item) {
    const { name, value } = item;
    return (
      <div>
        <arv-input
          label={name}
          onInputChange={e => this.onPropsChange(name, e.target['value'])}
          type="text"
          value={value}/>
      </div>
    );
  }

  setControls() {
    if (!this.selectedItem) {
      return false;
    }
    const { props } = this.selectedItem;

    return props.map(d => {
      const { type } = d;
      if (type === 'oneOf') {
        return this.generateOneOf(d);
      }
      if (type === 'boolean') {
        return this.generateBoolean(d);
      }
      if (type === 'string') {
        return this.generateString(d);
      }
    });
  }

  setItem(index = 0) {
    this.selectedItem = this.items[index];
    this.generate();
  }

  generate() {
    const { element, slot, props } = this.selectedItem;
    const container = this.el.shadowRoot.querySelector('#bolt');

    container.innerHTML = this.addProps(element, props);

    if (slot) {
      const span = document.createElement('span');
      span.innerHTML = slot;
      container.lastElementChild.appendChild(span);
    }
  }

  addProps(element: string, props: any) {
    const propsString = props.reduce((c, n) => {
      if (!n.value) {
        return c;
      }
      return `${c} ${n.name}=${n.value}`;
    }, '');

    return `<${element} ${propsString} />`;
  }

  slotChanged(slot: string) {
    this.selectedItem = {...this.selectedItem, ...{ slot }};
    this.generate();
  }

  render() {
    const List = () => (
      <arv-list>
        {this.items.map((d, i) => {
           return (
             <arv-list-item
               data-ndex={i}
               onClick={() => this.setItem(i) }>
               {d.name}
             </arv-list-item>
           );
        })}
      </arv-list>
    );

    const slot = this.selectedItem ? this.selectedItem.slot : '';

    const SlotControl = () => (
      <arv-input
        label="Slot"
        value={slot}
        onInputChange={e => this.slotChanged(e.target['value']) } />
    );

    return (
      <arv-flex>
        <List />
        <arv-flex layout="column">
          <arv-flex
            justify="space-around"
            items="center">
            <SlotControl />
            {this.setControls()}
          </arv-flex>
          <div id="bolt">
          </div>
        </arv-flex>
      </arv-flex>
    );
  }
}
