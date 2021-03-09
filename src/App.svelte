<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import theme, { themeToCss } from "./stores/theme";

  $: themeToCss(theme);
</script>

<Router {routes} />

<style>
  :global(body) {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
</style>
