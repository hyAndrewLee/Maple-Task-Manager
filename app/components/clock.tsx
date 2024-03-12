import React, { useState, useEffect } from 'react';

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
			<span suppressHydrationWarning={true}>
				{currentTime.toLocaleTimeString(undefined, {
					hour: 'numeric',
					minute: '2-digit',
					second: '2-digit',
				})}
			</span>
		</div>
	);
});

export default Clock;
