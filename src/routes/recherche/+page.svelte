<script>
	import SearchBar from '../../components/SearchBar.svelte';
	import SearchHeading from '../../components/SearchHeading.svelte';
	import NoCocktailFound from '../../components/NoCocktailFound.svelte';
	import RandomDice from '../../components/RandomDice.svelte';
	import CocktailCard from '../../components/CocktailCard.svelte';

	/** @type {Array<any>} */
	let cocktails = [];

	let searchSuccessful = true;
	let searchInitiated = false;

	/** @param {{ detail: { cocktails: any[] } }} event */
	function handleDiceRoll(event) {
		/** @type {any[]} */
		const incoming = event.detail.cocktails ?? [];

		/** @type {any[]} */
		const enriched = incoming.map(/** @param {any} cocktail */ (cocktail) => ({
			...cocktail,
			showInstructions: false
		}));

		cocktails = enriched;
		searchSuccessful = true; // dice roll isn't a failed search
		searchInitiated = true;
	}

	/** @param {{ detail: { cocktails: any[]; isSearchSuccessful: boolean } }} event */
	function handleSearchCompleted(event) {
		/** @type {any[]} */
		const incoming = event.detail.cocktails ?? [];

		/** @type {any[]} */
		const enriched = incoming.map(/** @param {any} cocktail */ (cocktail) => ({
			...cocktail,
			showInstructions: false
		}));

		cocktails = enriched;
		searchSuccessful = !!event.detail.isSearchSuccessful;
		searchInitiated = true;
	}

	/** @param {any} cocktail */
	function toggleInstructions(cocktail) {
		// If you use this, prefer immutable update later; this is OK for now.
		cocktail.showInstructions = !cocktail.showInstructions;
	}
</script>

<SearchBar on:searchCompleted={handleSearchCompleted} />
<RandomDice on:diceRoll={handleDiceRoll} />

<div class="mt-20">
	{#if !searchInitiated}
		<SearchHeading />
	{/if}

	{#if searchInitiated && cocktails.length === 0 && !searchSuccessful}
		<NoCocktailFound />
	{/if}
</div>

<div class="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-4 mx-auto">
	{#if searchInitiated && cocktails.length > 0}
		{#each cocktails as cocktail, index}
			<!-- index is now defined (if you use it inside CocktailCard or for keys) -->
			<CocktailCard {cocktail} />
		{/each}
	{/if}
</div>
