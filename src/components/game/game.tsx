import React, { FC, useEffect, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Text } from '../typografy/text';
import { useSelector, useDispatch } from 'react-redux';
import { Instructions, InstructionsStyles } from './instructions';
import { Header } from '../header/header';
import { Draggables } from '../draggable/draggables';
import { Droppables } from '../droppable/droppables';
import { DragDropContext } from 'react-beautiful-dnd';
import {
	updateCards,
	sortOnTargetDroppable,
	resetGame,
} from '../../reducers/game';
import { runTimer, verifyOrder, setSuccess } from '../../reducers/score';
import { WinMessage } from './win-message';
export interface GameProps {}
export const Game: FC<GameProps> = () => {
	const [play, setPlay] = useState(true);
	const dispatch = useDispatch();
	const gameTargetState = useSelector((state: any) => state.game.target);
	useEffect(() => {
		if (verifyOrder(gameTargetState) === true) {
			dispatch(setSuccess());
			setPlay(false);
			setTimeout(() => {
				console.log('reset game');
				dispatch(resetGame());
				setPlay(true);
			}, 5000);
		}
	}, [gameTargetState]);
	const onDragStart = () => {
		dispatch(runTimer(true));
	};
	const onDragUpdate = () => {};
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
				{play ? <Draggables /> : <WinMessage />}
				<InstructionsStyles>
					<Text>
						... and drop them here to make the logo great again!
					</Text>
				</InstructionsStyles>
				<Droppables />
			</DragDropContext>
		</div>
	);
};
