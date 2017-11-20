import React from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { Switch } from '../../../src/react-leonardo-ui';

const SwitchSection = props => (
  <Section title="Switch">
    <Example code={'<Switch value="Value" />'}>
      <Switch variant={props.baseVariant} />
    </Example>
    <Props
      props={[{
        name: 'variant',
        type: 'String',
        description: 'Variant of the Switch. Any of: null (default) | "inverse".',
      }]}
    />
  </Section>
);

export default SwitchSection;
