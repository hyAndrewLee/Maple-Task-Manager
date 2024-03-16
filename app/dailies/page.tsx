'use client';
import { useEffect, useMemo, useState } from 'react';
import AddChecklistItemModal from '../components/addChecklistItemModal';
import CharacterSelection from '../components/characterNameSelection';
import TaskSection from '../components/taskSection/taskSection';
import { DEFAULTUSERDATA, UserData } from '@/app/constants/defaults';
import Countdown from '@/app/components/countdown';
import timeHelper from '../helpers/time';
import { uncheckTasks } from '../helpers/checkboxToggle';

const Daiies: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [modelStatus, setModalStatus] = useState(false);
	const [userData, setUserData] = useState<UserData>(DEFAULTUSERDATA);

	const time = new timeHelper();
	const { eventTime, eventName } = time.getNextEventInfo();
	const updateUserData = (updatedData: UserData) => {
		setUserData(updatedData);
	};

	useEffect(() => {
		const userData = localStorage.getItem('userData');

		if (!userData) {
			localStorage.setItem('userData', JSON.stringify(DEFAULTUSERDATA));
			return;
		}
		const parsedUserData: UserData = JSON.parse(userData);

		// Uncheck all tasks if lastChecked is before last reset and now is past reset
		const previousReset = time.getPreviousMidnightUTC().getTime();
		if (
			previousReset > new Date(parsedUserData.lastChecked).getTime() &&
			time.getNewUTCDate().getTime() > previousReset
		) {
			uncheckTasks(parsedUserData, setUserData, false);
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
			<div className='flex flex-col border rounded max-w-task-container min-h-task-content-box px-4'>
				<div className='flex flex-col w-full'>
					<div className='flex'>
						<div className='flex w-1/3 flex-wrap'>
							<Countdown
								style='border flex flex-col rounded items-center px-4 mt-2'
								endTime={time.getUpcomingMidnight()}
								updateUserData={updateUserData}
								userData={userData}
								type='daily'
							/>
							<Countdown
								style='border flex flex-col rounded items-center px-4 mt-2 ml-4'
								endTime={eventTime}
								updateUserData={updateUserData}
								userData={userData}
								type='event'
								name={eventName}
							/>
						</div>

						<u className='flex justify-center mt-2 w-1/3'>
							{selectedCharacterData.name}'s Dailies
						</u>
						<button
							className='border rounded ml-auto h-8 w-32 mt-2'
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
				<div className='flex flex-wrap justify-center gap-8 mt-2'>
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
