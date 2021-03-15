<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import theme, { themeToCss } from "./stores/theme";

  $: themeToCss(theme);
</script>

<Router {routes} />
