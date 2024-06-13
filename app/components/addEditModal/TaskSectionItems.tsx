import { BaseTask } from '@/app/constants/defaults';

type TaskProps = {
	task: BaseTask;
	idx: number;
	handleItemClick: (idx: number) => void;
};

const TaskSectionItems: React.FC<TaskProps> = ({
	task,
	idx,
	handleItemClick,
}) => {
	const { name } = task;

	return (
		<div className='border bg-gray-300' onClick={() => handleItemClick(idx)}>
			{name}
		</div>
	);
};

export default TaskSectionItems;
