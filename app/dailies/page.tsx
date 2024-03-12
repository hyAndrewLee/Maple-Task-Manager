'use client';
import { useState } from 'react';
import AddChecklistItemModal from '../components/addChecklistItemModal';

type TaskType = {
	name: string;
	url: string | null;
};

type ListType = {
	[key: string]: TaskType;
};

const Daiies: React.FC = () => {
	const [modelStatus, setModalStatus] = useState(false);
	const [lists, setLists] = useState<ListType>({});

	const toggleModelStatus = () => {
		setModalStatus(!modelStatus);
	};

	return (
		<div>
			<div className='mx-40 mt-4 border'>
				<button
					onClick={() =>
						modelStatus ? setModalStatus(false) : setModalStatus(true)
					}
				>
					Add Task
				</button>
				{modelStatus ? (
					<AddChecklistItemModal toggleModelStatus={toggleModelStatus} />
				) : null}
			</div>
		</div>
	);
};

export default Daiies;
