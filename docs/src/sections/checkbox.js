import React from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { Checkbox } from '../../../src/react-leonardo-ui';

const CheckboxSection = props => (
  <Section title="Checkbox">
    <Example code={'<Checkbox>Label</Checkbox>'}>
      <Checkbox variant={props.baseVariant}>
        Label
      </Checkbox>
    </Example>
    <Props
      props={[{
        name: 'variant',
        type: 'String',
        description: 'Variant of the Checkbox. Any of: null (default) | "inverse".'
      }]}
    />
  </Section>
);

export default CheckboxSection;
