import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { CardDrop } from '../card/card-drop';
import { Card } from '../card/card';
const CardsStyled = styled.div`
	display: flex;
	height: 200px;
	position: relative;
	justify-content: space-between;
	margin: 30px 0 80px 0;
	overflow: hidden;
`;
export const cardsCorrectPositions = [
	{ id: 'card-cp-0', code: 'z' },
	{ id: 'card-cp-1', code: 'o' },
	{ id: 'card-cp-2', code: 'o' },
	{ id: 'card-cp-3', code: 'v' },
	{ id: 'card-cp-4', code: 'u' },
];
export interface DroppablesProps {}
export const Droppables: FC<DroppablesProps> = () => {
	const gameStore = useSelector((state: any) => state.game);
	return (
		<CardsStyled>
			{gameStore.target.map((c: any, index: number) => (
				<Droppable
					key={c.id}
					droppableId={`droppable-target_${c.id}`}
					direction="horizontal"
				>
					{(provided, snapshot) => (
						<div ref={provided.innerRef}>
							<Draggable
								draggableId={`draggable-target_${c.id}`}
								index={index}
								isDragDisabled={c.img ? false : true}
							>
								{(provided, snapshot) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										style={{
											...provided.draggableProps.style,
										}}
									>
										{c.img ? (
											<Card img={c.img} />
										) : (
											<CardDrop key={c.id} />
										)}
									</div>
								)}
							</Draggable>
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			))}
		</CardsStyled>
	);
};
/*
<div
	style={{
		position: 'absolute',
		top: 0,
		left: 0,
		display: 'flex',
	}}
>
	{gameStore.target.map((c: any) =>
		c.img ? null : <CardDrop key={c.id} />
	)}
</div>
*/
