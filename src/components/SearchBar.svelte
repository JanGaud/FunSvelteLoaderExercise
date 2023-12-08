<script>
	import { Search, Button } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';

	let searchTerm = '';
	let cocktails = [];

	async function searchCocktail() {
		const url = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${searchTerm}`;
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'ded98c2facmsh419ce08fa864bb6p127517jsn2d81dbc7b359',
				'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
			}
		};

		try {
			const response = await fetch(url, options);
			const result = await response.json();
			console.log(result);
			cocktails = result.drinks;
		} catch (error) {
			console.error(error);
		}
	}

	function handleVoiceBtn() {
		alert('You clicked the voice button');
	}
</script>

<div class="-mx-2 sm:-mx-20 -my-10 bg-[#2f2f2f44] backdrop-blur-sm py-10 px-10">
<form class="flex gap-2">
	<Search
		size="md"
		class="flex gap-2 items-center shadow-inner focus:ring-main-green focus:border-spark-yellow"
		placeholder="Faites une recherche"
		bind:value={searchTerm}
	>
		<button type="button" on:click={handleVoiceBtn} class="outline-none">
			<Icon icon="ic:outline-mic" class="w-4 h-4 me-2" />
		</button>
	</Search>

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