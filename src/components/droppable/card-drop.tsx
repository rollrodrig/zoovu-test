import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { green } from '../../storage/colors';
const CardDropContainer = styled.div`
	width: 25%;
`;
const CardDropItem = styled.div`
	display: flex;
	margin: auto;
	width: 90%;
	height: 250px;
	background-color: rgb(237, 248, 255);
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	border-style: dashed;
	border-width: 1px;
	border: 1px dashed ${green};
`;
export interface CardDropProps {}
export const CardDrop: FC<CardDropProps> = () => {
	return (
		<CardDropContainer>
			<CardDropItem>
				Drop here
			</CardDropItem>
		</CardDropContainer>
	);
};
