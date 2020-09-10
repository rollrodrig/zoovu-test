import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { CardDrop } from './card-drop';
const CardsStyled = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 30px 0 80px 0;
`;
export interface DroppablesProps {}
export const Droppables: FC<DroppablesProps> = () => {
	return (
		<CardsStyled>
			<Droppable droppableId="dropable-0">
				{(provided, snapshot) => (
					<div ref={provided.innerRef}>
						<CardDrop />
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</CardsStyled>
	);
};
/*
			<Droppable droppableId="dropable-1">
				{(provided, snapshot) => (
					<div ref={provided.innerRef}>
						<CardDrop />
						{provided.placeholder}
					</div>
				)}
			</Droppable>
			<Droppable droppableId="dropable-2">
				{(provided, snapshot) => (
					<div ref={provided.innerRef}>
						<CardDrop />
						{provided.placeholder}
					</div>
				)}
			</Droppable>
			<Droppable droppableId="dropable-3">
				{(provided, snapshot) => (
					<div ref={provided.innerRef}>
						<CardDrop />
						{provided.placeholder}
					</div>
				)}
			</Droppable>
			<Droppable droppableId="dropable-4">
				{(provided, snapshot) => (
					<div ref={provided.innerRef}>
						<CardDrop />
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</CardsStyled>
*/
