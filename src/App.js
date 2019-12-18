import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';

import './css/style.css';

function App() {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
}

export default App;
