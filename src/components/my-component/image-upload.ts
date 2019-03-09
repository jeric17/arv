const image = 'https://avatars.mds.yandex.net/get-pdb/251121/4a58e1e6-d71e-4966-a991-4c270bbf22f5/s1200';

export const ImageUpload = {
  name: 'Image Upload',
  element: 'arv-image-upload',
  slot: false,
  propsDescription: [
    {
      name: 'onRemove',
      type: 'function',
      description: 'Triggered if the remove button is clicked'
    },
  ],
  events: [
    {
      name: 'upload',
      description: 'Will open the file dialog to upload an image'
    },
    {
      name: 'remove',
      description: 'Triggered if the remove button is clicked'
    }
  ],
  props: [
    {
      name: 'imgSrc',
      displayName: 'img-src',
      type: 'string',
      value: image
    },
    {
      name: 'disabled',
      type: 'boolean',
      value: false
    }
  ]
};
