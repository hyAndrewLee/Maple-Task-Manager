'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Timer from '@/app/components/Timer';

export default function HomePage() {
	const [time, setTime] = useState('');
	const [shouldEnableTen, setShouldEnableTen] = useState(false);
	const [shouldEnableTwenty, setShouldEnablTwenty] = useState(false);
	const [shouldEnableThirty, setShouldEnableThirty] = useState(false);
	const [shouldEnableBite, setShouldEnableBite] = useState(false);
	const [startingLootMinute, setStartingLootMinute] = useState(1);
	const [startingLootSecond, setStartingLootSecond] = useState(25);

	useEffect(() => {
		setInterval(() => {
			const dateObject = new Date();

			let hour: string | number = dateObject.getHours() % 12;
			let minute: string | number = dateObject.getMinutes();
			let second: string | number = dateObject.getSeconds();

			if (hour === 0) {
				hour = 12;
			} else if (hour < 10) {
				hour = `0${hour}`;
			}

			if (minute < 10) {
				minute = `0${minute}`;
			}

			if (second < 10) {
				second = `0${second}`;
			}

			const currentTime = hour + ':' + minute + ':' + second;

			setTime(currentTime);
		}, 1000);
	}, []);

	const handleClick = (duration: 2 | 10 | 20 | 30) => {
		switch (duration) {
			case 2:
				if (shouldEnableBite) {
					setStartingLootMinute(1);
					setStartingLootSecond(25);
				} else {
					setStartingLootMinute(1);
					setStartingLootSecond(55);
				}
				setShouldEnableBite(!shouldEnableBite);
				break;
			case 10:
				setShouldEnableTen(!shouldEnableTen);
				break;
			case 20:
				setShouldEnablTwenty(!shouldEnableTwenty);
				break;
			case 30:
				setShouldEnableThirty(!shouldEnableThirty);
				break;
			default:
				break;
		}
	};

	return (
		<React.Fragment>
			<Head>
				<title>Timer</title>
			</Head>
			<div className='flex flex-col items-center'>
				<div className='flex justify-center text-lg font-semibold'>
					<div>{time}</div>
				</div>
				<div className='flex gap-6'>
					<button
						className='border border-black rounded px-2'
						onClick={() => handleClick(10)}
					>
						10
					</button>
					<button
						className='border border-black rounded px-2'
						onClick={() => handleClick(20)}
					>
						20
					</button>
					<button
						className='border border-black rounded px-2'
						onClick={() => handleClick(30)}
					>
						30
					</button>
					<button
						className='border border-black rounded px-2'
						onClick={() => handleClick(2)}
					>
						Bite
					</button>
				</div>
				<div className='flex flex-col'>
					<Timer
						duration={15}
						enableTen={shouldEnableTen}
						enableTwenty={shouldEnableTwenty}
						enableThirty={shouldEnableThirty}
						startingLootMinute={startingLootMinute}
						startingLootSecond={startingLootSecond}
					/>
					<Timer
						duration={30}
						enableTen={shouldEnableTen}
						enableTwenty={shouldEnableTwenty}
						enableThirty={shouldEnableThirty}
						startingLootMinute={startingLootMinute}
						startingLootSecond={startingLootSecond}
					/>
					<Timer
						duration={60}
						enableTen={shouldEnableTen}
						enableTwenty={shouldEnableTwenty}
						enableThirty={shouldEnableThirty}
						startingLootMinute={startingLootMinute}
						startingLootSecond={startingLootSecond}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
