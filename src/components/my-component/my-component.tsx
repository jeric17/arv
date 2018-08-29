import { Component } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  items = [
    {
      name: 'Button',
      element: 'arv-button',
      slot: 'Test Button',
      props: [
        {
          name: 'color',
          type: 'oneOf',
          data: ['default', 'primary', 'secondary', 'inherit'],
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
          name: 'icon',
          type: 'string',
          value: ''
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
          value: 'flat'
        }
      ],
    },
    {
      name: 'Input',
      element: 'arv-input',
      props: [
        {
          name: 'label',
          type: 'string',
          value: 'Username'
        },
        {
          name: 'layout',
          type: 'oneOf',
          data: ['row', 'column'],
          value: 'row'
        },
        {
          name: 'full',
          type: 'boolean',
          value: 'false'
        },
      ]
    },
    {
      name: 'Header',
      element: 'arv-header',
      props: [
        {
          name: 'color',
          type: 'oneOf',
          data: ['default', 'primary', 'secondary', 'inherit'],
          value: 'primary'
        },
        {
          name: 'position',
          type: 'oneOf',
          data: ['static', 'absolute', 'relative', 'fixed', 'inherit'],
          value: 'static'
        },
        {
          name: 'shadow',
          type: 'boolean',
          value: 'false'
        }
      ],
    },
    {
      name: 'Avatar',
      element: 'arv-avatar',
      props: [
        {
          name: 'img-src',
          type: 'string',
          value: 'https://res.cloudinary.com/teepublic/image/private/s--q1UQjdo3--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1523777748/production/designs/2591906_0.jpg',
        },
        {
          name: 'size',
          type: 'oneOf',
          data: ['small', 'medium', 'large'],
          value: 'medium'
        },
      ]
    },
    {
      name: 'Paper',
      element: 'arv-paper',
      props: [
        {
          name: 'height',
          type: 'string',
          value: 'auto'
        },
        {
          name: 'padded',
          type: 'boolean',
          value: 'true'
        },
        {
          name: 'transparent',
          type: 'boolean',
          value: 'false'
        }
      ]
    }
  ];

  render() {
    return (
      <bb-bolts items={this.items}></bb-bolts>
    );
  }
}
