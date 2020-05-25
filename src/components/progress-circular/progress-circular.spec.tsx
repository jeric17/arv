import { ProgressCircular } from './progress-circular';
import { createSpec, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(ProgressCircular);

it('render the component', async () => {
  const page = await specComponent(`
    <arv-progress-circular></arv-progress-circular>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('color', async () => {
  const page = await specComponent(`
    <arv-progress-circular color="primary"></arv-progress-circular>
  `);

  expect(clsContains(page, 'primary')).toBeTruthy();
});

it('size', async () => {
  const page = await specComponent(`
    <arv-progress-circular size="large"></arv-progress-circular>
  `);

  expect(clsContains(page, 'large')).toBeTruthy();
});
