import React from 'react';
import renderer from 'react-test-renderer';

import ButtonGroup from '../../src/button-group';

test('Empty ButtonGroup renders correctly', () => {
  const tree = renderer.create(
    <ButtonGroup />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ButtonGroup with buttons renders correctly', () => {
  const tree = renderer.create(
    <ButtonGroup>
      <ButtonGroup.Button>Button 1</ButtonGroup.Button>
      <ButtonGroup.Button>Button 2</ButtonGroup.Button>
      <ButtonGroup.Button variant="info">Button 3</ButtonGroup.Button>
    </ButtonGroup>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Inverse ButtonGroup with buttons renders correctly', () => {
  const tree = renderer.create(
    <ButtonGroup variant="inverse">
      <ButtonGroup.Button variant="inverse">Button 1</ButtonGroup.Button>
      <ButtonGroup.Button variant="inverse">Button 2</ButtonGroup.Button>
      <ButtonGroup.Button variant="info">Button 3</ButtonGroup.Button>
    </ButtonGroup>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ButtonGroup passes props correctly', () => {
  const onClick = jest.fn(() => {});

  const tree = renderer.create(
    <ButtonGroup className="my-class" data-x="x" title="Title" onClick={onClick} />
  ).toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  expect(onClick.mock.calls.length).toBe(1);
});
