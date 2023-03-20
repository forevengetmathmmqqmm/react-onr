import React from 'react';
import { AppstoreOutlined, ContainerOutlined, } from '@ant-design/icons';
import { createHashRouter, Navigate } from 'react-router-dom';
import Layout from '../components/layout/index';
import Home from '../page/home';
import DouyinUser from "../page/douyinUser";
import HandzUp from "../page/handzUp";
import User from "../page/user";
import Weixinuser from "../page/weixinuser";
import Login from "../page/login";

const routers = createHashRouter([{
  path: '/',
  element: <Navigate to='/home' />
}, {
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Home />,
      handle: {
        hidden: true,
      }
    },
    {
      path: 'home',
      element: <Home />,
      handle: {
        name: '首页',
        path: '/home',
        icon: <AppstoreOutlined />
      },
    },
    {
      path: 'user',
      element: <User />,
      handle: {
        name: '用户',
        path: '/user/douyinUser',
        icon: <ContainerOutlined />
      },
      children: [{
        path: 'douyinUser',
        element: <DouyinUser />,
        handle: {
          name: '抖音用户',
          path: '/user/douyinUser'
        },
      }, {
        path: 'handzUp',
        element: <HandzUp />,
        handle: {
          name: 'handzUp用户',
          path: '/user/handzUp'
        },
      }, {
        path: 'weixinuser',
        element: <Weixinuser />,
        handle: {
          name: '微信用户',
          path: '/user/weixinuser'
        },
      }]
    }
  ],
}, {
  path: '/login',
  element: <Login />,
}]);

export default routers;