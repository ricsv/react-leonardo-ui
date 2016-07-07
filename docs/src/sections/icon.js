import React from 'react';

import Example from '../example';
import Props from '../props';
import Section from '../section';
import { Icon } from '../../../src/react-leonardo-ui';

const ICONS = [
  'sheet',
  'object',
  'image',
  'clear-selections',
  'selections-tool',
  'bookmark',
  'back',
  'forward',
  'history',
  'help',
  'info',
  'toggle-left',
  'toggle-right',
  'selections-reload',
  'text',
  'group',
  'search',
  'zoom-in',
  'zoom-out',
  'selections-back',
  'selections-forward',
  'export',
  'import',
  'lock',
  'unlock',
  'database',
  'calendar',
  'field',
  'expression',
  'library',
  'debug',
  'script-ok',
  'grid',
  'star',
  'print',
  'remove',
  'handle',
  'handle-horizontal',
  'menu',
  'list',
  'unordered-list',
  'bar-chart',
  'bar-chart-horizontal',
  'clock',
  'line-chart',
  'pie-chart',
  'gauge-chart',
  'kpi',
  'scatter-chart',
  'map',
  'puzzle',
  'table',
  'pivot-table',
  'filterpane',
  'treemap',
  'combo-chart',
  'plus',
  'minus',
  'triangle-top',
  'triangle-bottom',
  'triangle-left',
  'triangle-right',
  'run-script',
  'tick',
  'cogwheel',
  'settings',
  'data-model',
  'script',
  'sense',
  'cut',
  'copy',
  'paste',
  'align-left',
  'align-center',
  'align-right',
  'bold',
  'italic',
  'underline',
  'select-alternative',
  'select-possible',
  'select-excluded',
  'select-all',
  'camera',
  'slide-show',
  'palette',
  'shapes',
  'effects',
  'file',
  'expand',
  'collapse',
  'bin',
  'link',
  'pivot',
  'reload',
  'add',
  'edit',
  'lasso',
  'key',
  'box',
  'home',
  'person',
  'stream',
  'cloud',
  'more',
  'folder',
  'auto-layout',
  'toggle-bottom',
  'drop',
  'play',
  'tag',
  'close',
  'direct-discovery',
  'warning',
  'warning-triangle',
  'share',
  'top',
  'low-resolution',
  'high-resolution',
  'view',
  'control',
  'code',
  'upload',
  'repair',
  'split',
  'up-down',
  'disconnect',
  'photo-library',
  'application',
  'new-tab',
  'ascending',
  'descending',
  'arrow-up',
  'arrow-down',
  'arrow-right',
  'arrow-left',
  'sync',
  'draggable',
  'book',
  'measure',
  'download',
  'more-rounded',
  'align-object-left',
  'align-object-center',
  'align-object-right',
  'submit',
  'operators',
  'general-data-class',
  'building',
  'bell',
  'unlink',
  'lightbulb',
  'associate',
  'break-association',
  'log-in',
  'log-out',
  'previous'
];

const IconSection = () => (
  <Section title="Icons">
    <Example
      code={
`<Icon name="more" />
<Icon name="more" size="small" />
<Icon name="more" size="large" />
`
      }
    >
      {ICONS.map(name => (
        <div key={name} className="icon-example">
          <div className="icon-example-box">
            <Icon name={name} />
          </div>
          <div className="icon-example-text">
            {name}
          </div>
        </div>
          ))}
    </Example>
    <Props
      props={[{
        name: 'name',
        type: 'String',
        description: 'Name of the icon to show.'
      }, {
        name: 'size',
        type: 'String',
        description: 'Icon size. Any of: null (default) | "small" | "large".'
      }]}
    />
  </Section>
  );

export default IconSection;
