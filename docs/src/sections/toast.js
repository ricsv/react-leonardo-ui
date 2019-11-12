import React, { Component } from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { Button, Toast } from '../../../src/react-leonardo-ui';

const MyToast = ({ close, ...extraProps }) => (
  <Toast {...extraProps}>
    <Toast.Text>
    Bacon ipsum dolor amet picanha pastrami boudin chicken doner.
    </Toast.Text>
    <Toast.Action onClick={close}>
      Close
    </Toast.Action>
  </Toast>
);

class ToastSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toastOpen: false,
      toast2Open: false,
    };
    this.toggleToast = this.toggleToast.bind(this);
    this.toggleToast2 = this.toggleToast2.bind(this);
  }

  toggleToast(toastOpen) {
    this.setState({ toastOpen });
    if (toastOpen) {
      setTimeout(() => {
        this.setState({ toastOpen: false });
      }, 5000);
    }
  }

  toggleToast2(toast2Open) {
    this.setState({ toast2Open });
    if (toast2Open) {
      setTimeout(() => {
        this.setState({ toast2Open: false });
      }, 5000);
    }
  }

  render() {
    return (
      <Section title="Toast">
        <p>
The toast is controlled by the
          <i>show</i>
          {' '}
property.
        </p>
        <Example
          code={
`<Toast
  show={this.state.show}
>
  <Toast.Text>
  Bacon ipsum dolor amet picanha pastrami boudin chicken doner.
  </Toast.Text>
  <Toast.Action onClick={close}>
    Close
  </Toast.Action>
</Toast>
`
          }
        >
          <div style={{ display: 'inline-block' }}>
            <Button
              variant={this.props.baseVariant}
              onClick={() => this.toggleToast(!this.state.toastOpen)}
            >
              Open toast
            </Button>
            <Button
              variant={this.props.baseVariant}
              onClick={() => this.toggleToast2(!this.state.toast2Open)}
            >
              Open second toast
            </Button>
          </div>
          <MyToast
            show={this.state.toastOpen}
            variant={this.props.baseVariant}
            close={() => this.toggleToast(false)}
          />
          <MyToast
            show={this.state.toast2Open}
            variant={this.props.baseVariant}
            close={() => this.toggleToast2(false)}
          />
        </Example>
        <Props
          props={[{
            name: 'show',
            type: 'Boolean',
            description: 'Flag used to open / close the toast.',
          }, {
            name: 'onOpen',
            type: 'Function',
            description: 'Function triggered when the toast has opened.',
          }, {
            name: 'onClose',
            type: 'Function',
            description: 'Function triggered when the toast has closed.',
          }]}
        />
      </Section>
    );
  }
}

export default ToastSection;
