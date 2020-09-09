import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Text } from '../typografy/text';
import { Instructions } from './instructions';
import { Header } from '../header/header';
import { Draggables } from '../draggable/draggables';
import { Droppables } from '../droppable/droppables';

export interface GameProps {}
export const Game: FC<GameProps> = () => {
	return (
		<div>
			<Header />
			<Instructions />
			<Draggables />
			<Text>... and drop them here to make the logo great again!</Text>
			<Droppables />
		</div>
	);
};
