import { userInfo } from 'os';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Home = (props: any) => {
  const [account, setAccount] = useState({ nickname: '', age: 0 });
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    setAccount(JSON.parse(userInfo as string));
  }, [])
  return (
    <div>
      <div>{account.nickname}</div>
      <div>{account.age?.toString()}</div>
    </div>
  )
}
const mapToStatus = (state: { indexReducer: { account: any; }; }) => {
  return {
    account: state.indexReducer.account
  }
}

export default connect(mapToStatus, null)(Home);