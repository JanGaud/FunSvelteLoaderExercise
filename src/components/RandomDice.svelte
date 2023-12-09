<script>
    import { dice } from '../components/dice.js';
    import { writable } from 'svelte/store';
    import Icon from '@iconify/svelte';
    const apiKey = import.meta.env.VITE_COCKTAIL_API_KEY;

    let currentDice = writable(dice[0]);
    let cocktails = writable([]);

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
            cocktails.set(result.drinks);
        } catch (error) {
            console.error(error);
        }
    }
</script>

<div class="mt-14">
    <button class="w-14 h-14" on:click={changeDiceAndFetchCocktails}>
        <Icon class="h-full w-full text-brand-gray" icon={$currentDice.icon} />
    </button>
    {#if $cocktails.length}
        <div>
            {#each $cocktails as cocktail}
                <div>{cocktail.strDrink}</div>
            {/each}
        </div>
    {/if}
</div>
