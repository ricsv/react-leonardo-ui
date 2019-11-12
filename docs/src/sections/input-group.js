import React from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { InputGroup, Button } from '../../../src/react-leonardo-ui';

const InputGroupSection = (props) => (
  <Section title="InputGroup">
    <Example
      code={
`<InputGroup>
  <InputGroup.Input />
  <InputGroup.Button><Icon name="more" /></InputGroup.Button>
</InputGroup>`
      }
    >
      <InputGroup variant={props.baseVariant}>
        <InputGroup.Input variant={props.baseVariant} />
        <InputGroup.Button variant={props.baseVariant}>
          <Button.Icon name="more" />
        </InputGroup.Button>
      </InputGroup>
    </Example>
    <Props
      props={[{
        name: 'variant',
        type: 'String',
        description: 'Variant. Any of: null (default) | "inverse".',
      }]}
    />
  </Section>
);

export default InputGroupSection;
