<script>
  export let title;
  export let description;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="content">
  <slot />
</div>

<style lang="scss">
  .content {
    width: 100%;
    max-width: var(--max-width);
    margin: var(--spacing-2) auto;
    padding: var(--spacing-4) 0;
  }
  .content :global(blockquote) {
    margin: var(--spacing-2) 0;
    padding: var(--spacing-1) var(--spacing-4);
    background-color: var(--background-2);
    border-radius: 2px;
  }
  .content :global(pre, code) {
    background-color: var(--background-2);
  }
  .content :global(pre) {
    padding: var(--spacing-2);
    border: 1px solid var(--gold);
    border-radius: var(--spacing-1);
  }
</style>
