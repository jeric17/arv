const image1 = 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg';

export const AvatarGroup = {
  name: 'Avatar Group',
  element: 'arv-avatar-group',
  slot: false,
  propsDescription: [
    {
      name: 'image-items',
      type: 'string[]',
      description: 'Array of image urls'
    },
    {
      name: 'showMore',
      type: 'function',
      description: 'Fired if show more is clicked'
    },
  ],
  props: [
    {
      name: 'imageItems',
      displayName: 'image-items',
      type: 'string',
      value: JSON.stringify([image1, image1]),
    },
    {
      name: 'bordered',
      type: 'boolean',
      value: false
    },
    {
      name: 'maxItems',
      displayName: 'max-items',
      type: 'string',
      value: 1
    },
    {
      name: 'showMore',
      type: 'object2',
      value: () => alert('show more clicked!')
    }
  ]
};
