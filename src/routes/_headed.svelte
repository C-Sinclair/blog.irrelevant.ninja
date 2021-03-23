<script>
  import Profile from "../components/Profile.svelte";
  import Logo from "../components/Logo.svelte";

  export let title;
  export let description;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="content">
  <Profile />
  <Logo />

  <slot />
</div>

<style lang="scss">
  @use "../styles/content" as *;
</style>
