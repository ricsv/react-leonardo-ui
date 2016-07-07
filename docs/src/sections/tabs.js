import React, { Component } from 'react';

import Example from '../example';
import Section from '../section';
import { Tab, Tabset, Icon } from '../../../src/react-leonardo-ui';

class TabsSection extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(activeTab) {
    this.setState({
      activeTab
    });
  }
  render() {
    const props = this.props;
    const tabs = [{
      tabContent: 'Tab 1',
      content: <div>Content 1</div>
    }, {
      tabContent: 'Tab 2',
      content: <div>Content 2</div>
    }, {
      tabContent: [
        <Tab.Text key="text">Blah 3</Tab.Text>,
        <Tab.Aside key="aside">
          <Icon name="close" size="small" />
        </Tab.Aside>
      ],
      content: <div>Content 1</div>
    }];

    const tabItems = tabs.map((tab, idx) => (
      <Tab
        key={idx}
        onClick={() => this.onClick(idx)}
        variant={props.baseVariant}
        active={this.state.activeTab === idx}
      >
        {tab.tabContent}
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
