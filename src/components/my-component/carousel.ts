const image1 = 'https://pmcvariety.files.wordpress.com/2014/04/01-avengers-2012.jpg?w=1000&h=563&crop=1';

const image2 = 'https://www.telegraph.co.uk/content/dam/films/2018/04/17/infinity-war_trans_NvBQzQNjv4BqNUHzxaamNmHDqK-YksWRz2o-yMLyYquKCawpyDOW254.jpg?imwidth=1400';

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
