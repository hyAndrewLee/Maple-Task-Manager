import { useState } from 'react';

const Timer: React.FC= () => {
	const [hours, setHours] = useState(hoursInput);
	const [minutes, setMinutes] = useState(minutesInput > 60 ? 60 : minutesInput);
	const [seconds, setSeconds] = useState(secondsInput > 60 ? 60 : secondsInput);
	const [timer, setTimer] = useState('');

	useEffect(() => {
		let timerInterval = null;


		
	}, [hours, minutes, seconds]);
};

export default Timer;
