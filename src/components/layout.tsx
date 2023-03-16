import React from 'react';
import { Outlet } from "react-router-dom";
import {connect} from 'react-redux';
import { actionInt } from '../interfaces/index';
import { accountAct } from '../actions/index'


const Layout = (props: any) => {
  function setAccount() {
    const actions = accountAct({
      name: 'lc',
      age: 18
    })
    props.setAccount(actions);
  }
  return (
    <div>
      <span className='text-orange-700' onClick={setAccount}>layout</span>
      <Outlet />
    </div>
  )
}

const mapDispatchToProps = (dispathch: (arg0: any) => any) => {
  return {
    setAccount: (action: actionInt) => dispathch(action),
  }
}
export default connect(null, mapDispatchToProps)(Layout);