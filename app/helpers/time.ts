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
}

export default timeHelper;
