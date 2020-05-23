const steps = [{
  "done": true,
  "title": "StepOne"
}, {
  "done": false,
  "title": "StepTwo"
}, {
  "done": false,
  "title": "StepThree"
}];

export const Stepper = {
  element: 'arv-stepper',
  slot: false,
  containerContent: `
    <arv-button
      class="back"
      color="secondary"
      icon="chevron_left"
    >Back</arv-button>
    <arv-spacer vertical></arv-spacer>
    <arv-button
      class="next"
      color="secondary"
      icon="chevron_right"
      flex-direction="row-reverse"
    >Next</arv-button>
  `,
  onLoad: (el: HTMLElement) => {
    const nextBtn = el.querySelector('.next');
    const backBtn = el.querySelector('.back');
    const stepper = el.querySelector('arv-stepper');

    nextBtn.addEventListener('click', () => {
      stepper.next();
    });
    backBtn.addEventListener('click', () => {
      stepper.back();
    });
  },
  props: [
    {
      name: 'steps',
      type: 'string',
      value: JSON.stringify(steps)
    }, {
      name: 'active-index',
      type: 'string',
      value: '0'
    }, {
      name: 'color',
      type: 'color'
    }
  ],
};
