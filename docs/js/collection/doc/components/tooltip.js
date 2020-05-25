export const Tooltip = {
    name: 'Tooltip',
    element: 'arv-tooltip',
    slot: `
    <arv-button variant="raised">Hello</arv-button>
    <arv-text slot="tooltip" wrap="nowrap">
      <p>Custom content</p>
    </arv-text>
  `,
    props: [
        {
            name: 'message',
            type: 'string',
            value: 'hello'
        },
        {
            name: 'color',
            type: 'color'
        },
        {
            name: 'position',
            type: 'oneOf',
            data: ['top', 'bottom', 'right', 'left'],
            value: 'top',
        }
    ]
};
