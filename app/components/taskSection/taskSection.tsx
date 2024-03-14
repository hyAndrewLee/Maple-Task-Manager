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

		return taskComponents;
	};

	return <>{...taskComponentArray()}</>;
};

export default TaskSection;
