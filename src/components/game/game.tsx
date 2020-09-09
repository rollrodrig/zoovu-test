import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Title } from '../typografy/title';
import { Instructions } from './instructions';
import { Header } from '../header/header';
export interface GameProps {}
export const Game: FC<GameProps> = () => {
	return (
		<div>
			<Header />
			<Instructions />
			game
		</div>
	);
};
