'use client';
import Clock from '@/app/components/Clock';
import { Formik } from 'formik';
import React, { useMemo, useState } from 'react';

const Timer: React.FC = () => {
	const [submitted, setSubmitted] = useState(false);
	const [timers, setTimers] = useState([]);
	return (
		<>
			<Clock />
			<button
				onClick={() => (submitted ? setSubmitted(false) : setSubmitted(true))}
			>
				Add Timer
			</button>
		</>
	);
};

export default Timer;
