---
path: '/articles/fucking-salesforce'
date: '04-24-2020'
shortTitle: 'Fucking Salesforce'
title: 'Fucking Salesforce'
author: 'Conor Sinclair'
featuredImage: ../images/imani-vDQ-e3RtaoE-unsplash.jpg
tags: ['Javascript', 'Salesforce']
emoji: '🍳'
---

> Tackling a simple task in a behemoth of a platform

So Salesforce. Its huge. Enterprise focussed. And you know what that means... complicated APIs, and fucking Java.

Well that's not the way I roll. Its dynamic languages all the way at work, and there's no way I'm using a language stuck in the stone age.

### The Problem

I have a contact form. I want said contact form to submit its contents into Salesforce as a lead so the sales department can go strike that poor bastard down and tie them into a tasty new deal for the company. Simple. Right?

No.

There was a simple solution. Web-to-lead. One POST request with your organisation id and you're done. Would've been nice if it worked. It didn't for me.

### SOAP

My manager kept pushing me to the SOAP API documentation. Oh yeah did I mention Salesforce has like 20 APIs, SOAP and REST being just 2 of them.

Again, SOAP? Is this 1997? No. It's not. So fuck that.

After tentatively downloading our WSDL - like a graph of the available resources in the SOAP endpoint - and inspecting that badboy. After cleaning up the vomit from my desk and shirt I was able to peek through some of the 5000 line long XML document.

### Reach for a library

There is hope on the horizon. Enter `jsforce` [INSERT JIGGLE HERE]

How many libraries do you know of which come with a REPL? Very few good sir, but this is one of the few.

Power up REPL. Ok. Login. Ok. I'll just use my username and password. Nope. Need a secret key.

> aside: I actually had to grant my user API access as well

Ok so I follow instructions to get the secret. They email it to me. All good. So now I just need to append it to my password:

```json
login("user", "password" + "secret")
```

Success!!! The output showing my organisation id tells me I'm good to go. I crack the champagne.

This proves premature as I try to query the one resource I care about. Leads.

```json
query("SELECT Id, Name FROM Leads LIMIT 1")
```

No.

Ok well can I see other `sobjects` at least?

```json
describeGlobal().then(info =>
  info.sobjects.reduce((acc, { name }, index) => `${acc}, ${index % 4 ? name : `\n${name}`}`, "")
)
```

The reduce part is literally so it will fit all the `sobject` names onto the page as it will cutting off half the list before.

Ok so there's a nice long list of stuff I _can_ see. But Leads is not there.

### Permissions

So far I've been using a standard Salesforce user to do all of this. I had to grant API access permission at one point - in the user management setup for my user. But this problem goes deep. To view the Lead (or Contact) `sobject` you need higher permissions than my measly user license will allow.

In the end I solved this by pinching the credentials of a system administrator user (one of the sales team) with his consent of course. Cmon I'm not that bad!

With permissions in hand rerunning the previous queries in the REPL actually give results! Party time.

Almost.

### Create the Lead

Now we just need to create the actual Lead. We'll do this in actual code this time, lets ditch the REPL

```jsx
const conn = new jsforce.Connection({
  loginUrl: 'https://fuckyousf.salesforce.com'
})
await conn.login(username, password + secret)
const res = await conn.sobject('Lead').create({
  Company: 'Badass corp.',
  LastName: 'Lastly'
})
```

And there we have it. No error should be thrown, and if we check the Salesforce Leads tab we should see the new lead listed in all its glory.

Only `Company` and `LastName` are actually required but there's bloody loads of them you can add to.

And there we have it. Lead created and I can leak all of this domain specific knowledge into this post, and forget all about it in my limited cognitive capacity!
