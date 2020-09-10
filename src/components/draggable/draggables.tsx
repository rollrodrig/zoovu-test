import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Card } from './card';
import zoovuo from './zoovu-o.svg';
import zoovuu from './zoovu-u.svg';
import zoovuv from './zoovu-v.svg';
import zoovuz from './zoovu-z.svg';
const CardsStyled = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 30px 0 80px 0;
`;
export interface DraggablesProps {}
export const Draggables: FC<DraggablesProps> = () => {
	return (
		<CardsStyled>
			<Droppable droppableId="dropable-1">
				{(provided, snapshot) => (
					<div ref={provided.innerRef}>
						<Draggable draggableId={'1'} index={0}>
							{(provided) => (
								<div
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
								>
									Content
								</div>
							)}
						</Draggable>
						{provided.placeholder}
					</div>
				)}
			</Droppable>

			{/* <Card img={zoovuz} /> */}
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
