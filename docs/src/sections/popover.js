import React, { Component } from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { Button, Popover } from '../../../src/react-leonardo-ui';

const MyPopover = props => (
  <Popover inline onOutside={props.close} {...props}>
    <Popover.Header>
      <Popover.Title>Header</Popover.Title>
    </Popover.Header>
    <Popover.Body>
      Bacon ipsum dolor amet picanha pastrami boudin chicken doner.
      Meatloaf meatball tongue, pastrami t-bone shoulder alcatra chicken ball
      tip brisket venison rump flank. Jowl beef ribs prosciutto bresaola,
      chuck ball tip t-bone pork chop ham leberkas short loin beef sirloin
      corned beef. Ham hock meatloaf hamburger short loin bacon short ribs
      pig corned beef cow leberkas sausage picanha bresaola biltong beef.
      Bresaola jerky strip steak filet mignon picanha swine doner salami
      biltong spare ribs landjaeger turducken rump cow. Cupim filet mignon
      prosciutto tri-tip, fatback leberkas t-bone pastrami.
    </Popover.Body>
    <Popover.Footer>
      <Button onClick={props.close}>
        Close
      </Button>
    </Popover.Footer>
  </Popover>
);

class PopoverSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false,
    };
    this.togglePopover = this.togglePopover.bind(this);
  }
  togglePopover(popoverOpen) {
    this.setState({ popoverOpen });
  }
  render() {
    return (
      <Section title="Popover">
        <p>The popover is controlled by the <i>show</i> property.</p>
        <Example
          code={
`<Popover
  alignTo={this.alignToElement}
  show={this.state.show}
  onOutside={() => this.setState({ show: false})}
>
  <Popover.Header>
    <Popover.Title>Header</Popover.Title>
  </Popover.Header>
  <Popover.Body>Body</Popover.Body>
  <Popover.Footer>
    <Button onClick={() => this.setState({ show: false})}>
      Close
    </Button>
  </Popover.Footer>
</Popover>
`
          }
        >
          <div ref={(elem) => { this.alignToElem = elem; }} style={{ display: 'inline-block' }}>
            <Button
              variant={this.props.baseVariant}
              onClick={() => this.togglePopover(!this.state.popoverOpen)}
            >
              Open popover
            </Button>
          </div>
          <MyPopover
            alignTo={this.alignToElem}
            show={this.state.popoverOpen}
            variant={this.props.baseVariant}
            close={() => this.togglePopover(false)}
          />
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
            description: 'Experimental. Append the popover inline in the DOM instead of to the body.',
          }, {
            name: 'noArrow',
            type: 'Boolean',
            description: 'Hide the popover arrow.',
          }, {
            name: 'variant',
            type: 'String',
            description: 'Variant of the Popover. Any of: null (default) | "inverse".',
          }, {
            name: 'onOutside',
            type: 'Function',
            description: 'Function triggered on clicks outside the popover element.',
          }, {
            name: 'onOpen',
            type: 'Function',
            description: 'Function triggered when the popover has opened.',
          }, {
            name: 'onClose',
            type: 'Function',
            description: 'Function triggered when the popover has closed.',
          }]}
        />
      </Section>
    );
  }
}

export default PopoverSection;
