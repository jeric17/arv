export const Flex = {
  name: 'Flex',
  element: 'arv-flex',
  slot: '<arv-container color="primary" height="50px" width="50px"></arv-container>',
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
      data: ['start', 'end', 'center', 'stretch'],
      value: 'start'
    },
    {
      name: 'padded',
      type: 'boolean',
      value: 'true'
    }
  ]
};
