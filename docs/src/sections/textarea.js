import React from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { Textarea } from '../../../src/react-leonardo-ui';

const TextareaSection = props => (
  <Section title="Textarea">
    <Example code={'<Textarea/>'}>
      <Textarea variant={props.baseVariant} />
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

export default TextareaSection;
