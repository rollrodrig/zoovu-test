import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Card } from '../card/card';
import { CardDrop } from '../card/card-drop';
import { CardEmpty } from '../card/card-empty';
const CardsStyled = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 30px 0 80px 0;
	height: 200px;
`;
const ItemsStyle = (isDraggingOver: any) => ({});
const listItemStyles = (isDragging: any, draggableStyle: any) => ({
	...draggableStyle,
});
export interface DraggablesProps {}
export const Draggables: FC<DraggablesProps> = () => {
	const gameStore = useSelector((state: any) => state.game);
	return (
		<CardsStyled>
			{gameStore.origin.map((c: any, index: number) => (
				<Droppable
					key={c.id}
					droppableId={`droppable-origin_${c.id}`}
					direction="horizontal"
					isDropDisabled={true}
				>
					{(provided, snapshot) => (
						<div
							ref={provided.innerRef}
							style={ItemsStyle(snapshot.isDraggingOver)}
						>
							<Draggable
								draggableId={`draggable-origin_${c.id}`}
								index={index}
								isDragDisabled={c.img ? false : true}
							>
								{(provided, snapshot) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										style={listItemStyles(
											snapshot.isDragging,
											provided.draggableProps.style
										)}
									>
										{c.img ? (
											<Card img={c.img} />
										) : (
											<CardEmpty key={c.id} />
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
