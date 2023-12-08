<script>
	import { Card, Button, Toggle } from 'flowbite-svelte';
    import { onMount } from 'svelte';

    export let cocktails = [];


    onMount(async () => {
        try {
            const url = 'https://the-cocktail-db.p.rapidapi.com/popular.php';
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'ded98c2facmsh419ce08fa864bb6p127517jsn2d81dbc7b359',
                    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
                },
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

{#if cocktails.length > 0}
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each cocktails as cocktail}
            <Card color="none" img={cocktail.strDrinkThumb} href="/" horizontal class="bg-[#ffffff25] backdrop-blur-xl hover:bg-[#f6f93017]">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-brand-gray">{cocktail.strDrink}</h5>
                <p class="mb-3 font-normal text-brand-gray leading-tight">{cocktail.strInstructions}</p>
            </Card>
		{/each}
	</div>
{:else}
	<p>Chargement...</p>
{/if}
