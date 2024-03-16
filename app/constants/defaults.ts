import { v4 as uuidv4 } from 'uuid';
import { StaticImageData } from 'next/image';
import timeHelper from '../helpers/time';
import tooh from '@/public/assets/tooh.png';
import nori from '@/public/assets/nori.png';

export type TaskGroupType = 'dailies' | 'weeklies';

export type BaseTask = {
	name: string;
	image: string | StaticImageData;
	hidden: boolean;
	checked: boolean;
};

export type TaskGroups = {
	taskGroupName: string;
	tasks: BaseTask[];
	numHidden: number;
};

export type TaskData = {
	taskGroups: TaskGroups[];
	taskGroupType: TaskGroupType;
};

export type CharacterData = {
	id: string;
	name: string;
	dailies: TaskData;
	weeklies: TaskData;
	selected: boolean;
};

export type UserData = {
	characters: CharacterData[];
	lastChecked: Date;
};

const DEFAULTDAILIES: TaskData = {
	taskGroups: [
		{
			taskGroupName: 'Bosses',
			tasks: [
				{
					name: 'Crimson Queen',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/6/61/Mob_Wrathful_Crimson_Queen.png/revision/latest?cb=20130112134053',
					hidden: false,
					checked: false,
				},
				{
					name: 'Vellum',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/d/da/Mob_Vellum.png/revision/latest?cb=20130110185030',
					hidden: false,
					checked: false,
				},
				{
					name: 'Pink Bean',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/5/5f/Mob_Pink_Bean.png/revision/latest?cb=20100816123239',
					hidden: false,
					checked: false,
				},
				{
					name: 'Von Leon',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/4/41/Mob_Von_Leon.png/revision/latest?cb=20190417060030',
					hidden: false,
					checked: false,
				},
				{
					name: 'Arkarium',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/9/96/NPC_Arkarium.png/revision/latest?cb=20120207161354',
					hidden: false,
					checked: false,
				},
				{
					name: 'Magnus',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/d/d8/Mob_Magnus.png/revision/latest?cb=20120805080508',
					hidden: false,
					checked: false,
				},
				{
					name: 'Ranmaru',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/c/c2/Mob_Mori_Ranmaru.png/revision/latest?cb=20121217061710',
					hidden: false,
					checked: false,
				},
			],
			numHidden: 0,
		},
		{
			taskGroupName: 'Tasks',
			tasks: [
				{
					name: 'Vote',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/9/91/NPC_Strange_Ornate_Chest.png/revision/latest?cb=20160208034011',
					hidden: false,
					checked: false,
				},
				{
					name: 'Daily Gift',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/b/bb/NPC_Wonky_the_Fairy.png/revision/latest?cb=20121022012036',
					hidden: false,
					checked: false,
				},
				{
					name: 'Legion Quest',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/2/2c/NPC_Dame_Appropriation.png/revision/latest?cb=20170720223745',
					hidden: false,
					checked: false,
				},
				{
					name: 'Legion Coins',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/e/ea/NPC_Squire_Pancho_Sanza.png/revision/latest?cb=20170720223753',
					hidden: false,
					checked: false,
				},
				{
					name: 'Dungeon',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/7/74/NPC_Mystic_Gate.png/revision/latest?cb=20121121145611',
					hidden: false,
					checked: false,
				},
				{
					name: 'Tisk Food Storehouse',
					image: tooh,
					hidden: false,
					checked: false,
				},
				{
					name: 'Minigames',
					image: nori,
					hidden: false,
					checked: false,
				},
				{
					name: 'Monster Park',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/9/9f/NPC_Monster_Park_Shuttle.png/revision/latest?cb=20111029104957',
					hidden: false,
					checked: false,
				},
			],
			numHidden: 0,
		},
		{
			taskGroupName: 'Arcane River',
			tasks: [
				{
					name: 'Vanishing Journey',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/8/8c/NPC_Rona.png/revision/latest?cb=20170530221620',
					hidden: false,
					checked: false,
				},
				{
					name: 'Chu Chu',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/5/57/NPC_Master_Lyck.png/revision/latest?cb=20180721145233',
					hidden: false,
					checked: false,
				},
				{
					name: 'Lachelein',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/c/ce/NPC_Gray_Mask.png/revision/latest?cb=20240120090634',
					hidden: false,
					checked: false,
				},
				{
					name: 'Arcana',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/9/96/NPC_Tree_Spirits.png/revision/latest?cb=20180817195833',
					hidden: false,
					checked: false,
				},
				{
					name: 'Morass',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/b/bf/NPC_Jean_%28Morass%29.png/revision/latest?cb=20171210062641',
					hidden: false,
					checked: false,
				},
				{
					name: 'Esfera',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/7/73/NPC_Ollie.png/revision/latest?cb=20180721063435',
					hidden: false,
					checked: false,
				},
				{
					name: 'Moonbridge',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/e/ec/NPC_Velivah.png/revision/latest?cb=20190203174356',
					hidden: false,
					checked: false,
				},
				{
					name: 'Labyrinth',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/e/ec/NPC_Velivah.png/revision/latest?cb=20190203174356',
					hidden: false,
					checked: false,
				},
				{
					name: 'Liminia',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/e/ec/NPC_Velivah.png/revision/latest?cb=20190203174356',
					hidden: false,
					checked: false,
				},
			],
			numHidden: 0,
		},
		{
			taskGroupName: 'Grandis',
			tasks: [
				{
					name: 'Cernium',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/6/61/NPC_Flame_Priest.png/revision/latest?cb=20201230073711',
					hidden: false,
					checked: false,
				},
				{
					name: 'Hotel Arcus',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/2/24/NPC_Archelon.png/revision/latest?cb=20210722000528',
					hidden: false,
					checked: false,
				},
				{
					name: 'Odium',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/d/d4/NPC_Sya-sya.png/revision/latest?cb=20221217041140',
					hidden: false,
					checked: false,
				},
				{
					name: 'Shangri-La',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/4/42/NPC_Master_Tai_Yu.png/revision/latest?cb=20191230085543',
					hidden: false,
					checked: false,
				},
				{
					name: 'Arteria',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/1/17/NPC_Neinheart.png/revision/latest?cb=20110308155501',
					hidden: false,
					checked: false,
				},
				{
					name: 'Carcion',
					image:
						'https://static.wikia.nocookie.net/maplestory/images/8/86/NPC_Duhan.png/revision/latest?cb=20231130153138',
					hidden: false,
					checked: false,
				},
				{
					name: "Erda's Request",
					image:
						'https://static.wikia.nocookie.net/maplestory/images/7/78/NPC_The_Erda_Flow.png/revision/latest?cb=20231201125659',
					hidden: false,
					checked: false,
				},
			],
			numHidden: 0,
		},
	],
	taskGroupType: 'dailies',
};

const DEFAULTUSERDATA: UserData = {
	characters: [
		{
			id: uuidv4(),
			name: 'Default',
			dailies: DEFAULTDAILIES,
			weeklies: DEFAULTDAILIES,
			selected: true,
		},
	],
	lastChecked: new timeHelper().getNewUTCDate(),
} as const;

export { DEFAULTUSERDATA };
