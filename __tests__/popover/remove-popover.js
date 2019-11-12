import React, { Component } from 'react';
import { render } from 'react-dom';

import Popover from '../../src/popover';

class TestPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      include: true,
    };
  }

  componentDidMount() {
    document.addEventListener('close-popover', () => {
      this.setState({ show: false });
      setTimeout(() => this.setState({ include: false }));
    });
  }

  render() {
    return this.state.include && (
      <Popover
        alignTo={this.props.parentElement}
        show={this.state.show}
        onOpen={this.props.onOpen}
        onClose={this.props.onClose}
        parentElement={this.props.parentElement}
      >
        Popover content
      </Popover>
    );
  }
}

test('no console error when closing popover is removed', () => {
  const rootElement = document.createElement('div');
  const parentElement = document.createElement('div');
  const errorSpy = jest.spyOn(window.console, 'error');
  const warnSpy = jest.spyOn(window.console, 'warn');

  return new Promise((resolve) => {
    const onOpen = () => {
      document.dispatchEvent(new CustomEvent('close-popover'));
    };

    const onClose = () => {
      expect(errorSpy).not.toHaveBeenCalled();
      expect(warnSpy).not.toHaveBeenCalled();
      resolve();
    };

    render(
      <TestPopover onOpen={onOpen} onClose={onClose} parentElement={parentElement}>
        Popover content
      </TestPopover>,
      rootElement
    );
  });
});
