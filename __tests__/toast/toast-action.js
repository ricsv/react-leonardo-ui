import React from 'react';
import renderer from 'react-test-renderer';

import Toast from '../../src/toast';

test('Toast action renders correctly', () => {
  const tree = renderer.create(
    <Toast.Action>Action</Toast.Action>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Toast action passes props correctly', () => {
  const tree = renderer.create(
    <Toast.Action className="my-class" data-x="x" title="Action">
      Action
    </Toast.Action>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
