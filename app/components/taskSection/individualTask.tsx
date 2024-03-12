import { BaseTask } from '@/app/constants/defaults';
import Image from 'next/image';

type IndividualTaskProp = {
	task: BaseTask;
};

const IndividualTask: React.FC<IndividualTaskProp> = ({ task }) => {
	const loadImage = () => {
		const { image } = task;
		// TODO: Create default image
		const defaultImageSrc = 'https://example.com/default-image.jpg';

		// Check if the URL contains an image extension
		const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
		const isImage = imageExtensions.some((ext) => image?.endsWith(ext));

		if (isImage && task.image) {
			return (
				<Image src={task.image} alt='Loaded Image' width={40} height={40} />
			);
		} else {
			return (
				<Image
					src={defaultImageSrc}
					alt='Default Image'
					width={40}
					height={40}
				/>
			);
		}
	};

	const imageLoader = () => {
		return 'https://cdn.wikimg.net/en/strategywiki/images/e/e4/MS_NPC_Yoona.png';
	};
	return (
		<div className='border rounded flex justify-between mt-4'>
			<div>{task.name}</div>
			<Image
				loader={imageLoader}
				src='https://cdn.wikimg.net/en/strategywiki/images/e/e4/MS_NPC_Yoona.png'
				alt='Default Image'
				width={40}
				height={40}
			/>
			<input type='checkbox' />
		</div>
	);
};

export default IndividualTask;
