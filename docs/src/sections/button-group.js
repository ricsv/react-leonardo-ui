import React, { Component } from 'react';

import Example from '../example';
import Section from '../section';
import { ButtonGroup } from '../../../src/react-leonardo-ui';

class ButtonGroupSection extends Component {
  constructor() {
    super();
    this.state = {
      activeButton: 0,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(activeButton) {
    this.setState({
      activeButton,
    });
  }
  render() {
    const { props } = this;

    const buttons = [{
      id: 1,
      text: 'First',
    }, {
      id: 2,
      text: 'Second',
    }, {
      id: 3,
      text: 'Third',
    }];

    const buttonItems = buttons.map(({ id, text }) => (
      <ButtonGroup.Button
        key={id}
        variant={props.baseVariant}
        active={this.state.activeButton === id}
        onClick={() => this.onClick(id)}
      >
        {text}
      </ButtonGroup.Button>
    ));

    return (
      <Section title="ButtonGroup">
        <Example
          code={
`<ButtonGroup>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button active>Second</ButtonGroup.Button>
  <ButtonGroup.Button>Third</ButtonGroup.Button>
</ButtonGroup>`
        }
        >
          <ButtonGroup>
            {buttonItems}
          </ButtonGroup>
        </Example>
      </Section>
    );
  }
}

export default ButtonGroupSection;
