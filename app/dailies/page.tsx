'use client';
import { useEffect, useMemo, useState } from 'react';
import AddChecklistItemModal from '../components/addChecklistItemModal';
import CharacterSelection from '../components/characterNameSelection';
import TaskSection from '../components/taskSection/taskSection';
import { DEFAULTUSERDATA, UserData } from '@/app/constants/defaults';
import Countdown from '@/app/components/countdown';
import timeHelper from '../helpers/time';
import { uncheckAll } from '../helpers/checkboxToggle';

const Daiies: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [modelStatus, setModalStatus] = useState(false);
	const [userData, setUserData] = useState<UserData>(DEFAULTUSERDATA);

	const time = new timeHelper();

	const updateUserData = (updatedData: UserData) => {
		localStorage.setItem('userData', JSON.stringify(updatedData));

		setUserData(updatedData);
	};

	useEffect(() => {
		const userData = localStorage.getItem('userData');

		if (!userData) {
			localStorage.setItem('userData', JSON.stringify(DEFAULTUSERDATA));
			return;
		}
		const parsedUserData: UserData = JSON.parse(userData);

		if (
			time.getPreviousDayMidnightUTC().getTime() >=
			new Date(parsedUserData.lastChecked).getTime()
		) {
			const selectedChar = parsedUserData.characters.find(
				(character) => character.selected
			)!;
			uncheckAll(selectedChar.id, 'dailies', updateUserData);
		}

		setUserData(parsedUserData);
		setLoading(false);
	}, []);

	const characterSelectionComponentArray = useMemo(() => {
		return userData.characters.map((character, idx) => {
			return (
				<CharacterSelection
					key={`character-${idx}`}
					name={character.name}
					selected={character.selected}
				/>
			);
		});
	}, [userData]);

	const selectedCharacterData = useMemo(() => {
		return userData.characters.find((character) => character.selected)!;
	}, [userData]);

	const toggleModelStatus = () => {
		setModalStatus(!modelStatus);
	};
	return loading ? (
		<></>
	) : (
		<div className='flex justify-center my-4'>
			<div className='flex flex-col border max-w-screen-xl min-h-task-content-box px-4'>
				<div className='flex flex-col w-full'>
					<div className='flex justify-between'>
						<Countdown
							style='border flex flex-col items-center w-28 mt-2 ml-2'
							endTime={time.getNextDayMidnightUTC()}
							dataType={selectedCharacterData.dailies.taskGroupType}
							id={selectedCharacterData.id}
							lastUpdated={userData.lastChecked}
							updateUserData={updateUserData}
						/>
						<u className='mt-2'>{selectedCharacterData.name}'s Dailies</u>
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
				<div className='flex flex-wrap justify-center gap-8'>
					<TaskSection
						taskData={selectedCharacterData.dailies}
						charId={selectedCharacterData.id}
						updateData={updateUserData}
					/>
				</div>
			</div>
		</div>
	);
};

export default Daiies;
