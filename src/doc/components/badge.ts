export const Badge = {
  element: 'arv-badge',
  slot: `
    <arv-button>Hello</arv-button>
  `,
  props: [
    {
      name: 'value',
      type: 'string',
      value: '1'
    }, {
      name: 'invisible',
      type: 'boolean',
      description: 'Will hide the badge'
    }, {
      name: 'disable-comma',
      type: 'boolean',
      description: 'Will not render a number with commas.'
    }
  ]
};
