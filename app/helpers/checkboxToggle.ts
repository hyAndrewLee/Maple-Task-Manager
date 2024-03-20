import timeHelper from './time';
import { IndividualTaskProp } from '../components/taskSection/individualTask';
import { TaskGroups, UserData } from '../constants/defaults';

const checkedBox = ({
	groupName,
	taskIdx,
	charId,
	taskType,
	updateData,
}: Omit<IndividualTaskProp, 'task'>) => {
	const userData = localStorage.getItem('userData');

	if (userData === null) {
		return;
	}

	const parsedUserData: UserData = JSON.parse(userData);
	const selectedChar = parsedUserData.characters.find(
		(character) => character.id === charId
	)!;

	selectedChar[taskType].taskGroups.map((taskGroup) => {
		if (taskGroup.taskGroupName === groupName) {
			const task = taskGroup.tasks[taskIdx];

			// update lastChecked if flipping checked to true
			if (!task.checked) {
				parsedUserData.lastChecked = new timeHelper().getNewUTCDate();
			}

			task.checked = !task.checked;
			localStorage.setItem('userData', JSON.stringify(parsedUserData));
			updateData(parsedUserData);
			return;
		}
	});
};

const uncheckTasks = (
	parsedUserData: UserData,
	updateState: (uncheckedUserData: UserData) => void,
	shouldUncheckWeeklies: boolean
) => {
	parsedUserData.characters.forEach((character) => {
		uncheckAllDailies(character.dailies.taskGroups);

		if (shouldUncheckWeeklies) {
			uncheckAllWeeklies(character.weeklies.taskGroups);
		}
	});

	const deepDataClone = structuredClone(parsedUserData);

	localStorage.setItem('userData', JSON.stringify(deepDataClone));
	updateState(deepDataClone);
};

const uncheckAllWeeklies = (tasksGroups: TaskGroups[]) => {
	tasksGroups.forEach((group) => {
		group.tasks.forEach((task) => {
			task.checked = false;
		});
	});
};

const uncheckAllDailies = (tasksGroups: TaskGroups[]) => {
	tasksGroups.forEach((group) => {
		group.tasks.forEach((task) => {
			task.checked = false;
		});
	});
};

export { checkedBox, uncheckTasks };
