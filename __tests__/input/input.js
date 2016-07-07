import React from 'react';
import renderer from 'react-test-renderer';

import Input from '../../src/input';

test('Normal input renders correctly', () => {
  const tree = renderer.create(
    <Input value="Value" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Input with states renders correctly', () => {
  const tree = renderer.create(
    <Input value="Value" invalid disabled />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Input with modifiers renders correctly', () => {
  const tree = renderer.create(
    <Input value="Value" variant="inverse" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Input passes props correctly', () => {
  const onClick = jest.fn(() => {});

  const tree = renderer.create(
    <Input value="Value" className="my-class" data-x="x" title="Title" onClick={onClick} />
  ).toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  expect(onClick.mock.calls.length).toBe(1);
});
