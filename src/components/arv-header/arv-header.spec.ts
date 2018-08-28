import { TestWindow } from '@stencil/core/testing';
import { Header } from './arv-header';

describe('arv-flex', () => {
  it('should build', () => {
    expect(new Header()).toBeTruthy();
  });

  describe('rendering', () => {

    let element: HTMLHeaderElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Header],
        html: '<arv-header></arv-header>'
      });
    });

    it('should work without parameters', async () => {
      await testWindow.flush();
      expect(element).toBeTruthy();
    });

    it('should work with color', async () => {
      element.color = 'secondary';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-header static secondary');
    });

    it('should work with position', async () => {
      element.position = 'relative';
      await testWindow.flush();
      expect(element.lastElementChild.classList.value).toEqual('arv-header primary relative');
    });

    it('should work with slot', async () => {
      const p = testWindow.document.createElement('p');
      p.textContent = 'foo';
      element.appendChild(p);
      await testWindow.flush();
      expect(element.textContent).toEqual('foo');
    });
  });
});
