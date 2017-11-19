import React, { Component } from 'react';

import Section from '../section';

class InstallationSection extends Component {
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
      <Section title="Installation">
        <div ref={(el) => { this.elem = el; }}>
          <p><b>NPM</b></p>
          <div className="example-code hljs">
            <pre><code className="bash">
  npm install --save react-leonardo-ui
  </code></pre>
          </div>
        </div>
      </Section>
    );
  }
}

export default InstallationSection;
