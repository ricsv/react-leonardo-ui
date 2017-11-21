import React from 'react';
import renderer from 'react-test-renderer';

import Popover from '../../src/popover';

test('Popover body renders correctly', () => {
  const tree = renderer.create(
    <Popover.Body>Body content</Popover.Body>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Popover body passes props correctly', () => {
  const tree = renderer.create(
    <Popover.Body className="my-class" data-x="x" title="Body title">
      Body title
    </Popover.Body>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
