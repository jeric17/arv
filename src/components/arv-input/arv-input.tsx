import { Component, h, Element, Event, EventEmitter, Listen, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'arv-input',
  styleUrl: 'arv-input.css',
  shadow: true
})
export class Input {

  loading = true;
  debounceTimeOut = null;
  inputElement: any;

  @Element() el: HTMLElement;

  @State() error = false;

  @Prop() autocomplete = 'off';
  @Prop() debounceTime = 0;
  @Prop() disabled = false;
  @Prop() fileUpload = false;
  @Prop() full: boolean;
  @Prop() hasError: boolean;
  @Prop() hashKey: any;
  @Prop() hasBorder = true;
  @Prop() icon: string;
  @Prop() inputProps = {};
  @Prop() input: (e: any) => void;
  @Prop() inputStyle = {};
  @Prop() inputBlur: (e: any) => void;
  @Prop() inputFocus: (e: any) => void;
  @Prop() inputChange: (e: any, error: any) => void;
  @Prop() inputEnter: (e: any) => void;
  @Prop() label: string;
  @Prop() textVariant = 'caption';

  /* oneOf: [column, row] */
  @Prop() layout = 'column';
  @Prop() name: string;
  @Prop() placeholder: string;
  @Prop() required = false;
  @Prop() size = 'medium';
  @Prop() type = 'text';
  @Prop() value: string;
  @Prop() rows: number = 0;
  @Prop() inputSize: number;

  @Event() arvInput: EventEmitter;
  @Event() arvBlur: EventEmitter;
  @Event() arvFocus: EventEmitter;
  @Event() arvInputChange: EventEmitter;
  @Event() arvInputEnter: EventEmitter;

  @Listen('focus')
  focusHandler() {
    this.inputElement.focus();
  }

  @Listen('keydown')
  handleKeyEnter(e: KeyboardEvent) {
    if (e.keyCode !== 13) {
      return false;
    }
    const inputElement = (() => {
      if (!this.rows) {
        return this.el.shadowRoot.querySelector('input');
      }
      return this.el.shadowRoot.querySelector('textarea');
    })();

    if (this.inputEnter) {
      this.inputEnter({
        target: this.inputElement,
        event: e,
      });
    }

    this.arvInputEnter.emit({
      target: inputElement,
      event: e,
      value: inputElement.value,
      name: inputElement.name,
      type: this.type,
      required: this.required
    });
  }

  @Method()
  async elementFocus() {
    if (this.inputElement) {
      this.inputElement.focus();
    }
  }

  @Method()
  async elementBlur() {
    if (this.inputElement) {
      this.inputElement.blur();
    }
  }

  @Method()
  async clear() {
    if (this.inputElement) {
      this.inputElement.value = null;
    }
  }

  componentDidLoad() {
    const elem = (() => {
      if (!this.rows) {
        return 'input';
      }
      return 'textarea';
    })();
    this.inputElement = this.el.shadowRoot.querySelector(elem);
  }

  validate() {
    this.error = this.inputElement.validationMessage;
  }

  private _change(e) {
    const value = (() => {
      if (this.type === 'file') {
        return e.target.files[0].name
      }
      return e.target.value;
    })();

    this.validate();

    if (this.inputChange) {
      this.inputChange(e, this.error);
    }

    this.arvInputChange.emit({
      target: e.target,
      event: e,
      value,
      name: e.target.name,
      type: this.type,
      required: this.required,
      error: this.error
    });
  }

  private _focus(e) {
    this.inputElement.focus();
    const value = e.target['value'];
    if (this.inputFocus) {
      this.inputFocus(e);
    }
    this.arvFocus.emit({
      target: e.target,
      event: e,
      value,
      name: e.target.name,
      type: this.type,
      required: this.required
    });
  }
  private _blur(e) {
    const value = e.target['value'];
    if (this.inputBlur) {
      this.inputBlur(e);
    }
    this.arvBlur.emit({
      event: e,
      value,
      name: e.target.name,
      type: this.type,
      required: this.required
    });
  }

