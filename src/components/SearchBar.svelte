<script>
	import { Search, Button } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';
	function handleVoiceBtn() {
		alert('You clicked voice button');
	}
</script>

<form class="flex gap-2">
	<Search
		size="md"
		class="flex gap-2 items-center shadow-inner"
		placeholder="Faites une recherche"
	>
		<button type="button" on:click={handleVoiceBtn} class="outline-none">
			<Icon icon="ic:outline-mic" class="w-4 h-4 me-2" />
		</button>
	</Search>
	<Button color="cyan" size="sm" class="bg-[#97ca4bc4] backdrop-blur-sm hover:bg-[#f6f930c0] hover:text-brand-gray shadow-md transition-colors">
		<Icon icon="ic:round-search" class="w-5 h-5 me-2 -ms-1" />
		Rechercher
	</Button>
</form>
