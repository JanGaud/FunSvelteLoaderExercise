<script>
	import { Card, ImagePlaceholder } from 'flowbite-svelte';
	import {} from 'flowbite-svelte';
	import { onMount } from 'svelte';
	const apiKey = import.meta.env.VITE_COCKTAIL_API_KEY;

	/**
	 * @type {string | any[]}
	 */
	export let cocktails = [];

	onMount(async () => {
		try {
			const url = 'https://the-cocktail-db.p.rapidapi.com/popular.php';
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': apiKey,
					'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
				}
			});

			if (response.ok) {
				const data = await response.json();
				cocktails = data.drinks;
			} else {
				console.error('API response was not ok');
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
	{#if cocktails.length > 0}
		{#each cocktails as cocktail}
			<Card
				color="none"
				img={cocktail.strDrinkThumb}
				horizontal
				class="bg-[#ffffff25] backdrop-blur-xl hover:bg-[#f6f93017] group md:h-56"
			>
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-brand-gray">{cocktail.strDrink}</h5>
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
	{:else}
		{#each Array(6) as _, i}
			<ImagePlaceholder class="bg-[#ffffff25] backdrop-blur-xl shadow-lg pr-4" />
		{/each}
	{/if}
</div>
