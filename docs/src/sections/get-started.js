import React, { Component } from 'react';

import Section from '../section';

class GetStartedSection extends Component {
  componentDidMount() {
    if (this.elem && window.hljs) {
      const codeElems = Array.prototype.slice.call(this.elem.querySelectorAll('.hljs'));
      codeElems.forEach((codeElem) => {
        hljs.highlightBlock(codeElem); // eslint-disable-line no-undef
      });
    }
  }
  render() {
    return (
      <Section title="Get started">
        <div ref={(el) => { this.elem = el; }}>
          <p><b>ES2015</b></p>
          <div className="example-code hljs">
            <pre>
              <code className="javascript">
                {'import { Button } from \'react-leonardo-ui\';'}
              </code>
            </pre>
          </div>

          <p><b>CommonJS</b></p>
          <div className="example-code hljs">
            <pre>
              <code className="javascript">
                {'const Button = require(\'react-leonardo-ui\').Button;'}
              </code>
            </pre>
          </div>

          <h3>Props passing</h3>
          <p>
            Properties that are not recognized by a component are passed to the root element (of
            most components). This removes extra abstractions and helps keeping components
            small and manageable.
          </p>
          <div className="example-code hljs">
            <pre>
              <code className="jsx">
                {
`<Button active title="My title" onClick={clickHandler}>
  My button
</Button>`
                }
              </code>
            </pre>
          </div>
          <p>
            In the example above, the Button component will handle the active attribute and
            pass title and onClick to its button element.
          </p>
        </div>
      </Section>
    );
  }
}

export default GetStartedSection;

