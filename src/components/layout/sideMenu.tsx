import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { NavLink, Outlet, RouteObject } from "react-router-dom";
type MenuItem = Required<MenuProps>['items'][number];
import routers from '../../routes/index';


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const itemlist: MenuItem[] = [
  // getItem('Option 1', '1', <PieChartOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  // getItem('Option 3', '3', <ContainerOutlined />),
  // getItem('Navigation One', 'sub1', <MailOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Option 7', '7'),
  //   getItem('Option 8', '8'),
  // ]),
  // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  // ]),
];
console.log('item', itemlist);

const sideMenu = () => {
  const [items, setItem] = useState<MenuItem[]>();
  useEffect(() => {
    getItem(routers.routes[0].children as RouteObject[], itemlist);
    console.log(itemlist, 'itemlist');
  }, [])
  function getItem(list: RouteObject[], itemlist: any) {
    console.log('item', list);
    list.forEach(item => {
      if (item.children && item.children?.length > 0) {
        const itemData: any = {
          label: <NavLink to={item.handle.path}>{item.handle.name}</NavLink>,
          key: item.path,
          icon: item.handle.icon && item.handle.icon,
          children: [],
        }
        itemlist.push(itemData);
        getItem(item.children, itemData.children);
      } else {
        if (!item.handle.hidden) {
          const itemData: any = {
            label: <NavLink to={item.handle.path}>{item.handle.name}</NavLink>,
            key: item.path,
          }
          if (item.handle.icon) {
            itemData.icon = item.handle.icon
          }
          itemlist.push(itemData);
        }
      }
    })
    setItem(itemlist)
  }
  return (
    <div className="w-[250px] h-[100vh] ">
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
      />
      <Outlet />
    </div>
  )
}

export default sideMenu;