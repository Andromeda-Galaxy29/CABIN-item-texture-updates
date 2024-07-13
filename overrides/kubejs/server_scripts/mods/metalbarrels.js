//Metal barrels is a part of CABIN by default but many people may prefer other storage mods
//This mod can be removed from the pack with no issues
if(Platform.isLoaded("metalbarrels")) {
	onEvent('recipes', event => {
		event.remove({ mod: "metalbarrels" })

		createMachine(MC("barrel"), event, "metalbarrels:copper_barrel", "alloyed:bronze_ingot")
		createMachine(MC("barrel"), event, "metalbarrels:silver_barrel", "forbidden_arcanus:rune")
		createMachine(MC("barrel"), event, "metalbarrels:iron_barrel", "thermal:invar_ingot")
		createMachine(MC("barrel"), event, "metalbarrels:gold_barrel", TC("cobalt_ingot"))

		event.shapeless("metalbarrels:wood_to_copper", ["metalbarrels:copper_barrel"])
		event.shapeless("metalbarrels:wood_to_iron", ["metalbarrels:iron_barrel"])
		event.shapeless("metalbarrels:wood_to_silver", ["metalbarrels:silver_barrel"])
		event.shapeless("metalbarrels:wood_to_gold", ["metalbarrels:gold_barrel"])
	})
}