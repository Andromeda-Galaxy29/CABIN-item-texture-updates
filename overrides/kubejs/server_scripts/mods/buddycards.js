//This mod can be removed from the pack with no issues
if(Platform.isLoaded("buddycards")) {
	onEvent('recipes', event => {
		let stone = Item.of(MC("cobblestone"), 1).withChance(.5)
		let experience = Item.of(CR("experience_nugget"), 1).withChance(0.75)

		event.recipes.createCrushing([Item.of("buddycards:luminis_crystal", 2), Item.of("buddycards:luminis_crystal", 1).withChance(.25), experience,stone], "buddycards:luminis_ore")

		event.recipes.createMilling(['3x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').processingTime(700)
		event.recipes.createCrushing(['6x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').processingTime(500)
		event.recipes.thermal.pulverizer(['9x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').energy(10000)

		//buddycard pack recipe change
		event.remove({ id:"buddycards:mystery_pack"})
		event.shapeless("buddycards:buddycard_pack_mystery", ["#buddycards:buddycard_packs", MC("diamond"), MC("emerald"), TE("ruby"), TE("sapphire")])
	})
}