import { Virtual } from './virtual';
import { createSpec, getShadowEl } from '../../utils/testing/utils';

const specComponent = createSpec(Virtual);

it('loads', async () => {
  const page = await specComponent(`
    <arv-virtual></arv-virtual>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('emit arvVirtualClose', async () => {
  const page = await specComponent(`
    <arv-virtual></arv-virtual>
  `);
  const spy = jest.fn();
  page.root.addEventListener('arvVirtualClose', spy);
  const bd: any = getShadowEl(page, '.backdrop');
  bd.click();
  expect(spy).toHaveBeenCalled();
});
