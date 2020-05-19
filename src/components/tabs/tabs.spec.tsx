import { Tabs } from './tabs';
import { createSpec, clsContains, getShadowEl } from '../../utils/testing/utils';

const specComponent = createSpec(Tabs);

it('load tabs', async () => {
  const page = await specComponent(`
    <arv-tabs>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </arv-tabs>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('add item-index attr to arv-tab', async () => {
  const page = await specComponent(`
    <arv-tabs tab-names='["one", "two", "three"]'>
      <arv-tab>One</arv-tab>
      <arv-tab>Two</arv-tab>
      <arv-tab>Three</arv-tab>
    </arv-tabs>
  `);

  const tabs = page.root.querySelectorAll('arv-tab');
  expect(tabs[0].getAttribute('item-index')).toBe('0');
  expect(tabs[1].getAttribute('item-index')).toBe('1');
  expect(tabs[2].getAttribute('item-index')).toBe('2');
});

it('sets color', async () => {
  const page = await specComponent(`
    <arv-tabs color="secondary">
      <arv-tab>One</arv-tab>
      <arv-tab>Two</arv-tab>
      <arv-tab>Three</arv-tab>
    </arv-tabs>
  `);

  expect(clsContains(page, 'secondary')).toBeTruthy();
});

it('show active tab', async () => {
  const page = await specComponent(`
    <arv-tabs tab-names='["one", "two", "three"]'>
      <arv-tab>One</arv-tab>
      <arv-tab>Two</arv-tab>
      <arv-tab>Three</arv-tab>
    </arv-tabs>
  `);

  const tabNameTwo: any = page.root.shadowRoot.querySelectorAll('.tab-name')[1];
  tabNameTwo.click();
  await page.waitForChanges();
  const tabTwo = page.root.querySelectorAll('arv-tab')[1];
  expect(tabTwo.getAttribute('is-active')).toBe('true');
});

it('compressedHeader', async () => {
  const page = await specComponent(`
    <arv-tabs color="secondary" compressed-header>
      <arv-tab>One</arv-tab>
      <arv-tab>Two</arv-tab>
      <arv-tab>Three</arv-tab>
    </arv-tabs>
  `);

  expect(clsContains(page, 'compressed')).toBeTruthy();
});
