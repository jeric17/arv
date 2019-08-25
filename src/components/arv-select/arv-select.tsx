import { Component, h, Element, Event, EventEmitter, Listen, Method, Prop, State, Watch } from '@stencil/core';

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

  @Prop() autoBlur: boolean;
  @Prop() textVariant = 'caption';
  @Prop() listHeight: number;
  @Prop() dataSource: any;
  @Prop() debounceTime = 0;
  @Prop() disabled = false;
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
  @Prop() selectStyles = {};
  @Prop() inputValueStyles = {};
  @Prop() hideIcon = false;
  @Prop() position = 'bottom';
  @Prop() staticValues: string[];

  @Prop() value: any;
  @Watch('value')
  valueHandler() {
    if (this.variant === 'input' && !this.multiple) {
      this.inputValue = this.value;

      this.fromSelect = false;
    }

    if (this.multiple) {
      setTimeout(() => {
        const listWrapperEl: HTMLElement = this.el.shadowRoot.querySelector('.listWrapper');
        const styles: any = this.getStyles();

        listWrapperEl.style.top = styles.listWrapperStyles.top;
      }, 100);
    }
  }

  @Prop() selectChange: (item: any) => void;

  /** oneOf [select, input] */
  @Prop() variant = 'select';

  @Method()
  async toggle(show = null) {
    const s = show !== null ? show : !this.show;
    this.show = s;
    if (s) {
      this.select();
    }
  }

  @Method()
  async toBlur() {
    this.unselectElement();
  }

  @Method()
  async clearInputValue() {
    this.inputValue = null;
    const inputEl = this.el.shadowRoot.querySelector('arv-input');
    inputEl.clear();
    return this.variant;
  }

  @Listen('arvInputEnter')
  onInputChangeHandler(evt) {
    if (!this.multiple) {
      this.show = false;
    }

    this.arvSelectChange.emit(this.inputValue);

    if(this.autoBlur) {
      this.unselectElement();
    }

    if (this.selectChange) {
      this.selectChange(evt);
    }
  }

  @Listen('optionSelected')
  optionSelectedHandler(evt) {
    this.currentSelected = true;
    if (this.variant === 'input' && !this.multiple) {
      this.fromSelect = true;
      // this.selectChange.emit(this.inputValue);
    }

    if (this.selectChange) {
      this.selectChange(evt);
    }

    this.arvSelectChange.emit(evt.detail);
    // console.log('option select', evt);

    if (!this.multiple || !evt) {
      this.show = false;
    }
  }

  @Listen('click')
  clickHandler() {
    if (this.disabled) {
      return false;
    }
    this.inputElementFocus();
  }

  @Event() arvRemoveItem: EventEmitter;
  @Event() arvInput: EventEmitter;
  @Event() arvInputChange: EventEmitter;
  @Event() arvSelectChange: EventEmitter;

  componentWillLoad() {
    if (this.variant === 'input' && !this.multiple) {
      this.inputValue = this.value;
    }
  }

  private _input(e) {
    // this.show = true;
    this.inputValue = e.target.value;
    /* this.listBlur(); */
  }

  inputElementFocus() {
    if (this.variant === 'input') {
      /* console.log('input'); */
      const inputEl = this.el.shadowRoot.querySelector('arv-input');
      inputEl.elementFocus();
    }
  }

  itemInputChange = e => {
    if (this.inputChange) {
      this.inputChange(e);
    }

    // e.currentTarget.blur();
    // this.show = false;
    // this.currentSelected = false;
  }

  unselectElement() {
    this.show = false;
    this.currentSelected = false;
    if (this.variant !== 'input') {
      return false;
    }
    const inputEl = this.el.shadowRoot.querySelector('arv-input');
    inputEl.elementBlur();
  }

  onValueClick() {
    if (this.disabled) {
      return false;
    }
    this.willHide = false;
    this.show = true;
    this.select();
  }

  select() {
    if (this.disabled) {
      return false;
    }
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
    event.cancelBubble = true;
    event.preventDefault();
    event.stopPropagation();

    if (this.removeItem) {
      this.removeItem(index);
    }

    this.arvRemoveItem.emit(index);

    if (this.show) {
      this.currentSelected = true;
      this.onValueClick();
      setTimeout(() => {
        this.inputElementFocus();
      }, 150);
    }
  }

  animateHide() {
    this.willHide = true;
  }

  listBlur = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.multiple && this.currentSelected) {
          this.currentSelected = false;
          resolve(this.select());
          return false;
        }
        if (!this.multiple) {
          this.show = false;
          resolve(false);
          return false;
        }
        if (this.currentSelected) {
          this.currentSelected = false;
          resolve(false);
          return false;
        }
        this.currentSelected = false;
        this.show = false;
        resolve(false);
      }, 200);
    });
  }

  getStyles = () => {
    const data = {
      rootStyles: {},
      listWrapperStyles: {}
    };
    const rootEl = this.el.shadowRoot.querySelector('.root');

    if (!rootEl) {
      return data;
    }
    const rootRect = rootEl.getBoundingClientRect();

    if (this.position === 'top') {
      data.listWrapperStyles = {
        top: `-${rootRect.height}px`,
      };
    }
    return data;
  }

  render() {
    const MultipleValues = ({ children }) => {
      if (!Array.isArray(this.value)) {
        return (
          <arv-text
            class="textValue"
            variant={this.textVariant}
          >
            {this.value}
          </arv-text>
        );
      }

      const multipleValuesClass = {
        multipleValues: true,
        disabled: this.disabled,
        selectMode: this.variant === 'select'
      };

      return (
        <arv-flex class={multipleValuesClass} fullWidth={false} items="center" wrap>
          {this.icon && <arv-icon color="default" icon={this.icon}></arv-icon>}
          {this.value.map((d, i) => (
            <div class="value-item">
              <arv-text variant={this.textVariant}>{d}</arv-text>
              {!(Boolean(this.staticValues) && this.staticValues.includes(d)) && (
                <arv-icon
                  onClick={this.itemDelete.bind(this, i)}
                  icon="close"
                  size="small"
                  noMargin></arv-icon>
              )}
            </div>
          ))}
          {children}
        </arv-flex>
      );
    };

    const SelectValue = () => (
      <div
        onClick={this.onValueClick.bind(this)}
        style={this.selectStyles}
        class={{
          value: true,
          targetValue: true,
          full: this.full,
          disabled: this.disabled
        }}>
        <arv-flex items="center">
          <MultipleValues children={{}}/>
        </arv-flex>
        <arv-divider layout="column" transparent></arv-divider>
        {!this.hideIcon && (
          <arv-icon class="chevron" color="default" icon="keyboard_arrow_down"></arv-icon>
        )}
      </div>
    );

    const InputValue = () => (
      <arv-flex style={this.inputValueStyles} class="targetValue" items="center">
        <arv-input
          disabled={this.disabled}
          inputBlur={this.listBlur}
          icon={this.icon}
          placeholder={!this.multiple ? this.placeholder : ''}
          class="input"
          inputFocus={() => { this.show = true; }}
          input={this._input.bind(this)}
          inputChange={this.itemInputChange.bind(this)}
          value={this.inputValue}
          debounceTime={this.debounceTime}
          full
        />
      </arv-flex>
    );

    const MultipleInput = () => (
      <arv-flex class="targetValue" items="center" wrap>
        <MultipleValues children={(
          <arv-input
            disabled={this.disabled}
            inputBlur={this.listBlur}
            placeholder={this.placeholder}
            class="input"
            inputFocus={() => { this.show = true; }}
            inputChange={this.itemInputChange.bind(this)}
            input={this._input.bind(this)}
            value={this.inputValue}
            hasBorder={false}
            inputSize={(this.inputValue || '').length + 2}
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
      show: this.show,
      top: this.position === 'top'
    };

    const { rootStyles, listWrapperStyles } = this.getStyles();
    const listContentStyles = {};
    let transformOrigin = null;
    if (this.position === 'top') {
      transformOrigin = 'bottom';
    }
    if (this.listHeight) {
      listContentStyles['maxHeight'] = `${this.listHeight}px`;
    }

    return (
      <div class={classNames} style={rootStyles}>
        {this.loading && <arv-loader class="loader" size="xsmall"/>}
        <arv-flex
          layout={this.layout}
          items={this.layout === 'column' ? 'start' : 'center'}>
          {this.label && <Label />}
          {targetValueElement}
        </arv-flex>
        <div
          style={listWrapperStyles}
          class={{
            listWrapper: true,
            top: this.position === 'top',
            show: this.show
          }}
          onBlur={this.listBlur}
          tabIndex={-1}
        >
          <div class={{
            listContent: true
          }}>
            <arv-transition animation="scaleHeight" transformOrigin={transformOrigin}>
              <arv-paper padded={false}>
                <div class="select-list" style={listContentStyles}>
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
