import React, { Component } from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';

import { Tooltip, Button } from '../../../src/react-leonardo-ui';

class TooltipSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dock: 'top',
      show: false,
    };
    this.toggleDock = this.toggleDock.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }
  componentDidMount() {
    this.forceUpdate();
  }
  toggleDock() {
    const docks = ['left', 'top', 'right', 'bottom'];
    let { dock } = this.state;
    dock = docks[docks.indexOf(dock) + 1] || docks[0];
    this.setState({ dock });
  }
  toggleTooltip(show) {
    this.setState({ show });
  }
  render() {
    return (
      <Section title="Tooltip">
        <Example
          code={
`<Tooltip
  alignTo={this.alignToElement}
  show={this.state.show}
  dock={this.state.dock}
>
  I'm placed to the: <b>\${this.state.dock}</b>
</Tooltip>
`
          }
        >
          <div ref={(elem) => { this.alignToElem = elem; }} style={{ display: 'inline-block' }}>
            <Button
              onClick={this.toggleDock}
              onMouseOver={() => this.toggleTooltip(true)}
              onFocus={() => this.toggleTooltip(true)}
              onMouseLeave={() => this.toggleTooltip(false)}
              onBlur={() => this.toggleTooltip(false)}
              variant={this.props.baseVariant}
            >
              Hover to show tooltip
            </Button>
          </div>
          <p>
            Keep clicking to see the dock change
          </p>
          <Tooltip
            inline
            alignTo={this.alignToElem}
            show={this.state.show}
            target={this.buttonElem}
            dock={this.state.dock}
          >
            Im placed to the: <strong>{this.state.dock}</strong>
          </Tooltip>
        </Example>
        <Props
          props={[{
            name: 'show',
            type: 'Boolean',
            description: 'Flag used to open / close the popover.',
          }, {
            name: 'dock',
            type: 'String',
            description: 'Dock side. Any of: "top" | "right" | "bottom" | "left".',
          }, {
            name: 'alignTo',
            type: 'HTMLElement',
            description: 'The element to align to.',
          }, {
            name: 'inline',
            type: 'Boolean',
            description: 'Experimental. Append the tooltip inline in the DOM instead of to the body.',
          }]}
        />
      </Section>
    );
  }
}

export default TooltipSection;
