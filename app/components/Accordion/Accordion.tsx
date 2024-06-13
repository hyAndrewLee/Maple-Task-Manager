import { useState } from 'react';
import { TaskGroups } from '../../constants/defaults';
import NestedAccordion from './NestedAccordion';

type TimerInfo = {
	name: string;
	hour: string;
	minutes: string;
	seconds: string;
};

type AccordionProps = {
	data: TaskGroups[] | TimerInfo[];
};

const Accordion: React.FC<AccordionProps> = ({ data }) => {
	const [activeGroupIndex, setActiveGroupIndex] = useState<null | number>(null);
	const [activeTaskIndex, setActiveTaskIndex] = useState<null | number>(null);

	const handleGroupClick = (index: number) => {
		setActiveGroupIndex(index === activeGroupIndex ? null : index);
	};

	const accordionItems = data.map((ele, idx) => {
		const border = idx === data.length - 1 ? 'border' : 'border border-b-0';
		const margin = idx === 0 ? 'mt-4' : '';
		const isActive = activeGroupIndex === idx;
		/**
		 * Reformat time and create a countdown for the timers
		 */
		if ('name' in ele) {
			return (
				<div className='border'>
					<div>{ele.name}</div>
				</div>
			);
		} else {
			const items = ele.tasks.map((item, idx) => {
				return (
					<NestedAccordion data={item} isGroupActive={isActive} idx={idx} />
				);
			});

			return (
				<div>
					<div
						className={`border ${margin} select-none`}
						onClick={() => handleGroupClick(idx)}
					>
						{ele.taskGroupName}
					</div>
					<div
						className='overflow-y-hidden'
						style={{ height: isActive ? '' : 0 }}
					>
						{items}
					</div>
				</div>
			);
		}
	});

	return <div>{accordionItems}</div>;
};

export default Accordion;
