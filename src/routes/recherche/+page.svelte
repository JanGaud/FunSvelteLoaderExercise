<script>
	import { Card, ImagePlaceholder } from 'flowbite-svelte';
	import SearchBar from '../../components/SearchBar.svelte';
	import SearchHeading from '../../components/SearchHeading.svelte';

	/**
	 * @type {string | any[]}
	 */
	let cocktails = [];
	let searchSuccessful = true;
	let searchInitiated = false;

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

<div class="mt-20">
	{#if !searchInitiated}
		<SearchHeading />
	{/if}
</div>

<div class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
	{#if searchInitiated}
		{#if cocktails.length > 0}
			{#each cocktails as cocktail}
				<Card
					color="none"
					img={cocktail.strDrinkThumb}
					horizontal
					class="bg-[#ffffff25] backdrop-blur-xl hover:bg-[#f6f93017] group md:h-56"
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
		{:else if !searchSuccessful}
			<p>Aucun cocktail trouvé!</p>
		{:else}
			{#each Array(6) as _, i}
				<ImagePlaceholder class="bg-[#ffffff25] backdrop-blur-xl shadow-lg pr-4" />
			{/each}
		{/if}
	{/if}
</div>
