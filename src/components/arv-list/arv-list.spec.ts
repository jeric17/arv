import { TestWindow } from '@stencil/core/testing';
import { List } from './arv-list';

describe('arv-flex', () => {
  it('should build', () => {
    expect(new List()).toBeTruthy();
  });
});
