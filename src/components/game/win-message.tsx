import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Title } from '../typografy/title';
const WinMessageStyled = styled.div`
	text-align: center;
	font-size: 20px;
	margin: 20px;
`;
export interface WinMessageProps {}
export const WinMessage: FC<WinMessageProps> = () => {
	return (
		<WinMessageStyled>
			<Title>You are the winner</Title>
		</WinMessageStyled>
	);
};
