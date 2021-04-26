---
title: 'Irrelevant Blog'
description: 'Blog home page'
author: 'Conor Sinclair'
layout: headed
---

<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/api/articles?recent`)
    const articles = await res.json()
    return { props: { articles }}
  }
</script>

<script>
  import Posts from '../components/Posts.svelte'

  export let articles
</script>

> Ramblings from the internal monologue of an empassioned autodidact obsessed with programming.

Basically, you've the space where my thoughts leak out onto the internet.

I love programming. So that's pretty much what its going to all be about.

Until now, my posts have been very few and far between. Mostly due to me taking far too long to _just get something out there_.

Well folks, that's exactly what I want to do with this space. _Get something out there_ 

I want this to be a safe space for me to brain dump. And then in future sessions I might refine down a few strands and form a serious article out of it which I can actually push out to people as _somewhat legible_

<Posts recent {articles} />