const imageUrl = 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg';
const imageUrl2 = 'https://scitechdaily.com/images/Universe-Expansion.jpg';
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
