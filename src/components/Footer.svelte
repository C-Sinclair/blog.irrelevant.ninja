<script>
  import Wave from "./Wave.svelte";
</script>

<footer>
  <Wave />
  <div>
    <p>Made with this awesome stack:</p>
    <ul>
      <li>Svelte</li>
      <li>MDSvex</li>
      <li>Routify</li>
      <li>Rollup</li>
    </ul>
  </div>
</footer>

<style>
  footer {
    position: relative;
    background-color: var(--grass);
    border-radius: 100% 100% 0 0;
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
    display: flex;
    justify-content: space-between;
    width: calc(100% - var(--spacing-4));
    padding: 0;
  }
  li {
    list-style: none;
  }
</style>
