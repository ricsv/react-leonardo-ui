import React, { Component } from 'react';

import { filterProps, luiClassName } from '../util';

const modifiers = ['variant'];

// TODO handle outside updates of value
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.focus = this.focus.bind(this);
  }
  componentDidMount() {
    this.element.addEventListener('input', (e) => {
      this.setState({
        value: e.target.value
      });
    });
  }
  focus() {
    this.element.focus();
  }
  render() {
    const props = this.props;

    const className = luiClassName('search', {
      props,
      modifiers
    });

    const onMouseDown = (e) => {
      e.preventDefault();
      this.element.value = '';
      this.setState({
        value: ''
      });
    };

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div className={className}>
        <span className="lui-search__search-icon" />
        <input
          ref={(elem) => { this.element = elem; }}
          type="text"
          className="lui-search__input"
          {...filterProps(props, modifiers, 'type')}
        />
        {this.state.value ?
          <span className="lui-search__clear-icon" onMouseDown={onMouseDown} /> : null}
      </div>
    );
  }
}

export default Search;
