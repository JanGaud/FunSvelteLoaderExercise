<script>
	import { Card, ImagePlaceholder } from 'flowbite-svelte';
	import {} from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import CocktailCard from '../../components/CocktailCard.svelte';
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

<div class="flex flex-col items-center lg:grid md:grid-cols-2 gap-10 md:gap-4 mx-auto">
	{#if cocktails.length > 0}
		{#each cocktails as cocktail}
			<CocktailCard cocktail={cocktail} />
		{/each}
	{:else}
		{#each Array(6) as _, i}
			<ImagePlaceholder class="bg-[#ffffff25] backdrop-blur-xl shadow-lg w-full h-56 pr-0 sm:pr-4" />
		{/each}
	{/if}
</div>
