import React, { FC, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTime } from '../../reducers/score';
export interface TimerProps {}
export const Timer: FC<TimerProps> = () => {
	const [timerCount, setTimerCount] = useState(0);
	const time = useRef(0);
	const dispatch = useDispatch();
	const scoreStatePlaying = useSelector((state: any) => state.score.playing);
	const scoreStateTime = useSelector((state: any) => state.score.time);
	const error = useSelector((state: any) => state.score.error);
	useEffect(() => {
		console.log('reset time');
		if (scoreStateTime === 0) {
			time.current = 0;
			setTimerCount(0);
		}
	}, [scoreStateTime]);
	useEffect(() => {
		if (error !== 0) {
			time.current = time.current + 10;
		}
	}, [error]);
	useEffect(() => {
		let interval: any = null;
		interval = setInterval(() => {
			if (scoreStatePlaying) {
				time.current = time.current + 1;
				setTimerCount(time.current);
				dispatch(setTime(time.current));
			}
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [scoreStatePlaying]);
	return <>{timerCount} seconds</>;
};
