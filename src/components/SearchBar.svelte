<script>
	import { createEventDispatcher } from 'svelte';
	import { Search, Button } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';
	 const apiKey = import.meta.env.VITE_COCKTAIL_API_KEY;

	const dispatch = createEventDispatcher();

	let searchTerm = '';
	/**
	 * @type {never[]}
	 */
	let cocktails = [];
	let isSearchInitiated = false;

	async function searchCocktail() {
		isSearchInitiated = true;
		const url = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${searchTerm}`;
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': apiKey,
				'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
			}
		};

		try {
			const response = await fetch(url, options);
			const result = await response.json();

			if (result.drinks) {
				cocktails = result.drinks;
				dispatch('searchCompleted', { cocktails, found: true });
			} else {
				cocktails = [];
				dispatch('searchCompleted', { cocktails, found: false });
			}
		} catch (error) {
			console.error(error);
			cocktails = [];
			dispatch('searchCompleted', { cocktails, found: false });
		}
	}
</script>

<div class="-mx-2 sm:-mx-20 -my-14 sm:-my-10 bg-[#2f2f2f2a] backdrop-blur-sm py-8 sm:py-10 px-2 sm:px-10">
	<form class="flex gap-2" on:submit|preventDefault={searchCocktail}>
		<Search
			size="md"
			class="flex gap-2 items-center shadow-inner focus:ring-main-green focus:border-spark-yellow"
			placeholder="Faites une recherche"
			bind:value={searchTerm}
		/>

		<Button
			color="cyan"
			size="sm"
			class="bg-[#97ca4bc4] backdrop-blur-sm hover:bg-[#f6f930c0] focus:ring-1 focus:ring-main-green hover:text-brand-gray shadow-md transition-colors"
			on:click={searchCocktail}
		>
			<Icon icon="ic:round-search" class="w-5 h-5 me-2 -ms-1" />
			Rechercher
		</Button>
	</form>
</div>
