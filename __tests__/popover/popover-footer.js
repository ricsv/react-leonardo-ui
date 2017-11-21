import React from 'react';
import renderer from 'react-test-renderer';

import Popover from '../../src/popover';

test('Popover footer renders correctly', () => {
  const tree = renderer.create(
    <Popover.Footer>Footer content</Popover.Footer>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Popover footer passes props correctly', () => {
  const tree = renderer.create(
    <Popover.Footer className="my-class" data-x="x" title="Footer title">
      Footer title
    </Popover.Footer>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
