import React, { FC } from 'react';
import { Score } from './score';
import { useSelector } from 'react-redux';
import { Username } from './username';
import { HeaderLayout } from './header-layout';
export interface HeaderProps {}
export const Header: FC<HeaderProps> = () => {
	const userStore = useSelector((state: any) => state.user);
	return (
		<HeaderLayout
			username={<Username name={userStore.name} />}
			score={<Score />}
		/>
	);
};
