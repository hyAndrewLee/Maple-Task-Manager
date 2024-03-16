import { useEffect, useState } from 'react';
import timeHelper, { CountdownType } from '../helpers/time';
import { UserData } from '../constants/defaults';
import { uncheckTasks } from '../helpers/checkboxToggle';

type CountdownProp = {
	endTime: Date;
	style: string;
updateUserData: (updatedData: UserData) => void;
	userData: UserData;
	type: CountdownType;
	name?: string;
};

const Countdown: React.FC<CountdownProp> = ({
	endTime,
	style,
	updateUserData,
	userData,
	type,
	name,
}) => {
	const [remainingTime, setRemainingTime] = useState(
		new timeHelper().formatTime(
			Math.abs(new Date().getTime() - endTime.getTime()),
			type
		)
	);

	useEffect(() => {
		const time = new timeHelper();

		const countdownInterval = setInterval(() => {
			let difference = new Date().getTime() - endTime.getTime();
			const shouldResetCountdown = difference > -1000 || difference >= 0;
			const absDifference = Math.abs(difference);

			if (!shouldResetCountdown) {
				setRemainingTime(time.formatTime(absDifference, type));
			}

			if (shouldResetCountdown) {
				const newEndTime = time.getNewEndTime(type);

				if (typeof newEndTime === 'string') {
					endTime = newEndTime;
				}

				if (typeof newEndTime === 'object') {
					endTime = time.getNextEventInfo().eventTime;
					setRemainingTime(time.formatTime(absDifference, type));
				}

				if (type === 'daily') {
					uncheckTasks(userData, updateUserData, false);
					setRemainingTime(time.formatTime(absDifference, type));
				}
			}
		}, 1000);

		return () => {
			clearInterval(countdownInterval);
		};
	}, []);

	return (
		<div className={style}>
			<div>{name ? name : 'Reset In'}</div>
			<div suppressHydrationWarning={true}>{remainingTime}</div>
		</div>
	);
};

export default Countdown;
