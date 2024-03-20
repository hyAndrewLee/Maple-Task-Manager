import { BaseTask, TaskGroupType, UserData } from '@/app/constants/defaults';
import { checkedBox } from '@/app/helpers/checkboxToggle';
import Image from 'next/image';

export type IndividualTaskProp = {
	task: BaseTask;
	groupName: string;
	taskIdx: number;
	charId: string;
	taskType: TaskGroupType;
	updateData: (updatedData: UserData) => void;
};

const IndividualTask: React.FC<IndividualTaskProp> = ({
	task,
	groupName,
	taskIdx,
	charId,
	taskType,
	updateData,
}) => {
	const onInputToggle = () => {
		checkedBox({ groupName, taskIdx, charId, taskType, updateData });
	};

	return (
		<div
			className='hover:cursor-pointer flex border rounded items-center justify-between mt-3 w-64 h-16 px-2 select-none'
			onClick={onInputToggle}
		>
			<div className='relative w-14 h-12'>
				<Image
					src={task.image}
					alt='task image'
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					style={{ objectFit: 'contain', zIndex: -1 }}
					priority={true}
				/>
			</div>

			<label htmlFor='task-checkbox' className='flex w-full'>
				<div className='ml-auto'>{task.name}</div>
				<input
					className='hover:cursor-pointer hover:shadow hover:shadow-slate-700 border border-gray-500 rounded bg-white w-4 h-4 ml-auto'
					type='checkbox'
					checked={task.checked}
					readOnly
				/>
			</label>
		</div>
	);
};

export default IndividualTask;
