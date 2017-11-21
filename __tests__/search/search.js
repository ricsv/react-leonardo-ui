import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-dom';

import Search from '../../src/search';

test('Normal search renders correctly', () => {
  const tree = renderer.create(
    <Search value="Value" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Empty search renders correctly', () => {
  const tree = renderer.create(
    <Search value="" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Search without value renders correctly', () => {
  const tree = renderer.create(
    <Search />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Search with states renders correctly', () => {
  const tree = renderer.create(
    <Search value="Value" invalid disabled />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Search with modifiers renders correctly', () => {
  const tree = renderer.create(
    <Search value="Value" variant="inverse" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Search passes props correctly', () => {
  const tree = renderer.create(
    <Search value="Value" className="my-class" data-x="x" title="Title" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Search focuses the input element', () => {
  const element = document.createElement('div');

  const search = render(
    <Search value="Value" />,
    element
  );

  search.focus();
  expect(document.activeElement).toEqual(element.querySelector('.lui-search__input'));
});
