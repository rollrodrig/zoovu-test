import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
const CardEmptyContainer = styled.div`
	display: block;
	width: 200px;
	height: 200px;
	border: 1px solid black;
	justify-content: space-between;
`;
export interface CardEmptyProps {}
export const CardEmpty: FC<CardEmptyProps> = () => {
	return <CardEmptyContainer>empty</CardEmptyContainer>;
};
