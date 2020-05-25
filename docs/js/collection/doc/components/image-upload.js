const image = 'https://avatars.mds.yandex.net/get-pdb/251121/4a58e1e6-d71e-4966-a991-4c270bbf22f5/s1200';
export const ImageUpload = {
    name: 'Image Upload',
    element: 'arv-image-upload',
    slot: false,
    propsDescription: [
        {
            name: 'removeImage',
            type: 'function',
            description: 'Triggered if the remove button is clicked'
        },
        {
            name: 'uploadImage',
            description: 'Will open the file dialog to upload an image'
        },
    ],
    events: [
        {
            name: 'arvUploadImage',
            description: 'Will open the file dialog to upload an image'
        },
        {
            name: 'arvRemoveImage',
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
