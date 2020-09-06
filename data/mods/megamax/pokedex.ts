export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	venusaur: {
		inherit: true,
		otherFormes: ["Venusaur-Mega", "Venusaur-Gmax"],
	},
	venusaurgmax: {
		num: 3,
		name: "Venusaur-Gmax",
		baseSpecies: "Venusaur",
		forme: "Gmax",
		types: ["Grass", "Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 132, def: 93, spa: 100, spd: 120, spe: 100},
		abilities: {0: "Flower Veil"},
		heightm: 2.4,
		weightkg: 155.5,
		color: "Green",
		eggGroups: ["Monster", "Grass"],
		requiredItem: "Venusaurite Z",
		gen: 8,
	},
	charizard: {
		inherit: true,
		otherFormes: ["Charizard-Mega-X", "Charizard-Mega-Y", "Charizard-Gmax"],
	},
	charizardgmax: {
		num: 6,
		name: "Charizard-Gmax",
		baseSpecies: "Charizard",
		forme: "Gmax",
		types: ["Fire", "Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 78, atk: 94, def: 128, spa: 129, spd: 105, spe: 100},
		abilities: {0: "Multiscale"},
		heightm: 1.7,
		weightkg: 100.5,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
		requiredItem: "Charizardite Z",
		gen: 8,
	},
	blastoise: {
		inherit: true,
		otherFormes: ["Blastoise-Mega", "Blastoise-Gmax"],
	},
	blastoisegmax: {
		num: 9,
		name: "Blastoise-Gmax",
		baseSpecies: "Blastoise",
		forme: "Gmax",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 79, atk: 133, def: 115, spa: 95, spd: 130, spe: 78},
		abilities: {0: "Battle Armor"},
		heightm: 1.6,
		weightkg: 101.1,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
		requiredItem: "Blastoisinite Z",
		gen: 8,
	},
	butterfree: {
		inherit: true,
		otherFormes: ["Butterfree-Gmax"],
	},
	butterfreegmax: {
		num: 12,
		name: "Butterfree-Gmax",
		baseSpecies: "Butterfree",
		forme: "Gmax",
		types: ["Bug", "Fairy"],
		baseStats: {hp: 60, atk: 15, def: 110, spa: 110, spd: 130, spe: 70},
		abilities: {0: "Tinted Lens"},
		heightm: 1.1,
		weightkg: 32,
		color: "White",
		eggGroups: ["Bug"],
		requiredItem: "Butterfrite",
		gen: 8,
	},
	pikachu: {
		inherit: true,
		otherFormes: ["Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-Gmax", "Pikachu-World"],
	},
	pikachugmax: {
		num: 25,
		name: "Pikachu-Gmax",
		baseSpecies: "Pikachu",
		forme: "Gmax",
		types: ["Electric"],
		baseStats: {hp: 35, atk: 70, def: 55, spa: 70, spd: 75, spe: 115},
		abilities: {0: "Light Power"},
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Field", "Fairy"],
		requiredItem: "Pikachuite",
		gen: 8,
	},
	meowth: {
		inherit: true,
		otherFormes: ["Meowth-Alola", "Meowth-Galar", "Meowth-Gmax"],
	},
	meowthgmax: {
		num: 52,
		name: "Meowth-Gmax",
		baseSpecies: "Meowth",
		forme: "Gmax",
		types: ["Normal", "Dark"],
		baseStats: {hp: 40, atk: 55, def: 75, spa: 40, spd: 80, spe: 100},
		abilities: {0: "Truant"},
		heightm: 33,
		weightkg: 4.2,
		color: "Yellow",
		eggGroups: ["Field"],
		requiredItem: "Meowthite",
		gen: 8,
	},
	machamp: {
		inherit: true,
		otherFormes: ["Machamp-Gmax"],
	},
	machampgmax: {
		num: 68,
		name: "Machamp-Gmax",
		baseSpecies: "Machamp",
		forme: "Gmax",
		types: ["Fighting", "Fire"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 90, atk: 170, def: 100, spa: 65, spd: 95, spe: 85},
		abilities: {0: "Super Luck"},
		heightm: 1.6,
		weightkg: 130,
		color: "Gray",
		eggGroups: ["Human-Like"],
		requiredItem: "Machampite",
		gen: 8,
	},
	gengar: {
		inherit: true,
		otherFormes: ["Gengar-Mega", "Gengar-Gmax"],
	},
	gengargmax: {
		num: 94,
		name: "Gengar-Gmax",
		baseSpecies: "Gengar",
		forme: "Gmax",
		types: ["Ghost", "Psychic"],
		baseStats: {hp: 60, atk: 145, def: 90, spa: 100, spd: 90, spe: 115},
		abilities: {0: "Psycho Zone"},
		heightm: 1.4,
		weightkg: 40.5,
		color: "Purple",
		eggGroups: ["Amorphous"],
		requiredItem: "Gengarite X",
		gen: 8,
	},
	kingler: {
		inherit: true,
		otherFormes: ["Kingler-Gmax"],
	},
	kinglergmax: {
		num: 99,
		name: "Kingler-Gmax",
		baseSpecies: "Kingler",
		forme: "Gmax",
		types: ["Water", "Poison"],
		baseStats: {hp: 55, atk: 145, def: 160, spa: 50, spd: 70, spe: 95},
		abilities: {0: "Corrosive Pincers"},
		heightm: 1.3,
		weightkg: 60,
		color: "Red",
		eggGroups: ["Water 3"],
		requiredItem: "Kinglerite",
		gen: 8,
	},
	lapras: {
		inherit: true,
		otherFormes: ["Lapras-Gmax"],
	},
	laprasgmax: {
		num: 131,
		name: "Lapras-Gmax",
		baseSpecies: "Lapras",
		forme: "Gmax",
		types: ["Water", "Ice"],
		baseStats: {hp: 130, atk: 85, def: 90, spa: 115, spd: 103, spe: 112},
		abilities: {0: "Snow Warning"},
		heightm: 2.5,
		weightkg: 220,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
		requiredItem: "Laprasite",
		gen: 8,
	},
	eevee: {
		inherit: true,
		otherFormes: ["Eevee-Starter", "Eevee-Gmax"],
	},
	eeveegmax: {
		num: 133,
		name: "Eevee-Gmax",
		baseSpecies: "Eevee",
		forme: "Gmax",
		types: ["Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 55, atk: 105, def: 65, spa: 45, spd: 65, spe: 90},
		abilities: {0: "Protean"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Eevite",
		gen: 8,
	},
	snorlax: {
		inherit: true,
		otherFormes: ["Snorlax-Gmax"],
	},
	snorlaxgmax: {
		num: 143,
		name: "Snorlax-Gmax",
		baseSpecies: "Snorlax",
		forme: "Gmax",
		types: ["Normal", "Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 160, atk: 130, def: 125, spa: 65, spd: 130, spe: 30},
		abilities: {0: "Natural Cure"},
		heightm: 2.1,
		weightkg: 460,
		color: "Black",
		eggGroups: ["Monster"],
		requiredItem: "Snorlaxnite",
		gen: 8,
	},
	garbodor: {
		inherit: true,
		otherFormes: ["Garbodor-Gmax"],
	},
	garbodorgmax: {
		num: 569,
		name: "Garbodor-Gmax",
		baseSpecies: "Garbodor",
		forme: "Gmax",
		types: ["Poison"],
		baseStats: {hp: 80, atk: 105, def: 137, spa: 60, spd: 137, spe: 55},
		abilities: {0: "Neutralizing Gas"},
		heightm: 1.9,
		weightkg: 107.3,
		color: "Green",
		eggGroups: ["Mineral"],
		requiredItem: "Garbodite",
		gen: 8,
	},
	melmetal: {
		inherit: true,
		otherFormes: ["Melmetal-Gmax"],
	},
	melmetalgmax: {
		num: 809,
		name: "Melmetal-Gmax",
		baseSpecies: "Melmetal",
		forme: "Gmax",
		types: ["Steel"],
		gender: "N",
		baseStats: {hp: 135, atk: 163, def: 173, spa: 110, spd: 85, spe: 34},
		abilities: {0: "Bulletproof"},
		heightm: 2.5,
		weightkg: 800,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Melmetalite",
		gen: 8,
	},
	rillaboom: {
		inherit: true,
		otherFormes: ["Rillaboom-Gmax"],
	},
	rillaboomgmax: {
		num: 812,
		name: "Rillaboom-Gmax",
		baseSpecies: "Rillaboom",
		forme: "Gmax",
		types: ["Grass", "Rock"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 135, def: 160, spa: 70, spd: 110, spe: 55},
		abilities: {0: "Rock Head"},
		heightm: 2.1,
		weightkg: 90,
		color: "Green",
		eggGroups: ["Field", "Grass"],
		requiredItem: "Rillaboominite",
		gen: 8,
	},
	cinderace: {
		inherit: true,
		otherFormes: ["Cinderace-Gmax"],
	},
	cinderacegmax: {
		num: 815,
		name: "Cinderace-Gmax",
		baseSpecies: "Cinderace",
		forme: "Gmax",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 131, def: 120, spa: 75, spd: 115, spe: 109},
		abilities: {0: "Magic Guard"},
		heightm: 1.4,
		weightkg: 33,
		color: "White",
		eggGroups: ["Field", "Human-Like"],
		requiredItem: "Cinderite",
		gen: 8,
	},
	inteleon: {
		inherit: true,
		otherFormes: ["Inteleon-Gmax"],
	},
	inteleongmax: {
		num: 818,
		name: "Inteleon-Gmax",
		baseSpecies: "Inteleon",
		forme: "Gmax",
		types: ["Water", "Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 115, def: 85, spa: 130, spd: 85, spe: 145},
		abilities: {0: "Deep Focus"},
		heightm: 1.9,
		weightkg: 45.2,
		color: "Blue",
		eggGroups: ["Water 1", "Field"],
		requiredItem: "Inteleonite",
		gen: 8,
	},
	corviknight: {
		inherit: true,
		otherFormes: ["Corviknight-Gmax"],
	},
	corviknightgmax: {
		num: 823,
		name: "Corviknight-Gmax",
		baseSpecies: "Corviknight",
		forme: "Gmax",
		types: ["Flying", "Steel"],
		baseStats: {hp: 98, atk: 112, def: 145, spa: 53, spd: 120, spe: 67},
		abilities: {0: "Heatproof"},
		heightm: 2.2,
		weightkg: 75,
		color: "Purple",
		eggGroups: ["Flying"],
		requiredItem: "Corviknite",
		gen: 8,
	},
	orbeetle: {
		inherit: true,
		otherFormes: ["Orbeetle-Gmax"],
	},
	orbeetlegmax: {
		num: 826,
		name: "Orbeetle-Gmax",
		baseSpecies: "Orbeetle",
		forme: "Gmax",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60, atk: 45, def: 150, spa: 130, spd: 120, spe: 100},
		abilities: {0: "Psychic Surge"},
		heightm: 0.4,
		weightkg: 40.8,
		color: "Red",
		eggGroups: ["Bug"],
		requiredItem: "Orbite",
		gen: 8,
	},
	drednaw: {
		inherit: true,
		otherFormes: ["Drednaw-Gmax"],
	},
	drednawgmax: {
		num: 834,
		name: "Drednaw-Gmax",
		baseSpecies: "Drednaw",
		forme: "Gmax",
		types: ["Water", "Rock"],
		baseStats: {hp: 90, atk: 150, def: 115, spa: 53, spd: 78, spe: 99},
		abilities: {0: "Drizzle"},
		heightm: 1,
		weightkg: 115.5,
		color: "Green",
		eggGroups: ["Monster", "Water 1"],
		requiredItem: "Drednite",
		gen: 8,
	},
	coalossal: {
		inherit: true,
		otherFormes: ["Coalossal-Gmax"],
	},
	coalossalgmax: {
		num: 839,
		name: "Coalossal-Gmax",
		baseSpecies: "Coalossal",
		forme: "Gmax",
		types: ["Rock", "Fire"],
		baseStats: {hp: 110, atk: 140, def: 130, spa: 70, spd: 100, spe: 60},
		abilities: {0: "Desolate Land"},
		heightm: 2.8,
		weightkg: 310.5,
		color: "Black",
		eggGroups: ["Mineral"],
		requiredItem: "Coalossalite",
		gen: 8,
	},
	flapple: {
		inherit: true,
		otherFormes: ["Flapple-Gmax"],
	},
	flapplegmax: {
		num: 841,
		name: "Flapple-Gmax",
		baseSpecies: "Flapple",
		forme: "Gmax",
		types: ["Grass", "Dragon"],
		baseStats: {hp: 70, atk: 140, def: 95, spa: 85, spd: 80, spe: 115},
		abilities: {0: "Tinted Lens"},
		heightm: 0.3,
		weightkg: 1,
		color: "Green",
		eggGroups: ["Grass", "Dragon"],
		requiredItem: "Flappnite",
		gen: 8,
	},
	appletun: {
		inherit: true,
		otherFormes: ["Appletun-Gmax"],
	},
	appletungmax: {
		num: 842,
		name: "Appletun-Gmax",
		baseSpecies: "Appletun",
		forme: "Gmax",
		types: ["Grass", "Dragon"],
		baseStats: {hp: 110, atk: 85, def: 120, spa: 120, spd: 120, spe: 30},
		abilities: {0: "Regenerator"},
		heightm: 0.4,
		weightkg: 13,
		color: "Green",
		eggGroups: ["Grass", "Dragon"],
		requiredItem: "Appletunite",
		gen: 8,
	},
	sandaconda: {
		inherit: true,
		otherFormes: ["Sandaconda-Gmax"],
	},
	sandacondagmax: {
		num: 844,
		name: "Sandaconda-Gmax",
		baseSpecies: "Sandaconda",
		forme: "Gmax",
		types: ["Ground", "Flying"],
		baseStats: {hp: 72, atk: 145, def: 145, spa: 85, spd: 70, spe: 93},
		abilities: {0: "Aerilate"},
		heightm: 3.8,
		weightkg: 65.5,
		color: "Green",
		eggGroups: ["Field", "Dragon"],
		requiredItem: "Sandaconite",
		gen: 8,
	},
	toxtricity: {
		inherit: true,
		otherFormes: ["Toxtricity-Low-Key", "Toxtricity-Gmax", "Toxtricity-Low-Key-Gmax"],
	},
	toxtricitygmax: {
		num: 849,
		name: "Toxtricity-Gmax",
		baseSpecies: "Toxtricity",
		forme: "Gmax",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 106, def: 100, spa: 129, spd: 100, spe: 92},
		abilities: {0: "Contaminate"},
		heightm: 1.6,
		weightkg: 40,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: "Toxtricitite",
		gen: 8,
	},
	toxtricitylowkeygmax: {
		num: 849,
		name: "Toxtricity-Low-Key-Gmax",
		baseSpecies: "Toxtricity",
		forme: "Low-Key-Gmax",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 106, def: 100, spa: 129, spd: 100, spe: 92},
		abilities: {0: "Contaminate"},
		heightm: 1.6,
		weightkg: 40,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: "Toxtricitite",
		battleOnly: "Toxtricity-Low-Key",
		gen: 8,
	},
	centiskorch: {
		inherit: true,
		otherFormes: ["Centiskorch-Gmax"],
	},
	centiskorchgmax: {
		num: 851,
		name: "Centiskorch-Gmax",
		baseSpecies: "Centiskorch",
		forme: "Gmax",
		types: ["Fire", "Bug"],
		baseStats: {hp: 100, atk: 140, def: 70, spa: 120, spd: 110, spe: 85},
		abilities: {0: "Magic Bounce"},
		heightm: 3,
		weightkg: 120,
		color: "Red",
		eggGroups: ["Bug"],
		requiredItem: "Centiskorchite",
		gen: 8,
	},
	hatterene: {
		inherit: true,
		otherFormes: ["Hatterene-Gmax"],
	},
	hatterenegmax: {
		num: 858,
		name: "Hatterene-Gmax",
		baseSpecies: "Hatterene",
		forme: "Gmax",
		types: ["Psychic", "Fairy"],
		gender: "F",
		baseStats: {hp: 57, atk: 110, def: 110, spa: 151, spd: 153, spe: 29},
		abilities: {0: "Persistent"},
		heightm: 2.1,
		weightkg: 5.1,
		color: "Pink",
		eggGroups: ["Fairy"],
		requiredItem: "Hatterenite",
		gen: 8,
	},
	grimmsnarl: {
		inherit: true,
		otherFormes: ["Grimmsnarl-Gmax"],
	},
	grimmsnarlgmax: {
		num: 861,
		name: "Grimmsnarl-Gmax",
		baseSpecies: "Grimmsnarl",
		forme: "Gmax",
		types: ["Dark", "Fairy"],
		gender: "M",
		baseStats: {hp: 95, atk: 150, def: 85, spa: 125, spd: 95, spe: 60},
		abilities: {0: "Hustle"},
		heightm: 1.5,
		weightkg: 61,
		color: "Purple",
		eggGroups: ["Fairy", "Human-Like"],
		requiredItem: "Grimmsnarlite",
		gen: 8,
	},
	alcremie: {
		inherit: true,
		otherFormes: ["Alcremie-Gmax"],
	},
	alcremiegmax: {
		num: 869,
		name: "Alcremie-Gmax",
		baseSpecies: "Alcremie",
		forme: "Gmax",
		types: ["Fairy"],
		gender: "F",
		baseStats: {hp: 65, atk: 60, def: 95, spa: 130, spd: 151, spe: 94},
		abilities: {0: "Thick Fat"},
		heightm: 0.3,
		weightkg: 0.5,
		color: "White",
		eggGroups: ["Fairy", "Amorphous"],
		requiredItem: "Alcremite",
		gen: 8,
	},
	copperajah: {
		inherit: true,
		otherFormes: ["Copperajah-Gmax"],
	},
	copperajahgmax: {
		num: 879,
		name: "Copperajah-Gmax",
		baseSpecies: "Copperajah",
		forme: "Gmax",
		types: ["Steel"],
		baseStats: {hp: 122, atk: 165, def: 119, spa: 80, spd: 84, spe: 30},
		abilities: {0: "Defiant"},
		heightm: 3,
		weightkg: 950,
		color: "Green",
		eggGroups: ["Field", "Mineral"],
		requiredItem: "Copperajite",
		gen: 8,
	},
	duraludon: {
		inherit: true,
		otherFormes: ["Duraludon-Gmax"],
	},
	duraludongmax: {
		num: 884,
		name: "Duraludon-Gmax",
		baseSpecies: "Duraludon",
		forme: "Gmax",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 70, atk: 120, def: 140, spa: 160, spd: 50, spe: 95},
		abilities: {0: "Mega Launcher"},
		heightm: 43,
		weightkg: 0,
		color: "White",
		eggGroups: ["Mineral", "Dragon"],
		requiredItem: "Duraludite",
		gen: 8,
	},
	urshifu: {
		inherit: true,
		otherFormes: ["Urshifu-Rapid-Strike", "Urshifu-Gmax", "Urshifu-Rapid-Strike-Gmax"],
	},
	urshifugmax: {
		num: 892,
		name: "Urshifu-Gmax",
		baseSpecies: "Urshifu",
		forme: "Gmax",
		types: ["Fighting", "Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 160, def: 115, spa: 79, spd: 70, spe: 126},
		abilities: {0: "Nemesis"},
		heightm: 1.9,
		weightkg: 105,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Urshifusite",
		gen: 8,
	},
	urshifurapidstrikegmax: {
		num: 892,
		name: "Urshifu-Rapid-Strike-Gmax",
		baseSpecies: "Urshifu",
		forme: "Rapid-Strike-Gmax",
		types: ["Fighting", "Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 150, def: 140, spa: 83, spd: 70, spe: 107},
		abilities: {0: "Calming Tides"},
		heightm: 1.9,
		weightkg: 105,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Urshifusite",
		battleOnly: "Urshifu-Rapid-Strike",
		gen: 8,
	},
};
