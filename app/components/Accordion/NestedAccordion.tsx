import { BaseTask } from '@/app/constants/defaults';
import { useRef, useState } from 'react';

type NestedAccordionProps = {
	data: BaseTask;
	isGroupActive: boolean;
	idx: number;
};

const NestedAccordion: React.FC<NestedAccordionProps> = ({
	data,
	isGroupActive,
	idx,
}) => {
	const [activeTaskIndex, setActiveTaskIndex] = useState<null | number>(null);
	const handleTaskClick = (index: number) => {
		setActiveTaskIndex(index === activeTaskIndex ? null : index);
	};

	const ref = useRef<HTMLInputElement>(null);

	return (
		<div>
			<div
				className='bg-gray-300 border transition-all overflow-y-hidden'
				style={{ height: isGroupActive ? ref.current?.offsetHeight || 0 : 0 }}
			>
				<div ref={ref}>
					<div> {data.name}</div>
				</div>
			</div>
		</div>
	);
};

export default NestedAccordion;
