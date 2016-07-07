import React from 'react';
import renderer from 'react-test-renderer';

import Icon from '../../src/icon';

test('Normal icon renders correctly', () => {
  const tree = renderer.create(
    <Icon name="close" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Small icon renders correctly', () => {
  const tree = renderer.create(
    <Icon name="close" size="small" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Large icon renders correctly', () => {
  const tree = renderer.create(
    <Icon name="close" size="large" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Missing icon renders correctly', () => {
  const tree = renderer.create(
    <Icon />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
