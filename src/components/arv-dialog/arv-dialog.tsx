import { Component, h, Element, Event, EventEmitter, Listen, Prop, State, Watch } from '@stencil/core';
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

  @Prop() enableBackDropClose = false;

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

  @Prop() dialogTitleVariant = 'heading3';

  @Prop() padded = true;

  @Prop() titleIconUrl: string;

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

  @Event() arvOk: EventEmitter;

  @Event() arvClose: EventEmitter;

  @Listen('cancel')
  handleCancel() {
    this.arvClose.emit();
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
        this.arvClose.emit(true);
        return false;
      }
      this.arvOk.emit(true);
    }, 300);
  }

  private _addBodyOverlay() {
    document.body.style.overflow = 'hidden';
  }

  private _removeBodyOverlay() {
    document.body.style.removeProperty('overflow');
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

  containerClick(event: MouseEvent) {
    const dialogClassName = Array.from(event.target['classList']).includes('arv-dialog');

    if (!dialogClassName) {
      return false;
    }

    if (this.enableBackDropClose) {
      this.handleClose();
    }
  }

  render() {
    const slot = this.show ? <slot></slot> : null;

    return (
      <arv-container
        containerClick={e => {
          this.containerClick(e);
        }}
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
                    {(this.dialogTitleIcon && !this.titleIconUrl) && [
                      <arv-icon class="icon" withButtonIcon icon={this.dialogTitleIcon} />,
                      <arv-divider layout="column" transparent></arv-divider>
                    ]}
                    {(!this.dialogTitleIcon && this.titleIconUrl) && [
                      <img class="imgIcon" src={this.titleIconUrl} />,
                      <arv-divider layout="column" transparent></arv-divider>
                    ]}
                    {this.titleImageIcon && [
                      <img class="imgIcon" src={this.titleImageIcon} />,
                      <arv-divider layout="column" transparent></arv-divider>
                    ]}
                    <arv-text variant={this.dialogTitleVariant}>{this.dialogTitle}</arv-text>
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
                      buttonClick={() => {
                        if (this.dialogActions.cancel.fn) {
                          this.dialogActions.cancel.fn();
                        }
                        this.onHandleClose(false);
                      }}>
                      {this.dialogActions.cancel.text || 'Cancel'}
                    </arv-button>
                 )}
                 <arv-divider layout="column" transparent />
                 {this.dialogActions.ok && (
                    <arv-button
                      variant={this.dialogActions.ok.variant || 'raised'}
                      color={this.dialogActions.ok.color || 'primary'}
                      buttonClick={() => {
                        if (this.dialogActions.ok.fn) {
                          this.dialogActions.ok.fn();
                        }  
                        this.onHandleClose(true)
                      }}>
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
