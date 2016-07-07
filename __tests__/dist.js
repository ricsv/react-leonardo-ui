import React from 'react';
import renderer from 'react-test-renderer';

import { Button, Input } from '../dist/react-leonardo-ui';

test('Button from dist file renders correctly', () => {
  const tree = renderer.create(
    <Button>Text</Button>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Input from dist file renders correctly', () => {
  const tree = renderer.create(
    <Input value="Value" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
