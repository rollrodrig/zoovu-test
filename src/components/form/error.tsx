import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { error as errorColor } from '../../storage/colors';
const ErrorStyled = styled.div`
	font-size: 12px;
	text-align: center;
	color: ${errorColor};
`;
export interface ErrorProps {
	children: ReactNode;
}
export const Error: FC<ErrorProps> = ({ children }) => {
	return <ErrorStyled>{children}</ErrorStyled>;
};
