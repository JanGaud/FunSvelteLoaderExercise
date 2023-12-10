<script>
	import { Card } from 'flowbite-svelte';
	import SearchBar from '../../components/SearchBar.svelte';
	import SearchHeading from '../../components/SearchHeading.svelte';
	import NoCocktailFound from '../../components/NoCocktailFound.svelte';
	import RandomDice from '../../components/RandomDice.svelte';

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

<div class="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
	{#if searchInitiated}
		{#if cocktails.length > 0}
			{#each cocktails as cocktail}
				<Card
					color="none"
					img={cocktail.strDrinkThumb}
					horizontal
					class="bg-[#ffffff25] backdrop-blur-xl hover:bg-[#f6f93017] group w-full md:h-56"
				>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-brand-gray">
						{cocktail.strDrink}
					</h5>
					<div class="mb-3 group-hover:hidden">
						<h6 class="text-base font-semibold text-brand-gray">Ingrédients:</h6>
						<ul class="list-disc list-inside text-brand-gray flex flex-wrap gap-4">
							{#each Array.from({ length: 15 }, (_, i) => i + 1) as ingredientIndex}
								{#if cocktail[`strIngredient${ingredientIndex}`]}
									<li class="text-sm">{cocktail[`strIngredient${ingredientIndex}`]}</li>
								{/if}
							{/each}
						</ul>
					</div>
					<div class="group-hover:block hidden h-40 overflow-y-auto">
						<p class="mb-3 text-sm text-brand-gray leading-tight">{cocktail.strInstructions}</p>
					</div>
				</Card>
			{/each}
		{/if}
	{/if}
</div>
