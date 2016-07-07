import React from 'react';
import renderer from 'react-test-renderer';

import Tab from '../../src/tab';
import Tabset from '../../src/tabset';

test('Empty tabset renders correctly', () => {
  const tree = renderer.create(
    <Tabset />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Empty tab renders correctly', () => {
  const tree = renderer.create(
    <Tab />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Tabset with simple items renders correctly', () => {
  const tree = renderer.create(
    <Tabset>
      <Tab>Item 1</Tab>
      <Tab>Item 2</Tab>
    </Tabset>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Tabset with complex items renders correctly', () => {
  const tree = renderer.create(
    <Tabset>
      <Tab>
        <Tab.Aside>Aside 1</Tab.Aside>
        <Tab.Text>Text 1</Tab.Text>
      </Tab>
      <Tab>
        <Tab.Text>Text 2</Tab.Text>
        <Tab.Aside>Aside 2</Tab.Aside>
      </Tab>
    </Tabset>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Tabset with modifiers renders correctly', () => {
  const tree = renderer.create(
    <Tabset fill variant="inverse" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Tab with states renders correctly', () => {
  const tree = renderer.create(
    <Tab active disabled />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Tab with modifiers renders correctly', () => {
  const tree = renderer.create(
    <Tab variant="inverse" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Tabset passes props correctly', () => {
  const onClick = jest.fn(() => {});

  const tree = renderer.create(
    <Tabset className="my-class" data-x="x">
      <Tab data-x="x" title="Item title" onClick={onClick}>Item 1</Tab>
    </Tabset>
  ).toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[0].props.onClick();
  expect(onClick.mock.calls.length).toBe(1);
});
