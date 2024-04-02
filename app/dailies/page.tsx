'use client';
import { useEffect, useMemo, useState } from 'react';
import CharacterSelection from '../components/CharacterNameSelection';
import TaskSection from '../components/taskSection/taskSection';
import AddEditModal from '../components/addEditModal/AddEditModal';
import { DEFAULTUSERDATA, UserData } from '@/app/constants/defaults';
import Countdown from '@/app/components/Countdown';
import timeHelper from '../helpers/time';
import { uncheckTasks } from '../helpers/checkboxToggle';

const Daiies: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [userData, setUserData] = useState<UserData>();

	const time = new timeHelper();
	const { eventTime, eventName, eventStarting } = time.getNextEventInfo();

	useEffect(() => {
		const localStorageUserData = userData ?? localStorage.getItem('userData');

		if (!localStorageUserData) {
			localStorage.setItem('userData', JSON.stringify(DEFAULTUSERDATA));
			setUserData(DEFAULTUSERDATA);
			return;
		}
		const parsedUserData: UserData =
			typeof localStorageUserData === 'string'
				? JSON.parse(localStorageUserData)
				: localStorageUserData;

		// Uncheck all tasks if lastChecked is before last reset and now is past reset
		const previousReset = time.getPreviousMidnightUTC().getTime();

		if (previousReset > new Date(parsedUserData.lastChecked).getTime()) {
			uncheckTasks(parsedUserData, setUserData, false);
		} else {
			setUserData(parsedUserData);
		}

		const close = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				setIsModalOpen(false);
			}
		};
		window.addEventListener('keydown', close);
		return () => window.removeEventListener('keydown', close);
	}, []);

	const updateUserData = (updatedData: UserData) => {
		setUserData(updatedData);
	};

	const characterSelectionComponentArray = useMemo(() => {
		return userData?.characters.map((character, idx) => {
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
		return userData?.characters.find((character) => character.selected)!;
	}, [userData]);

	const toggleModalStatus = () => {
		setIsModalOpen(!isModalOpen);
	};

	return userData === undefined ? null : (
		<div className='flex justify-center my-2'>
			<div className='flex flex-col border rounded max-w-task-container min-h-task-content-box px-4'>
				<div className='flex flex-col w-full'>
					<div className='flex'>
						<div className='flex w-1/3 flex-wrap gap-4'>
							<Countdown
								style='border flex flex-col rounded items-center px-4 mt-2'
								endTime={time.getUpcomingMidnight()}
								updateUserData={updateUserData}
								userData={userData}
								type='daily'
							/>
							<Countdown
								style='border flex flex-col rounded items-center px-4 mt-2'
								endTime={eventTime}
								updateUserData={updateUserData}
								userData={userData}
								type='event'
								name={eventName}
								eventStarting={eventStarting}
							/>
						</div>

						<u className='flex justify-center mt-2 w-1/3'>
							{selectedCharacterData.name}'s Dailies
						</u>
						<button
							className='border rounded ml-auto h-8 w-32 mt-2'
							onClick={() => setIsModalOpen(!isModalOpen)}
						>
							Add/Edit Tasks
						</button>
					</div>
					<div className='flex justify-center content-between'>
						{...characterSelectionComponentArray!}
					</div>
				</div>
				<div className='flex flex-wrap justify-center gap-8 mt-2'>
					<TaskSection
						taskData={selectedCharacterData.dailies}
						charId={selectedCharacterData.id}
						updateData={updateUserData}
					/>
				</div>
			</div>
			{isModalOpen ? (
				<AddEditModal
					toggleModalStatus={toggleModalStatus}
					selectedCharDataId={selectedCharacterData.id}
					userData={userData}
					type='dailies'
				/>
			) : null}
		</div>
	);
};

export default Daiies;
