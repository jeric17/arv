import { Component, Element, Method, Prop, State, Watch } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'arv-select',
  styleUrl: 'arv-select.css',
  shadow: true
})
export class Select {
  rootClassName = 'select-list';
  portal = 'arv-virtual-portal';

  @Element() el: HTMLElement;

  @State() show: boolean;

  @Watch('show')
  showChanged() {
    if (this.show) {
      return this._showContent();
    }

    return this._hideContent();
  }

  @Prop() label: string;

  @Prop() layout: string;

  @Prop() value: string;

  @Prop() onSelectChange: (item: any) => void;

  @Method()
  toggle() {
    this.show = !this.show;
  }

  optionSelectedHandler(evt) {
    if (evt) {
      this.onSelectChange(evt);
    }
    this.show = false;
  }

  private _showContent() {
    const dialog = this.el.shadowRoot.querySelector(`.${this.rootClassName}`);
    const slot = this.el.children;

    const elem:any = document.createElement(this.portal);
    elem.onSelect = this.optionSelectedHandler.bind(this);
    elem.parentEl = this.el.shadowRoot.querySelector('.value');
    elem.appendChild(dialog);
    Array.from(slot).forEach(d => {
      elem.appendChild(d);
    });

    document.body.appendChild(elem);
  }

  private _hideContent() {
    const portal = document.body.querySelector(`:scope > ${this.portal}`);

    this.el.shadowRoot.appendChild(portal.shadowRoot.querySelector(`.${this.rootClassName}`));
    const slots = portal.shadowRoot.querySelectorAll('arv-select-option');

    Array.from(slots).forEach(d => {
      this.el.appendChild(d);
    });

    document.body.removeChild(portal);
  }

  onValueClick() {
    this.show = true;
  }

  render() {
    const rootClassNames = cx('arv-select', {});
    const slot = this.show ? <slot></slot> : null;

    const Value = () => (
      <div
        onClick={this.onValueClick.bind(this)}
        class="value">
        {this.value}
        <arv-divider></arv-divider>
        <arv-icon icon="keyboard_arrow_down"></arv-icon>
      </div>
    );

    const Label = () => ([
      <arv-text variant="body">{this.label}</arv-text>,
      <arv-divider></arv-divider>
    ]);

    return (
      <div class={rootClassNames}>
        <arv-flex
          layout={this.layout}
          items="center">
          {this.label && <Label />}
          <Value />
        </arv-flex>
        <div class="select-list">
          {slot}
        </div>
      </div>
    );
  }
}
