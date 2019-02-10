import { Component } from '@stencil/core';

import { Button } from './button';
import { Input } from './input';
import { Header } from './header';
import { Avatar } from './avatar';
import { Paper } from './paper';
import { Text } from './text';
import { Container } from './container';
import { Dialog } from './dialog';
import { Stepper } from './stepper';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  items = [
    {...Button},
    {...Input},
    {...Header},
    {...Avatar},
    {...Paper},
    {...Text},
    {...Container},
    {...Dialog},
    {...Stepper},
  ];

  render() {
    return (
      <bb-bolts items={this.items}></bb-bolts>
    );
  }
}
