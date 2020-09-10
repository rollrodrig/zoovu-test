import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Text } from '../typografy/text';
import { Instructions, InstructionsStyles } from './instructions';
import { Header } from '../header/header';
import { Draggables } from '../draggable/draggables';
import { Droppables } from '../droppable/droppables';
import { DragDropContext } from 'react-beautiful-dnd';
export interface GameProps {}
export const Game: FC<GameProps> = () => {
	const onDragStart = () => {
		console.log('onDragStart');
	};
	const onDragUpdate = () => {
		console.log('onDragUpdate');
	};
	const onDragEnd = (result: any) => {
		console.log('drag ended');
		console.log(result);
	};
	return (
		<div>
			<Header />
			<Instructions />
			<InstructionsStyles>
				<Text>
					... and drop them here to make the logo great again!
				</Text>
			</InstructionsStyles>
			<DragDropContext
				onDragStart={onDragStart}
				onDragUpdate={onDragUpdate}
				onDragEnd={onDragEnd}
			>
				<Draggables />
				<Droppables />
			</DragDropContext>
		</div>
	);
};
