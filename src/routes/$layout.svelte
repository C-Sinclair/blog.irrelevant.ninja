<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  import theme, { themeToCss } from "../stores/theme";

  export let title;
  export let description;

  $: themeToCss($theme);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<main>
  <Nav />

  <slot />
  {""}

  <Footer />
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    grid-area: main;
  }
</style>
