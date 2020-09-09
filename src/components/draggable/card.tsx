import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	width: 25%;
`;
const CardItem = styled.div`
	display: flex;
	margin: auto;
	width: 90%;
	height: 250px;
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.1);
	justify-content: center;
	align-items: center;
`;
const CardImage = styled.img`
	display: block;
	width: 80%;
	max-width: 150px;
`;
export interface CardProps {
	img: string;
}
export const Card: FC<CardProps> = ({ img }) => {
	return (
		<CardContainer>
			<CardItem>
				<CardImage src={img} />
			</CardItem>
		</CardContainer>
	);
};
