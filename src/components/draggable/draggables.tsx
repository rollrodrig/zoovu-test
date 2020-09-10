import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Card } from './card';
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
const CardsStyled = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 30px 0 80px 0;
`;
export interface DraggablesProps {}
const ItemsStyle = (isDraggingOver: any) => ({});
const listItemStyles = (isDragging: any, draggableStyle: any) => ({
	...draggableStyle,
});
export const Draggables: FC<DraggablesProps> = () => {
	return (
		<CardsStyled>
			{cards.map((c, index) => (
				<Droppable
					key={c.id}
					droppableId={`droppable-${c.id}`}
					direction="horizontal"
					isDropDisabled={true}
					ignoreContainerClipping={false}
				>
					{(provided, snapshot) => (
						<div
							ref={provided.innerRef}
							style={ItemsStyle(snapshot.isDraggingOver)}
						>
							<Draggable
								draggableId={`draggable-${c.id}`}
								index={index}
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
										<Card img={c.img} />
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
<Draggable draggableId={'drag-1'} index={1}>
{(provided) => (
	<div
		ref={provided.innerRef}
		{...provided.draggableProps}
		{...provided.dragHandleProps}
	>
		<Card img={zoovuo} />
	</div>
)}
</Draggable>
<Draggable draggableId={'drag-2'} index={2}>
{(provided) => (
	<div
		ref={provided.innerRef}
		{...provided.draggableProps}
		{...provided.dragHandleProps}
	>
		<Card img={zoovuo} />
	</div>
)}
</Draggable>
<Draggable draggableId={'drag-3'} index={3}>
{(provided) => (
	<div
		ref={provided.innerRef}
		{...provided.draggableProps}
		{...provided.dragHandleProps}
	>
		<Card img={zoovuv} />
	</div>
)}
</Draggable>
<Draggable draggableId={'drag-4'} index={4}>
{(provided) => (
	<div
		ref={provided.innerRef}
		{...provided.draggableProps}
		{...provided.dragHandleProps}
	>
		<Card img={zoovuu} />
	</div>
)}
</Draggable>
*/
