import React, { Component } from 'react';

import { Button, ButtonGroup } from '../../src/react-leonardo-ui';

import InstallationSection from './sections/installation';
import GetStartedSection from './sections/get-started';
import ButtonSection from './sections/button';
import ButtonGroupSection from './sections/button-group';
import CheckboxSection from './sections/checkbox';
import DialogSection from './sections/dialog';
import IconSection from './sections/icon';
import InputSection from './sections/input';
import InputGroupSection from './sections/input-group';
import ListSection from './sections/list';
import PopoverSection from './sections/popover';
import RadioButtonSection from './sections/radiobuttons';
import SelectSection from './sections/select';
import SearchSection from './sections/search';
import SwitchSection from './sections/switch';
import TabsSection from './sections/tabs';
import TextareaSection from './sections/textarea';
import TooltipSection from './sections/tooltip';

const sections = [{
  name: 'Installation',
  component: InstallationSection
}, {
  name: 'Get started',
  component: GetStartedSection
}, {
  name: 'Button',
  component: ButtonSection
}, {
  name: 'Button group',
  href: 'ButtonGroup',
  component: ButtonGroupSection
}, {
  name: 'Input',
  component: InputSection
}, {
  name: 'Input group',
  href: 'InputGroup',
  component: InputGroupSection
}, {
  name: 'List',
  component: ListSection
}, {
  name: 'Textarea',
  component: TextareaSection
}, {
  name: 'Select',
  component: SelectSection
}, {
  name: 'Checkbox',
  component: CheckboxSection
}, {
  name: 'Radiobuttons',
  href: 'RadioButton',
  component: RadioButtonSection
}, {
  name: 'Switch',
  component: SwitchSection
}, {
  name: 'Search',
  component: SearchSection
}, {
  name: 'Tabs',
  component: TabsSection
}, {
  name: 'Icons',
  component: IconSection
}, {
  name: 'Dialog',
  component: DialogSection
}, {
  name: 'Popover',
  component: PopoverSection
}, {
  name: 'Tooltip',
  component: TooltipSection
}];

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variant: null
    };
    this.setVariant = this.setVariant.bind(this);
  }
  setVariant(variant) {
    const currentVariant = this.state.variant;
    const headerWrapperElem = document.body.querySelector('.header-wrapper');
    document.body.classList.remove(`lui-bg-${currentVariant}`);
    headerWrapperElem.classList.remove(`lui-bg-${currentVariant}`);

    this.setState({
      variant
    });
    document.body.classList.add(`lui-bg-${variant}`);
    headerWrapperElem.classList.add(`lui-bg-${variant}`);
  }
  render() {
    return (
      <div>
        <div className="sidebar">
          <ul>
            {sections.map(section => (
              <li key={section.name}>
                <a href={`#${section.href || section.name}`}>
                  {section.name}
                </a>
              </li>
            ))}
          </ul>

          <div>
            <ButtonGroup className="sidebar-variant-bg">
              <Button
                onClick={() => this.setVariant(null)}
                active={this.state.variant === null}
                variant={this.state.variant}
              >
                Default
              </Button>
              <Button
                onClick={() => this.setVariant('inverse')}
                active={this.state.variant === 'inverse'}
                variant={this.state.variant}
              >
                Inverse
              </Button>
            </ButtonGroup>
          </div>
        </div>

        <div className="content">
          React implementation of <a href="https://github.com/qlik-oss/leonardo-ui">Leonardo UI</a>.

          {sections.map((section) => {
            const Comp = section.component;
            return <Comp key={section.name} baseVariant={this.state.variant} />;
          })}
        </div>
      </div>
    );
  }
}
