<script>
	import { Heading, P, Button } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="text-center py-10">
	<Heading tag="h1" class="mb-4 drop-shadow-lg" customSize="text-4xl font-extrabold md:text-5xl lg:text-6xl"
		>La référence en mixologie!</Heading
	>
	<P class="mb-6 text-lg lg:text-xl tracking-wider font-semibold sm:px-16 xl:px-48">
		Depuis plusieurs années, nous nous positionnons en tant que leaders dans la création de
		cocktails pour les restaurants du Québec. Optez pour notre expertise afin de sublimer votre
		offre de boissons.</P
	>
	<Button class="bg-main-green hover:bg-spark-yellow hover:text-brand-gray shadow-md transition-colors" href="/">
		En savoir plus
		<Icon icon="icons8:right-round" class="w-7 h-7 ms-2" />
	</Button>
</div>
