import { TestWindow } from '@stencil/core/testing';
import { Button } from './arv-button';

describe('arv-flex', () => {
  it('should build', () => {
    expect(new Button()).toBeTruthy();
  });

  describe('rendering', () => {

    let element: HTMLButtonElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Button],
        html: '<arv-button></arv-button>'
      });
    });

    it('should work without parameters', async () => {
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-button default medium flat');
    });

    it('should work with color', async () => {
      element.color = 'primary';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-button medium flat primary');
    });

    it('should work with disabled', async () => {
      element.disabled = true;
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-button default medium flat disabled');
    });

    it('should work with full', async () => {
      element.full = true;
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-button default medium flat full');
    });

    it('should work with icon', async () => {
      element.icon = 'standard';
      await testWindow.flush();
      const icon = element.querySelector('arv-icon');
      expect(icon).toBeTruthy();
    });

    it('should work with size', async () => {
      element.size = 'small';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-button default flat small');
    });

    it('should work with variant', async () => {
      element.variant = 'raised';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-button default medium raised');
    });

  });
});
