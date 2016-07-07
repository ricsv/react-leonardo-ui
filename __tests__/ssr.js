import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Button, Input } from '../dist/react-leonardo-ui';

test('SSR: Button renders correctly', () => {
  const markup = renderToStaticMarkup(
    <Button>Text</Button>
  );
  expect(markup).toEqual('<button class="lui-button">Text</button>');
});

test('SSR: Input renders correctly', () => {
  const markup = renderToStaticMarkup(
    <Input defaultValue="Value" />
  );
  expect(markup).toEqual('<input class="lui-input" value="Value"/>');
});
