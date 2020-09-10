import React, { FC, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../reducers/user';
import { LoginView } from './login-view';
export interface LoginProps {
	onLogin: () => void;
}
export const Login: FC<LoginProps> = ({ onLogin }) => {
	const [error, setError] = useState(false);
	const [name, setName] = useState('');
	const dispatch = useDispatch();
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
		if (error) {
			setError(false);
		}
	};
	const onUserLogin = () => {
		if (name === '') {
			//TODO, add more complex validations like only accept string
			setError(true);
		} else {
			setError(false);
			onLogin();
			dispatch(setUserName(name));
		}
	};
	return (
		<LoginView
			onInputChange={onInputChange}
			onUserLogin={onUserLogin}
			error={error}
		/>
	);
};
