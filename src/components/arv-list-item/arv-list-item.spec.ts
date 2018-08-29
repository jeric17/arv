import { TestWindow } from '@stencil/core/testing';
import { ListItem } from './arv-list-item';

describe('arv-flex', () => {
  it('should build', () => {
    expect(new ListItem()).toBeTruthy();
  });

  describe('rendering', () => {

    let element: HTMLListItemElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ListItem],
        html: '<arv-list-item></arv-list-item>'
      });
    });
  });
});
