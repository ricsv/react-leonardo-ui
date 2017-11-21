import React from 'react';
import renderer from 'react-test-renderer';

import Popover from '../../src/popover';

test('Popover header renders correctly', () => {
  const tree = renderer.create(
    <Popover.Header>Header content</Popover.Header>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Popover header with title renders correctly', () => {
  const tree = renderer.create(
    <Popover.Header>
      <Popover.Title>
        Header title
      </Popover.Title>
    </Popover.Header>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Popover header passes props correctly', () => {
  const tree = renderer.create(
    <Popover.Header className="my-class" data-x="x" title="Header title">
      Header title
    </Popover.Header>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
