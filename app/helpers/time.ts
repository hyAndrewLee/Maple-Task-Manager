import { TaskData } from '../constants/defaults';
import { uncheckAll } from './checkboxToggle';

type FormatTimeReturnType = {
	formattedDays: string;
	formattedHours: string;
	formattedMinutes: string;
	formattedSeconds: string;
};

class timeHelper {
	private today = new Date();

	getNextDayMidnightUTC(): Date {
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

	getDuration(date1: Date, date2: Date): string {
		// Calculate the difference in milliseconds
		const differenceInMilliseconds: number = Math.abs(
			date1.getTime() - date2.getTime()
		);

		// Convert milliseconds to days, hours, minutes, and seconds
		const days: number = Math.floor(
			differenceInMilliseconds / (1000 * 60 * 60 * 24)
		);
		const hours: number = Math.floor(
			(differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes: number = Math.floor(
			(differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
		);
		const seconds: number = Math.floor(
			(differenceInMilliseconds % (1000 * 60)) / 1000
		);

		// Construct the duration string
		const {
			formattedDays,
			formattedHours,
			formattedMinutes,
			formattedSeconds,
		} = this.formatTime(days, hours, minutes, seconds);
		const durationString =
			formattedDays + formattedHours + formattedMinutes + formattedSeconds;

		return durationString;
	}

	formatTime(
		days: number,
		hours: number,
		minutes: number,
		seconds: number
	): FormatTimeReturnType {
		const formattedTime: FormatTimeReturnType = {
			formattedDays: ``,
			formattedHours: '',
			formattedMinutes: '',
			formattedSeconds: '',
		};

		if (days) {
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

		return formattedTime;
	}

	newUTCDate(now = new Date()) {
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

	getPreviousDayMidnightUTC(): Date {
		const today = this.newUTCDate();
		const yesterday = this.newUTCDate(today);
		yesterday.setUTCDate(today.getUTCDate() - 1); // Set the date to yesterday
		yesterday.setUTCHours(0, 0, 0, 0); // Set time to midnight UTC
		return yesterday;
	}
}

export default timeHelper;
