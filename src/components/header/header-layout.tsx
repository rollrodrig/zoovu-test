import React, { FC } from 'react';
import styled from 'styled-components';
import { Score } from './score';
import { Username } from './username';
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
export interface HeaderLayoutProps {
	username: React.ReactNode;
	score: React.ReactNode;
}
export const HeaderLayout: FC<HeaderLayoutProps> = ({ username, score }) => {
	return (
		<HeaderStyles>
			<HeaderLeft>{username}</HeaderLeft>
			<HeaderRight>{score}</HeaderRight>
		</HeaderStyles>
	);
};
