import { TaskData, UserData } from '@/app/constants/defaults';
import IndividualTask from './individualTask';


type TaskSectionProp = {
	taskData: TaskData;
	charId: string;
	updateData: (updatedData: UserData) => void;
};

const TaskSection: React.FC<TaskSectionProp> = ({
	taskData,
	charId,
	updateData,
}) => {
	const taskComponentArray = () => {
		const taskComponents = [];

		for (const sectionData of taskData.taskGroups) {
			const sectionName = sectionData.taskGroupName;

			// Hides section if all are hidden
			if (sectionData.numHidden === sectionData.tasks.length) {
				continue;
			}

			// Must pass idx to modify task status in case there are duplicate names
			const sectionTasks = sectionData.tasks.map((task, idx) => {
				return (
					<IndividualTask
						task={task}
						groupName={sectionData.taskGroupName}
						taskIdx={idx}
						charId={charId}
						taskType={taskData.taskGroupType}
						updateData={updateData}
					/>
				);
			});

			taskComponents.push(
				<section className='flex flex-col items-center my-2'>
					<div>{sectionName}</div>
					<div>{...sectionTasks}</div>
				</section>
			);
		}

		if (!taskComponents.length) {
			taskComponents.push(
				<div className='w-screen'>
					All dailies are hidden, add or edit to reveal tasks
				</div>
			);
		}

		return taskComponents;
	};

	return <>{...taskComponentArray()}</>;
};

export default TaskSection;
