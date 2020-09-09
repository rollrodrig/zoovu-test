import React, { FC, useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Input } from './input';
import styled from 'styled-components';
const UserNameStyled = styled.input`
	height: 40px;
	font-size: 16px;
	width: 100%;
	border-top: 0;
	border-left: 0;
	border-right: 0;
	border-radius: 0;
	border-bottom: 3px solid #e9eff5;
	text-align: center;
	font-style: italic;
`;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UserNameProps {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}
export const UserName: FC<UserNameProps> = ({
	onChange = () => {},
	onFocus = () => {},
	onBlur = () => {},
	placeholder = '',
}) => {
	const [name, setName] = useState('');
	const dispatch = useDispatch();
	const userStore = useSelector((state) => state);
	console.log(userStore);
	console.log(userStore);
	const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
		onChange(e);
	};
	const onFocusInput = (e: ChangeEvent<HTMLInputElement>) => {
		onFocus(e);
	};
	const onBlurInput = (e: ChangeEvent<HTMLInputElement>) => {
		onBlur(e);
	};
	return (
		<UserNameStyled
			onFocus={onFocusInput}
			onBlur={onBlurInput}
			onChange={onChangeInput}
			placeholder={placeholder}
			value={name}
		/>
	);
};
