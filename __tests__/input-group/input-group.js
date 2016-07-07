import React from 'react';
import renderer from 'react-test-renderer';

import InputGroup from '../../src/input-group';

test('Empty InputGroup renders correctly', () => {
  const tree = renderer.create(
    <InputGroup />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('InputGroup with items renders correctly', () => {
  const tree = renderer.create(
    <InputGroup>
      <InputGroup.Input value="Value" />
      <InputGroup.Button>Text</InputGroup.Button>
    </InputGroup>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('InputGroup passes props correctly', () => {
  const onClick = jest.fn(() => {});

  const tree = renderer.create(
    <InputGroup className="my-class" title="title" data-x="x" onClick={onClick} />
  ).toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  expect(onClick.mock.calls.length).toBe(1);
});
