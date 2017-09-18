import React, { Component } from 'react';

import { filterProps, luiClassName } from '../util';

const modifiers = ['variant'];

// TODO handle outside updates of value
class Search extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
  }
  onClearClick(e) {
    e.preventDefault();
    if (typeof this.props.onClear === 'function') {
      this.props.onClear();
    }
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

    return (
      <div className={className}>
        <span className="lui-icon  lui-icon--search  lui-search__search-icon" />
        <input
          ref={(elem) => { this.element = elem; }}
          type="text"
          className="lui-search__input"
          {...filterProps(props, modifiers, 'type', 'onClear')}
        />
        {this.props.value ?
          <button
            className="lui-search__clear-button"
            onClick={this.onClearClick}
          >
            <span
              className="lui-icon  lui-icon--small  lui-icon--close"
            />
          </button> : null}
      </div>
    );
  }
}

export default Search;
