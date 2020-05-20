export const Snackbar = {
  name: 'Snackbar',
  element: 'arv-snackbar',
  slot: false,
  propsDescription: [
    {
      name: 'close',
      type: 'function',
      description: 'Required either close property or handleClose event. This will trigger the close function. close functions should always set the open property to false'
    }
  ],
  events: [
    {
      name: 'handleClose',
      description: 'Required either close property or handleClose event. This will trigger the close function. close functions should always set the open property to false'
    }
  ],
  props: [
    {
      name: 'variant',
      type: 'oneOf',
      data: ['default', 'success', 'error', 'loading'],
      value: 'default'
    },
    {
      name: 'message',
      type: 'string',
      value: 'HelloWorld'
    },
    {
      name: 'open',
      type: 'boolean',
      value: 'true'
    },
    {
      name: 'vertical',
      type: 'oneOf',
      data: ['top', 'center', 'bottom'],
      value: 'top'
    },
    {
      name: 'horizontal',
      type: 'oneOf',
      data: ['left', 'center', 'right'],
      value: 'center'
    }
  ]
};
