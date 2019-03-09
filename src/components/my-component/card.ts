const image = 'https://stmed.net/sites/default/files/mountain-wallpapers-27979-9780444.jpg';
const avatar = 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const Card = {
  name: 'Card',
  element: 'arv-card',
  slot: `<arv-card-media image-src="${image}"></arv-card-media><arv-card-header avatar-image="${avatar}" title-header="Hello World" sub-header="Foo bar"></arv-card-header>`,
  props: [
    {
      name: 'width',
      type: 'string',
      value: '300px'
    },
    {
      name: 'height',
      type: 'string',
      value: '250px'
    }
  ],
};
