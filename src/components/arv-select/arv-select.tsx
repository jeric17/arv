import { Component, Element, Event, EventEmitter, Listen, Method, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'arv-select',
  styleUrl: 'arv-select.css',
  shadow: true
})
export class Select {
  rootClassName = 'select-list';
  portal = 'arv-virtual-portal';

  @Element() el: HTMLElement;

  @State() inputValue: string;

  @State() show: boolean;
  @Watch('show')
  showChanged() {
    if (this.show) {
      return this._showContent();
    }

    return this._hideContent();
  }

  @Prop() dataSource: any;

  @Prop() full: boolean;

  @Prop() icon: string;

  @Prop() inputChange: (e: any) => void;

  @Prop() label: string;

  @Prop() labelVariant: string;

  @Prop() layout = 'column';

  @Prop() placeholder: string;

  @Prop() value: string;
  @Watch('value')
  valueHandler() {
    if (this.variant === 'input') {
      this.inputValue = this.value;
    }
  }

  @Prop() onSelectChange: (item: any) => void;

  /** oneOf [select, input] */
  @Prop() variant = 'select';  

  @Method()
  toggle() {
    this.show = !this.show;
  }

  @Listen('onInputEnter')
  onInputChangeHandler() {
    this.show = false;
    this.selectChange.emit(this.inputValue);
  }

  @Event() onInput: EventEmitter;

  @Event() onInputChange: EventEmitter;

  @Event() selectChange: EventEmitter;

  componentWillLoad() {
    if (this.variant === 'input') {
      this.inputValue = this.value;  
    }
  }

  optionSelectedHandler(evt) {
    if (!evt && this.variant === 'input') {
      this.selectChange.emit(this.inputValue);
    }
    if (this.onSelectChange) {
      this.onSelectChange(evt);
    }
    this.selectChange.emit(evt);
    this.show = false;
  }

  // private _inputChange(e) {
  //   if (this.inputChange) {
  //     this.inputChange(e);
  //   }
  //   this.onInputChange.emit(e);
  // }

  private _input(e) {
    // this.show = true;  
    this.inputValue = e.target.value;
    // this.onInput.emit(e);
  }

  private _showContent() {
    const dialog = this.el.shadowRoot.querySelector(`.${this.rootClassName}`);
    const slot = this.el.children;

    const elem:any = document.createElement(this.portal);
    elem.onSelect = this.optionSelectedHandler.bind(this);
    elem.parentEl = this.el.shadowRoot.querySelector('.targetValue');

    elem.appendChild(dialog);
    Array.from(slot).forEach(d => {
      d.classList.add('select-slot-item');
      elem.appendChild(d);
    });

    document.body.appendChild(elem);
  }

  private _hideContent() {
    const portal = document.body.querySelector(`:scope > ${this.portal}`);
    const t = portal.shadowRoot.querySelector(`.${this.rootClassName}`);

    this.el.shadowRoot.appendChild(t);
    const slots = portal.shadowRoot.querySelectorAll('.select-slot-item');

    Array.from(slots).forEach(d => {
      this.el.appendChild(d);
    });

    document.body.removeChild(portal);
  }

  onValueClick() {
    this.show = true;
  }

  hostData() {
    return {
      class: {
        full: this.full  
      }  
    };
  }

  render() {
    const slot = this.show ? <slot></slot> : null;

    const SelectValue = () => (
      <div
        onClick={this.onValueClick.bind(this)}
        class="value targetValue">
        {this.value}
        <arv-divider></arv-divider>
        <arv-icon icon="keyboard_arrow_down"></arv-icon>
      </div>
    );

    const InputValue = () => (
      <div class="inputWrapper targetValue">
        <arv-input
         placeholder={this.placeholder}
         icon={this.icon}
         class="input"
         inputFocus={() => { this.show = true; }}
         input={this._input.bind(this)}
         value={this.inputValue}
         full />
      </div>
    );

    const layout = (() => {
      if (this.layout === 'row') {
        return 'column';
      }
      return 'row';
    })();  

    const variant = (() => {
      if (this.labelVariant) {
        return this.labelVariant;  
      }

      return this.layout === 'column' ? 'caption2' : 'body2';
    })();
    const Label = () => ([
      <arv-text variant={variant}>{this.label}</arv-text>,
      <arv-divider 
        noMargin={layout === 'row' ? true : false}
        layout={layout} 
        transparent></arv-divider>
    ]);

    const targetValueElement = (() => {
      if (this.variant === 'select') {
        return <SelectValue />;  
      }
      return <InputValue />;
    })();

    const classNames = {
      root: true,
      full: this.full,
      icon: Boolean(this.icon)
    };    

    return (
      <div class={classNames}>
        <arv-flex
          layout={this.layout}
          items={this.layout === 'column' ? 'start' : 'center'}>
          {this.label && <Label />}
          {targetValueElement}
        </arv-flex>
        <div class="select-list">
          {slot}
        </div>
      </div>
    );
  }
}
