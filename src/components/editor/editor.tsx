import { Component, h, Event, EventEmitter, Prop, Element, Method } from '@stencil/core';

@Component({
  tag: 'arv-editor',
  styleUrl: 'editor.css',
  shadow: true
})
export class Editor {

  @Element() el: HTMLElement;

  @Prop() disabled: boolean;

  @Prop() disabledTools: string[] = [];

  @Prop() handleImage: (editor: any) => void;

  @Event() editorOnBlur: EventEmitter;

  @Method()
  async setValue(value: string) {
    const editorContent = this.el.shadowRoot.querySelector('.editor');
    editorContent.innerHTML = value;
  }

  @Method()
  async getValue() {
    const editorContent = this.el.shadowRoot.querySelector('.editor');
    return editorContent.innerHTML;
  }

  blur = () => {
    this.editorOnBlur.emit();
  }

  formatBlock(block: string) {
    document.execCommand('formatBlock', false, block);
  }

  imageGet() {
    if (this.handleImage) {
      const editorContent = this.el.shadowRoot.querySelector('.editor');
      this.handleImage(editorContent);
    }
  }

  getImage() {
    const editorContent = this.el.shadowRoot.querySelector('.editor');
    const file = this.el.shadowRoot.querySelector('input[type=file]')['files'][0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        const dataURI = reader.result;

        const img: any = document.createElement('img');
        img.src = dataURI;
        editorContent.appendChild(img);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  showLink() {
    const url = prompt('Enter the URL');
    document.execCommand('createLink', false, url);
  }

  size(s) {
    document.execCommand('fontSize', false, s);
  }

  comm(c, v = null) {
    document.execCommand(c, false, v);
  }

  render() {
    const rootClassNames = {
      root: true
    };

    const controls = [
      {
        icon: 'format_bold',
        comm: 'bold',
      },
      {
        icon: 'format_underline',
        comm: 'underline',
      },
      {
        icon: 'format_italic',
        comm: 'italic',
      },
      {
        icon: 'format_strikethrough',
        comm: 'strikeThrough',
      },
      {
        icon: 'format_list_numbered',
        comm: 'insertOrderedList',
      },
      {
        icon: 'format_list_bulleted',
        comm: 'insertUnorderedList',
      },
      {
        icon: 'format_align_center',
        comm: 'justifyCenter',
      },
      {
        icon: 'format_align_left',
        comm: 'justifyLeft',
      },
      {
        icon: 'format_align_right',
        comm: 'justifyRight',
      },
      {
        icon: 'format_align_justify',
        comm: 'justifyFull',
      },
      {
        icon: 'format_clear',
        comm: 'removeFormat',
      },
      {
        icon: 'undo',
        comm: 'undo',
      },
      {
        icon: 'redo',
        comm: 'redo',
      },
      {
        icon: 'link_off',
        comm: 'unlink',
      }
    ].filter(d => {
      return !this.disabledTools.includes(d.comm);
    });
    const headings = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
    const sizes = [1, 2, 3, 4, 5, 6, 7];

    const controlsWrapper = (
      <div class="control">
        {controls.map((d, i) => (
          <arv-button
            key={i}
            onClick={this.comm.bind(this, d.comm)}
            icon={d.icon}
            variant="flat-icon"
            rounded={false} />
        ))}
        <arv-button
          onClick={this.showLink.bind(this)}
          icon="insert_link"
          variant="flat-icon"
          rounded={false} />
        <arv-menu xPosition="left">
          <div slot="menu">
            <arv-button
              icon="title"
              variant="flat-icon"
              rounded={false} />
          </div>
          <div
            class="headingList"
            slot="menu-list">
            {headings.map((d, i) => (
              <arv-button
                rounded={false}
                key={i}
                onClick={this.formatBlock.bind(this, d)}
                full>
                Heading {i + 1}
              </arv-button>
            ))}
          </div>
        </arv-menu>
        <arv-menu xPosition="left">
          <div slot="menu">
            <arv-button
              icon="format_size"
              variant="flat-icon"
              rounded={false} />
          </div>
          <div
            class="headingList"
            slot="menu-list">
            {sizes.map(d => (
              <arv-button
                rounded={false}
                key={d}
                onClick={this.size.bind(this, d)}
                full>
                {d}
              </arv-button>
            ))}
          </div>
        </arv-menu>
        <span class="inputWrapper">
          <arv-icon onClick={this.imageGet.bind(this)} icon="image"></arv-icon>
          {!Boolean(this.handleImage) && (<input
            class="input"
            onChange={this.getImage.bind(this)} type="file" accept="image/*" />)}
        </span>
      </div>
    );

    return (
      <div class={rootClassNames}>
        <arv-flex layout="column">
          {controlsWrapper}
          <arv-divider transparent />
          <div class="editor"
            contenteditable
            onBlur={this.blur}></div>
        </arv-flex>
      </div>
    );
  }
}
