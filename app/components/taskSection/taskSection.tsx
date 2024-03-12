import { TaskData } from '@/app/constants/defaults';
import IndividualTask from './individualTask';

type TaskSectionProp = {
	taskData: TaskData;
};

const TaskSection: React.FC<TaskSectionProp> = ({ taskData }) => {
	const taskComponentArray = () => {
		const taskComponents = [];

		for (const sectionData of taskData.taskGroups) {
			const sectionName = sectionData.taskGroupName;
			const sectionTasks = [];

			for (const task of sectionData.tasks) {
				sectionTasks.push(<IndividualTask task={task} />);
			}

			console.log(sectionData);

			taskComponents.push(
				<section>
					<div>{sectionName}</div>
					<div>{...sectionTasks}</div>
				</section>
			);
		}

		return taskComponents;
	};

	return <div className='flex justify-between'>{...taskComponentArray()}</div>;
};

export default TaskSection;
