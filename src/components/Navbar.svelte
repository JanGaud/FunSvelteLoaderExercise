<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';

	let linkClass =
		'text-brand-gray hover:text-main-green transition transition-colors font-secondary font-semibold';
	let active = 'text-main-green font-bold';
</script>

<Navbar
	color="none"
	class="bg-[#ffffffd7] backdrop-blur-3xl shadow-sm sm:rounded-b-xl px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0"
>
	<NavBrand href="/">
		<Icon
			icon="ep:cold-drink"
			color="text-main-green"
			class="me-3 h-12 w-12 text-main-green animate-pulse"
		/>
		<span class="self-center whitespace-nowrap font-secondary text-4xl font-semibold"
			>Mix&Shake</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi
			activeClass={active}
			nonActiveClass={linkClass}
			href="/populaires"
			data-sveltekit-prefetch>Populaires</NavLi
		>
		<NavLi activeClass={active} nonActiveClass={linkClass} href="/recherche">Recherche</NavLi>
		<NavLi activeClass={active} nonActiveClass={linkClass} href="/non-disponible">À Propos</NavLi>
		<NavLi activeClass={active} nonActiveClass={linkClass} href="/non-disponible">Contact</NavLi>
	</NavUl>
</Navbar>
