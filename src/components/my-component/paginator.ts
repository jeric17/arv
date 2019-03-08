export const Paginator = {
  name: 'Paginator',
  element: 'arv-paginator',
  slot: false,
  events: [
    {
      name: 'change',
      description: 'triggers when user clicks the page item. will emit the page number'
    }
  ],
  propsDescription: [
    {
      name: 'onSelect',
      type: 'function',
      description: 'triggers when user clicks the page item. will emit the page number'
    }
  ],
  props: [
    {
      name: 'color',
      type: 'oneOf',
      data: ['default', 'primary', 'secondary', 'light', 'dark'],
      value: 'primary'
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
    },
    {
      name: 'onSelect',
      type: 'object2',
      value: evt => alert(evt)
    }
  ],
};
