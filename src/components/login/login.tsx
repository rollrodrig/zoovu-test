import React, { FC, useState, ChangeEvent } from 'react';
import { UserName } from '../form/user-name';
import styled from 'styled-components';
import { Title } from '../typografy/title';
const LoginStyled = styled.div`
	width: 100%;
	max-width: 400px;
	display: block;
	margin: 100px auto 0 auto;
	text-align: center;
`;
const TitleStyled = styled.div`
	margin-bottom: 40px;
`;
export interface LoginProps {}
export const Login: FC<LoginProps> = () => {
	return (
		<LoginStyled>
			<TitleStyled>
				<Title>Hello friend, tell me yout name</Title>
			</TitleStyled>
			<UserName />
		</LoginStyled>
	);
};
