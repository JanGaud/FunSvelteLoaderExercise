<script>
	import { createEventDispatcher } from 'svelte';
	import { dice } from '../components/dice.js';
	import { writable } from 'svelte/store';
	import Icon from '@iconify/svelte';

	const dispatch = createEventDispatcher();
	const apiKey = import.meta.env.VITE_COCKTAIL_API_KEY;
	let currentDice = writable(dice[0]);
	let cocktails = []; // Changed to a regular variable

	async function changeDiceAndFetchCocktails() {
		const randomIndex = Math.floor(Math.random() * dice.length);
		currentDice.set(dice[randomIndex]);

		try {
			const url = 'https://the-cocktail-db.p.rapidapi.com/randomselection.php';
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': apiKey,
					'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
				}
			};

			const response = await fetch(url, options);
			const result = await response.json();
			cocktails = result.drinks;
			dispatch('diceRoll', { cocktails: result.drinks });
		} catch (error) {
			console.error(error);
		}
	}
</script>

<div class="mt-14 flex items-center gap-2 bg-[#97ca4b5d] backdrop-blur-xl rounded-md w-fit p-3">
	<button class="w-14 h-14 active:animate-spin" on:click={changeDiceAndFetchCocktails}>
		<Icon class="h-full w-full text-brand-gray drop-shadow-lg" icon={$currentDice.icon} />
	</button>
	<div class="flex flex-col">
		<p class="font-bold">Générer 10 cocktails aléatoires</p>
		<p><small>Appuyez sur le dé</small></p>
	</div>
</div>
