export const Flex = {
  name: 'Flex',
  element: 'arv-flex',
  slot: '<arv-button color="primary" variant="raised-icon" icon="add"></arv-button><arv-button variant="raised-icon" color="secondary" icon="edit"></arv-button><arv-button color="warning" variant="raised-icon" icon="delete"></arv-button>',
  props: [
    {
      name: 'layout',
      type: 'oneOf',
      data: ['row', 'row-reverse', 'column', 'column-reverse'],
      value: 'row'
    },
    {
      name: 'items',
      type: 'oneOf',
      data: ['start', 'end', 'center', 'stretch'],
      value: 'start'
    },
    {
      name: 'justify',
      type: 'oneOf',
      data: ['start', 'end', 'center', 'stretch', 'between', 'around'],
      value: 'start'
    },
    {
      name: 'padded',
      type: 'boolean',
      value: 'true'
    },
    {
      name: 'full-width',
      type: 'boolean',
      value: 'true'
    },
    {
      name: 'full-height',
      type: 'boolean',
      value: 'true'
    }
  ]
};
