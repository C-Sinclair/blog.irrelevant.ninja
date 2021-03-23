---
title: 'Irrelevant Articles'
description: 'All of my musings'
author: 'Conor Sinclair'
layout: headed
---

<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/api/articles`)
    const articles = await res.json()
    return { props: { articles }}
  }
</script>

<script>
  import Posts from '../components/Posts.svelte'

  export let articles
</script>

<Posts {articles} />