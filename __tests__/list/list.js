import React from 'react';
import renderer from 'react-test-renderer';

import List from '../../src/list';

test('Empty list renders correctly', () => {
  const tree = renderer.create(
    <List />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('List with items renders correctly', () => {
  const tree = renderer.create(
    <List>
      <List.Header>Header</List.Header>
      <List.Item>Item 1</List.Item>
    </List>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('List with item custom content renders correctly', () => {
  const tree = renderer.create(
    <List>
      <List.Item>
        <List.Aside>Aside</List.Aside>
        <List.Text>Text</List.Text>
      </List.Item>
    </List>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('List passes props correctly', () => {
  const onClick = jest.fn(() => {});

  const tree = renderer.create(
    <List className="my-class" data-x="x">
      <List.Header>Header</List.Header>
      <List.Item data-x="x" title="Item title" onClick={onClick}>Item</List.Item>
    </List>
  ).toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[1].props.onClick();
  expect(onClick.mock.calls.length).toBe(1);
});
