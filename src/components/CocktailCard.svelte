<script>
	import { Card } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';

	/**
	 * @type {{ [x: string]: any; strDrinkThumb: any; strDrink: any; strInstructions: any; }}
	 */
	export let cocktail;

	let showInstructions = false;

	function toggleInstructions() {
		showInstructions = !showInstructions;
	}
</script>

<Card
	color="none"
	img={cocktail.strDrinkThumb}
	horizontal
	class="relative bg-[#ffffff25] hover:bg-[#f6f93017] backdrop-blur-xl group flex flex-col w-full md:h-56 cursor-pointer"
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-brand-gray">
		{cocktail.strDrink}
	</h5>
	<button
		class="absolute p-2 rounded-full shadow-md bg-[#97ca4bc4] backdrop-blur-sm hover:bg-[#f6f930c0] text-brand-gray transition-colors top-1 right-1 w-10 h-10 flex items-center justify-center focus:outline-none active:outline-none"
		on:click={toggleInstructions}
	>
		<Icon class="w-6 h-6" icon="ph:plus-bold" />
	</button>
	{#if !showInstructions}
		<div>
			<h6 class="text-base font-semibold text-brand-gray">Ingredients:</h6>
			<ul class="list-disc list-inside text-brand-gray flex flex-wrap h-32 overflow-y-auto gap-4">
				{#each Array.from({ length: 15 }, (_, i) => i + 1) as ingredientIndex}
					{#if cocktail[`strIngredient${ingredientIndex}`]}
						<li class="text-sm">
							{cocktail[`strIngredient${ingredientIndex}`]} - {cocktail[
								`strMeasure${ingredientIndex}`
							]}
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	{:else}
		<div class="h-32 overflow-y-auto">
			<p class="mb-3 text-sm text-brand-gray leading-tight">{cocktail.strInstructions}</p>
		</div>
	{/if}
</Card>
