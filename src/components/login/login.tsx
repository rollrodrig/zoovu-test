import React, { FC, useState, ChangeEvent } from 'react';
import { Input } from '../form/input';
import styled from 'styled-components';
import { Title } from '../typografy/title';
import { Button } from '../form/button';
import { ArrowRight } from '../icons/icons';
import { Error } from '../form/error';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName } from '../../reducers/user';
const LoginStyled = styled.div`
	width: 100%;
	max-width: 400px;
	display: block;
	margin: 200px auto 0 auto;
	text-align: center;
`;
const TitleStyled = styled.div`
	margin-bottom: 40px;
`;
const UserInputStyled = styled.div`
	text-align: center;
	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto 30px auto;
	input {
		text-align: center;
	}
`;
export interface LoginProps {
	onLogin: () => void;
}
export const Login: FC<LoginProps> = ({ onLogin }) => {
	const [error, setError] = useState(false);
	const [name, setName] = useState('');
	const dispatch = useDispatch();
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
		if (error) {
			setError(false);
		}
	};
	const onUserLogin = () => {
		if (name === '') {
			setError(true);
		} else {
			setError(false);
			onLogin();
			dispatch(setUserName(name));
		}
	};
	return (
		<LoginStyled>
			<TitleStyled>
				<Title>Hello friend, tell me your name</Title>
			</TitleStyled>
			<UserInputStyled>
				<Input placeholder="Your name here" onChange={onChange} />
				{error ? <Error>Name is required</Error> : null}
			</UserInputStyled>
			<Button onClick={onUserLogin}>
				Let&apos;s go <ArrowRight />
			</Button>
		</LoginStyled>
	);
};
