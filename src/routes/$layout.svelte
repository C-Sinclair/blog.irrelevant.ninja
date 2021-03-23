<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  import theme, { themeToCss } from "../stores/theme";

  $: themeToCss($theme);
</script>

<main>
  <Nav />

  <slot />

  <Footer />
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
  }
</style>
