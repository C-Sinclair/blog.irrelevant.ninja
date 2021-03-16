<script>
  export let articles;
</script>

<h1>Recent Articles</h1>

<ul>
  {#each articles as article}
    <li>
      <a sveltekit:prefetch href={`/articles/${article.file}`}>
        <h6>{article.title}</h6>
        <p class="date">{article.date}</p>
      </a>
    </li>
  {/each}
</ul>

<style>
  h1 {
    font-family: var(--title-font);
    color: var(--gold);
    font-size: 2em;
  }
  ul {
    list-style: none;
    width: 100%;
    max-width: var(--max-width);
    margin: 0;
    padding: 0;
  }
  li {
    padding: var(--spacing-2);
    margin: var(--spacing-2) 0;
    width: calc(100% - var(--spacing-4));
    border: var(--border-thin);
    border-radius: 1px;
    background-color: var(--background-3);
    position: relative;
  }
  .date {
    position: absolute;
    top: var(--spacing-1);
    right: var(--spacing-1);
  }
</style>
