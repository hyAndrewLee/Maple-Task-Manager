type CharacterSelectionProps = {
	name: string;
	selected: boolean;
};

const CharacterSelection: React.FC<CharacterSelectionProps> = ({
	name,
	selected,
}) => {
	const border = selected ? 'border border-green-400' : 'border';
	return (
		<div className={`flex justify-center align-center w-20 ${border}`}>
			{name}
		</div>
	);
};

export default CharacterSelection;
