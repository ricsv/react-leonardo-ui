import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../../src/button';

test('Normal button renders correctly', () => {
  const tree = renderer.create(
    <Button>Text</Button>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button with subcomponents renders correctly', () => {
  const tree = renderer.create(
    <Button>
      <Button.Icon name="more" />
      <Button.Text>Text</Button.Text>
      <Button.Caret />
    </Button>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button with states renders correctly', () => {
  const tree = renderer.create(
    <Button value="Value" active disabled />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button with modifiers renders correctly', () => {
  const tree = renderer.create(
    <Button value="Value" variant="success" size="large" block rounded />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button passes props correctly', () => {
  const onClick = jest.fn(() => {});

  const tree = renderer.create(
    <Button className="my-class" data-x="x" title="Title" onClick={onClick}>
      Text
    </Button>
  ).toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  expect(onClick.mock.calls.length).toBe(1);
});
