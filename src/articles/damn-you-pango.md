---
path: '/articles/damn-you-pango'
date: '03-24-2021'
title: 'Damn You Pango'
shortTitle: 'Damn You Pango'
author: 'Conor Sinclair'
featuredImage: ../images/imani-vDQ-e3RtaoE-unsplash.jpg
tags: ['Pango', 'Arch']
emoji: '🍳'
---

Today the unthinkable happened.

On booting into my arch box, I couldn't open Firefox.

My trusty `Super + w` fell on deaf ears.

Shit. What do you do?

Brave, the good old comfortable Brave browser. Just a quick `Super + p` to pop open my Rofi application launcher. Wait. No! Rofi not you too?!

Ok time to hit the terminal. The safe space. The centre.

Manually running `firefox` gives me a more helpful error message at least.

Blah blah blah something broken in libpango. Pango? What does that even do again? And why does every man and his dog rely on it? Questions for a later date.

I fire off the main tool in my arsenal. Google the error (on my phone).

Apparently this is an issue with the latest libpango package. Just need to downgrade and all will be well.

How do you do that with `yay` ? Never had to.

More Googling. There's a handy `downgrade` package in the AUR. Happy dayz!

`sudo downgrade pango`

Pick an older version. Cross fingers.

`Super + w`

We have Firefox. Thank the software gods! The Pango sabotage has been averted!
