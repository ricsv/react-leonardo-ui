import React, { Component } from 'react';
import { luiClassName } from '../util';

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
      className,
      children,
      variant,
      invalid,
      ...extraProps
    } = this.props;

    const finalClassName = luiClassName('textarea', {
      className,
      modifiers: { variant },
      states: { invalid },
    });

    return (
      <textarea
        ref={(element) => { this.element = element; }}
        className={finalClassName}
        {...extraProps}
      />
    );
  }
}

export default Textarea;
