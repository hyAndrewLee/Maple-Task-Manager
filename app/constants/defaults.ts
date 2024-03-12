export type BaseTask = {
	name: string;
	image: string | null;
	hidden: boolean;
};

export type TaskGroups = {
	taskGroupName: string;
	tasks: BaseTask[];
};

export type TaskData = {
	taskGroups: TaskGroups[];
};

export type CharacterData = {
	name: string;
	dailies: TaskData;
	weeklies: TaskData;
	selected: boolean;
};

type UserData = {
	characters: CharacterData[];
};

const DEFAULTDAILIES: TaskData = {
	taskGroups: [
		{
			taskGroupName: 'bosses',
			tasks: [
				{
					name: 'Crimson Queen',
					image: null,
					hidden: false,
				},
				{
					name: 'Vellum',
					image: null,
					hidden: false,
				},
				{
					name: 'Pink Bean',
					image: null,
					hidden: false,
				},
				{
					name: 'Von Leon',
					image: null,
					hidden: false,
				},
				{
					name: 'Arkarium',
					image: null,
					hidden: false,
				},
				{
					name: 'Magnus',
					image: null,
					hidden: false,
				},
				{
					name: 'Ranmaru',
					image: null,
					hidden: false,
				},
			],
		},
		{
			taskGroupname: 'Tasks',
			tasks: [
				{
					name: 'Vote',
					image: null,
					hidden: false,
				},
				{
					name: 'Daily Gift',
					image: null,
					hidden: false,
				},
				{
					name: 'Legion Quest',
					image: null,
					hidden: false,
				},
				{
					name: 'Legion Coins',
					image: null,
					hidden: false,
				},
				{
					name: 'Dungeon',
					image: null,
					hidden: false,
				},
				{
					name: 'Tisk Food Storehouse',
					image: null,
					hidden: false,
				},
				{
					name: 'Minigames',
					image: null,
					hidden: false,
				},
				{
					name: 'Monster Park',
					image: null,
					hidden: false,
				},
			],
		},
		{
			taskGroupname: 'Arcane River',
			tasks: [
				{ name: 'Vanishing Journey', image: null, hidden: false },
				{ name: 'Chu Chu', image: null, hidden: false },
				{ name: 'Lachelein', image: null, hidden: false },
				{ name: 'Arcana', image: null, hidden: false },
				{ name: 'Morass', image: null, hidden: false },
				{ name: 'Esfera', image: null, hidden: false },
				{ name: 'Moonbridge', image: null, hidden: false },
				{ name: 'Labyrinth', image: null, hidden: false },
				{ name: 'Liminia', image: null, hidden: false },
			],
		},
		{
			taskGroupName: 'Grandis',
			tasks: [
				{ name: 'Cernium', image: null, hidden: false },
				{ name: 'Hotel Arcus', image: null, hidden: false },
				{ name: 'Odium', image: null, hidden: false },
				{ name: 'Shangri-La', image: null, hidden: false },
				{ name: 'Arteria', image: null, hidden: false },
				{ name: 'Carcion', image: null, hidden: false },
				{ name: "Erda's Request", image: null, hidden: false },
			],
		},
	],
};

const DEFAULTUSERDATA: UserData = {
	characters: [
		{
			name: 'default',
			dailies: DEFAULTDAILIES,
			weeklies: DEFAULTDAILIES,
			selected: true,
		},
	],
} as const;

export { DEFAULTUSERDATA };
