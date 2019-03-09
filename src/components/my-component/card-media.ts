const image = 'https://stmed.net/sites/default/files/mountain-wallpapers-27979-1182849.jpg';

export const CardMedia = {
  name: 'Card Media',
  element: 'arv-card-media',
  wrapper: '<arv-container width="300px" color="dark" height="250px"></arv-container>',
  description: [
    'A relative size image component, adapts to the size of the container'
  ],
  slot: 'false',
  props: [
    {
      name: 'imageSrc',
      displayName: 'image-src',
      type: 'string',
      value: image
    }
  ]
};
