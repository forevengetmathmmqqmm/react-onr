import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import routers from './routes/index';

import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
