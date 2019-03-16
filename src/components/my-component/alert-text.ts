export const AlertText = {
  name: 'Alert Text',
  element: 'arv-alert-text',
  slot: 'Hello World',
  props: [
    {
      name: 'color',
      type: 'oneOf',
      data: ['default', 'primary', 'secondary', 'error', 'warning', 'success'],
      value: 'primary',
    },
    {
      name: 'icon',
      type: 'string',
      value: 'edit'
    }
  ]
};
