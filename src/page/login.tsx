import * as React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { withAxios } from 'react-axios';
import { connect } from 'react-redux';
import { actionInt } from '../interfaces/index';
import { loginAct } from "../actions/index";
import { useNavigate } from "react-router-dom";
import { accountAct } from "../actions/index";

const login = (props: any) => {
	const navigate = useNavigate();
	const onFinish = async (values: any) => {
		const res = await props.axios.post('user/login', values);
		localStorage.setItem('token', res.data.data.token);
		localStorage.setItem('id', res.data.data.hash_id);
		const userInfoRes = await props.axios.get('user/detail/' + res.data.data.hash_id);
		const actionAcc = accountAct(userInfoRes.data.data);
		localStorage.setItem('userInfo', JSON.stringify(userInfoRes.data.data));

		props.setAccount(actionAcc);
		const action = loginAct(true);
		props.setLoginStatus(action);
		navigate('/home');

	};
	return (
		<div className='w-[100vw] h-[100vh] bg-[#2d3a4c] flex justify-center items-center'>
			<div>
				<div className='text-[32px] font-semibold text-white'>系统登录</div>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						name="email"
						rules={[{ required: true, message: 'Please input your Username!' }]}
					>
						<Input className='w-[448px] h-[48px]' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Please input your Password!' }]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							className='w-[448px] h-[48px]'
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" className="w-[448px] h-[36px] bg-[#45a6ff]">登录</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		setLoginStatus: (action: actionInt) => dispatch(action),
		setAccount: (action: actionInt) => dispatch(action)
	}
}

export default connect(null, mapDispatchToProps)(withAxios(login));

