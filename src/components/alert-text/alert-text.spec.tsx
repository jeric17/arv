import { AlertText } from './alert-text';
import { createSpec, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(AlertText);

it('render the component', async () => {
  const page = await specComponent(`
    <arv-alert-text>Hello</arv-alert-text>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('color', async () => {
  const page = await specComponent(`
    <arv-alert-text color="primary">Hello</arv-alert-text>
  `);

  expect(clsContains(page, 'primary')).toBeTruthy();
});
