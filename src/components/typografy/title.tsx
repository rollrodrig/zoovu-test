import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
const TitleStyled = styled.div`
	font-size: 16;
	font-weight: 700;
`;
export interface TitleProps {
	children: React.ReactNode;
}
export const Title: FC<TitleProps> = ({ children }) => {
	return <TitleStyled>{children}</TitleStyled>;
};
