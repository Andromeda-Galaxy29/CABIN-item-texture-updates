//Qol mod, not sure why you'd want to remove it but you can.
//This mod can be removed from the pack with no issues
if(Platform.isLoaded("portable_stonecutter")) {
	onEvent('recipes', event => {
		event.remove({ mod: 'portable_stonecutter' })
		event.smithing("portable_stonecutter:portable_stonecutter", "cb_microblock:stone_rod", MC("stonecutter"))
		event.smithing("portable_stonecutter:ender_portable_stonecutter", "portable_stonecutter:portable_stonecutter", MC("ender_pearl"))
	})
}