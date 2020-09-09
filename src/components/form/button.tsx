import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { secondary, buttonsTextColor } from '../../storage/colors';
const ButtonStyled = styled.button`
	border: 1px solid #c7e4ea;
	border-radius: 30px;
	height: 40px;
	padding: 0 20px;
	text-align: center;
	color: ${buttonsTextColor};
	font-size: 16px;
	font-weight: 700;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
	background-color: #ffffff;
	cursor: pointer;
	&:hover {
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
	}
`;
export interface ButtonProps {
	children: ReactNode;
	onClick: () => void;
}
export const Button: FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<ButtonStyled onClick={onClick} type="button">
			{children}
		</ButtonStyled>
	);
};
