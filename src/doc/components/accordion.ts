export const Accordion = {
  element: 'arv-accordion',
  slot: `
    <arv-accordion-item>
      <p slot="title">First Item</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere nisi tenetur ullam cumque. Provident dolor, neque laboriosam nesciunt labore sit quam at molestias quasi, nisi eveniet animi dolorum. Fugiat!
      </p>
    </arv-accordion-item>
    <arv-accordion-item>
      <p slot="title">Second Item</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi facere nisi tenetur ullam cumque. Provident dolor, neque laboriosam nesciunt labore sit quam at molestias quasi, nisi eveniet animi dolorum. Fugiat!
      </p>
    </arv-accordion-item>
  `,
  props: [{
    name: 'color',
    type: 'color',
    value: ''
  }]
};
