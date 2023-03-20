import React, { useEffect } from "react";
import SideMenu from './sideMenu';
import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";


const Layout = (props: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!props.isLogin && !token) {
      navigate('/login');
    }
  }, [location])
  return (
    <div>
      <SideMenu />
    </div>
  )
}
function mapStatusToProps(state: { indexReducer: { isLogin: boolean; }; }) {
  return {
    isLogin: state.indexReducer.isLogin
  }
}
export default connect(mapStatusToProps)(Layout);