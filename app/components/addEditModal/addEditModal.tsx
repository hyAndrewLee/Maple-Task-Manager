import { CharacterData } from '@/app/constants/defaults';

type AddEditModal = {
	toggleModalStatus: () => void;
	selectedCharData: CharacterData;
};

const AddEditModal: React.FC<AddEditModal> = ({
	toggleModalStatus,
	selectedCharData,
}) => {
	return (
		<div className='backdrop-blur-sm fixed w-full h-full z-50 flex justify-center items-center inset-0'>
			<div className='border 1px w-2/4 h-3/5 bg-gray-500'>
				<div className='flex px-2 py-1 ml-auto'>
					<div className='ml-auto'>Edit Tasks</div>
					<button
						className='border rounded-2xl w-6 ml-auto'
						onClick={() => toggleModalStatus()}
					>
						X
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddEditModal;
