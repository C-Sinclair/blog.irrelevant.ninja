<script lang="ts">
  import type { Article } from "src/types";

  export let articles: Article[];
  export let recent = false;
</script>

<h1>{recent ? `Recent ` : ``}Articles</h1>

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

<style lang="scss">
  @use '../styles/text';
  @use '../styles/generic';

  h1 {
    @include text.gold-title(2em, none);
  }
  ul {
    @include generic.no-list-styles();
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
