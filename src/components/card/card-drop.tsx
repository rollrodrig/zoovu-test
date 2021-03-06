import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { green } from '../../storage/colors';
const CardDropContainer = styled.div`
	display: block;
	width: 200px;
	justify-content: space-between;
`;
const CardDropItem = styled.div`
	width: 90%;
	margin: auto;
	height: 200px;
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
			<CardDropItem></CardDropItem>
		</CardDropContainer>
	);
};
