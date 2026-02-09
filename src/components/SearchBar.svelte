<script>
	import { createEventDispatcher } from 'svelte';
	import { Search, Button } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';

	const dispatch = createEventDispatcher();

	let searchTerm = '';
	/**
	 * @type {string | any[]}
	 */
	let cocktails = [];
	let isSearchInitiated = false;
	let loading = false;

	async function searchCocktail() {
		isSearchInitiated = true;

		const q = searchTerm.trim();
		if (!q) {
			cocktails = [];
			dispatch('searchCompleted', { cocktails, isSearchSuccessful: true });
			return;
		}

		loading = true;

		try {
			// ✅ Call your SvelteKit endpoint (server-side RapidAPI)
			const response = await fetch(`/api/cocktails/search?q=${encodeURIComponent(q)}`);

			if (!response.ok) {
				const errText = await response.text();
				console.error('Search API failed:', response.status, errText);
				cocktails = [];
				dispatch('searchCompleted', { cocktails, isSearchSuccessful: false });
				return;
			}

			const result = await response.json();
			cocktails = result?.drinks ?? [];

			dispatch('searchCompleted', {
				cocktails,
				isSearchSuccessful: cocktails.length > 0
			});
		} catch (error) {
			console.error(error);
			cocktails = [];
			dispatch('searchCompleted', { cocktails, isSearchSuccessful: false });
		} finally {
			loading = false;
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
			disabled={loading}
		>
			<Icon icon="ic:round-search" class="w-5 h-5 me-2 -ms-1" />
			{#if loading}
				Recherche...
			{:else}
				Rechercher
			{/if}
		</Button>
	</form>
</div>
