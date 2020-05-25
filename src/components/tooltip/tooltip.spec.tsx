import { Tooltip } from './tooltip';
import { createSpec, getShadowEl, clsContains } from '../../utils/testing/utils';

const specComponent = createSpec(Tooltip);

it('render the component', async () => {
  const page = await specComponent(`
    <arv-tooltip message="Save">
      <arv-button>Register</arv-button>
    </arv-tooltip>
  `);

  expect(page.root.shadowRoot).toBeTruthy();
});

it('message', async () => {
  const page = await specComponent(`
    <arv-tooltip message="Save">
      <arv-button>Register</arv-button>
    </arv-tooltip>
  `);
  const messageEl = getShadowEl(page, '.tooltip-message');
  expect(messageEl.textContent).toBe('Save');
});

it('position', async () => {
  const page = await specComponent(`
    <arv-tooltip message="Save" position="bottom">
      <arv-button>Register</arv-button>
    </arv-tooltip>
  `);
  expect(clsContains(page, 'bottom')).toBeTruthy();
});

it('color', async () => {
  const page = await specComponent(`
    <arv-tooltip color="primary" message="Save" position="bottom">
      <arv-button>Register</arv-button>
    </arv-tooltip>
  `);
  expect(clsContains(page, 'primary')).toBeTruthy();
});