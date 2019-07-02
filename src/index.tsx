import React from 'react';
import { render } from 'react-dom';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'antd/dist/antd.css';

import App from './App';
import './i18n';

render(<App />, document.getElementById('root'));
