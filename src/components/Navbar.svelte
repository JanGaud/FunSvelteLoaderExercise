<script>
    import Icon from '@iconify/svelte';
    let isOpen = false;

    const links = [
        { name: "Populaires", href: "/populaires" },
        { name: "Recherche", href: "/recherche" },
        { name: "À Propos", href: "/non-disponible" },
        { name: "Contact", href: "/non-disponible" }
    ];

    let linkClass = 'text-brand-gray hover:text-main-green transition transition-colors font-secondary font-semibold';
	let mobileLinkClass = 'text-brand-gray hover:text-main-green text-2xl transition transition-colors font-secondary font-semibold';
</script>

<nav class="bg-[#ffffffd7] backdrop-blur-3xl shadow-sm sm:rounded-b-xl flex justify-between items-center px-2 sm:px-4 py-2.5 fixed w-full z-50 top-0 start-0 font-secondary">
    <a class="flex items-center" href="/">
        <Icon icon="ep:cold-drink" color="text-main-green" class="me-3 h-10 w-10 md:h-14 md:w-14 text-main-green animate-pulse"/>
        <p class="self-center whitespace-nowrap text-4xl font-semibold">Mix&Shake</p>
    </a>
    <button class="md:hidden" on:click={() => isOpen = !isOpen}>
        <Icon class="w-8 h-8 text-main-green" icon="ep:menu" />
    </button>
    <ul class={`flex items-center gap-4 md:flex ${isOpen ? 'hidden md:flex' : 'hidden md:flex'}`}>
        {#each links as link}
            <li class={linkClass}><a href={link.href}>{link.name}</a></li>
        {/each}
    </ul>
</nav>

<!-- mobile menu -->
<div class={`fixed inset-0 w-full z-30 bg-[#ffffffd7] backdrop-blur-3xl transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
    <ul class="w-full flex flex-col items-center gap-6 my-40">
        {#each links as link}
            <li class={mobileLinkClass}><a href={link.href} on:click={() => isOpen = false}>{link.name}</a></li>
        {/each}
    </ul>
</div>
