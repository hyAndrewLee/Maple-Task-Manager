import timeHelper from './time';
import { IndividualTaskProp } from '../components/taskSection/individualTask';
import { TaskGroupType, UserData } from '../constants/defaults';

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

	parsedUserData.lastChecked = new timeHelper().newUTCDate();

	selectedChar[taskType].taskGroups.map((taskGroup) => {
		if (taskGroup.taskGroupName === groupName) {
			taskGroup.tasks[taskIdx].checked = !taskGroup.tasks[taskIdx].checked;
			localStorage.setItem('userData', JSON.stringify(parsedUserData));
			updateData(parsedUserData);
			return;
		}
	});
};

const uncheckAll = (
	charId: string,
	taskType: TaskGroupType,
	updateState: (updatedData: UserData) => void
) => {
	const userData = localStorage.getItem('userData');

	if (userData === null) {
		return;
	}

	const parsedUserData: UserData = JSON.parse(userData);

	parsedUserData.characters.map((character) => {
		if (charId === character.id) {
			character[taskType].taskGroups.forEach((group) => {
				group.tasks.forEach((task) => {
					task.checked = false;
				});
			});
		}
	});

	localStorage.setItem('userData', JSON.stringify(parsedUserData));
	updateState(parsedUserData);
};

export { checkedBox, uncheckAll };
