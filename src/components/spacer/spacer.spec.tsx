import { Spacer } from './spacer';
import { createSpec, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(Spacer);

it('render the component', async () => {
  const page = await specComponent(`
    <arv-spacer></arv-spacer>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('vertical', async () => {
  const page = await specComponent(`
    <arv-spacer vertical></arv-spacer>
  `);
  expect(clsContains(page, 'vertical')).toBeTruthy();
})
