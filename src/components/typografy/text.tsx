import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
const TextStyled = styled.p`
	font-size: 14px;
	color: #889599;
`;
export interface TextProps {
	children: React.ReactNode;
}
export const Text: FC<TextProps> = ({ children }) => {
	return <TextStyled>{children}</TextStyled>;
};
