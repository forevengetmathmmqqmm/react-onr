import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {accountInt} from '../interfaces/index'

const Home = (props: any) => {
  const [account, setAccount] = useState<accountInt>({name: '', age: 0});
  useEffect(() => {
    setAccount(props.account)
  },[props]);
  return (
    <div>
      <div>{account.name}</div>
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