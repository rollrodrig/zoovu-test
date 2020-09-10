import React, { FC } from 'react';
import { IconClock } from '../icons/icons';
import styled from 'styled-components';
import { Title } from '../typografy/title';
export interface UsernameProps {
	name: string;
}
export const Username: FC<UsernameProps> = ({ name = '' }) => {
	return <Title>Good luck, {name}</Title>;
};
