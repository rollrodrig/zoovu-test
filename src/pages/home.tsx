import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Login } from '../components/login/login';
import { Game } from '../components/game/game';
const BackgroundStyled = styled.div`
	width: 100%;
	background: rgb(237, 248, 255);
	background: linear-gradient(
		0deg,
		rgba(237, 248, 255, 1) 0%,
		rgba(255, 255, 255, 1) 100%
	);
`;
const PageContentStyled = styled.div`
	width: 100%;
	max-width: 1000px;
	display: block;
	margin: auto;
`;
export interface HomeProps {}
export const Home: FC<HomeProps> = () => {
	const [loged, setLoged] = useState(false);
	const onLogin = () => {
		setLoged(true);
	};
	return (
		<BackgroundStyled>
			<PageContentStyled>
				{/* {loged ? <Game /> : <Login onLogin={onLogin} />} */}
				<Game />
			</PageContentStyled>
		</BackgroundStyled>
	);
};
