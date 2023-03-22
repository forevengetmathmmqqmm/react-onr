
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
	birthday: string,
	constellation: string,
	email: string,
	weight: number,
	height: number,
}

const Home = (props: any) => {
	const [account, setAccount] = useState<accountInt>({
		avatar: '',
		nickname: '',
		gender: 0,
		city: '',
		hobby: '',
		birthday: '',
		constellation: '',
		email: '',
		weight: 0,
		height: 0,
	});
	useEffect(() => {
		const userInfo: accountInt = JSON.parse(localStorage.getItem('userInfo') as string);
		const birthday = userInfo.birthday.split('-');
		userInfo.birthday = birthday[1] + '-' + birthday[2];
		setAccount(userInfo);
	}, [])
	return (
		<div className='flex'>
			<div className='p-[24px] h-[100vh] w-[320px] shadow'>
				<div className='flex'>
					<Avatar size={64} src={account.avatar} icon={<UserOutlined />} />
					<div className='ml-[12px]'>
						<div>
							<span>昵称：{account.nickname}</span>
							{!account.gender ? <SelfIcon style={{
								fontSize: '12px',
								color: '#fe3ec9',
							}} type='icon-xingbienv' /> : <SelfIcon style={{
								fontSize: '12px',
								color: '#fe3ec9',
							}} type='icon-xingbienan' />}
						</div>
						<div>
							<span>城市：{account.city}</span>
							<SelfIcon style={{
								fontSize: '12px',
							}} type='icon-dizhi' />
						</div>
						<div>
							<span>生日：{account.birthday}</span>
						</div>
						<div>
						</div>
					</div>
				</div>
				<div className='test-[24px] leading-[32px]'>基本信息</div>
				<div className='flex mt-[24rpx]'>
					<div>爱好：</div>
					<div>{account.hobby}
						<SelfIcon style={{
							fontSize: '12px',
						}} type='icon-xingquaihao' />
					</div>
				</div>
				<div className='flex mt-[24rpx]'>
					<div>星座：</div>
					<div>{account.constellation}
					</div>
				</div>
				<div className='flex mt-[24rpx]'>
					<div>邮箱：</div>
					<div>{account.email}
					</div>
				</div>
				<div className='flex mt-[24rpx]'>
					<div>体重：</div>
					<div>{account.weight} kg
					</div>
				</div>
				<div className='flex mt-[24rpx]'>
					<div>身高：</div>
					<div>{account.height} cm
					</div>
				</div>
			</div>
			<div className='flex-1 p-[24px]'>
				<div>test</div>
			</div>
		</div>
	)
}
const mapToStatus = (state: { indexReducer: { account: any; }; }) => {
	return {
		account: state.indexReducer.account
	}
}

export default connect(mapToStatus, null)(Home);