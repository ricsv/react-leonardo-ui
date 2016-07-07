import React from 'react';
import { renderToString } from 'react-dom/server';

import Container from './container';

export default () => renderToString(<Container />);
