<script>
  let articles = [{ title: 'this-blog'}]
</script>

<svelte:head>
  <title>Articles</title>
  <meta name="description" content="All of my musings" />
</svelte:head>

<h1>Articles</h1>

<ul>
  {#each articles as article}
    <li>{article.title}</li>
  {/each}
</ul>