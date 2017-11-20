import React from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { RadioButton } from '../../../src/react-leonardo-ui';

const RadioButtonSection = props => (
  <Section title="RadioButton">
    <Example className="radiobutton-example">
      <RadioButton name="radio" variant={props.baseVariant}>Radio 1</RadioButton>
      <RadioButton name="radio" variant={props.baseVariant}>Radio 2</RadioButton>
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

export default RadioButtonSection;