  private _handleInputDebounce(event) {
    clearTimeout(this.debounceTimeOut);
    const { target } = event;
    this.debounceTimeOut = setTimeout(() => {
      this.loading = false;
      return this._input(event, target);
    }, this.debounceTime);
  }

  private _input(e, _target = null) {
    if (this.debounceTime && this.loading) {
      return this._handleInputDebounce(e);
    }
    if (this.input) {
      this.input(e);
    }
    const t = _target ? _target : e.target;
    const value = (() => {
      if (this.type === 'file') {
        return t.files[0].name
      }
      return t.value;
    })();
    this.arvInput.emit({
      target: t,
      event: e,
      value,
      name: t.name,
      type: this.type,
      required: this.required
    });
    this.loading = true;
  }

  hostData() {
    return {
      class: {
        full: this.full
      }
    };
  }

  render() {
    const rootClassNames = {
      root: true,
      disabled: this.disabled,
      row: this.layout === 'row',
      column: this.layout === 'column',
      full: this.full,
      icon: Boolean(this.icon),
      fileUpload: this.fileUpload
    };

    const inputClassNames = {
      input: true,
      error: this.error || this.hasError,
      large: this.size === 'large',
      color: this.type === 'color',
      noBorder: !this.hasBorder
    };

    const labelClass = {
      label: true,
      labelRow: this.layout === 'row'
    };

    const Label = () => (
      <label
        class={labelClass}>
        {this.layout === 'column' && (
          <arv-text variant={this.textVariant}>{this.label}</arv-text>
        )}
        {this.layout === 'row' && this.label}
        {this.required && (
           <span class="required">*</span>
        )}
      </label>
    );

    const layout = (() => {
      if (this.layout === 'row') {
        return 'column';
      }
      return 'row';
    })();

    const iconStyles = {
      position: 'absolute',
      left: '0.4em',
      color: '#333',
      height: '100%',
      top: '0px',
      display: 'flex',
      'align-items': 'center'
    };

    const Input = () => {
      if (!this.rows) {
        return (
          <input
            style={this.inputStyle}
            required={this.required}
            name={this.name}
            class={inputClassNames}
            placeholder={this.placeholder}
            disabled={this.disabled}
            type={this.type}
            onChange={this._change.bind(this)}
            onInput={this._input.bind(this)}
            onFocus={this._focus.bind(this)}
            onBlur={this._blur.bind(this)}
            autocomplete={this.autocomplete}
            value={this.value}
            tabindex={0}
            size={this.inputSize}
            {...this.inputProps} />
        );
      }
      return (
          <textarea
            style={this.inputStyle}
            rows={this.rows}
            required={this.required}
            name={this.name}
            class={inputClassNames}
            placeholder={this.placeholder}
            disabled={this.disabled}
            onChange={this._change.bind(this)}
            onInput={this._input.bind(this)}
            onFocus={this._focus.bind(this)}
            onBlur={this._blur.bind(this)}
            value={this.value}
            {...this.inputProps} />
        );
    };

    return (
      <div class={rootClassNames}>
        <arv-flex layout={this.layout}>
          {this.label && !this.fileUpload && <Label />}
          <arv-divider
            noMargin={layout === 'row' ? true : false}
            layout={layout}
            transparent></arv-divider>
          <div class="inputWrapper">
            {this.icon && <arv-icon styles={iconStyles} icon={this.icon} noMargin></arv-icon>}
            <Input />
            {this.label && this.fileUpload && <Label />}
            {this.value && this.fileUpload && (
              <arv-flex justify="center" items="center" full padded>
                <arv-text variant="subtle">{this.value}</arv-text>
              </arv-flex>
            )}
          </div>
        </arv-flex>
      </div>
    );
  }
}
