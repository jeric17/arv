const image1 = 'https://stmed.net/sites/default/files/mountain-wallpapers-27979-1182849.jpg';

const image2 = 'https://stmed.net/sites/default/files/mountain-wallpapers-27979-9780444.jpg';

export const Carousel = {
  name: 'Carousel',
  element: 'arv-carousel',
  slot: false,
  props: [
    {
      name: 'images',
      type: 'object',
      value: `[{"imageUrl":"${image1}"},{"imageUrl":"${image2}"}]`
    }
  ],
};
