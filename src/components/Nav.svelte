<script>
  import Home from "./Home.svelte";
  import ThemeSwitch from "./ThemeSwitch.svelte";
</script>

<nav>
  <Home />
  <ThemeSwitch />
</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--spacing-2);
    position: fixed;
    top: 0;
    background-color: var(--foreground);
  }
</style>
