import { Component, Element, Event, EventEmitter, Listen, Prop, State, Watch } from '@stencil/core';
import { DialogActions } from './arv-dialog.model';
@Component({
  tag: 'arv-dialog',
  styleUrl: 'arv-dialog.css',
  shadow: true
})
export class Dialog {
  rootClassName = 'arv-dialog';
  portal = 'arv-dialog-portal';

  @State() dialogActions: DialogActions;

  @Element() el: HTMLElement;

  @Prop() actions: DialogActions;

  @Watch('actions')
  handleActionsChange(newValue: DialogActions | string) {
    if (typeof newValue === 'string') {
      this.dialogActions = JSON.parse(newValue);
    } else {
      this.dialogActions = newValue;
    }
  }

  @Prop() titleAlignment = 'start';

  @Prop() titleImageIcon: string;

  @Prop() dialogTitleIcon: string;

  @Prop() dialogTitle: string;

  @Prop() full: boolean;

  @Prop() bgColor = '#fff';

  @Prop() iconColor = '#000';

  @Prop() scrollable: boolean;

  @Prop() show: boolean;

  @Prop() handleClose: () => void;

  @Prop() hideClose = false;

  @Prop() hideTitle = false;

  @Prop() padded = true;

  @Watch('show')
  showChanged() {
    if (this.show) {
      this._addBodyOverlay();
      return this._showContent();
    }

    this._removeBodyOverlay();
    return this._hideContent();
  }

  @Prop() parent: HTMLElement;

  @Event() onOk: EventEmitter;

  @Event() onClose: EventEmitter;

  @Listen('cancel')
  handleCancel() {
    this.onClose.emit();
  }

  componentWillLoad() {
    this.handleActionsChange(this.actions);
  }

  onHandleClose(ok = false) {
    const portal = document.body.querySelector(`:scope > ${this.portal}`);
    portal['removeDialog']();
    setTimeout(() => {
      if (this.handleClose) {
        this.handleClose();
      }
      if (!ok) {
        this.onClose.emit(true);
        return false;
      }
      this.onOk.emit(true);
    }, 300);
  }

  private _addBodyOverlay() {
    document.body.style.overflow = 'hidden';
  }

  private _removeBodyOverlay() {
    document.body.style.overflow = 'auto';
  }

  private _showContent() {
    const dialog = this.el.shadowRoot.querySelector(`.${this.rootClassName}`);
    const slot = this.el.children[0];
    const elem = document.createElement(this.portal);
    elem.setAttribute('padded', this.padded.toString());
    if (this.scrollable) {
      elem.setAttribute('scrollable', 'true');
    }

    if (this.full) {
      elem.setAttribute('full', 'true');
    }

    elem.appendChild(dialog);
    elem.appendChild(slot);

    document.body.appendChild(elem);
  }

  private _hideContent() {
    const portal = document.body.querySelector(`:scope > ${this.portal}`);
    if (!portal) {
      return false;
    }
    this.el.shadowRoot.appendChild(portal.shadowRoot.querySelector(`.${this.rootClassName}`));
    this.el.appendChild(portal.children[0]);

    document.body.removeChild(portal);
  }

  render() {
    const slot = this.show ? <slot></slot> : null;

    return (
      <arv-container
        margin={this.full ? '' : '1em'}
        class={this.rootClassName}
        hidden={!this.show}>
        <arv-dialog-content
          full={this.full}
          style={{
            '--paper-color': this.bgColor,
            '--default-icon-color': this.iconColor,
          }}
        >
          <div class={{
            content: true,
            'arv-dialog-content': true,
            contentFull: this.full
          }}>
            {!this.hideTitle && (
              <arv-flex justify="between" items="center" padded>
                  <arv-flex items="center" justify={this.titleAlignment}>
                    {this.dialogTitleIcon && [
                      <arv-icon class="icon" withButtonIcon icon={this.dialogTitleIcon} />,
                      <arv-divider layout="column" transparent></arv-divider>
                    ]}
                    {this.titleImageIcon && [
                      <img class="imgIcon" src={this.titleImageIcon} />,
                      <arv-divider layout="column" transparent></arv-divider>
                    ]}
                    <arv-text variant="heading3">{this.dialogTitle}</arv-text>
                  </arv-flex>
                  {!this.hideClose && (
                    <arv-button
                      variant="flat-icon"
                      icon="close"
                      buttonClick={this.onHandleClose.bind(this, false)}></arv-button>  
                  )}
              </arv-flex>
            )}
            <arv-flex padded={this.padded}>
              {slot}
            </arv-flex>
            {this.dialogActions && [
               <arv-divider transparent/>,
               <arv-flex justify="end" padded>
                 {this.dialogActions.cancel && (
                    <arv-button
                      variant={this.dialogActions.cancel.variant}
                      color={this.dialogActions.cancel.color}
                      buttonClick={this.onHandleClose.bind(this, false)}>
                      {this.dialogActions.cancel.text || 'Cancel'}
                    </arv-button>
                 )}
                 <arv-divider layout="column" transparent />
                 {this.dialogActions.ok && (
                    <arv-button
                      variant={this.dialogActions.ok.variant || 'raised'}
                      color={this.dialogActions.ok.color || 'primary'}
                      buttonClick={this.onHandleClose.bind(this, true)}>
                      {this.dialogActions.ok.text || 'Ok'}
                    </arv-button>
                 )}
               </arv-flex>
            ]}
          </div>
        </arv-dialog-content>
      </arv-container>
    );
  }
}
