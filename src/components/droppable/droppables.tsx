import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { CardDrop } from '../card/card-drop';
import { Card } from '../card/card';
import { DroppableWraper } from './droppable-wrapper';
export interface DroppablesProps {}
export const Droppables: FC<DroppablesProps> = () => {
	const gameStore = useSelector((state: any) => state.game);
	return (
		<DroppableWraper>
			{gameStore.target.map((c: any, index: number) => (
				<Droppable key={c.id} droppableId={`droppable-target_${c.id}`}>
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
		</DroppableWraper>
	);
};
