import React, { FC } from 'react';
import styled from 'styled-components';
const CardsStyled = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 30px 0 80px 0;
	height: 200px;
`;
export interface DroppableWraperProps {
	children: React.ReactNode;
}
export const DroppableWraper: FC<DroppableWraperProps> = ({ children }) => {
	return <CardsStyled>{children}</CardsStyled>;
};
