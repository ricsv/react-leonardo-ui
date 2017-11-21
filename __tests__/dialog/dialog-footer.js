import React from 'react';
import renderer from 'react-test-renderer';

import Dialog from '../../src/dialog';

test('Dialog footer renders correctly', () => {
  const tree = renderer.create(
    <Dialog.Footer>Footer content</Dialog.Footer>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Dialog footer passes props correctly', () => {
  const tree = renderer.create(
    <Dialog.Footer className="my-class" data-x="x" title="Footer title">
      Footer title
    </Dialog.Footer>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
