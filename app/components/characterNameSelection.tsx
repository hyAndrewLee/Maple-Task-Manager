type CharacterNameSelectionProps = {
	name: string;
	selected: boolean;
};

const CharacterNameSelection: React.FC<CharacterNameSelectionProps> = ({
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

export default CharacterNameSelection;
