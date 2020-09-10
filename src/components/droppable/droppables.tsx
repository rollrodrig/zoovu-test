import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { CardDrop } from './card-drop';
export const cards = [
	{ id: 'card-0', content: 'content z', code: 'z' },
	{ id: 'card-1', content: 'content o', code: 'o' },
	{ id: 'card-2', content: 'content o', code: 'o' },
	{ id: 'card-3', content: 'content v', code: 'v' },
	{ id: 'card-4', content: 'content u', code: 'u' },
];
const CardsStyled = styled.div`
	display: flex;
	height: 200px;
	position: relative;
	justify-content: space-between;
	margin: 30px 0 80px 0;
`;
export interface DroppablesProps {}
export const Droppables: FC<DroppablesProps> = () => {
	return (
		<CardsStyled>
			{cards.map((c, index) => (
				<Droppable
					key={c.id}
					droppableId={`droppable-target-${c.id}`}
					direction="horizontal"
				>
					{(provided, snapshot) => (
						<div ref={provided.innerRef} style={{ width: '200px' }}>
							{/* <CardDrop /> */}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			))}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					display: 'flex',
				}}
			>
				{cards.map((c) => (
					<CardDrop key={c.id} />
				))}
			</div>
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
