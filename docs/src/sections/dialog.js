import React, { Component } from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { Button, Dialog } from '../../../src/react-leonardo-ui';

const TestDialog = (props) => (
  <Dialog show={props.show} onEscape={props.onEscape} variant={props.variant}>
    <Dialog.Header>
      <Dialog.Title>Test</Dialog.Title>
    </Dialog.Header>
    <Dialog.Body>
      Bacon ipsum dolor amet picanha pastrami boudin chicken doner.
      Meatloaf meatball tongue, pastrami t-bone shoulder alcatra chicken ball
      tip brisket venison rump flank. Jowl beef ribs prosciutto bresaola,
      chuck ball tip t-bone pork chop ham leberkas short loin beef sirloin
      corned beef. Ham hock meatloaf hamburger short loin bacon short ribs
      pig corned beef cow leberkas sausage picanha bresaola biltong beef.
      Bresaola jerky strip steak filet mignon picanha swine doner salami
      biltong spare ribs landjaeger turducken rump cow. Cupim filet mignon
      prosciutto tri-tip, fatback leberkas t-bone pastrami.
    </Dialog.Body>
    <Dialog.Footer>
      <Button variant="info" onClick={props.close} autoFocus>OK</Button>
    </Dialog.Footer>
  </Dialog>
);

class DialogSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
    };
    this.toggleDialog = this.toggleDialog.bind(this);
  }

  toggleDialog(dialogOpen) {
    this.setState({ dialogOpen });
  }

  render() {
    return (
      <Section title="Dialog">
        <Example
          code={
`<Dialog show={this.state.show} onEscape={() => this.setState({ show: false})}>
  <Dialog.Header>
    <Dialog.Title>Header</Dialog.Title>
  </Dialog.Header>
  <Dialog.Body>Body</Dialog.Body>
  <Dialog.Footer>
    <Button autoFocus onClick={() => this.setState({ show: false})}>
      OK
    </Button>
  </Dialog.Footer>
</Dialog>`
          }
        >
          <Button
            variant={this.props.baseVariant}
            onClick={() => this.toggleDialog(true)}
          >
            Open dialog
          </Button>
          <TestDialog
            show={this.state.dialogOpen}
            onEscape={() => this.toggleDialog(false)}
            variant={this.props.baseVariant}
            close={() => this.toggleDialog(false)}
          />
        </Example>
        <Props
          props={[{
            name: 'show',
            type: 'Boolean',
            description: 'Flag used to open / close the dialog.',
          }, {
            name: 'variant',
            type: 'String',
            description: 'Variant. Any of: null (default) | "inverse".',
          }, {
            name: 'onEscape',
            type: 'Function',
            description: 'Function triggered when the escape key is pressed.',
          }, {
            name: 'onOpen',
            type: 'Function',
            description: 'Function triggered when the dialog has opened.',
          }, {
            name: 'onClose',
            type: 'Function',
            description: 'Function triggered when the dialog has closed.',
          }]}
        />
      </Section>
    );
  }
}

export default DialogSection;
