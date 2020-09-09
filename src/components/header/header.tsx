import React, { FC, useState, ChangeEvent } from 'react';
import { Input } from '../form/input';
import styled from 'styled-components';
import { Title } from '../typografy/title';
import { Score } from './score';
const HeaderStyles = styled.div`
	padding: 10px 5px;
	margin-bottom: 5px;
	display: flex;
	justify-content: space-between;
`;
const HeaderLeft = styled.div`
	width: 50%;
`;
const HeaderRight = styled.div`
	width: 50%;
	text-align: right;
`;
export interface HeaderProps {}
export const Header: FC<HeaderProps> = () => {
	return (
		<HeaderStyles>
			<HeaderLeft>
				<Title>Good luck, Your name here</Title>
			</HeaderLeft>
			<HeaderRight>
				<Score />
			</HeaderRight>
		</HeaderStyles>
	);
};
