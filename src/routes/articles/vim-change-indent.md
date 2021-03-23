---
date: '09-24-2020'
title: 'Quick Vim Indentation Change'
shortTitle: 'Quick Vim Indent Change'
author: 'Conor Sinclair'
featuredImage: /images/rostyslav-savchyn-TDV1i2f7rcc-unsplash.jpg
tags: ["Vim"]
emoji: '🔱'
layout: article
---

> Vim, I need indentation changed and I need it quick!

Got a file with 4 space tabs instead of 2 (or vice versa)? Vim has your back.

```vim
:set ts=4 sts=4 noet
:retab!
:set ts=2 sts=2 et
:retab
```

Done!
