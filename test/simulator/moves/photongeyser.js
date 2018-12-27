'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe(`Photon Geyser`, function () {
	afterEach(() => battle.destroy());
  
  it('should become physical when Attack stat is higher than Special Attack stat', function () {
		battle = common.createBattle();
		battle.join('p1', 'Guest 1', 1, [{species: "Necrozma-Dusk-Mane", ability: 'prismarmor', moves: ['photongeyser']}]);
		battle.join('p2', 'Guest 2', 1, [{species: "Mew", ability: 'synchronize', item: 'keeberry', moves: ['counter']}]);
		battle.makeChoices('move photongeyser', 'move counter');
    assert.statStage(p2.active[0], 'def', 1, "Physical Photon Geyser should trigger Kee Berry");
    assert.false.fullHP(p1.active[0], "Physical Photon Geyser should be susceptible to Counter");
  });

  it('should determine which attack stat is higher after factoring in stat stages, but no other kind of modifier', function () {
		battle = common.createBattle();
		battle.join('p1', 'Guest 1', 1, [{species: "Latias", ability: 'hugepower', item: 'choiceband', moves: ['photongeyser']}]);
		battle.join('p2', 'Guest 2', 1, [{species: "Scizor-Mega", ability: 'technician', item: 'keeberry', moves: ['strugglebug', 'sleeptalk']}]);
		battle.makeChoices('move photongeyser', 'move strugglebug'); //should be special this turn (196 vs. 256)
    assert.statStage(p2.active[0], 'def', 0, "incorrectly swayed by Choice Band and/or Huge Power");
    battle.makeChoices('move photongeyser', 'move sleeptalk'); //should be physical this turn (196 vs. 170)
    assert.statStage(p2.active[0], 'def', 1, "not correctly swayed by a stat drop");
  });

  it('should ignore abilities the same way as Mold Breaker', function () {
		battle = common.createBattle();
		battle.join('p1', 'Guest 1', 1, [{species: "Necrozma", ability: 'prismarmor', moves: ['photongeyser']}]);
		battle.join('p2', 'Guest 2', 1, [{species: "Mimikyu", ability: 'disguise', moves: ['splash']}]);
		battle.makeChoices('move photongeyser', 'move splash');
    assert.false.fullHP(p2.active[0]);
  });

	it(`should not ignore abilities when called as a submove of another move`, function () {
		battle = common.createBattle();
		battle.join('p1', 'Guest 1', 1, [
			{species: 'Liepard', ability: 'prankster', moves: ['assist', 'copycat', 'sleeptalk', 'photongeyser']},
			{species: 'Necrozma', ability: 'prismarmor', moves: ['photongeyser']},
		]);
    battle.join('p2', 'Guest 2', 1, [{species: 'Bruxish', ability: 'dazzling', moves: ['photongeyser', 'spore']}]);
    let pokemon = battle.p2.active[0];
		battle.makeChoices('move assist', 'move photongeyser');
    assert.fullHP(p2.active[0], "incorrectly ignores abilities through Assist");
    pokemon.hp = pokemon.maxhp;
		battle.makeChoices('move copycat', 'move spore');
    assert.fullHP(p2.active[0]), "incorrectly ignores abilities through Copycat");
    pokemon.hp = pokemon.maxhp;
		battle.makeChoices('move sleeptalk', 'move photongeyser');
    assert.fullHP(p2.active[0], "incorrectly ignores abilities through Sleep Talk");
	});

  it(`should ignore abilities when called as a submove by a Pokemon that also has Mold Breaker`, function () {
		battle = common.createBattle();
		battle.join('p1', 'Guest 1', 1, [{species: 'Pangoro', ability: 'moldbreaker', moves: ['sleeptalk', 'photongeyser']}]);
    battle.join('p2', 'Guest 2', 1, [{species: 'Mimikyu', ability: 'disguise', moves: ['spore']}]);
		battle.makeChoices('move sleeptalk', 'move spore');
    assert.false.fullHP(p2.active[0]);
	});
});
