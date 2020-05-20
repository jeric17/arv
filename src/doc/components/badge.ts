export const Badge = {
  name: 'Badge',
  element: 'arv-badge',
  slot: '<span slot="badge">1</span><arv-button>Hello</arv-button>',
  props: [
    {
      name: 'color',
      type: 'oneOf',
      data: ['default', 'primary', 'secondary', 'error', 'warning', 'success'],
      value: 'primary',
    },
    {
      name: 'size',
      type: 'oneOf',
      data: ['small', 'medium'],
      value: 'medium',
    }
  ]
};
