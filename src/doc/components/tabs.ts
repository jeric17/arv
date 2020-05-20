export const Tabs = {
  name: 'Tabs',
  element: 'arv-tabs',
  slot: '<arv-flex><span>ONE</span></arv-flex><arv-flex><span>TWO</span></arv-flex><arv-flex><span>THREE</span></arv-flex>',
  props: [
    {
      name: 'tabs',
      type: 'string',
      value: JSON.stringify(['One', 'Two', 'Three'])
    },
    {
      name: 'color',
      type: 'oneOf',
      data: ['default', 'primary', 'secondary'],
      value: 'default'
    },
    {
      name: 'fullHeaderWidth',
      displayName: 'full-header-width',
      type: 'boolean',
      value: 'true'
    }
  ]
};
