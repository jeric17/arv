export const Menu = {
  name: 'Menu',
  element: 'arv-menu',
  slot: '<arv-button icon="settings" variant="raised-icon" slot="menu"></arv-button><arv-flex slot="menu-list" layout="column"><arv-button variant="ghost" rounded="false" full="">Profile</arv-button><arv-button rounded="false" variant="ghost" full="">Account</arv-button></arv-flex>',
  props: [
    {
      name: 'xPosition',
      displayName: 'x-position',
      type: 'oneOf',
      data: ['left', 'right'],
      value: 'left'
    },
    {
      name: 'yPosition',
      displayName: 'y-position',
      type: 'oneOf',
      data: ['top', 'bottom'],
      value: 'top'
    },
  ]
};
