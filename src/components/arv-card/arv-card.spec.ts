import { TestWindow } from '@stencil/core/testing';
import { Card } from './arv-card';

describe('arv-flex', () => {
  it('should build', () => {
    expect(new Card()).toBeTruthy();
  });

  describe('rendering', () => {

    let element: HTMLCardElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Card],
        html: '<arv-card></arv-card>'
      });
    });
  });
});
