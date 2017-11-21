import React, { Component } from 'react';

import Example from '../example';
import Section from '../section';
import { Tab, Tabset, Icon } from '../../../src/react-leonardo-ui';

class TabsSection extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(activeTab) {
    this.setState({
      activeTab,
    });
  }
  render() {
    const { props } = this;
    const tabs = [{
      id: 0,
      tabContent: 'Tab 1',
      content: <div>Content 1</div>,
    }, {
      id: 1,
      tabContent: 'Tab 2',
      content: <div>Content 2</div>,
    }, {
      id: 2,
      tabContent: [
        <Tab.Text key="text">Blah 3</Tab.Text>,
        <Tab.Aside key="aside">
          <Icon name="close" size="small" />
        </Tab.Aside>,
      ],
      content: <div>Content 1</div>,
    }];

    const tabItems = tabs.map(({ id, tabContent }) => (
      <Tab
        key={id}
        onClick={() => this.onClick(id)}
        variant={props.baseVariant}
        active={this.state.activeTab === id}
      >
        {tabContent}
      </Tab>
    ));

    return (
      <Section title="Tabs">
        <Example code={'<Tabs>Tabs</Tabs>'}>
          <Tabset>
            {tabItems}
          </Tabset>
          <div>
            {tabs[this.state.activeTab].content}
          </div>
        </Example>
      </Section>
    );
  }
}

export default TabsSection;
