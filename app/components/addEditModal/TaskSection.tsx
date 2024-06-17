import { TaskGroups } from '@/app/constants/defaults';
import { useState } from 'react';
import TaskSectionItems from './TaskSectionItems';

type TaskSectionProps = {
	taskGroup: TaskGroups;
	isLastGroup: boolean;
	idx: number;
	isActive: boolean;
	handleGroupClick: (idx: number) => void;
};

const TaskSection: React.FC<TaskSectionProps> = ({
	taskGroup,
	isLastGroup,
	idx,
	isActive,
	handleGroupClick,
}) => {
	const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

	const borderStyle = isLastGroup ? '' : 'border-b-0';

	const handleItemClick = (idx: number) => {
		setActiveItemIndex(idx === activeItemIndex ? null : idx);
	};

	const taskItemsComponentsArray = () => {
		return taskGroup.tasks.map((task, idx) => (
			<TaskSectionItems
				task={task}
				handleItemClick={handleItemClick}
				idx={idx}
				key={`${task}-${idx}`}
			/>
		));
	};

	return (
		<div key={`task-${idx}`}>
			<div
				className={`flex flex-col border ${borderStyle} w-full`}
				onClick={() => handleGroupClick(idx)}
			>
				{taskGroup.taskGroupName}
			</div>
			{isActive ? taskItemsComponentsArray() : null}
		</div>
	);
};

export default TaskSection;
