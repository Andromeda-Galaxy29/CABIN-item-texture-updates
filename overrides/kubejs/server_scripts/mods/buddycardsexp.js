if(Platform.isLoaded("buddycardsexp")) {
	onEvent('recipes', event => {

		//buddybean crate dynamo fuel
		event.custom({'type': 'thermal:gourmand_fuel', 'ingredient': {'item': 'buddycardsexp:buddybean_crate'}, 'energy': 32000})
	})
}
