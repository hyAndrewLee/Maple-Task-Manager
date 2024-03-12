class timeHelper {
	private today = new Date();

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
		let durationString = '';
		if (days > 0) {
			durationString += `${days}d `;
		}
		if (hours > 0) {
			durationString += `${hours}h `;
		}
		if (minutes > 0) {
			durationString += `${minutes}m `;
		}
		if (seconds > 0) {
			durationString += `${seconds}s `;
		}

		return durationString.trim();
	}
}

export default timeHelper;
