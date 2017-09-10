import React, { Component } from 'react';
import { filterProps, luiClassName } from '../util';

const modifiers = ['variant'];

const states = ['invalid'];

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }
  focus() {
    this.element.focus();
  }
  render() {
    const {
      props
    } = this;
    const className = luiClassName('textarea', {
      props,
      states,
      modifiers
    });
    return (
      <textarea
        ref={(element) => { this.element = element; }}
        className={className}
        {...filterProps(props, modifiers, states)}
      />
    );
  }
}

export default Textarea;
