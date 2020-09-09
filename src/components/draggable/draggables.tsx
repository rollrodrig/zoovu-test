import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Card } from './card';
import zoovuo from './zoovu-o.svg';
import zoovuu from './zoovu-u.svg';
import zoovuv from './zoovu-v.svg';
import zoovuz from './zoovu-z.svg';
const CardsStyled = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 30px 0 80px 0;
`;
export interface DraggablesProps {}
export const Draggables: FC<DraggablesProps> = () => {
	return (
		<CardsStyled>
			<Card img={zoovuz} />
			<Card img={zoovuo} />
			<Card img={zoovuo} />
			<Card img={zoovuv} />
			<Card img={zoovuu} />
		</CardsStyled>
	);
};
