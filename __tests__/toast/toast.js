import React, { Component } from 'react';
// import renderer from 'react-test-renderer';
import { render } from 'react-dom';

import Toast from '../../src/toast';

class TestToast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  componentDidMount() {
    document.addEventListener('close-toast', () => {
      this.setState({ show: false });
    });
  }
  render() {
    return (
      <Toast
        alignTo={this.props.parentElement}
        show={this.state.show}
        onOpen={this.props.onOpen}
        onClose={this.props.onClose}
        parentElement={this.props.parentElement}
      >
        Toast content
      </Toast>
    );
  }
}

test('Normal toast opens correctly', () => {
  const rootElement = document.createElement('div');
  const parentElement = document.createElement('div');

  return new Promise((resolve) => {
    let toastElement;

    const onOpen = () => {
      toastElement = parentElement.querySelector('.lui-toast');
      expect(toastElement.classList.contains('lui-fade')).toBe(false);
      resolve();
    };

    render(
      <TestToast onOpen={onOpen} parentElement={parentElement}>
        Toast content
      </TestToast>,
      rootElement
    );

    toastElement = parentElement.querySelector('.lui-toast');
    expect(toastElement.classList.contains('lui-fade')).toBe(true);
  });
});

test('Normal toast closes correctly', () => {
  const rootElement = document.createElement('div');
  const parentElement = document.createElement('div');

  return new Promise((resolve) => {
    const onOpen = () => {
      document.dispatchEvent(new CustomEvent('close-toast'));
    };

    const onClose = () => {
      const toastElement = parentElement.querySelector('.lui-toast');
      expect(toastElement).toBe(null);
      resolve();
    };

    render(
      <TestToast onOpen={onOpen} onClose={onClose} parentElement={parentElement}>
        Toast content
      </TestToast>,
      rootElement
    );
  });
});
