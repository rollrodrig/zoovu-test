import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Login } from '../components/login/login';
import { Game } from '../components/game/game';
const BackgroundStyled = styled.div`
	width: 100%;
	padding-bottom: 200px;
	background: rgb(237, 248, 255);
	background: linear-gradient(
		0deg,
		rgba(237, 248, 255, 1) 0%,
		rgba(255, 255, 255, 1) 100%
	);
`;
const PageContentStyled = styled.div`
	width: 100%;
	max-width: 1250px;
	display: block;
	margin: auto;
`;
export interface HomeProps {}
export const Home: FC<HomeProps> = () => {
	return (
		<BackgroundStyled>
			<PageContentStyled>
				<div>
					<Login />
					<Game />
				</div>
			</PageContentStyled>
		</BackgroundStyled>
	);
};
