import React from 'react';
import renderer from 'react-test-renderer';

import Select from '../../src/select';

test('Normal select renders correctly', () => {
  const tree = renderer.create(
    <Select value="Value" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Select with states renders correctly', () => {
  const tree = renderer.create(
    <Select value="Value" invalid disabled />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Select with modifiers renders correctly', () => {
  const tree = renderer.create(
    <Select value="Value" variant="inverse" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Select passes props correctly', () => {
  const onChange = jest.fn(() => {});

  const tree = renderer.create(
    <Select className="my-class" data-x="x" title="Title" onChange={onChange} />
  ).toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onChange();
  expect(onChange.mock.calls.length).toBe(1);
});
