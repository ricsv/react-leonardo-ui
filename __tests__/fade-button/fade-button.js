import React from 'react';
import renderer from 'react-test-renderer';

import FadeButton from '../../src/fade-button';

test('Normal fade-button renders correctly', () => {
  const tree = renderer.create(
    <FadeButton>Text</FadeButton>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('fade-button with subcomponents renders correctly', () => {
  const tree = renderer.create(
    <FadeButton>
      <FadeButton.Icon name="more" />
      <FadeButton.Text>Text</FadeButton.Text>
      <FadeButton.Caret />
    </FadeButton>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('fade-button with states renders correctly', () => {
  const tree = renderer.create(
    <FadeButton value="Value" active disabled />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('fade-button with modifiers renders correctly', () => {
  const tree = renderer.create(
    <FadeButton value="Value" variant="success" size="large" block rounded />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('fade-button passes props correctly', () => {
  const onClick = jest.fn(() => {});

  const tree = renderer.create(
    <FadeButton className="my-class" data-x="x" title="Title" onClick={onClick}>
      Text
    </FadeButton>
  ).toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  expect(onClick.mock.calls.length).toBe(1);
});
