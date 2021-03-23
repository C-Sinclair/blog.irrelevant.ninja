<script lang="ts">
  const deps = {
    SvelteKit: "",
    MDSvex: "https://mdsvex.pngwn.io/",
    Sass: "",
    Typescript: "",
    "Remark Containers": "https://github.com/Nevenall/remark-containers",
  };
</script>

<footer>
  <div>
    <p>Made with this awesome stack:</p>
    <ul>
      {#each Object.entries(deps) as [dep, link]}
        <li>
          <a href={link}>
            {dep}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</footer>

<style lang="scss">
  @use '../styles/generic';

  footer {
    position: relative;
    height: 150px;
    padding: var(--spacing-8) 0;
    margin-top: 200px;
  }
  div {
    width: 80vw;
    max-width: 800px;
    margin: 0 auto;
  }
  ul {
    @include generic.no-list-styles();
    display: flex;
    justify-content: space-between;
    width: calc(100% - var(--spacing-4));
  }
  li {
    list-style: none;
  }
</style>
