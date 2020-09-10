import React, { FC } from 'react';
import { IconClock } from '../icons/icons';
import styled from 'styled-components';
const ScoreStyled = styled.div`
	color: #721972;
`;
const ClockStyled = styled.span`
	color: #64ff64;
`;
const TextStyled = styled.span`
	padding-left: 5px;
`;
export interface TimerProps {
	time: number;
}
export const Timer: FC<TimerProps> = ({ time = 0 }) => {
	return (
		<ScoreStyled>
			<ClockStyled>
				<IconClock />
			</ClockStyled>
			<TextStyled>Your Score: {time} seconds</TextStyled>
		</ScoreStyled>
	)
};
