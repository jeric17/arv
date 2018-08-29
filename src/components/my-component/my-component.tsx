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
      name: 'Avatar',
      element: 'arv-avatar',
      props: [
        {
          name: 'imgSrc',
          type: 'string',
          value: '',
        },
        {
          name: 'size',
          type: 'oneOf',
          data: ['small', 'medium', 'large'],
          value: 'medium'
        },
      ]
    }
  ];

  render() {
    return (
      <bb-bolts items={this.items}></bb-bolts>
    );
  }
}
