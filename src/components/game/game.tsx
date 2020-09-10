import React, { FC, useEffect, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Text } from '../typografy/text';
import { useSelector, useDispatch } from 'react-redux';
import { Instructions, InstructionsStyles } from './instructions';
import { Header } from '../header/header';
import { Draggables } from '../draggable/draggables';
import { Droppables } from '../droppable/droppables';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateCards, sortOnTargetDroppable } from '../../reducers/game';
import { runTimer, verifyOrder } from '../../reducers/score';
import zoovuz from './zoovu-z.svg';
import zoovuo from './zoovu-o.svg';
import zoovuv from './zoovu-v.svg';
import zoovuu from './zoovu-u.svg';
export const cards = [
	{ id: 'card-0', content: 'content z', code: 'z', img: zoovuz },
	{ id: 'card-1', content: 'content o', code: 'o', img: zoovuo },
	{ id: 'card-2', content: 'content o', code: 'o', img: zoovuo },
	{ id: 'card-3', content: 'content v', code: 'v', img: zoovuv },
	{ id: 'card-4', content: 'content u', code: 'u', img: zoovuu },
];
export interface GameProps {}
export const Game: FC<GameProps> = () => {
	const dispatch = useDispatch();
	const gameTargetState = useSelector((state: any) => state.game.target);
	useEffect(() => {
		if (verifyOrder(gameTargetState) === true) {
			console.log('game win');
		}
	}, [gameTargetState]);
	const onDragStart = () => {
		console.log('onDragStart');
		dispatch(runTimer());
	};
	const onDragUpdate = () => {
		console.log('onDragUpdate');
	};
	const onDragEnd = (result: any) => {
		console.log(result);
		if (result.destination) {
			const source = result.source.droppableId.split('_')[0];
			const destination = result.destination.droppableId.split('_')[0];
			if (source == destination) {
				dispatch(sortOnTargetDroppable(result));
			} else {
				dispatch(updateCards(result));
			}
		}
	};
	return (
		<div>
			<Header />
			<Instructions />
			<DragDropContext
				onDragStart={onDragStart}
				onDragUpdate={onDragUpdate}
				onDragEnd={onDragEnd}
			>
				<Draggables cards={cards} />
				<InstructionsStyles>
					<Text>
						... and drop them here to make the logo great again!
					</Text>
				</InstructionsStyles>
				<Droppables cards={cards} />
			</DragDropContext>
		</div>
	);
};
