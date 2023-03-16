import React from 'react';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <span className='text-orange-700'>layout</span>
      <Outlet />
    </div>
  )
}
export default Layout;