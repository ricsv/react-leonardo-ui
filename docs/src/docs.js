import React from 'react';
import { render } from 'react-dom';

import Container from './container';

import '../../node_modules/leonardo-ui/dist/leonardo-ui.css';
import './docs.css';
import './index.html';
import './react-logo.svg';
import './favicon.ico';

render(<Container />, document.getElementById('container'));
