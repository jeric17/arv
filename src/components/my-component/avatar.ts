export const Avatar = {
  name: 'Avatar',
  element: 'arv-avatar',
  slot: false,
  props: [
    {
      name: 'img-src',
      type: 'string',
      value: 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      name: 'size',
      type: 'oneOf',
      data: ['small', 'medium', 'large'],
      value: 'medium'
    },
  ]
};
