import { TestWindow } from '@stencil/core/testing';
import { Input } from './arv-input';

describe('arv-flex', () => {
  it('should build', () => {
    expect(new Input()).toBeTruthy();
  });

  describe('rendering', () => {

    let element: any;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Input],
        html: '<arv-input></arv-input>'
      });
    });

    it('should work without parameters', async () => {
      await testWindow.flush();
      expect(element).toBeTruthy();
    });

    it('should work with label', async () => {
      element.label = 'myinput';
      await testWindow.flush();
      const target = element.querySelector('label');
      expect(target.textContent).toEqual('myinput');
    });

  });
});
