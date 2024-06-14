import React, { useCallback, useEffect, useState } from 'react';
import lootAudio from '@/public/audio/loot.mp3';
import couponAudio from '@/public/audio/coupon.mp3';
import buffAudio from '@/public/audio/buff.mp3';

type TimerProps = {
	duration: number;
	enableTen: boolean;
	enableTwenty: boolean;
	enableThirty: boolean;
	startingLootMinute: number;
	startingLootSecond: number;
};

const Timer: React.FC<TimerProps> = ({
	duration,
	enableTen,
	enableTwenty,
	enableThirty,
	startingLootMinute,
	startingLootSecond,
}) => {
	const [hide, setHide] = useState(true);
	const [allDurationHour, setallDurationHour] = useState(2);
	const [allDurationMinute, setallDurationMinute] = useState(0);
	const [allDurationSecond, setallDurationSecond] = useState(0);
	const [couponDurationMinute, setCouponDurationMinute] = useState(duration);
	const [couponDurationSecond, setCouponDurationSecond] = useState(0);
	const [buffTenDurationMinute, setBuffTenDurationMinute] = useState(10);
	const [buffTenDurationSecond, setBuffTenDurationSecond] = useState(0);
	const [buffTwentyDurationMinute, setBuffTwentyDurationMinute] = useState(20);
	const [buffTwentyDurationSecond, setBuffTwentyDurationSecond] = useState(0);
	const [buffThirtyDurationMinute, setBuffThirtyDurationMinute] = useState(30);
	const [buffThirtyDurationSecond, setBuffThirtyDurationSecond] = useState(0);
	const [lootDurationMinute, setLootDurationMinute] =
		useState(startingLootMinute);
	const [lootDurationSecond, setLootDurationSecond] =
		useState(startingLootSecond);
	const [activeAll, setActiveAll] = useState(false);
	const [pausedLoot, setPasuedLoot] = useState(false);
	const [resetLoot, setResetLoot] = useState(false);

	const resetAll = useCallback(() => {
		setActiveAll(false);
		setPasuedLoot(false);

		setTimeout(() => {
			setallDurationHour(2);
			setallDurationMinute(0);
			setallDurationSecond(0);
			setCouponDurationMinute(duration);
			setCouponDurationSecond(0);
			setLootDurationMinute(startingLootMinute);
			setLootDurationSecond(startingLootSecond);
			setBuffTenDurationMinute(10);
			setBuffTenDurationSecond(0);
			setBuffTwentyDurationMinute(20);
			setBuffTwentyDurationSecond(0);
			setBuffThirtyDurationMinute(30);
			setBuffThirtyDurationSecond(0);
		}, 1000);
	}, [couponDurationMinute, lootDurationMinute, lootDurationSecond]);

	const pauseResumeLoot = () => {
		if (activeAll) {
			setPasuedLoot(!pausedLoot);
		}
	};

	const pauseAndResetLoot = () => {
		if (activeAll) {
			setTimeout(() => {
				setResetLoot(true);
				setPasuedLoot(true);
			}, 1000);
		}
	};

	const formatTime = (hour: number, minute: number, second: number) => {
		const formattedHour = hour < 10 ? `0${hour}` : hour;
		const formattedMinute = minute < 10 ? `0${minute}` : minute;
		const formattedSecond = second < 10 ? `0${second}` : second;

		if (hour === -1) {
			return `${formattedMinute}:${formattedSecond}`;
		}

		return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
	};

	useEffect(() => {
		let timeoutAll: ReturnType<typeof setTimeout> | undefined = undefined;
		let timeoutLoot: ReturnType<typeof setTimeout> | undefined = undefined;
		let timeoutCoupon: ReturnType<typeof setTimeout> | undefined = undefined;
		let timeoutTenBuff: ReturnType<typeof setTimeout> | undefined = undefined;
		let timeoutTwentyBuff: ReturnType<typeof setTimeout> | undefined =
			undefined;
		let timeoutThirtyBuff: ReturnType<typeof setTimeout> | undefined =
			undefined;

		if (activeAll) {
			timeoutAll = setTimeout(() => {
				if (allDurationSecond === 0) {
					if (allDurationMinute === 0) {
						if (allDurationHour === 0) {
							resetAll();
						} else {
							setallDurationHour(allDurationHour - 1);
							setallDurationMinute(59);
							setallDurationSecond(59);
						}
					} else {
						setallDurationMinute(allDurationMinute - 1);
						setallDurationSecond(59);
					}
				} else {
					setallDurationSecond(allDurationSecond - 1);
				}
			}, 1000);

			timeoutCoupon = setTimeout(() => {
				if (couponDurationSecond === 0) {
					if (couponDurationMinute === 0) {
						const couponSound = new Audio(couponAudio);
						couponSound.play();
						setCouponDurationMinute(duration);
						setCouponDurationSecond(0);
					} else {
						setCouponDurationSecond(59);
						setCouponDurationMinute(couponDurationMinute - 1);
					}
				} else {
					setCouponDurationSecond(couponDurationSecond - 1);
				}
			}, 1000);

			if (resetLoot) {
				clearTimeout(timeoutLoot);
				setTimeout(() => {
					setLootDurationMinute(startingLootMinute);
					setLootDurationSecond(startingLootSecond);
					setResetLoot(false);
				}, 1000);
			}

			if (!pausedLoot) {
				timeoutLoot = setTimeout(() => {
					if (lootDurationSecond === 0) {
						if (lootDurationMinute === 0) {
							const lootSound = new Audio(lootAudio);
							lootSound.play();
							setLootDurationMinute(startingLootMinute);
							setLootDurationSecond(startingLootSecond);
						} else {
							setLootDurationMinute(lootDurationMinute - 1);
							setLootDurationSecond(59);
						}
					} else {
						setLootDurationSecond(lootDurationSecond - 1);
					}
				}, 1000);
			}

			if (enableTen) {
				timeoutTenBuff = setTimeout(() => {
					if (buffTenDurationSecond === 0) {
						if (buffTenDurationMinute === 0) {
							const buffSound = new Audio(buffAudio);
							buffSound.play();
							setBuffTenDurationMinute(10);
							setBuffTenDurationSecond(0);
						} else {
							setBuffTenDurationMinute(buffTenDurationMinute - 1);
							setBuffTenDurationSecond(59);
						}
					} else {
						setBuffTenDurationSecond(buffTenDurationSecond - 1);
					}
				}, 1000);
			}

			if (enableTwenty) {
				timeoutTwentyBuff = setTimeout(() => {
					if (buffTwentyDurationSecond === 0) {
						if (buffTwentyDurationMinute === 0) {
							const buffSound = new Audio(buffAudio);
							buffSound.play();
							setBuffTwentyDurationMinute(20);
							setBuffTwentyDurationSecond(0);
						} else {
							setBuffTwentyDurationMinute(buffTwentyDurationMinute - 1);
							setBuffTwentyDurationSecond(59);
						}
					} else {
						setBuffTwentyDurationSecond(buffTwentyDurationSecond - 1);
					}
				}, 1000);
			}
			if (enableThirty) {
				timeoutThirtyBuff = setTimeout(() => {
					if (buffThirtyDurationSecond === 0) {
						if (buffThirtyDurationMinute === 0) {
							const buffSound = new Audio(buffAudio);
							buffSound.play();
							setBuffThirtyDurationMinute(30);
							setBuffThirtyDurationSecond(0);
						} else {
							setBuffThirtyDurationMinute(buffThirtyDurationMinute - 1);
							setBuffThirtyDurationSecond(59);
						}
					} else {
						setBuffThirtyDurationSecond(buffThirtyDurationSecond - 1);
					}
				}, 1000);
			}
		} else {
			setLootDurationMinute(startingLootMinute);
			setLootDurationSecond(startingLootSecond);
			clearTimeout(timeoutAll);
			clearTimeout(timeoutCoupon);
			clearTimeout(timeoutLoot);
			clearTimeout(timeoutTenBuff);
			clearTimeout(timeoutTwentyBuff);
			clearTimeout(timeoutThirtyBuff);
		}
	}, [
		activeAll,
		pausedLoot,
		resetLoot,
		allDurationHour,
		allDurationMinute,
		allDurationSecond,
		couponDurationMinute,
		couponDurationSecond,
		lootDurationMinute,
		lootDurationSecond,
		buffTenDurationMinute,
		buffTenDurationSecond,
		buffTwentyDurationMinute,
		buffTwentyDurationSecond,
		buffThirtyDurationMinute,
		buffThirtyDurationSecond,
		startingLootMinute,
		startingLootSecond,
		duration,
		enableTen,
		enableThirty,
		enableTwenty,
		resetAll,
	]);

	const allDurationTime = formatTime(
		allDurationHour,
		allDurationMinute,
		allDurationSecond
	);

	const couponDurationTime = formatTime(
		-1,
		couponDurationMinute,
		couponDurationSecond
	);

	const lootDurationTime = formatTime(
		-1,
		lootDurationMinute,
		lootDurationSecond
	);

	const buffTenDurationTime = formatTime(
		-1,
		buffTenDurationMinute,
		buffTenDurationSecond
	);

	const buffTwentyDurationTime = formatTime(
		-1,
		buffTwentyDurationMinute,
		buffTwentyDurationSecond
	);

	const buffThirtyDurationTime = formatTime(
		-1,
		buffThirtyDurationMinute,
		buffThirtyDurationSecond
	);

	const extraTimers = () => {
		const timers = [];

		if (enableTen) {
			timers.push(
				<div className={timerStyle}>
					<div>10m Buff</div>
					<div>{buffTenDurationTime}</div>
				</div>
			);
		}

		if (enableTwenty) {
			timers.push(
				<div className={timerStyle}>
					<div>20m Buff</div>
					<div>{buffTwentyDurationTime}</div>
				</div>
			);
		}

		if (enableThirty) {
			timers.push(
				<div className={timerStyle}>
					<div>30m Buff</div>
					<div>{buffThirtyDurationTime}</div>
				</div>
			);
		}

		return timers;
	};

	return hide ? (
		<button onClick={() => setHide(!hide)}>Show {duration} Min</button>
	) : (
		<div>
			<div className='flex justify-center content-center'>
				<button
					onClick={() => {
						setHide(!hide);
						resetAll();
					}}
				>
					{duration} Min
				</button>
			</div>
			<div>
				<div className='flex justify-center content-center'>
					<button className={buttonStyle} onClick={() => setActiveAll(true)}>
						Start All
					</button>
					<button className={buttonStyle} onClick={pauseResumeLoot}>
						Start/Pause Loot
					</button>
					<button className={buttonStyle} onClick={pauseAndResetLoot}>
						Reset Loot
					</button>
					<button className={buttonStyle} onClick={resetAll}>
						Reset All
					</button>
				</div>
				<div className='flex justify-center content-center'>
					<div className={timerStyle}>
						<div>Wap/Eap</div>
						<div>{allDurationTime}</div>{' '}
					</div>
					{extraTimers() ?? null}
					<div className={timerStyle}>
						<div>{duration}m Exp</div>
						<div>{couponDurationTime}</div>
					</div>
					<div className={timerStyle}>
						<div>Erda Fountain</div>
						<div>{lootDurationTime}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timer;

const timerStyle = 'flex flex-col items-center pr-6';
const buttonStyle = 'border border-black w-40 mr-12';
