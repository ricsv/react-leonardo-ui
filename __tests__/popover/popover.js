import React, { Component } from 'react';
// import renderer from 'react-test-renderer';
import { render } from 'react-dom';

import Popover from '../../src/popover';

class TestPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  componentDidMount() {
    document.addEventListener('close-popover', () => {
      this.setState({ show: false });
    });
  }
  render() {
    return (
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

test('Normal popover opens correctly', () => {
  const rootElement = document.createElement('div');
  const parentElement = document.createElement('div');

  return new Promise((resolve) => {
    let popoverElement;

    const onOpen = () => {
      popoverElement = parentElement.querySelector('.lui-popover');
      expect(popoverElement.classList.contains('lui-fade')).toBe(false);
      resolve();
    };

    render(
      <TestPopover onOpen={onOpen} parentElement={parentElement}>
        Popover content
      </TestPopover>,
      rootElement
    );

    popoverElement = parentElement.querySelector('.lui-popover');
    expect(popoverElement.classList.contains('lui-fade')).toBe(true);
  });
});

test('Normal popover closes correctly', () => {
  const rootElement = document.createElement('div');
  const parentElement = document.createElement('div');

  return new Promise((resolve) => {
    const onOpen = () => {
      document.dispatchEvent(new CustomEvent('close-popover'));
    };

    const onClose = () => {
      const popoverElement = parentElement.querySelector('.lui-popover');
      expect(popoverElement).toBe(null);
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
