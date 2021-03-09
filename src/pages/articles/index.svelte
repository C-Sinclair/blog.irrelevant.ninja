<script>
  let articles = [{ title: 'this-blog'}]
</script>

<h1>Articles</h1>

<ul>
  {#each articles as article}
    <li>{article.title}</li>
  {/each}
</ul>