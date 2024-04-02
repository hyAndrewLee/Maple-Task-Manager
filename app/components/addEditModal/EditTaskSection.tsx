'use client';
import { TaskGroups } from '@/app/constants/defaults';
import { useState } from 'react';

type EditTaskSectionProp = {
	taskGroups: TaskGroups[];
};

const EditTaskSection: React.FC<EditTaskSectionProp> = ({ taskGroups }) => {
	const [shouldCloseAllAccordian, setShouldCloseAllAccordian] = useState(false);

	const handleAccordianClick = () => {
		setShouldCloseAllAccordian(true);
		setShouldCloseAllAccordian(false);
	};

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
