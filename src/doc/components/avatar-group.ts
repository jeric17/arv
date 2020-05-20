const imageUrl = 'http://localhost:5000/bg-03.png';
const imageUrl2 = 'http://localhost:5000/bg-02.jpg';

export const AvatarGroup = {
  element: 'arv-avatar-group',
  slot: `
    <arv-avatar img-src="${imageUrl}"></arv-avatar>
    <arv-avatar img-src="${imageUrl2}"></arv-avatar>
    <arv-avatar img-src="${imageUrl}"></arv-avatar>
  `,
  props: [
    {
      name: 'max',
      type: 'string',
      value: '2'
    },
    {
      name: 'size',
      type: 'size'
    }
  ]
};
