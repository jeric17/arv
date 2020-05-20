import { AccordionItem } from './accordion-item';
import { createSpec, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(AccordionItem);

it('render the component', async () => {
  const page = await specComponent(`
    <arv-accordion-item>
      <p>Content.</p>
    </arv-accordion-item>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('color', async () => {
  const page = await specComponent(`
    <arv-accordion-item color="secondary">
      <p>Content.</p>
    </arv-accordion-item>
  `);

  expect(clsContains(page, 'secondary')).toBeTruthy();
});

it('emit arvToggleAccordion', async () => {
  const page = await specComponent(`
    <arv-accordion-item color="secondary" item-index="3">
      <p>Content.</p>
    </arv-accordion-item>
  `);

  const spy = jest.fn();
  page.root.addEventListener('arvToggleAccordion', spy);
  (page.root.shadowRoot.querySelector('.title') as any).click();
  expect(spy).toHaveBeenCalled();
  const value = spy.mock.calls.pop()[0].detail;
  expect(value).toBe(3);
  await page.waitForChanges();
  expect(page.rootInstance.active).toBe(true);
});
