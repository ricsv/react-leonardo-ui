import React, { Component } from 'react';
// import renderer from 'react-test-renderer';
import { render } from 'react-dom';

import Dialog from '../../src/dialog';

class TestDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    document.addEventListener('close-dialog', () => {
      this.setState({ show: false });
    });
  }

  render() {
    return (
      <Dialog
        show={this.state.show}
        onOpen={this.props.onOpen}
        onClose={this.props.onClose}
        parentElement={this.props.parentElement}
      >
        Dialog content
      </Dialog>
    );
  }
}

test('Normal dialog opens correctly', () => {
  const rootElement = document.createElement('div');
  const parentElement = document.createElement('div');

  return new Promise((resolve) => {
    let dialogElement;

    const onOpen = () => {
      dialogElement = parentElement.querySelector('.lui-dialog');
      expect(dialogElement.classList.contains('lui-fade')).toBe(false);
      resolve();
    };

    render(
      <TestDialog onOpen={onOpen} parentElement={parentElement}>
        Dialog content
      </TestDialog>,
      rootElement
    );

    dialogElement = parentElement.querySelector('.lui-dialog');
    expect(dialogElement.classList.contains('lui-fade')).toBe(true);
  });
});

test('Normal dialog closes correctly', () => {
  const rootElement = document.createElement('div');
  const parentElement = document.createElement('div');

  return new Promise((resolve) => {
    const onOpen = () => {
      document.dispatchEvent(new CustomEvent('close-dialog'));
    };

    const onClose = () => {
      const dialogElement = parentElement.querySelector('.lui-dialog');
      expect(dialogElement).toBe(null);
      resolve();
    };

    render(
      <TestDialog onOpen={onOpen} onClose={onClose} parentElement={parentElement}>
        Dialog content
      </TestDialog>,
      rootElement
    );
  });
});
