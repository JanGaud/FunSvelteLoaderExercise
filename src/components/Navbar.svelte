<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
	} from 'flowbite-svelte';
	import Icon from '@iconify/svelte';

	let linkClass = 'text-brand-gray hover:text-main-green transition transition-colors font-secondary font-semibold';
</script>

<Navbar color="none" class="bg-[#ffffff59] backdrop-blur-3xl shadow-sm rounded-b-xl px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0">
	<NavBrand href="/">
		<Icon icon="ep:cold-drink" color="text-main-green" class="me-3 h-12 w-12 text-main-green" />
		<span class="self-center whitespace-nowrap font-secondary text-4xl font-semibold">Mix&Shake</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi nonActiveClass={linkClass} href="/exercice-1">Exercice 1</NavLi>
		<NavLi nonActiveClass={linkClass} href="/">Exercice 2</NavLi>
		<NavLi nonActiveClass={linkClass} href="/">Exercice 3</NavLi>
		<NavLi nonActiveClass={linkClass} href="/">Exercice 4</NavLi>
		<NavLi nonActiveClass={linkClass} href="/">Exercice 5</NavLi>
	</NavUl>
</Navbar>
