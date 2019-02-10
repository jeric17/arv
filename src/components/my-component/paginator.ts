export const Paginator = {
  name: 'Paginator',
  element: 'arv-paginator',
  slot: false,
  props: [
    {
      name: 'color',
      type: 'oneOf',
      data: ['default', 'primary', 'secondary', 'light', 'dark'],
      value: 'default'
    },
    {
      name: 'current-page',
      type: 'string',
      value: 1
    },
    {
      name: 'items-per-page',
      type: 'string',
      value: 5
    },
    {
      name: 'total-items',
      type: 'string',
      value: 50
    }
  ],
};