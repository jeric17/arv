import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'bb-bolts',
  styleUrl: 'bb-bolts.css',
  shadow: true
})
export class Bolts {

  @Element() el: HTMLElement;

  @State() selectedItem: any;

  @State() codeText: string;

  @State() themeMode: boolean;

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
      <arv-select
        label={name}
        value={value}
        onSelectChange={e => {
          if (!e) {
            return false;
          }
          this.onPropsChange(name, e.detail)
        }}>
        {item.data.map(d => (
          <arv-select-option
            selected={value === d }
            value={d}>
            {d}
          </arv-select-option>
        ))}
      </arv-select>
    );
  }

  generateBoolean(item) {
    const { name, value } = item;
    return (
      <arv-select
        label={name}
        value={value}
        onSelectChange={e => {
          if (!e) {
            return false;
          }
          this.onPropsChange(name, e.detail)
        }}>
        <arv-select-option
          selected={value}
          value="true">
          true
        </arv-select-option>
        <arv-select-option
          selected={value === 'false'}
          value="false">
          false
        </arv-select-option>
      </arv-select>
    );
  }

  generateString(item) {
    const { name, value } = item;
    return (
      <arv-input
        label={name}
        inputChange={e => this.onPropsChange(name, e.target['value'])}
        type="text"
        value={value}
      />
    );
  }

  generateObj(item) {
    console.log({ item });
  }

  generateObj2(item) {
    console.log({ item });
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
      if (type === 'object') {
        return this.generateObj(d);
      }
      if (type === 'object2') {
        return this.generateObj2(d);
      }
    });
  }

  setItem(index = 0) {
    if (this.themeMode) {
      this.themeMode = false;
      setTimeout(() => {
        this.selectedItem = this.items[index];
        this.generate();
      }, 100);
      return false;
    }
    this.selectedItem = this.items[index];
    this.generate();
  }

  generate() {
    const { element, slot, props } = this.selectedItem;
    const container = this.el.shadowRoot.querySelector('#bolt');
    const slotContent = slot ? slot.replace(/</g, '&lt').replace(/>/g, '&gt') : '';
    const codeText = this.addProps(element, props);
    container.innerHTML = codeText;

    const componentElem = container.querySelector(this.selectedItem.element);
    props.forEach(d => {
      if (d.type === 'object2') {
        componentElem[d.name] = d.value;
      }
      if (d.type !== 'object') {
        return false;
      }
      try {
        const obj = JSON.parse(d.value);
        componentElem[d.name] = obj;
      } catch(e) {
        console.log(e.message);
      }
    });

    const code = container.innerHTML
                          .replace(/ /g, '\n   ')
      .replace('></', '\n></')
      .replace(/</g, '&lt')
      .replace(/>/g, '&gt')
      .split('\n');

    code[0] = `<span class="html-elem">${code[0]}`;
    code[code.length - 1] = `<span class="html-elem">${code[code.length -1]}`;
    code[code.length - 1] = code[code.length - 1].replace('&gt&lt',
    `&gt<span class="html-slot">${slotContent || ''}</span>&lt`
    );
    const codes = code.map((d, i) => {

      if (i === 0 || i === code.length - 1) {
        return d;
      }
      const values = d.split('=');
      return [
        `<span class="html-attr">${values[0]}</span>`,
        '<span class="html-eql">=<span>',
        `<span class="html-attr-value">${values[1]}</span>`,
        '<br/>'
      ].join('');
    });

    const codeContent = `${codes.join('</span><span>').replace('::', '=').replace('---', '=>')}</span>`;

    const codeElem = this.el.shadowRoot.querySelector('code');
    codeElem.innerHTML = codeContent;

    if (slot) {
      const span = document.createElement('span');
      span.innerHTML = slot;
      container.lastElementChild.appendChild(span);
    }
  }

  addProps(element: string, props: any) {
    const propsString = props.reduce((c, n) => {
      if (n.type === 'object' || n.type === 'object2') {
        return c;
      }
      if (!n.value) {
        return c;
      }
      const name = n.displayName ? n.displayName : n.name;
      const value = n.displayValue ? n.displayValue : n.value;
      return `${c} ${name}=${value}`;
    }, '');

    return `<${element} ${propsString} />`;
  }

  slotChanged(slot: string) {
    this.selectedItem = {...this.selectedItem, ...{ slot }};
    this.generate();
  }

  eventDescription() {
    if (!this.selectedItem || !this.selectedItem.events) {
      return false;
    }

    const headers = ['Name', 'Description'];
    const data = this.selectedItem.events.map(d => [0, d.name, d.description]);

    return (
      <arv-table
        table-title="Events"
        tableData={data}
        tableHeaders={headers}
      ></arv-table>
    );
  }

  propsDescription() {
    if (!this.selectedItem || !this.selectedItem.propsDescription) {
      return false;
    }

    const headers = ['Name', 'Type', 'Description'];
    const data = this.selectedItem.propsDescription.map(d => [0, d.name, d.type, d.description]);

    return (
      <arv-table
        table-title="Attributes"
        tableData={data}
        tableHeaders={headers}
      ></arv-table>
    );
  }

  toggleTheme() {
    this.themeMode = !this.themeMode;
  }

  render() {
    const List = () => (
      <arv-container height="100vh" width="200px" color="dark" scrollable>
        <arv-flex layout="column">
          <arv-flex padded full={false}>
            <arv-text color="light">arv@0.1.4</arv-text>
          </arv-flex>

          <arv-flex padded full={false}>
            <arv-text color="primary">Installation</arv-text>
          </arv-flex>
          {
            [
              {name: 'Angular', target: 'https://stenciljs.com/docs/angular'},
              {name: 'React', target: 'https://stenciljs.com/docs/react'},
              {name: 'Vue', target: 'https://stenciljs.com/docs/vue'},
            ].map(d => {
              return (
                <arv-button
                  buttonClick={() => {
                    window.open(d.target);
                  }}
                  textAlign="start"
                  color="light"
                  variant="ghost"
                  rounded={false}
                  full
                  >{d.name}</arv-button>
              );
            })
          }

          <arv-button
            color={this.themeMode ? 'primary' : 'light' }
            variant={this.themeMode ? 'raised' : 'ghost' }
            textAlign="start"
            rounded={false}
            buttonClick={this.toggleTheme.bind(this)}
            full>Theming</arv-button>

          <arv-flex padded full={false}>
            <arv-text color="primary">Components</arv-text>
          </arv-flex>
          {this.items.map((d, i) => {
             return (
               <arv-button
                 textAlign="start"
                 color={(!this.themeMode && this.selectedItem && (this.selectedItem.name === d.name)) ? 'primary' : 'light' }
                 variant={(!this.themeMode && this.selectedItem && (this.selectedItem.name === d.name)) ? 'raised' : 'ghost' }
                 buttonClick={() => this.setItem(i) }
                 rounded={false}
                 full
                 >
                 {d.name}
               </arv-button>
             );
          })}
        </arv-flex>
      </arv-container>
    );

    const slot = this.selectedItem ? this.selectedItem.slot : '';

    const SlotControl = () => (
      <arv-input
        label="Slot"
        value={slot}
        inputChange={e => this.slotChanged(e.target['value']) } />
    );

    const Controls = () => (
      <arv-container
        height="100vh"
        width="300px"
        scrollable
      >
        <arv-flex
          layout="column"
          padded
        >
          <arv-text>Attributes</arv-text>
          <arv-divider></arv-divider>
          {this.selectedItem && this.selectedItem.slot !== false && (
             <SlotControl />
          )}
          {this.setControls()}
        </arv-flex>
      </arv-container>
    );

    const Content = () => (
      <arv-flex
        style={{backgroundColor: '#efefef', overflowY: 'scroll'}}
        justify="start"
        items="start"
        layout="column"
        padded
      >
        <arv-divider transparent></arv-divider>
        {this.selectedItem && (
           <arv-flex layout="column">
             {this.selectedItem.description && this.selectedItem.description.map(d => (
               <arv-text variant="caption2">{d}</arv-text>
             ))}
           </arv-flex>
        )}
        <arv-divider transparent></arv-divider>
        <arv-text variant="heading3">Demo</arv-text>
        <arv-flex
          style={{'backgroundColor': '#fff', 'height': '200px'}}
          items="center"
          justify="center"
          padded
          id="bolt">
        </arv-flex>
        <pre>
          <code>
          </code>
        </pre>

        {this.propsDescription()}

        <arv-divider transparent></arv-divider>

        {this.eventDescription()}

        <arv-divider transparent></arv-divider>
      </arv-flex>
    );

    return (
      <arv-container
      height="100vh"
      full
      >
      <arv-flex items="stretch">
      <List />
      {!this.themeMode && <Controls />}
      {!this.themeMode && <Content />}
          {this.themeMode && <my-theme-section />}
        </arv-flex>
      </arv-container>
    );
  }
}
