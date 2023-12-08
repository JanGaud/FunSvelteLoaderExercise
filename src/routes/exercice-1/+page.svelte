<script>
    // import { onMount } from 'svelte';

    export let cocktails = [];
	console.log(cocktails);

    // onMount(async () => {
    //     try {
    //         const url = 'https://the-cocktail-db.p.rapidapi.com/popular.php';
    //         const response = await fetch(url, {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': 'ded98c2facmsh419ce08fa864bb6p127517jsn2d81dbc7b359',
    //                 'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
    //             },
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             cocktails = data.drinks;
    //         } else {
    //             console.error('API response was not ok');
    //         }
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // });
</script>

<h1>API Data</h1>

{#if cocktails.length > 0}
	<div>
		{#each cocktails as cocktail}
			<div>
				<h2>{cocktail.strDrink}</h2>
				<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
				<p>{cocktail.strInstructions}</p>
			</div>
		{/each}
	</div>
{:else}
	<p>Aucun cocktail trouvé ou données non chargées.</p>
{/if}
