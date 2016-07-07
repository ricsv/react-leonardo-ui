import React from 'react';
import renderer from 'react-test-renderer';

import Textarea from '../../src/textarea';

test('Normal textarea renders correctly', () => {
  const tree = renderer.create(
    <Textarea value="Value" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Textarea with states renders correctly', () => {
  const tree = renderer.create(
    <Textarea value="Value" invalid disabled />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Textarea with states renders correctly', () => {
  const tree = renderer.create(
    <Textarea value="Value" active disabled />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Textarea with modifiers renders correctly', () => {
  const tree = renderer.create(
    <Textarea value="Value" variant="inverse" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Textarea passes props correctly', () => {
  const onClick = jest.fn(() => {});

  const tree = renderer.create(
    <Textarea value="Value" className="my-class" data-x="x" title="Title" onClick={onClick} />
  ).toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  expect(onClick.mock.calls.length).toBe(1);
});
