import { useEffect, useState } from 'react';
import timeHelper from '../helpers/time';
import { TaskGroupType, UserData } from '../constants/defaults';
import { uncheckAll } from '../helpers/checkboxToggle';

type CountdownProp = {
	endTime: Date;
	style: string;
	dataType: TaskGroupType;
	id: string;
	lastUpdated: Date;
	updateUserData: (updatedData: UserData) => void;
};

const Countdown: React.FC<CountdownProp> = ({
	endTime,
	style,
	dataType,
	id,
	lastUpdated,
	updateUserData,
}) => {
	const [remainingTime, setRemainingTime] = useState(
		new timeHelper().getDuration(new Date(), endTime)
	);

	useEffect(() => {
		const time = new timeHelper();

		const countdownInterval = setInterval(() => {
			const difference = time.getDuration(new Date(), endTime);
			setRemainingTime(difference);
		}, 1000);

		return () => {
			clearInterval(countdownInterval);
		};
	}, []);

	return (
		<div className={style}>
			<div>Reset In</div>
			<div suppressHydrationWarning={true}>{remainingTime}</div>
		</div>
	);
};

export default Countdown;
