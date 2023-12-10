<script>
	import { Card } from 'flowbite-svelte';
	import SearchBar from '../../components/SearchBar.svelte';
	import SearchHeading from '../../components/SearchHeading.svelte';
	import NoCocktailFound from '../../components/NoCocktailFound.svelte';
	import RandomDice from '../../components/RandomDice.svelte';
	import CocktailCard from '../../components/CocktailCard.svelte';

	/**
	 * @type {string | any[]}
	 */
	let cocktails = [];
	let searchSuccessful = true;
	let searchInitiated = false;

	/**
	 * @param {{ detail: { cocktails: string | any[]; }; }} event
	 */
	function handleDiceRoll(event) {
		cocktails = event.detail.cocktails;
		searchInitiated = true;
	}

	/**
	 * @param {{ detail: { cocktails: string | any[]; isSearchSuccessful: boolean; }; }} event
	 */
	function handleSearchCompleted(event) {
		cocktails = event.detail.cocktails;
		searchSuccessful = event.detail.isSearchSuccessful;
		searchInitiated = true;
	}

	// Initialize cocktails with an additional property to track the display state
	cocktails = cocktails.map((cocktail) => ({ ...cocktail, showInstructions: false }));

	/**
	 * @param {{ showInstructions: boolean; }} cocktail
	 */
	function toggleInstructions(cocktail) {
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
    {#if searchInitiated}
        {#if cocktails.length > 0}
            {#each cocktails as cocktail}
                <CocktailCard cocktail={cocktail} />
            {/each}
        {/if}
    {/if}
</div>