import React, { useEffect, useState } from "react";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { NavLink, Outlet, RouteObject } from "react-router-dom";
type MenuItem = Required<MenuProps>['items'][number];
import routers from '../../routes/index';


const sideMenu = () => {
  const [items, setItem] = useState<MenuItem[]>();
  useEffect(() => {
    const itemlist: MenuItem[] = [];
    getItem(routers.routes[1].children as RouteObject[], itemlist);
  }, [])
  function getItem(list: RouteObject[], itemlist: any) {
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
    <div className="w-[100vw] h-[100vh] flex">
      <Menu className="h-[100vh] w-[250px]"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
      />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default sideMenu;