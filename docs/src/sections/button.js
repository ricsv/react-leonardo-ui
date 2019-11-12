import React from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { Button } from '../../../src/react-leonardo-ui';

const ButtonSection = (props) => (
  <Section title="Button">
    <Example
      className="button-example"
      code={
`<Button${props.baseVariant === 'inverse' ? ' variant="inverse"' : ''}>Default</Button>
<Button variant="${props.baseVariant === 'inverse' ? 'gradient-inverse' : 'gradient'}">Gradient</Button>
<Button variant="info">Info</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>`
      }
    >
      <Button variant={props.baseVariant}>
        Default
      </Button>
      <Button
        variant={props.baseVariant === 'inverse' ? 'toolbar-inverse' : 'toolbar'}
      >
        Gradient
      </Button>
      <Button variant="info">
        Info
      </Button>
      <Button variant="warning">
        Warning
      </Button>
      <Button variant="danger">
        Danger
      </Button>
      <Button variant="success">
        Success
      </Button>
      <Button variant={props.baseVariant}>
        <Button.Icon name="download" />
        <Button.Text>
          Download 23
        </Button.Text>
      </Button>
    </Example>
    <Props
      props={[{
        name: 'rounded',
        type: 'Boolean',
        description: 'Extra rounded corners.',
      }, {
        name: 'block',
        type: 'Boolean',
        description: 'Display as a block element.',
      }, {
        name: 'size',
        type: 'String',
        description: 'Button size. Any of: null (default) | "large" | "x-large"',
      }, {
        name: 'variant',
        type: 'String',
        description: 'Variant to use. Any of: null (default) | "inverse" | "success" | "info" | "warning" | "danger"',
      }, {
        name: 'active',
        type: 'Boolean',
        description: 'Show the button in active state. Suitable for toggle buttons',
      }, {
        name: 'disabled',
        type: 'Boolean',
        description: 'Show the button in disabled state.',
      }]}
    />
  </Section>
);

export default ButtonSection;
