'use client';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';

const Time = dynamic(() => import('./clockToLocaleTimeString'), { ssr: false });

const Clock: React.FC = React.memo(() => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timerId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => {
			clearInterval(timerId);
		};
	}, []);

	return (
		<div>
			<Time time={currentTime} />
		</div>
	);
});

export default Clock;
