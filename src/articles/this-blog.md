---
path: "/this-blog"
date: "05-07-2019"
title: "The building of this blog"
author: "Conor Sinclair"
---

# Building a Gatsby blog
*aka the making of this site and I learned to love the static*

The term static website is a pretty hot topic at the moment in the world of web development. Honestly I didn't really get it. Why would devs want to go back to creating boring `html` pages, when there's been an explosion of dynamic, reactive technologies in the field? Creating this blog has convinced me of their power.

### Static doesn't mean static


### Gatsby CLI
Gatsby has a friendly CLI tool to get projects up and running quickly.
I've always been in two minds over CLI tools of this kind. On the one hand they're great as they reduce the need to manually type out the various boilerplate needed to run a successful application, however I like to know what the purpose of each file is in the greater context of the application. Undeniably though a helpful CLI speeds up the startup time of a new app.


### Its all about buildtime
Gatsby supports graphql, but not in the way you would expect. Queries are run at buildtime to produce the static output files. 


### Netlify
Netlify specialise in hosting static websites, it's their bread and butter and they can serve them with incredible speed as their CDN is on top of AWS's, meaning coverage is universal. 


### Creating the blog subdomain
Whilst perusing 123-reg for a new domain to point to my latest set of projects, I stumbled across `irrelevant.ninja`, which I thought sounds hilarious. One purchase of £4 for the year and the domain was in my catalogue.
I didn't want the whole domain to be for this blog so I created a `blog.` subdomain, by going to their domain management menu and adding a new `CNAME` record. I then put the target as the unique netlify URL given to me during the setup on their portal.
