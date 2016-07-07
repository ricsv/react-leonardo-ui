import React from 'react';
import renderer from 'react-test-renderer';

import Switch from '../../src/switch';

test('Normal switch renders correctly', () => {
  const tree = renderer.create(
    <Switch checked />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Switch with states renders correctly', () => {
  const tree = renderer.create(
    <Switch checked active disabled />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Switch with modifiers renders correctly', () => {
  const tree = renderer.create(
    <Switch checked variant="inverse" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Switch passes props correctly', () => {
  const onChange = jest.fn(() => {});

  const tree = renderer.create(
    <Switch checked className="my-class" data-x="x" title="Title" onChange={onChange} />
  ).toJSON();

  const input = tree.children[0].children[0];
  input.props.onChange();
  expect(onChange.mock.calls.length).toBe(1);
});
