import { v4 as uuidv4 } from 'uuid';
import { StaticImageData } from 'next/image';
import timeHelper from '../helpers/time';
import tooh from '@/public/static/tooh.png';
import nori from '@/public/static/nori.png';
import vellum from '@/public/static/vellum.webp';
import crimsonQueen from '@/public/static/crimsonQueen.webp';
import pinkBean from '@/public/static/pinkBean.webp';
import vonLeon from '@/public/static/vonLeon.webp';
import arkarium from '@/public/static/arkarium.webp';
import magnus from '@/public/static/magnus.webp';
import ranmaru from '@/public/static/ranmaru.webp';
import vote from '@/public/static/vote.webp';
import dailyGift from '@/public/static/dailyGift.webp';
import legionQuest from '@/public/static/legionQuest.webp';
import legionCoin from '@/public/static/legionCoins.webp';
import dungeon from '@/public/static/dungeon.webp';
import monsterPark from '@/public/static/monsterPark.webp';
import vanishingJourneyDaily from '@/public/static/vanishingJourneyDaily.webp';
import chuchuDaily from '@/public/static/chuChuDaily.webp';
import lacheleinDaily from '@/public/static/lacheleinDaily.webp';
import arcanaDaily from '@/public/static/arcanaDaily.webp';
import morassDaily from '@/public/static/morassDaily.webp';
import esferaDaily from '@/public/static/esferaDaily.webp';
import teneDaily from '@/public/static/teneDaily.webp';
import cernium from '@/public/static/cernium.webp';
import hotel from '@/public/static/hotel.webp';
import odium from '@/public/static/odium.webp';
import shangrila from '@/public/static/shangrila.webp';
import arteria from '@/public/static/arteria.webp';
import carcion from '@/public/static/carcion.webp';
import erdaRequest from '@/public/static/erdasRequest.webp';

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
					image: crimsonQueen,
					hidden: false,
					checked: false,
				},
				{
					name: 'Vellum',
					image: vellum,
					hidden: false,
					checked: false,
				},
				{
					name: 'Pink Bean',
					image: pinkBean,
					hidden: false,
					checked: false,
				},
				{
					name: 'Von Leon',
					image: vonLeon,
					hidden: false,
					checked: false,
				},
				{
					name: 'Arkarium',
					image: arkarium,
					hidden: false,
					checked: false,
				},
				{
					name: 'Magnus',
					image: magnus,
					hidden: false,
					checked: false,
				},
				{
					name: 'Ranmaru',
					image: ranmaru,
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
					image: vote,
					hidden: false,
					checked: false,
				},
				{
					name: 'Daily Gift',
					image: dailyGift,
					hidden: false,
					checked: false,
				},
				{
					name: 'Legion Quest',
					image: legionQuest,
					hidden: false,
					checked: false,
				},
				{
					name: 'Legion Coins',
					image: legionCoin,
					hidden: false,
					checked: false,
				},
				{
					name: 'Dungeon',
					image: dungeon,
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
					image: monsterPark,
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
					image: vanishingJourneyDaily,
					hidden: false,
					checked: false,
				},
				{
					name: 'Chu Chu',
					image: chuchuDaily,
					hidden: false,
					checked: false,
				},
				{
					name: 'Lachelein',
					image: lacheleinDaily,
					hidden: false,
					checked: false,
				},
				{
					name: 'Arcana',
					image: arcanaDaily,
					hidden: false,
					checked: false,
				},
				{
					name: 'Morass',
					image: morassDaily,
					hidden: false,
					checked: false,
				},
				{
					name: 'Esfera',
					image: esferaDaily,
					hidden: false,
					checked: false,
				},
				{
					name: 'Moonbridge',
					image: teneDaily,
					hidden: false,
					checked: false,
				},
				{
					name: 'Labyrinth',
					image: teneDaily,
					hidden: false,
					checked: false,
				},
				{
					name: 'Liminia',
					image: teneDaily,
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
					image: cernium,
					hidden: false,
					checked: false,
				},
				{
					name: 'Hotel Arcus',
					image: hotel,
					hidden: false,
					checked: false,
				},
				{
					name: 'Odium',
					image: odium,
					hidden: false,
					checked: false,
				},
				{
					name: 'Shangri-La',
					image: shangrila,
					hidden: false,
					checked: false,
				},
				{
					name: 'Arteria',
					image: arteria,
					hidden: false,
					checked: false,
				},
				{
					name: 'Carcion',
					image: carcion,
					hidden: false,
					checked: false,
				},
				{
					name: "Erda's Request",
					image: erdaRequest,
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
