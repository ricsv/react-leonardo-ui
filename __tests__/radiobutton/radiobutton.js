import React from 'react';
import renderer from 'react-test-renderer';

import Radiobutton from '../../src/radio-button';

test('Normal radiobutton renders correctly', () => {
  const tree = renderer.create(
    <Radiobutton checked />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Radiobutton with states renders correctly', () => {
  const tree = renderer.create(
    <Radiobutton checked active disabled />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Radiobutton with modifiers renders correctly', () => {
  const tree = renderer.create(
    <Radiobutton checked variant="inverse" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Radiobutton passes props correctly', () => {
  const onChange = jest.fn(() => {});

  const tree = renderer.create(
    <Radiobutton checked className="my-class" data-x="x" title="Title" onChange={onChange} />
  ).toJSON();

  const input = tree.children[0];
  input.props.onChange();
  expect(onChange.mock.calls.length).toBe(1);
});
