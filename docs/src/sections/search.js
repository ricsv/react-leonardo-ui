import React, { Component } from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { Search } from '../../../src/react-leonardo-ui';

class SearchSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onClear = this.onClear.bind(this);
  }
  onChange(e) {
    const { value } = e.target;
    this.setState({ value });
  }
  onClear() {
    this.setState({ value: '' });
  }
  render() {
    return (
      <Section title="Search">
        <Example
          code={
`
<Search
  value={this.state.value}
  onChange={e => this.setState({ value: e.target.value })}
  onClear={() => this.setState({ value: '' })}
  variant={this.props.baseVariant}
/>
`
      }
        >
          <Search
            value={this.state.value}
            onChange={this.onChange}
            onClear={this.onClear}
            variant={this.props.baseVariant}
          />
        </Example>
        <Props
          props={[{
            name: 'variant',
            type: 'String',
            description: 'Variant. Any of: null (default) | "inverse".',
          }, {
            name: 'onClear',
            type: 'Function',
            description: 'Callback that is invoked when the clear button is clicked.',
          }]}
        />
      </Section>
    );
  }
}

export default SearchSection;
