import { useFormik } from 'formik';

type AddChecklistItemModalProps = {
	toggleModelStatus: () => void;
};

const InputStyle = 'rounded';

const AddChecklistItemModal: React.FC<AddChecklistItemModalProps> = ({
	toggleModelStatus,
}) => {
	const initialValues = { taskName: '', imageURL: '' };

	const addToTaskList = () => {
		toggleModelStatus();
	};

	const formik = useFormik({
		initialValues,
		onSubmit: (values) => addToTaskList(),
	});

	return (
		<div className='fixed w-full h-full z-50 flex justify-center items-center inset-0'>
			<form
				className='flex flex-col justify-start'
				onSubmit={formik.handleSubmit}
			>
				<label>Task Name</label>
				<input
					className={InputStyle}
					id='taskName'
					name='taskName'
					onChange={formik.handleChange}
					value={formik.values.taskName}
				/>
				<label>Image URL</label>
				<input
					className={InputStyle}
					id='imageURL'
					name='imageURL'
					onChange={formik.handleChange}
					value={formik.values.imageURL}
				/>
				<div className='flex justify-between'>
					<button className='pl-4' type='submit'>
						Submit
					</button>
					<button className='pr-4' type='button' onClick={toggleModelStatus}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddChecklistItemModal;
