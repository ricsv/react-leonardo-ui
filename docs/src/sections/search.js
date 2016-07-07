import React from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { Search } from '../../../src/react-leonardo-ui';

const SearchSection = props => (
  <Section title="Search">
    <Example code={'<Search/>'}>
      <Search variant={props.baseVariant} />
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

export default SearchSection;
