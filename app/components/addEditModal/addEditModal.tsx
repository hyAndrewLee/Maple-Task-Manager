import {
	CharacterData,
	TaskGroupType,
	UserData,
} from '@/app/constants/defaults';
import CharacterSelection from '../CharacterNameSelection';

type AddEditModal = {
	toggleModalStatus: () => void;
	selectedCharDataId: string;
	userData: UserData;
	type: TaskGroupType;
};

const AddEditModal: React.FC<AddEditModal> = ({
	toggleModalStatus,
	selectedCharDataId,
	userData,
	type,
}) => {
	const typeToUpperCase = type[0].toUpperCase() + type.slice(1, type.length);

	const selectedCharData = userData.characters.find(
		(character: CharacterData) => (character.id = selectedCharDataId)
	)!.dailies;

	const listOfCharacters = () => {
		const characterList = [];
		for (const character of userData.characters) {
			characterList.push(
				<CharacterSelection
					name={character.name}
					selected={character.selected}
				/>
			);
		}

		return characterList;
	};

	return (
		<div className='backdrop-blur-sm fixed w-full h-full z-50 flex justify-center items-center inset-0'>
			<div className='border 1px w-2/4 h-3/5 bg-gray-500'>
				<div className='flex px-2 py-1 justify-between'>
					<div className='w-1/3'></div>
					<div className='flex justify-center w-1/3'>
						Edit {typeToUpperCase}
					</div>
					<div className='flex justify-end w-1/3'>
						<button
							className='border rounded-2xl w-6'
							onClick={() => toggleModalStatus()}
						>
							X
						</button>
					</div>
				</div>
				<div className='flex justify-center'>{...listOfCharacters()}</div>
			</div>
		</div>
	);
};

export default AddEditModal;
