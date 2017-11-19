import React from 'react';

import Example from '../example';
import Section from '../section';
import { List, Icon } from '../../../src/react-leonardo-ui';

const ListSection = props => (
  <Section title="List">
    <Example
      code={
`<List>
  <List.Header>Header</List.Header>
  <List.Item>
    <List.Text>Item 1</List.Text>
  </List.Item>
  <List.Item>
    <List.Text>Item 2</List.Text>
    <List.Aside><Icon name="info" /></List.Aside>
  </List.Item>
  <List.Item>
    <List.Aside><Icon name="info" /></List.Aside>
    <List.Text>Item 3</List.Text>
  </List.Item>
</List>`
      }
    >
      <List variant={props.baseVariant}>
        <List.Header>Header</List.Header>
        <List.Item>
          <List.Text>Item 1</List.Text>
        </List.Item>
        <List.Item>
          <List.Text>Item 2</List.Text>
          <List.Aside><Icon name="info" /></List.Aside>
        </List.Item>
        <List.Item>
          <List.Aside><Icon name="info" /></List.Aside>
          <List.Text>Item 3</List.Text>
        </List.Item>
      </List>
    </Example>
  </Section>
);

export default ListSection;
