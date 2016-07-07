import React from 'react';
import renderer from 'react-test-renderer';

import Checkbox from '../../src/checkbox';

test('Normal checkbox renders correctly', () => {
  const tree = renderer.create(
    <Checkbox checked />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Checkbox with states renders correctly', () => {
  const tree = renderer.create(
    <Checkbox checked active disabled />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Checkbox with modifiers renders correctly', () => {
  const tree = renderer.create(
    <Checkbox checked variant="inverse" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Checkbox passes props correctly', () => {
  const onChange = jest.fn(() => {});

  const tree = renderer.create(
    <Checkbox checked className="my-class" data-x="x" title="Title" onChange={onChange} />
  ).toJSON();
  expect(tree).toMatchSnapshot();

  const input = tree.children[0];
  input.props.onChange();
  expect(onChange.mock.calls.length).toBe(1);
});
