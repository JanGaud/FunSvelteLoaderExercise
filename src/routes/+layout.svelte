<script>
    import '../app.css';
    import Navbar from '../components/Navbar.svelte';
    import MixShakeFooter from '../components/MixShakeFooter.svelte';
</script>

<main class="min-h-screen bg-no-repeat bg-fixed bg-center bg-cover" style="background-image: url('/img/BackgroundImg.png');">
    <Navbar />
    <section class="px-2 sm:px-20 py-28">
        <slot />
    </section>
    <MixShakeFooter />
</main>
