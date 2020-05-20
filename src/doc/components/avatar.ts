export const Avatar = {
  name: 'Avatar',
  element: 'arv-avatar',
  slot: false,
  props: [
    {
      name: 'img-src',
      type: 'string',
      value: 'http://localhost:5000/bg-03.png',
    },
    {
      name: 'size',
      type: 'size',
      value: 'normal'
    },
  ]
};
