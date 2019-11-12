import React, { Component } from 'react';
// import renderer from 'react-test-renderer';
import { render } from 'react-dom';

import Tooltip from '../../src/tooltip';

class TestTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    document.addEventListener('close-tooltip', () => {
      this.setState({ show: false });
    });
  }

  render() {
    return (
      <Tooltip
        alignTo={this.props.parentElement}
        show={this.state.show}
        onOpen={this.props.onOpen}
        onClose={this.props.onClose}
        parentElement={this.props.parentElement}
      >
        Tooltip content
      </Tooltip>
    );
  }
}

test('Normal tooltip opens correctly', () => {
  const rootElement = document.createElement('div');
  const parentElement = document.createElement('div');

  return new Promise((resolve) => {
    let tooltipElement;

    const onOpen = () => {
      tooltipElement = parentElement.querySelector('.lui-tooltip');
      expect(tooltipElement.classList.contains('lui-fade')).toBe(false);
      resolve();
    };

    render(
      <TestTooltip onOpen={onOpen} parentElement={parentElement}>
        Tooltip content
      </TestTooltip>,
      rootElement
    );

    tooltipElement = parentElement.querySelector('.lui-tooltip');
    expect(tooltipElement.classList.contains('lui-fade')).toBe(true);
  });
});

test('Normal tooltip closes correctly', () => {
  const rootElement = document.createElement('div');
  const parentElement = document.createElement('div');

  return new Promise((resolve) => {
    const onOpen = () => {
      document.dispatchEvent(new CustomEvent('close-tooltip'));
    };

    const onClose = () => {
      const tooltipElement = parentElement.querySelector('.lui-tooltip');
      expect(tooltipElement).toBe(null);
      resolve();
    };

    render(
      <TestTooltip onOpen={onOpen} onClose={onClose} parentElement={parentElement}>
        Tooltip content
      </TestTooltip>,
      rootElement
    );
  });
});
