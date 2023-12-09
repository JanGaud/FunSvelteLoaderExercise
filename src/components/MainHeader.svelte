<script>
	import { Heading, P, Button } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="text-center py-10 px-4">
	<Heading tag="h1" class="mb-4 drop-shadow-lg" customSize="text-4xl font-semibold md:text-5xl lg:text-6xl"
		>La référence en mixologie!</Heading
	>
	<P class="mb-6 text-lg lg:text-xl tracking-wider font-semibold sm:px-16 xl:px-48">
		Depuis plusieurs années, nous nous positionnons en tant que leaders dans la création de
		cocktails pour les restaurants du Québec. Optez pour notre expertise afin de sublimer votre
		offre de boissons.</P
	>
	<Button color="cyan" class="bg-[#97ca4bc4] backdrop-blur-sm hover:bg-[#f6f930c0] focus:ring-1 focus:ring-main-green hover:text-brand-gray shadow-md transition-colors" href="/non-disponible">
		En savoir plus
		<Icon icon="icons8:right-round" class="w-7 h-7 ms-2" />
	</Button>
</div>
