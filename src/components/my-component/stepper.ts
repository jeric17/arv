const steps = [{
  "done": true,
  "title":"StepOne"
}, {
  "done": false,
  "title":"StepTwo"
}, {
  "done": false,
  "title":"StepThree"
}];

export const Stepper = {
  name: 'Stepper',
  element: 'arv-stepper',
  slot: false,
  props: [
    {
      name: 'steps',
      type: 'string',
      value: JSON.stringify(steps)
    },
    {
      name: 'color',
      type: 'oneOf',
      data: ['default', 'primary', 'secondary'],
      value: 'primary'
    }
  ],
};
