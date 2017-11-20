import React, { Component } from 'react';
import { luiClassName } from '../util';

class Input extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }
  focus() {
    this.element.focus();
  }
  render() {
    const {
      className,
      variant,
      size,
      invalid,
      ...extraProps
    } = this.props;
    const finalClassName = luiClassName('input', {
      className,
      modifiers: { variant, size },
      states: { invalid },
    });
    return (
      <input
        ref={(element) => { this.element = element; }}
        className={finalClassName}
        {...extraProps}
      />
    );
  }
}

export default Input;
