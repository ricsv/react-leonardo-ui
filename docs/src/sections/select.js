import React from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { Select } from '../../../src/react-leonardo-ui';

const SelectSection = props => (
  <Section title="Select">
    <Example
      code={
`<Select>
  <option value="x">Option 1</option>
  <option value="y">Option 2</option>
</Select>`
      }
    >
      <Select variant={props.baseVariant}>
        <option value="x">Option 1</option>
        <option value="y">Option 2</option>
      </Select>
    </Example>
    <Props
      props={[{
        name: 'variant',
        type: 'String',
        description: 'Variant. Any of: null (default) | "inverse".'
      }]}
    />
  </Section>
);

export default SelectSection;
