import { Accordion } from './accordion';
import { createSpec, getShadowEl } from '../../utils/testing/utils';

const specComponent = createSpec(Accordion);

it('render the component', async () => {
  const page = await specComponent(`
    <arv-accordion>
      <arv-accordion-item>
        <p>Item</p>
      </arv-accordion-item>
    </arv-accordion>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('add indexes to accordion items', async () => {
  const page = await specComponent(`
    <arv-accordion>
      <arv-accordion-item>
        <p>Item 1</p>
      </arv-accordion-item>
      <arv-accordion-item>
        <p>Item 2</p>
      </arv-accordion-item>
    </arv-accordion>
  `);

  await page.waitForChanges();
  const firstChild = page.root.children[0];
  const secondChild = page.root.children[1];
  expect(firstChild.getAttribute('item-index')).toBe('0');
  expect(secondChild.getAttribute('item-index')).toBe('1');
});

it('set active accordion from listener', async () => {
  const page = await specComponent(`
    <arv-accordion>
      <arv-accordion-item>
        <p>Item 1</p>
      </arv-accordion-item>
      <arv-accordion-item>
        <p>Item 2</p>
      </arv-accordion-item>
    </arv-accordion>
  `);

  const firstChild = page.root.children[0];
  const secondChild = page.root.children[1];
  const evt = new CustomEvent('arvToggleAccordion', {
    detail: 1,
    bubbles: true
  });

  firstChild.setAttribute('active', 'true');
  secondChild.dispatchEvent(evt);
  await page.waitForChanges();
  expect(firstChild.getAttribute('active')).toBe('false');
});
