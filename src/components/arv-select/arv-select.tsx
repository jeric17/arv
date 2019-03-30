import { Component, Element, Event, EventEmitter, Listen, Method, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'arv-select',
  styleUrl: 'arv-select.css',
  shadow: true
})
export class Select {
  fromSelect: boolean;
  currentSelected: boolean;

  @Element() el: HTMLElement;

  @State() willHide = false;

  @State() inputValue = '';

  @State() virtualElement: any;

  @State() show: boolean;

  @Prop() dataSource: any;

  @Prop() full: boolean;

  @Prop() icon: string;

  @Prop() inputChange: (e: any) => void;

  @Prop() label: string;

  @Prop() labelVariant: string;

  @Prop() layout = 'column';

  @Prop() placeholder: string;

  @Prop() optionValue: string;

  @Prop() loading: boolean;

  @Prop() removeItem: (index: number) => void;

  @Prop() multiple = false;

  @Prop() value: any;
  @Watch('value')
  valueHandler() {
    if (this.variant === 'input' && !this.multiple) {
      this.inputValue = this.value;

      this.fromSelect = false;
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
    if (!this.multiple) {
      this.show = false;
    }

    this.selectChange.emit(this.inputValue);
  }

  @Listen('optionSelected')
  optionSelectedHandler(evt) {
    console.log('option select');
    this.currentSelected = true;
    if (this.variant === 'input' && !this.multiple) {
      this.fromSelect = true;
      this.selectChange.emit(this.inputValue);
    }

    if (this.onSelectChange) {
      this.onSelectChange(evt);
    }

    this.selectChange.emit(evt);

    if (!this.multiple || !evt) {
      this.show = false;
    }
  }

  @Listen('click')
  clickHandler() {
    if (this.variant === 'input') {
      const inputEl = this.el.shadowRoot.querySelector('arv-input');
      inputEl.arvFocus();
    }
  }

  @Event() onRemoveItem: EventEmitter;

  @Event() onInput: EventEmitter;

  @Event() onInputChange: EventEmitter;

  @Event() selectChange: EventEmitter;

  componentWillLoad() {
    if (this.variant === 'input' && !this.multiple) {
      this.inputValue = this.value;
    }
  }

  private _input(e) {
    // this.show = true;
    console.log('E', e.target.value);
    this.inputValue = e.target.value;
  }

  onValueClick() {
    this.willHide = false;
    this.show = true;
    this.select();
  }

  select() {
    setTimeout(() => {
      const listWrapperEl = this.el.shadowRoot.querySelector('.listWrapper');

      if (listWrapperEl && this.variant !== 'input') {
        listWrapperEl['tabIndex'] = -1;
        listWrapperEl['focus']();
      }
    }, 100);
  }

  hostData() {
    return {
      class: {
        full: this.full
      }
    };
  }

  itemDelete(index, event) {
    event.preventDefault();
    event.cancelBubble = true;
    event.stopPropagation();
    if (this.removeItem) {
      this.removeItem(index);
    }
    this.onRemoveItem.emit(index);
  }

  animateHide() {
    this.willHide = true;
  }

  listBlur = () => {
    this.animateHide();

    setTimeout(() => {
      if (this.multiple && this.currentSelected) {
        this.currentSelected = false;
        return this.select();
      }
      if (!this.multiple) {
        this.show = false;
        return false;
      }
      if (this.currentSelected) {
        this.currentSelected = false;
        return false;
      }
      this.currentSelected = false;
      this.show = false;
    }, 100);
  }

  render() {
    const MultipleValues = ({ children }) => {
      if (!Array.isArray(this.value)) {
        return (
          <arv-text class="textValue" variant="caption">
            {this.value}
          </arv-text>
        );
      }

      return (
        <arv-flex class="multipleValues" fullWidth={false} items="center" wrap>
          {this.icon && <arv-icon color="default" icon={this.icon}></arv-icon>}
          {this.value.map((d, i) => (
            <div class="value-item">
              <arv-text variant="caption2">{d}</arv-text>
              <arv-icon
                onClick={this.itemDelete.bind(this, i)}
                icon="close"
                size="small"
                noMargin></arv-icon>
            </div>
          ))}
          {children}
        </arv-flex>
      );
    };

    const SelectValue = () => (
      <div
        onClick={this.onValueClick.bind(this)}
        class={{
          value: true,
          targetValue: true,
          full: this.full
        }}>
        <arv-flex items="center">
          <MultipleValues children={{}}/>
        </arv-flex>
        <arv-divider layout="column" transparent></arv-divider>
        <arv-icon class="chevron" color="default" icon="keyboard_arrow_down"></arv-icon>
      </div>
    );

    const InputValue = () => (
      <arv-flex class="targetValue" items="center">
        <arv-input
          icon={this.icon}
          placeholder={this.placeholder}
          class="input"
          inputFocus={() => { this.show = true; }}
          input={this._input.bind(this)}
          value={this.inputValue}
          full
        />
      </arv-flex>
    );

    const MultipleInput = () => (
      <arv-flex class="targetValue" items="center" wrap>
        <MultipleValues children={(
          <arv-input
            inputBlur={this.listBlur}
            placeholder={this.placeholder}
            class="input"
            inputFocus={() => { this.show = true; }}
            input={this._input.bind(this)}
            value={this.inputValue}
            hasBorder={false}
            inputSize={this.inputValue.length + 2}
          />
        )}/>
      </arv-flex>
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
      if (this.variant === 'input' && this.multiple) {
        return <MultipleInput />;
      }
      return <InputValue />;
    })();

    const classNames = {
      root: true,
      full: this.full,
      icon: Boolean(this.icon),
      show: this.show
    };

    return (
      <div class={classNames}>
        {this.loading && <arv-loader class="loader" size="xsmall"/>}
        <arv-flex
          layout={this.layout}
          items={this.layout === 'column' ? 'start' : 'center'}>
          {this.label && <Label />}
          {targetValueElement}
        </arv-flex>
        <div
          class={{
            listWrapper: true,
            show: this.show
          }}
          onBlur={this.listBlur}
          tabIndex={-1}
        >
          <div class={{
            listContent: true
          }}>
            <arv-transition animation="scaleHeight">
              <arv-paper padded={false}>
                <div class="select-list">
                  <div>
                    <slot></slot>
                  </div>
                </div>
              </arv-paper>
            </arv-transition>
          </div>
        </div>
      </div>
    );
  }
}
