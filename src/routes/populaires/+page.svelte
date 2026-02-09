<script>
  import { ImagePlaceholder } from 'flowbite-svelte';
  import CocktailCard from '../../components/CocktailCard.svelte';

  export let data;
  // @ts-ignore
  const cocktails = data.cocktails ?? [];
</script>

<div class="flex flex-col items-center lg:grid md:grid-cols-2 gap-10 md:gap-4 mx-auto">
  {#if cocktails.length > 0}
    {#each cocktails as cocktail}
      <CocktailCard {cocktail} />
    {/each}
  {:else}
    {#each Array(6) as _, i}
      <ImagePlaceholder class="bg-[#ffffff25] backdrop-blur-xl shadow-lg w-full h-56 pr-0 sm:pr-4" />
    {/each}
  {/if}
</div>
