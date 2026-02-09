<script>
	import { createEventDispatcher } from 'svelte';
	import { dice } from '../components/dice.js';
	import { writable } from 'svelte/store';
	import Icon from '@iconify/svelte';

	const dispatch = createEventDispatcher();

	// ✅ no VITE api key in client
	let currentDice = writable(dice[0]);
	let cocktails = [];

	async function changeDiceAndFetchCocktails() {
		const randomIndex = Math.floor(Math.random() * dice.length);
		currentDice.set(dice[randomIndex]);

		try {
			// ✅ call your server endpoint instead of RapidAPI directly
			const response = await fetch('/api/cocktails/random');

			if (!response.ok) {
				const errText = await response.text();
				console.error('Random cocktails API failed:', response.status, errText);
				cocktails = [];
				dispatch('diceRoll', { cocktails: [] });
				return;
			}

			const result = await response.json();
			cocktails = result?.drinks ?? [];
			dispatch('diceRoll', { cocktails });
		} catch (error) {
			console.error('Error fetching random cocktails:', error);
			cocktails = [];
			dispatch('diceRoll', { cocktails: [] });
		}
	}
</script>

<div
	class="mt-16 sm:mt-14 flex items-center gap-2 text-center md:text-left bg-[#97ca4b5d] backdrop-blur-xl rounded-md w-full md:w-fit p-3"
>
	<button class="w-14 h-14 active:animate-spin" on:click={changeDiceAndFetchCocktails}>
		<Icon class="h-full w-full text-brand-gray drop-shadow-lg" icon={$currentDice.icon} />
	</button>
	<div class="flex flex-col">
		<p class="font-bold">Générer 10 cocktails aléatoires</p>
		<p><small>Appuyez sur le dé</small></p>
	</div>
</div>
