import { createSpec } from '../../utils/testing/utils';

import { Flex } from './flex';

const specComponent = createSpec(Flex);

it('loads the component', async () => {
  const page = await specComponent(`
    <arv-flex></arv-flex>
  `);
  expect(page.root.shadowRoot).toBeTruthy();
});

it('set direction', async () => {
  const page = await specComponent(`
    <arv-flex direction="row-reverse"></arv-flex>
  `);
  expect(page.root.style.flexDirection).toBe('row-reverse');
});

it('set justify', async () => {
  const page = await specComponent(`
    <arv-flex justify="space-between"></arv-flex>
  `);
  expect(page.root.style.justifyContent).toBe('space-between');
});

it('set align items', async () => {
  const page = await specComponent(`
    <arv-flex align-items="center"></arv-flex>
  `);
  expect(page.root.style.alignItems).toBe('center');
});

it('set expanded', async () => {
  const page = await specComponent(`
    <arv-flex expanded></arv-flex>
  `);
  expect(page.root.classList.contains('expanded')).toBeTruthy();
});

it('set wrap', async () => {
  const page = await specComponent(`
    <arv-flex wrap="wrap"></arv-flex>
  `);
  expect(page.root.style.flexWrap).toBe('wrap');
});

it('set flex', async () => {
  const page = await specComponent(`
    <arv-flex flex="1 1 0"></arv-flex>
  `);
  expect(page.root.style.flex).toBe('1 1 0');
});