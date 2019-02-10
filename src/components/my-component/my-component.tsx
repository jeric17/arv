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
import { Snackbar } from './snackbar';
import { Flex } from './flex';
import { Switch } from './switch';
import { Icon } from './icon';
import { Carousel } from './carousel';
import { Checkbox } from './checkbox';
import { Chips } from './chips';
import { Table } from './table';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  items = [
    {...Avatar},
    {...Button},
    {...Carousel},
    {...Checkbox},
    {...Chips},
    {...Container},
    {...Dialog},
    {...Flex},
    {...Header},
    {...Icon},
    {...Input},
    {...Paper},
    {...Snackbar},
    {...Stepper},
    {...Switch},
    {...Table},
    {...Text},
  ];

  render() {
    return (
      <bb-bolts items={this.items}></bb-bolts>
    );
  }
}
