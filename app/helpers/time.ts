export type CountdownType = 'daily' | 'weekly' | 'event';

type NextEvent = {
	eventTime: Date;
	eventName: string;
	eventStarting?: boolean;
};

class timeHelper {
	private today = new Date();

	getUpcomingMidnight(): Date {
		const tomorrow: Date = new Date(
			this.today.getUTCFullYear(),
			this.today.getUTCMonth(),
			this.today.getUTCDate() + 1
		); // Get tomorrow's date
		tomorrow.setUTCHours(0, 0, 0, 0); // Set time to midnight UTC
		return tomorrow;
	}

	getNextThursdayMidnightUTC(): Date {
		const dayOfWeek: number = this.today.getUTCDay();
		const daysUntilThursday: number =
			dayOfWeek <= 4 ? 4 - dayOfWeek : 11 - dayOfWeek;
		const nextThursday: Date = new Date(
			this.today.getUTCFullYear(),
			this.today.getUTCMonth(),
			this.today.getUTCDate() + daysUntilThursday
		);
		nextThursday.setUTCHours(0, 0, 0, 0);
		return nextThursday;
	}

	formatTime(remainingTime: number, type: CountdownType): string {
		// Convert milliseconds to days, hours, minutes, and seconds
		const days: number = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
		const hours: number = Math.floor(
			(remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes: number = Math.floor(
			(remainingTime % (1000 * 60 * 60)) / (1000 * 60)
		);
		const seconds: number = Math.floor((remainingTime % (1000 * 60)) / 1000);

		const formattedTime = {
			formattedDays: ``,
			formattedHours: '',
			formattedMinutes: '',
			formattedSeconds: '',
		};

		if (days && type === 'weekly') {
			formattedTime.formattedDays = `${days}d `;
		}

		if (hours > 9) {
			formattedTime.formattedHours = `${hours}h `;
		} else {
			formattedTime.formattedHours = `0${hours}h `;
		}

		if (minutes > 9) {
			formattedTime.formattedMinutes = `${minutes}m `;
		} else {
			formattedTime.formattedMinutes = `0${minutes}m `;
		}

		if (seconds > 9) {
			formattedTime.formattedSeconds = `${seconds}s`;
		} else {
			formattedTime.formattedSeconds = `0${seconds}s`;
		}

		return (
			formattedTime.formattedDays +
			formattedTime.formattedHours +
			formattedTime.formattedMinutes +
			formattedTime.formattedSeconds
		);
	}

	getNewUTCDate(now = new Date()) {
		const utcDate = new Date(
			Date.UTC(
				now.getUTCFullYear(), // Get the current year (UTC)
				now.getUTCMonth(), // Get the current month (UTC)
				now.getUTCDate(), // Get the current day of the month (UTC)
				now.getUTCHours(), // Get the current hour (UTC)
				now.getUTCMinutes(), // Get the current minute (UTC)
				now.getUTCSeconds(), // Get the current second (UTC)
				now.getUTCMilliseconds() // Get the current millisecond (UTC)
			)
		);

		return utcDate;
	}

	getPreviousMidnightUTC(): Date {
		const today = this.getNewUTCDate();
		const yesterday = this.getNewUTCDate(today);
		yesterday.setUTCDate(today.getUTCDate() - 1); // Set the date to yesterday
		yesterday.setUTCHours(0, 0, 0, 0); // Set time to midnight UTC
		return yesterday;
	}

	getNewEndTime(type: CountdownType) {
		switch (type) {
			case 'weekly':
				return this.getNextThursdayMidnightUTC();
			default:
				return this.getUpcomingMidnight();
		}
	}

	getNextEventInfo(): NextEvent {
		const now = this.getNewUTCDate();
		const nowToMilliseconds = now.getTime();
		const bingo1 = structuredClone(now).setUTCHours(1, 0, 0, 0);
		const bingo2 = structuredClone(now).setUTCHours(17, 0, 0, 0);
		const rps1 = structuredClone(now).setUTCHours(5, 0, 0, 0);
		const rps2 = structuredClone(now).setUTCHours(21, 0, 0, 0);
		const soGongs1 = structuredClone(now).setUTCHours(13, 0, 0, 0);
		const soGongs2 = structuredClone(now).setUTCHours(23, 0, 0, 0);

		const events: { [x: number]: string } = {};

		events[bingo1] = 'Bingo';
		events[bingo2] = 'Bingo';
		events[rps1] = 'Rock Paper Scissors';
		events[rps2] = 'Rock Paper Scissors';
		events[soGongs1] = 'So Gongs Treasure';
		events[soGongs2] = 'So Gongs Treasure';

		let eventTime = Infinity;

		for (const [time, name] of Object.entries(events)) {
			const currTimeToNumber = Number(time);
			const currDifference = currTimeToNumber - nowToMilliseconds;

			if (currDifference >= -60000 && currDifference <= 0) {
				return {
					eventStarting: true,
					eventTime: new Date(currTimeToNumber + 60000),
					eventName: name,
				};
			}

			if (
				currTimeToNumber > nowToMilliseconds &&
				currTimeToNumber < eventTime
			) {
				eventTime = currTimeToNumber;
			}
		}

		// If reached end of events, return the next earliest event date + 1 day
		if (eventTime === Infinity) {
			return {
				eventTime: new Date(bingo1 + 24 * 60 * 60 * 1000),
				eventName: 'Bingo',
			};
		}

		return {
			eventTime: new Date(eventTime),
			eventName: events[eventTime],
		};

		// If no upcoming event found, return the bingo1
	}
}

export default timeHelper;
