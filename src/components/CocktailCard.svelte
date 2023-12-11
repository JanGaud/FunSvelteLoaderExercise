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
	class="bg-[#ffffff25] hover:bg-[#f6f93017] backdrop-blur-xl group md:h-64 w-full mx-auto"
	><div>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-brand-gray">
			{cocktail.strDrink}
		</h5>
		<div>
			{#if !showInstructions}
				<div class="h-28 w-80 overflow-y-auto">
					<h6 class="text-base font-semibold text-brand-gray">Ingredients:</h6>
					<ul class="list-disc list-inside text-brand-gray flex flex-wrap gap-4">
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
				<div class="h-28 w-80 overflow-y-auto">
					<h6 class="text-base font-semibold text-brand-gray">Instructions:</h6>
					<p class="mb-3 text-sm text-brand-gray leading-tight">{cocktail.strInstructions}</p>
				</div>
			{/if}
		</div>
		<div class="w-full mt-10">
			<button
				class="rounded-lg shadow-md bg-[#97ca4bc4] backdrop-blur-sm hover:bg-[#f6f930c0] text-brand-gray transition-colors w-full h-8 flex gap-2 items-center justify-center focus:outline-none active:outline-none py-2"
				on:click={toggleInstructions}
			>
				Voir plus <Icon class="w-5 h-5" icon="ph:plus-bold" />
			</button>
		</div>
	</div></Card
>
