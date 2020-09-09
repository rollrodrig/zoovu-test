import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
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
			<CardDrop />
			<CardDrop />
			<CardDrop />
			<CardDrop />
			<CardDrop />
		</CardsStyled>
	);
};
