type CharacterSelectionProps = {
	name: string;
	selected: boolean;
};

const CharacterSelection: React.FC<CharacterSelectionProps> = ({
	name,
	selected,
}) => {
	const border = selected ? 'border border-green-300' : 'border';
	return (
		<div className={`flex justify-center align-center w-20 rounded ${border}`}>
			{name}
		</div>
	);
};

export default CharacterSelection;
