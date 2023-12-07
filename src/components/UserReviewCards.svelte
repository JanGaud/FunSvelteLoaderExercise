<script>
	import { Card } from 'flowbite-svelte';

	const cardContent = [
		{
			title: 'Une Révolution pour Notre Carte de Cocktails',
			quote:
				'Grâce à leur expertise, notre carte de cocktails est devenue une caractéristique phare de notre restaurant. Cela a été un véritable changement pour nous !',
			author: 'Bonnie Green',
			role: 'Propriétaire, Bistro Green',
			imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png'
		},
		{
			title: 'Amélioration de Notre Sélection de Boissons',
			quote:
				'Leurs créations de cocktails ont ajouté une touche unique à notre offre de boissons au restaurant. Nos clients adorent ça !',
			author: 'Roberta Casas',
			role: 'Gérante, Saveurs Gourmandes',
			imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png'
		},
		{
			title: "Élévation de l'Expérience Culinaire",
			quote:
				"Les cocktails qu'ils ont conçus ont propulsé notre restaurant vers un niveau supérieur. C'est un succès auprès de nos clients !",
			author: 'Jese Leos',
			role: 'Chef de Cuisine, Délices Culinaires',
			imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
		},
		{
			title: 'Efficacité à Son Meilleur Niveau',
			quote:
				'Leurs idées de carte de cocktails ont rationalisé notre service des boissons, le rendant efficace et impressionnant.',
			author: 'Joseph McFall',
			role: 'Gérant, Café Cheers',
			imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png'
		}
	];
</script>

<div class="mt-20 grid md:grid-cols-2 gap-2">
	{#each cardContent as card, i}
		<Card color="none" padding="none" size="xl" class="bg-[#ffffff25] backdrop-blur-xl shadow-md">
			<figure
				class="flex flex-col justify-center items-center p-8 text-center rounded-lg"
			>
				<blockquote class="mx-auto mb-4 max-w-2xl text-brand-gray">
					<h3 class="text-lg font-semibold text-black">{card.title}</h3>
					<p class="my-4 font-light">{card.quote}</p>
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
					<img class="w-9 h-9 rounded-full" src={card.imageUrl} alt="{card.author} profile" />
					<div class="space-y-0.5 font-medium text-left">
						<div>{card.author}</div>
						<div class="text-sm font-light text-brand-gray">{card.role}</div>
					</div>
				</figcaption>
			</figure>
		</Card>
	{/each}
</div>
