
import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { number } from 'prop-types';
interface accountInt {
  avatar: string,
  nickname: string,
  gender: number,
}

const Home = (props: any) => {
  const [account, setAccount] = useState<accountInt>({
    avatar: '',
    nickname: '',
    gender: 0,
  });
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    console.log('userInfo', userInfo);
    
    setAccount(JSON.parse(userInfo as string));
  }, [])
  return (
    <div className='flex'>
      <div className='p-[24px] h-[100vh] w-[420px] shadow flex'>
        <Avatar size={64} src={account.avatar} icon={<UserOutlined />} />
        <div>
          <div>{account.nickname }</div>
        </div>
      </div>
      <div className='flex-1'></div>
    </div>
  )
}
const mapToStatus = (state: { indexReducer: { account: any; }; }) => {
  return {
    account: state.indexReducer.account
  }
}

export default connect(mapToStatus, null)(Home);