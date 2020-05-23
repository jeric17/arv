import { Stepper } from './stepper';
import { createSpec, clsContains, getShadowEl } from '../../utils/testing/utils';

const specComponent = createSpec(Stepper);

it('render the component', async () => {
  const page = await specComponent(`
    <arv-stepper steps="[{}, {}, {}]"></arv-stepper>
  `);

  await page.waitForChanges();
  const items = page.root.shadowRoot.querySelectorAll('.item');
  expect(page.root.shadowRoot).toBeTruthy();
  expect(items.length).toBe(3);
});

it('set color', async () => {
  const page = await specComponent(`
    <arv-stepper color="primary" steps="[{}, {}, {}]"></arv-stepper>
  `);
  expect(clsContains(page, 'primary')).toBeTruthy();
});

it('active step', async () => {
  const page = await specComponent(`
    <arv-stepper
      steps="[{}, {}, {}]"
      active-index="2"
      color="primary"
    ></arv-stepper>
  `);

  await page.waitForChanges();
  const items = page.root.shadowRoot.querySelectorAll('.item');
  const secondItem = items[1];
  const thirdItem = page.root.shadowRoot.querySelectorAll('.item')[2];
  expect(secondItem.classList.contains('active')).toBeFalsy();
  expect(thirdItem.classList.contains('active')).toBeTruthy();
});

it('emit arvItemClick', async () => {
  const page = await specComponent(`
    <arv-stepper
      steps="[{}, {}, {}]"
      active-index="2"
      color="primary"></arv-stepper>
  `);

  await page.waitForChanges();
  const spy = jest.fn();
  page.root.addEventListener('arvItemClick', spy);
  const thirdItem: any = page.root.shadowRoot.querySelectorAll('.item')[2];
  thirdItem.click();
  expect(spy).toHaveBeenCalled();
  expect(spy.mock.calls.pop()[0].detail).toBe(2);
});

it('next and back', async () => {
  const page = await specComponent(`
    <arv-stepper active-index="0" steps="[]"></arv-stepper>
  `);
  page.rootInstance.stepperSteps = [{
    done: false,
    title: 'one'
  }, {
    done: false,
    title: 'two'
  }, {
    done: false,
    title: 'three'
  }];
  await page.waitForChanges();
  await page.root.next();

  expect(page.rootInstance.activeIndex).toBe(1);
  expect(page.rootInstance.stepperSteps[0].done).toBe(true);

  await page.root.back();
  expect(page.rootInstance.activeIndex).toBe(0);
  expect(page.rootInstance.stepperSteps[0].done).toBe(false);
});