'use client';
import { TaskGroups } from '@/app/constants/defaults';
import { useState } from 'react';

type EditTaskSectionProp = {
	taskGroups: TaskGroups[];
};

const EditTaskSection: React.FC<EditTaskSectionProp> = ({ taskGroups }) => {
	const [currentlyActive, setCurrentlyActive] = useState(0);

	const handleAccordianClick = (count) => {
		setCurrentlyActive(1)
	}

	const taskSections = () => {
		const sections = [];
		for (const taskGroup of taskGroups) {
			const tasks = [];

			for (const task of taskGroup.tasks) {
			}
		}
	};
};

export default EditTaskSection;
