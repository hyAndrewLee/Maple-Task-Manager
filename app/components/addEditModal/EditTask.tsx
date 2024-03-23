'use client';
import { BaseTask } from '@/app/constants/defaults';
import { useState } from 'react';

type EditTaskProp = {
	task: BaseTask;
};

const EditTask: React.FC<EditTaskProp> = ({ task }) => {
	const [taskOpened, setTaskOpened] = useState(false);

	const { name, image, hidden, checked } = task;
  
  return (
    <div>
      <div>{name}</div>
    </div>
  )
};

export default EditTask;
