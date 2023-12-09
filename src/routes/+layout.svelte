<script>
    import '../app.css';
    import Navbar from '../components/Navbar.svelte';
    import MixShakeFooter from '../components/MixShakeFooter.svelte';
</script>

<main class="bg-no-repeat bg-fixed bg-center bg-cover" style="background-image: url('/img/BackgroundImg.png');">
    <Navbar />
    <section class="mx-2 sm:mx-20 my-28 md:min-h-screen">
        <slot />
    </section>
    <MixShakeFooter />
</main>
