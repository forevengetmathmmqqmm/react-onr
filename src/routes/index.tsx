import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../page/home'

const routers = createHashRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: 'home',
      element: <Home />
    }
  ]
}]);

export default routers;