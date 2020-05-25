import { Button } from './button';
import { createSpec, getShadowEl, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(Button);

it('render the component', async () => {
  const page = await specComponent(`
    <arv-button>Button</arv-button>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('set color', async () => {
  const page = await specComponent(`
    <arv-button color="primary"></arv-button>
  `);
  expect(getShadowEl(page, 'button').classList.contains('primary')).toBeTruthy();
});

it('set size', async () => {
  const page = await specComponent(`
    <arv-button size="large"></arv-button>
  `);
  expect(getShadowEl(page, 'button').classList.contains('large')).toBeTruthy();
});

it('set variant', async () => {
  const page = await specComponent(`
  <arv-button variant="raised"></arv-button>
`);
  expect(getShadowEl(page, 'button').classList.contains('raised')).toBeTruthy();
});

it('set full', async () => {
  const page = await specComponent(`
  <arv-button full></arv-button>
`);
  expect(page.root.classList.contains('full')).toBeTruthy();
});

it('set disabled', async () => {
  const page = await specComponent(`
  <arv-button disabled></arv-button>
`);
  expect(getShadowEl(page, 'button').hasAttribute('disabled')).toBeTruthy();
});

it('set boxed', async () => {
  const page = await specComponent(`
  <arv-button boxed></arv-button>
`);
  expect(getShadowEl(page, 'button').classList.contains('boxed')).toBeTruthy();
});

it('is icon button', async () => {
  const page = await specComponent(`
    <arv-button is-icon></arv-button>
  `);
  const btn = getShadowEl(page, 'button');
  expect(btn.classList.contains('isIcon')).toBeTruthy();
});

it('render an icon', async () => {
  const page = await specComponent(`
    <arv-button icon="account_box"></arv-button>
  `);
  const icon = getShadowEl(page, 'arv-icon');
  expect(icon).toBeTruthy();
  expect(icon.getAttribute('icon')).toBe('account_box');
});

it('flex-direction layout', async () => {
  const page = await specComponent(`
    <arv-button flex-direction="row-reverse"></arv-button>
  `);
  const content: any = getShadowEl(page, '.content');
  expect(content.style.flexDirection).toBe('row-reverse');
});

it('loading', async () => {
  const page = await specComponent(`
    <arv-button
      loading
      loading-text="Saving..."
      loading-color="secondary"
      color="primary"
    >Save</arv-button>
  `);
  const progress = getShadowEl(page, 'arv-progress-circular');
  expect(clsContains(page, 'isLoading')).toBeTruthy();
  expect(progress.getAttribute('color')).toBe('secondary')
  expect(page.root.shadowRoot.textContent).toBe('Saving...');
});