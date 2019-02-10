export const Avatar = {
  name: 'Avatar',
  element: 'arv-avatar',
  props: [
    {
      name: 'img-src',
      type: 'string',
      value: 'https://res.cloudinary.com/teepublic/image/private/s--q1UQjdo3--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1523777748/production/designs/2591906_0.jpg',
    },
    {
      name: 'size',
      type: 'oneOf',
      data: ['small', 'medium', 'large'],
      value: 'medium'
    },
  ]
};
