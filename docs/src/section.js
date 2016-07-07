import React from 'react';

const Section = props => (
  <section>
    <h2 id={props.title}>
      <a href={`#${props.title}`}>{props.title}</a>
    </h2>
    {props.children}
  </section>
  );

export default Section;
