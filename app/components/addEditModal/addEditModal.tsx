import {
	CharacterData,
	TaskGroupType,
	UserData,
} from '@/app/constants/defaults';
import CharacterSelection from '../CharacterNameSelection';
import { useCallback, useMemo, useState } from 'react';
import TaskSection from './TaskSection';
import Accordion from '../Accordion/Accordion';

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
	const [activeGroupIndex, setActiveGroupIndex] = useState<null | number>(null);
	const [activeItemIndex, setActiveItemIndex] = useState<null | number>(null);

	const typeToUpperCase = type[0].toUpperCase() + type.slice(1, type.length);
	const selectedCharData = useCallback(
		() =>
			userData.characters.find(
				(character: CharacterData) => (character.id = selectedCharDataId)
			)![type].taskGroups,
		[userData, selectedCharDataId, type]
	);

	const handleGroupClick = (index: number) => {
		setActiveGroupIndex(index === activeGroupIndex ? null : index);
	};

	const handleItemClick = (index: number) => {
		setActiveItemIndex(index === activeItemIndex ? null : index);
	};

	// Create accordion component so you can use it in timer as well.
	// We'll keep track of both group and item state in this file because we're going to nest the items into the accordion component.
	// TODO
	// const TaskGroupComponentArray = () =>
	// 	useMemo(() => {
	// 		const charData = selectedCharData();

	// 		return charData.map((taskGroup, idx) => {
	// 			const marginTop = idx === 0 ? 'mt-4' : '';

	// 			return (
	// 				<div className={marginTop}>
	// 					<TaskSection
	// 						taskGroup={taskGroup}
	// 						isLastGroup={idx === charData.length - 1}
	// 						idx={idx}
	// 						isActive={activeGroupIndex === idx}
	// 						handleGroupClick={handleGroupClick}
	// 					/>
	// 				</div>
	// 			);
	// 		});
	// 	}, [userData, activeGroupIndex]);

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
			<div className='overflow-auto border rounded 1px w-2/4 h-3/5 bg-gray-500'>
				<div className='flex px-2 py-1 justify-between'>
					<div className='w-1/3'></div>
					<div className='flex justify-center w-1/3'>
						Edit {typeToUpperCase}
					</div>
					<div className='flex justify-end w-1/3'>
						<button onClick={() => toggleModalStatus()}>X</button>
					</div>
				</div>
				<div className='flex justify-center'>{...listOfCharacters()}</div>
				{/* {...taskGroupComponentArray()} */}
				<Accordion data={selectedCharData()} />
			</div>
		</div>
	);
};

export default AddEditModal;
