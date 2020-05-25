export const Button = {
  name: 'Button',
  element: 'arv-button',
  slot: 'Test Button',
  props: [
    {
      name: 'icon',
      type: 'string'
    },
    {
      name: 'flex-direction',
      type: 'oneOf',
      data: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Layout direction of label and select element.'
    },
    {
      name: 'color',
      type: 'color'
    },
    {
      name: 'disabled',
      type: 'boolean',
      value: 'false',
      description: 'Disabled state of the button.'
    },
    {
      name: 'full',
      type: 'boolean',
      value: 'false',
      description: 'Occupies the available width.'
    },
    {
      name: 'size',
      type: 'size',
    },
    {
      name: 'variant',
      type: 'oneOf',
      data: ['raised', 'ghost'],
      value: 'raised',
      description: 'Button ui variant.'
    },
    {
      name: 'loading-color',
      type: 'color',
      description: 'color of the circular progress.'
    },
    {
      name: 'loading',
      type: 'boolean',
      description: 'shows a circular progress.'
    },
    {
      name: 'loading-text',
      type: 'string',
      description: 'shows a loading text'
    }
  ],
};
