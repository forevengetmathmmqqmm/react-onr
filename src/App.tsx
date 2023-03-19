import React, { useEffect } from 'react';
import {Provider} from 'react-redux';
import './App.css';
import routers from './routes/index';
import { RouterProvider } from 'react-router-dom';

function App(props: any) {
  console.log(props, 'props');
  
  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
