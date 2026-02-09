<script>
	// @ts-nocheck
	import { Card } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';

	/** @type {any} */
	export let cocktail;

	let showInstructions = false;

	function toggleInstructions() {
		showInstructions = !showInstructions;
	}

	const ingredients = Array.from({ length: 15 }, (_, i) => i + 1)
		.map((i) => {
			const name = cocktail?.[`strIngredient${i}`];
			const measure = cocktail?.[`strMeasure${i}`];
			if (!name) return null;
			return { name, measure: (measure ?? '').trim() };
		})
		.filter(Boolean);
</script>

<Card
	color="none"
	img={cocktail.strDrinkThumb}
	horizontal
	class="relative bg-[#ffffff18] md:hover:bg-[#f6f93012] backdrop-blur-xl group w-full mx-auto overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10 transition-all md:hover:-translate-y-0.5 md:hover:shadow-xl md:h-64"
>
	<div class="flex flex-col h-full w-full">
		<!-- Header -->
		<div class="min-w-0">
			<h5 class="text-2xl font-extrabold tracking-tight text-brand-gray leading-tight truncate">
				{cocktail.strDrink}
			</h5>
		</div>

		<!-- Content -->
		<div class="mt-4 flex-1 min-h-0 pr-2 pb-12">
			{#if !showInstructions}
				<div class="max-h-[9rem] overflow-y-auto">
					<h6 class="text-sm font-bold text-brand-gray/90 mb-2">
						Ingrédients
					</h6>

					<div class="flex flex-wrap gap-2">
						{#each ingredients as ing}
							<span
								class="text-xs px-2 py-1 rounded-lg bg-white/10 text-brand-gray ring-1 ring-white/10"
							>
								{ing.name}
								{#if ing.measure}
									<span class="opacity-80"> · {ing.measure}</span>
								{/if}
							</span>
						{/each}
					</div>
				</div>
			{:else}
				<div class="max-h-[9rem] overflow-y-auto">
					<h6 class="text-sm font-bold text-brand-gray/90 mb-2">
						Instructions
					</h6>
					<p class="text-sm text-brand-gray leading-relaxed whitespace-pre-line">
						{cocktail.strInstructions}
					</p>
				</div>
			{/if}
		</div>

		<!-- Bottom-right switcher -->
		<button
			type="button"
			on:click={toggleInstructions}
			class="absolute bottom-4 right-4 border-lime-200 flex items-center gap-2 rounded-full px-3 py-2
			       bg-white/15 hover:bg-white/25 backdrop-blur-md
			       ring-1 ring-white/20 shadow-md
			       text-brand-gray transition-all"
		>
			<Icon
				class="w-5 h-5"
				icon={showInstructions ? 'ph:notebook-bold' : 'ph:list-bullets-bold'}
			/>
			<span class="text-xs font-semibold">
				{showInstructions ? 'Ingrédients' : 'Instructions'}
			</span>
		</button>
	</div>
</Card>
