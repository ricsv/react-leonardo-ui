import React from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { Input } from '../../../src/react-leonardo-ui';

const InputSection = (props) => (
  <Section title="Input">
    <Example code={'<Input value={value}/>'}>
      <Input variant={props.baseVariant} />
    </Example>
    <Props
      props={[{
        name: 'variant',
        type: 'String',
        description: 'Variant of the Input. Any of: null (default) | "inverse".',
      }, {
        name: 'size',
        type: 'String',
        description: 'Input size. Any of: null (default) | "large".',
      }]}
    />
  </Section>
);

export default InputSection;
