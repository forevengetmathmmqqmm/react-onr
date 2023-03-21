
import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { createFromIconfontCN } from '@ant-design/icons';
const SelfIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3967694_ypgoz433laj.js', // 在 iconfont.cn 上生成
});
interface accountInt {
  avatar: string,
  nickname: string,
  gender: number,
  city: string,
  hobby: string,
}

const Home = (props: any) => {
  const [account, setAccount] = useState<accountInt>({
    avatar: '',
    nickname: '',
    gender: 0,
    city: '',
    hobby: '',
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
        <div className='ml-[12px]'>
          <div>
            <span>{account.nickname}</span>
            {!account.gender ? <SelfIcon style={{
              fontSize: '12px',
              color: '#fe3ec9',
            }} type='icon-xingbienv' /> : <SelfIcon style={{
              fontSize: '12px',
              color: '#fe3ec9',
            }} type='icon-xingbienan' />}
          </div>
          <div>
            <SelfIcon style={{
              fontSize: '12px',
            }} type='icon-dizhi' />
            <span>{account.city}</span>
          </div>
          <div>
            <SelfIcon style={{
              fontSize: '12px',
            }} type='icon-xingquaihao' />
            <span>{account.hobby}</span>
          </div>
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