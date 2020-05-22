import { Stepper } from './stepper';
import { createSpec, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(Stepper);

const steps = [{
  done: true,
  title: 'one'
}, {
  done: false,
  title: 'two'
}, {
  done: false,
  title: 'three'
}];

it('render the component', async () => {
  const page = await specComponent(`
    <arv-stepper></arv-stepper>
  `);
  page.rootInstance.steps = steps;
  await page.waitForChanges();
  const items = page.root.shadowRoot.querySelectorAll('.item');
  expect(page.root.shadowRoot).toBeTruthy();
  expect(items.length).toBe(3);
});

it('set color', async () => {
  const page = await specComponent(`
    <arv-stepper color="primary"></arv-stepper>
  `);
  expect(clsContains(page, 'primary')).toBeTruthy();
});

it('active step', async () => {
  const page = await specComponent(`
    <arv-stepper active-index="2" color="primary"></arv-stepper>
  `);
  page.rootInstance.steps = steps;
  await page.waitForChanges();
  const items = page.root.shadowRoot.querySelectorAll('.item');
  const secondItem = items[1];
  const thirdItem = page.root.shadowRoot.querySelectorAll('.item')[2];
  expect(secondItem.classList.contains('active')).toBeFalsy();
  expect(thirdItem.classList.contains('active')).toBeTruthy();
});

it('emit arvItemClick', async () => {
  const page = await specComponent(`
    <arv-stepper active-index="2" color="primary"></arv-stepper>
  `);
  page.rootInstance.steps = steps;
  await page.waitForChanges();
  const spy = jest.fn();
  page.root.addEventListener('arvItemClick', spy);
  const thirdItem: any = page.root.shadowRoot.querySelectorAll('.item')[2];
  thirdItem.click();
  expect(spy).toHaveBeenCalled();
  expect(spy.mock.calls.pop()[0].detail).toBe(2);
});
