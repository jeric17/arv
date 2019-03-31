export const Tooltip = {
  name: 'Tooltip',
  element: 'arv-tooltip',
  slot: '<arv-button variant="raised">Hello</arv-button>',
  props: [
    {
      name: 'color',
      type: 'oneOf',
      data: ['default', 'primary', 'secondary', 'error', 'success'],
      value: 'primary',
    },
    {
      name: 'message',
      type: 'string',
      value: 'hello'
    },
    {
      name: 'position',
      type: 'oneOf',
      data: ['tp', 'bottom', 'right', 'left'],
      value: 'top',
    },
    {
      name: 'fixed',
      type: 'boolean',
      value: 'false'
    },
    {
      name: 'show',
      type: 'boolean',
      value: 'false'
    },
  ]
};
