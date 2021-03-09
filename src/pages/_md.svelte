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

<style>
  .content {
    width: 80%;
    max-width: 80em;
    margin: 0 auto;
    padding-top: var(--spacing-4);
    padding-bottom: var(--spacing-4);
  }
</style>
