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
import solErdaBooster from '@/public/static/erdaFrag.webp';
import akechi from '@/public/static/akechi.webp';
import blackMage from '@/public/static/blackMage.webp';
import cygnus from '@/public/static/cygnus.webp';
import damien from '@/public/static/damien.webp';
import dNell from '@/public/static/dNell.webp';
import gloom from '@/public/static/gloom.webp';
import hilla from '@/public/static/hilla.webp';
import kaling from '@/public/static/kaling.webp';
import kalos from '@/public/static/kalos.webp';
import lotus from '@/public/static/lotus.webp';
import lucid from '@/public/static/lucid.webp';
import papulatus from '@/public/static/papulatus.webp';
import pierre from '@/public/static/pierre.webp';
import pNo from '@/public/static/pNo.webp';
import seren from '@/public/static/seren.webp';
import slime from '@/public/static/slime.webp';
import vHilla from '@/public/static/vHilla.webp';
import vonBon from '@/public/static/vonBon.webp';
import will from '@/public/static/will.webp';
import zakum from '@/public/static/zakum.webp';
import erdaSpectrum from '@/public/static/erdaSpectrum.png';
import esferaGuradian from '@/public/static/esferaGuardian.png';
import hungryMuto from '@/public/static/hungryMuto.png';
import midnightChaser from '@/public/static/midnightChaser.png';
import ranheimDefense from '@/public/static/ranheimDefense.png';
import spiritSaviour from '@/public/static/spiritSaviour.png';

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
				{
					name: 'Sol Erda Booster',
					image: solErdaBooster,
					hidden: false,
					checked: false,
				},
			],
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
		},
	],
	taskGroupType: 'dailies',
};

const DEFAULTWEEKLIES: TaskData = {
	taskGroups: [
		{
			taskGroupName: 'Bosses',
			tasks: [
				{
					name: 'Hilla',
					image: hilla,
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
					name: 'Cygnus',
					image: cygnus,
					hidden: false,
					checked: false,
				},
				{
					name: 'Zakum',
					image: zakum,
					hidden: false,
					checked: false,
				},
				{
					name: 'Pierre',
					image: pierre,
					hidden: false,
					checked: false,
				},
				{
					name: 'Von Bon',
					image: vonBon,
					hidden: false,
					checked: false,
				},
				{
					name: 'Crimson Queen',
					image: crimsonQueen,
					hidden: false,
					checked: false,
				},
				{
					name: 'Papulatus',
					image: papulatus,
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
					name: 'Magnus',
					image: magnus,
					hidden: false,
					checked: false,
				},
				{
					name: 'Lotus',
					image: lotus,
					hidden: false,
					checked: false,
				},
				{
					name: 'Damien',
					image: damien,
					hidden: false,
					checked: false,
				},
				{
					name: 'Akechi Mitsuhide',
					image: akechi,
					hidden: false,
					checked: false,
				},
				{
					name: 'Gaurdian Angel Slime',
					image: slime,
					hidden: false,
					checked: false,
				},
				{
					name: 'Lucid',
					image: lucid,
					hidden: false,
					checked: false,
				},
				{
					name: 'Will',
					image: will,
					hidden: false,
					checked: false,
				},
				{
					name: 'Gloom',
					image: gloom,
					hidden: false,
					checked: false,
				},
				{
					name: 'Verus Hilla',
					image: vHilla,
					hidden: false,
					checked: false,
				},
				{
					name: 'Darknell',
					image: dNell,
					hidden: false,
					checked: false,
				},
				{
					name: 'Seren',
					image: seren,
					hidden: false,
					checked: false,
				},
				{
					name: 'Kalos',
					image: kalos,
					hidden: false,
					checked: false,
				},
				{
					name: 'Kaling',
					image: kaling,
					hidden: false,
					checked: false,
				},
			],
		},
		{
			taskGroupName: 'Arcane River',
			tasks: [
				{
					name: 'Erda Spectrum',
					image: erdaSpectrum,
					checked: false,
					hidden: false,
				},
				{
					name: 'Hungry Muto',
					image: hungryMuto,
					checked: false,
					hidden: false,
				},
				{
					name: 'Midnight Chaser',
					image: midnightChaser,
					checked: false,
					hidden: false,
				},
				{
					name: 'Ranheim Defense',
					image: ranheimDefense,
					checked: false,
					hidden: false,
				},
				{
					name: 'Spirit Saviour',
					image: spiritSaviour,
					checked: false,
					hidden: false,
				},
			],
		},
		{
			taskGroupName: 'Biweekly',
			tasks: [
				{
					name: 'Black Mage',
					image: blackMage,
					checked: false,
					hidden: false,
				},
			],
		},
	],
	taskGroupType: 'weeklies',
};

const DEFAULTUSERDATA: UserData = {
	characters: [
		{
			id: uuidv4(),
			name: 'Default',
			dailies: DEFAULTDAILIES,
			weeklies: DEFAULTWEEKLIES,
			selected: true,
		},
	],
	lastChecked: new timeHelper().getNewUTCDate(),
} as const;

export { DEFAULTUSERDATA };
