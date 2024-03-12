'use client';
import { useEffect, useState } from 'react';
import timeHelper from '../helpers/time';

type CountdownProp = {
	endTime: Date;
};

const Countdown: React.FC<CountdownProp> = ({ endTime }) => {
	const [remainingTime, setRemainingTime] = useState(
		`${new timeHelper().getDuration(new Date(), endTime)}`
	);

	useEffect(() => {
		const countdownInterval = setInterval(() => {
			const difference = new timeHelper().getDuration(new Date(), endTime);

			setRemainingTime(difference);
		}, 1000);

		return () => {
			clearInterval(countdownInterval);
		};
	}, []);

	return (
		<div className='border'>
			<div>Reset In</div>
			<div>{remainingTime}</div>
		</div>
	);
};

export default Countdown;
