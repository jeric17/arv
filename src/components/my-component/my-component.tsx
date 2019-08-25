import { Component , h } from '@stencil/core';

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
import { Loader } from './loader';
import { Paginator } from './paginator';
import { Editor } from './editor';
import { Tabs } from './tabs';
import { Menu } from './menu';
import { Select } from './select';
import { ImageUpload } from './image-upload';
import { Section } from './section';
import { CardMedia } from './card-media';
import { Card } from './card';
import { AvatarGroup } from './avatar-group';
import { Badge } from './badge';
import { AlertText } from './alert-text';
import { Diff } from './diff';
import { Draggable } from './draggable';
// import { DraggableWrapper } from './draggable-wrapper';
import { Tooltip } from './tooltip';
import { InputWrapper } from './input-wrapper';
import { Radio } from './radio';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  items = [
    {...AlertText},
    {...Avatar},
    {...AvatarGroup},
    {...Badge},
    {...Button},
    {...Card},
    {...CardMedia},
    {...Carousel},
    {...Checkbox},
    {...Chips},
    {...Container},
    {...Dialog},
    {...Diff},
    {...Draggable},
    {...Editor},
    {...Flex},
    {...Header},
    {...Icon},
    {...ImageUpload},
    {...Input},
    {...InputWrapper},
    {...Loader},
    {...Menu},
    {...Paginator},
    {...Paper},
    {...Radio},
    {...Section},
    {...Select},
    {...Snackbar},
    {...Stepper},
    {...Switch},
    {...Table},
    {...Tabs},
    {...Text},
    {...Tooltip},
  ];

  render() {
    return (
      <bb-bolts items={this.items}></bb-bolts>
    );
  }
}
