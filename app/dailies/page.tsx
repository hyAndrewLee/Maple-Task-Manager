'use client';
import { useEffect, useMemo, useState } from 'react';
import AddChecklistItemModal from '../components/addChecklistItemModal';
import CharacterSelection from './characterNameSelection';
import TaskSection from '../components/taskSection/taskSection';
import { DEFAULTUSERDATA, CharacterData } from '@/app/constants/defaults';
import timeHelper from '@/app/helpers/time';
import Countdown from '@/app/components/countdown';

const Daiies: React.FC = () => {
	const [modelStatus, setModalStatus] = useState(false);
	const [charactersData, setCharactersData] = useState<CharacterData[]>(
		DEFAULTUSERDATA.characters
	);

	useEffect(() => {
		const userData = localStorage.getItem('userData');

		if (!userData) {
			localStorage.setItem('userData', JSON.stringify(DEFAULTUSERDATA));
			return;
		}

		setCharactersData(JSON.parse(userData).characters);
	}, []);

	const characterSelectionComponentArray = useMemo(() => {
		return charactersData.map((character, idx) => {
			return (
				<CharacterSelection
					key={`character-${idx}`}
					name={character.name}
					selected={character.selected}
				/>
			);
		});
	}, [charactersData]);

	const selectedCharacterTasks = useMemo(() => {
		for (const character of charactersData) {
			if (character.selected) {
				return character.dailies;
			}
		}
	}, [charactersData]);

	const selectedCharacterName = useMemo(() => {
		return charactersData.map((character) =>
			character.selected ? (
				<u className='mt-2'>{character.name}'s Dailies</u>
			) : null
		);
	}, [charactersData]);

	const toggleModelStatus = () => {
		setModalStatus(!modelStatus);
	};

	return (
		<div className='mx-40 mt-4 border h-96'>
			<div>
				<div className='flex justify-between '>
					<Countdown
						style='border flex flex-col items-center w-28 mt-2 ml-2'
						endTime={new timeHelper().getNextDayMidnightUTC()}
					/>
					{...selectedCharacterName}
					<button
						className='border h-8 w-28 mt-2 mr-2'
						onClick={() =>
							modelStatus ? setModalStatus(false) : setModalStatus(true)
						}
					>
						Add/Edit Tasks
					</button>
				</div>
				<div className='flex justify-center content-between'>
					{...characterSelectionComponentArray}
				</div>
				{modelStatus ? (
					<AddChecklistItemModal toggleModelStatus={toggleModelStatus} />
				) : null}
			</div>
			<div className='mt-8'>
				{selectedCharacterTasks ? (
					<TaskSection taskData={selectedCharacterTasks} />
				) : null}
			</div>
		</div>
	);
};

export default Daiies;
