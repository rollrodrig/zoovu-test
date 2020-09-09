import React, { FC, useState, ChangeEvent } from 'react';
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
	font-style: italic;
`;
export interface InputProps {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	value?: string;
}
export const Input: FC<InputProps> = ({
	onChange = () => {},
	onFocus = () => {},
	onBlur = () => {},
	placeholder = '',
	value = '',
}) => {
	const [inputValue, setInputValue] = useState(value);
	const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
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
			value={inputValue}
		/>
	);
};
