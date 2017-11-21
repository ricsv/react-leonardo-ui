import React from 'react';
import renderer from 'react-test-renderer';

import Dialog from '../../src/dialog';

test('Dialog header renders correctly', () => {
  const tree = renderer.create(
    <Dialog.Header>Header content</Dialog.Header>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Dialog header with title renders correctly', () => {
  const tree = renderer.create(
    <Dialog.Header>
      <Dialog.Title>
        Header title
      </Dialog.Title>
    </Dialog.Header>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Dialog header passes props correctly', () => {
  const tree = renderer.create(
    <Dialog.Header className="my-class" data-x="x" title="Header title">
      Header title
    </Dialog.Header>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
