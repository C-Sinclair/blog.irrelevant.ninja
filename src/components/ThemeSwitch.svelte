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
      if (paletteOpen && node && !node.contains(e.target)) {
        paletteOpen = false;
      }
    }
    window.addEventListener("click", clickawayListener);
    return {
      destroy() {
        window.removeEventListener("click", clickawayListener);
      },
    };
  }

  $: CurrentIcon = themes[$appTheme].icon;
</script>

<div class="root" use:clickaway>
  <button on:click={openThemePalette} class="theme-change">
    <svelte:component this={CurrentIcon} />
  </button>

  {#if paletteOpen}
    <div class="options">
      {#each Object.entries(themes) as [theme, { icon }]}
        <button on:click={pickTheme(theme)} title={theme}>
          <svelte:component this={icon} />
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .root {
    position: relative;
    margin-top: var(--spacing-2);
  }
  button {
    width: var(--spacing-5);
    height: var(--spacing-5);
    border-radius: var(--spacing-5);
    border: none;
    outline: none;
    background-color: unset;
    cursor: pointer;
  }
  button :global(svg) {
    fill: var(--text-1);
  }
  .options {
    display: flex;
    padding: var(--spacing-1);
    position: absolute;
    left: var(--spacing-3);
    bottom: calc(-1 * var(--spacing-2));
    background-color: var(--background-3);
    border-radius: var(--spacing-2);
    border: 1px solid var(--gold);
  }
</style>
