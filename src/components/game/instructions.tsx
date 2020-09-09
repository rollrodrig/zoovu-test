import React, { FC, useState, ChangeEvent } from 'react';
import { UserName } from '../form/user-name';
import styled from 'styled-components';
import { Text } from '../typografy/text';
export const InstructionsStyles = styled.div`
	padding: 10px 5px;
	margin-bottom: 30px;
	display: flex;
	justify-content: space-between;
`;
const InstructionsLeft = styled.div`
	width: 50%;
`;
const InstructionsRight = styled.div`
	width: 50%;
	text-align: right;
`;
export interface InstructionsProps {}
export const Instructions: FC<InstructionsProps> = () => {
	return (
		<InstructionsStyles>
			<InstructionsLeft>
				<Text>Pick up the right card</Text>
			</InstructionsLeft>
			<InstructionsRight>
				<Text>The faster te better</Text>
			</InstructionsRight>
		</InstructionsStyles>
	);
};
