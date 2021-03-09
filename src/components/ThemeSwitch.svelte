<script>
  import { themes } from "../themes";
  import appTheme from "../stores/theme";

  let paletteOpen = false;

  function openThemePalette() {
    paletteOpen = true;
  }
  function pickTheme(theme) {
    return () => {
      appTheme.set(theme);
      paletteOpen = false;
    };
  }

  function clickaway(node) {
    function clickawayListener(e) {
      if (!node.contains(e.target)) {
        paletteOpen = false;
      }
    }
    document.addEventListener("click", clickaway);
    return {
      destroy() {
        document.removeEventListener("click", clickawayListener);
      },
    };
  }

  $: CurrentIcon = $appTheme.icon;
</script>

<div class="root">
  <button on:click={openThemePalette} class="theme-change">
    <svelte:component this={CurrentIcon} />
  </button>

  {#if paletteOpen}
    <div use:clickaway class="options">
      {#each Object.entries(themes) as [theme, { icon: Icon }]}
        <button on:click={pickTheme(theme)} title={theme}>
          <Icon />
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .root {
    position: relative;
  }
  button {
    padding: var(--spacing-1);
    width: var(--spacing-5);
    height: var(--spacing-5);
    border-radius: var(--spacing-5);
    border: none;
    outline: none;
  }
  .options {
    display: flex;
    padding: var(--spacing-2);
    position: absolute;
    left: var(--spacing-3);
    bottom: calc(-1 * var(--spacing-2));
  }
</style>
