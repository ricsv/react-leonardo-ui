import React, { Component } from 'react';

import { luiClassName } from '../util';

class Button extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }
  focus() {
    this.element.focus();
  }
  render() {
    const {
      children,
      className,
      variant,
      size,
      block,
      rounded,
      active,
      disabled,
      ...extraProps
    } = this.props;

    const finalClassName = luiClassName('button', {
      className,
      modifiers: {
        variant,
        size,
        block,
        rounded
      },
      states: { active, disabled }
    });

    return (
      <button
        ref={(element) => { this.element = element; }}
        className={finalClassName}
        {...extraProps}
      >
        {children}
      </button>
    );
  }
}

export default Button;
