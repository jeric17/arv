export const Button = {
      name: 'Button',
      element: 'arv-button',
      slot: 'Test Button',
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
