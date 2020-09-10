import React, { FC, useState, ChangeEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
export interface TimerProps {}
export const Timer: FC<TimerProps> = () => {
	const [timerCount, setTimerCount] = useState(0);
	const time = useRef(0);
	const scoreState = useSelector((state: any) => state.score);
	const error = useSelector((state: any) => state.score.error);
	useEffect(() => {
		if (error !== 0) {
			time.current = time.current + 10;
		}
	}, [error]);
	useEffect(() => {
		let interval: any = null;
		interval = setInterval(() => {
			if (scoreState.playing) {
				time.current = time.current + 1;
				setTimerCount(time.current);
			}
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [scoreState]);
	return <>{timerCount} seconds</>;
};
