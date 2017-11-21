import React from 'react';
import renderer from 'react-test-renderer';

import Toast from '../../src/toast';

test('Toast text renders correctly', () => {
  const tree = renderer.create(
    <Toast.Text>Text</Toast.Text>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Toast text passes props correctly', () => {
  const tree = renderer.create(
    <Toast.Text className="my-class" data-x="x" title="Text">
      Text
    </Toast.Text>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
