export const Dialog = {
    element: 'arv-dialog',
    slot: `
    <p slot="header">Header from slot</p>
    <div style="width: 300px;">
      <h1>Hello World!</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, accusamus tempora inventore delectus impedit quisquam ratione? Ab architecto exercitationem deserunt reprehenderit eligendi, sunt nihil eos quo praesentium sed dolores laudantium?
      </p>
      <arv-select value="select">
        <arv-menu-item>
          <span slot="value">Menu 1</span>
        </arv-menu-item>
        <arv-menu-item>
          <span slot="value">Menu 2</span>
        </arv-menu-item>
        <arv-menu-item>
          <span slot="value">Menu 3</span>
        </arv-menu-item>
      </arv-select>
    </div>
  `,
    containerContent: `
    <arv-button color="secondary" size="large">Open Dialog</arv-button>
  `,
    onLoad: (el) => {
        const button = el.querySelector('arv-button');
        const dialog = el.querySelector('arv-dialog');
        button.addEventListener('click', () => {
            dialog.setAttribute('is-open', 'true');
        });
    },
    props: [
        {
            name: 'dialog-title',
            type: 'string',
            value: 'Title',
            description: 'Title at the header of the dialog box.'
        },
        {
            name: 'is-open',
            type: 'boolean',
            value: 'false',
            disabled: true,
            description: 'Opens the dialog box.'
        },
        {
            name: 'disable-bg-close',
            type: 'boolean',
            description: 'Disables closing of dialog box on background(backdrop) click.'
        },
        {
            name: 'scrollable',
            type: 'boolean',
            description: 'Scrollable dialog box.'
        }
    ],
};
