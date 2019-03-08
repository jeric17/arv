export const Button = {
  name: 'Button',
  element: 'arv-button',
  slot: 'Test Button',
  description: [
    'Button component used to trigger events',
    'Can also have an icon, only icons from https://material.io/tools/icons/?style=baseline is supported',
  ],
  events: [
    {
      name: 'onButtonClick',
      description: 'event fired when button is clicked'
    },
  ],
      props: [
        {
          name: 'color',
          type: 'oneOf',
          data: ['default', 'primary', 'secondary', 'light', 'dark', 'warning'],
          value: 'default'
        },
        {
          name: 'disabled',
          type: 'boolean',
          value: 'false'
        },
        {
          name: 'loading',
          type: 'boolean',
          value: 'false'
        },
        {
          name: 'full',
          type: 'boolean',
          value: 'false'
        },
        {
          name: 'size',
          type: 'oneOf',
          data: ['small', 'medium', 'large'],
          value: 'medium'
        },
        {
          name: 'variant',
          type: 'oneOf',
          data: ['bordered', 'flat', 'raised', 'flat-icon', 'raised-icon'],
          value: 'raised'
        },
        {
          name: 'text-align',
          type: 'oneOf',
          data: ['start', 'end', 'center', 'between'],
          value: 'center'
        },
        {
          name: 'layout',
          type: 'oneOf',
          data: ['row', 'row-reverse'],
          value: 'row'
        },
        {
          name: 'icon',
          type: 'string',
          value: 'add'
        },
      ],
    };
