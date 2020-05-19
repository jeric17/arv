import { Text } from './text';
import { createSpec, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(Text);

it('render the component', async () => {
  const page = await specComponent(`
    <arv-text></arv-text>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('sets the color', async () => {
  const page = await specComponent(`
    <arv-text color="primary">
      <h1>Hello</h1>
    </arv-text>
  `);
  expect(clsContains(page, 'primary')).toBeTruthy();
});

it('truncate', async () => {
  const page = await specComponent(`
    <arv-text truncate>
      <h1>Hello</h1>
    </arv-text>
  `);
  await page.waitForChanges();
  const text: any | HTMLElement = page.root.children[0];
  expect(clsContains(page, 'truncate')).toBeTruthy();
  expect(text.style.textOverflow).toBe('ellipsis');
  expect(text.style.width).toBe('100%');
  expect(text.style.overflow).toBe('hidden');
});

it('text shadow', async () => {
  const page = await specComponent(`
    <arv-text shadow>
      <h1>Hello</h1>
    </arv-text>
  `);
  expect(clsContains(page, 'shadow')).toBeTruthy();
});
