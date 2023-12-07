<script>
	import Icon from '@iconify/svelte';
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink
	} from 'flowbite-svelte';

	let linkClass = 'text-brand-gray hover:text-main-green transition transition-colors font-secondary';
</script>

<Footer footerType="logo" class="bg-[#ffffff38] backdrop-blur-2xl">
	<div class="sm:flex sm:items-center sm:justify-between">
		<a href="/"> <Icon icon="ep:cold-drink" class="me-3 h-10 w-10" /></a>
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0"
		>
			<FooterLink aClass={linkClass} href="/">About</FooterLink>
			<FooterLink aClass={linkClass} href="/">Privacy Policy</FooterLink>
			<FooterLink aClass={linkClass} href="/">Licensing</FooterLink>
			<FooterLink aClass={linkClass} href="/">Contact</FooterLink>
		</FooterLinkGroup>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
	<FooterCopyright aClass={linkClass} href="/" by="Mix&Shake" />
</Footer>
