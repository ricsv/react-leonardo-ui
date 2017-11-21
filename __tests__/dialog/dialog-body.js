import React from 'react';
import renderer from 'react-test-renderer';

import Dialog from '../../src/dialog';

test('Dialog body renders correctly', () => {
  const tree = renderer.create(
    <Dialog.Body>Body content</Dialog.Body>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Dialog body passes props correctly', () => {
  const tree = renderer.create(
    <Dialog.Body className="my-class" data-x="x" title="Body title">
      Body title
    </Dialog.Body>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
