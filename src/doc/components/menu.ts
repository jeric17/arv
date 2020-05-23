export const Menu = {
  element: 'arv-menu',
  slot: `
    <arv-button is-icon><arv-icon icon="account_box"></arv-icon></arv-button>
    <div slot="content">
      <h1>Hello</h1>
    </div>
    <div slot="menu-list">
      <arv-menu-item>
        <span slot="value">Menu Item 1</span>
      </arv-menu-item>
      <arv-menu-item>
        <span slot="value">Menu Item 2</span>
      </arv-menu-item>
      <arv-menu-item>
        <span slot="value">Menu Item 3</span>
      </arv-menu-item>
    </div>
  `,
  props: [
    {
      name: 'x-position',
      type: 'oneOf',
      data: ['left', 'right'],
      value: 'left'
    },
    {
      name: 'y-position',
      type: 'oneOf',
      data: ['top', 'bottom'],
      value: 'bottom'
    },
  ]
};
