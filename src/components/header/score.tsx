import React, { FC, useState, ChangeEvent } from 'react';
import { Input } from '../form/input';
import styled from 'styled-components';
import { Title } from '../typografy/title';
import { IconClock } from '../icons/icons';
import { Timer } from './timer';
const ScoreStyled = styled.div`
	color: #721972;
`;
const ClockStyled = styled.span`
	color: #64ff64;
`;
const TextStyled = styled.span`
	padding-left: 5px;
`;
export interface ScoreProps {}
export const Score: FC<ScoreProps> = () => {
	return (
		<ScoreStyled>
			<ClockStyled>
				<IconClock />
			</ClockStyled>
			<TextStyled>
				Your Score: <Timer />
			</TextStyled>
		</ScoreStyled>
	);
};
