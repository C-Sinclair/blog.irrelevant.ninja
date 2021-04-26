---
date: '03-24-2020'
shortTitle: 'ABCs of Javascript'
title: 'ABCs of Javascript - Apply, Bind & Call'
author: 'Conor Sinclair'
featuredImage: ../images/imani-vDQ-e3RtaoE-unsplash.jpg
tags: ["Javascript"]
emoji: '🍳'
---

Here's a super quick reference of how each of the confusing initially confusing JS function `apply` , `bind` & `call` 

```js
let x = { 
  n: 1, 
  log: function(arg1, arg2) { 
    console.log(this.n, arg1, arg2) 
  }
}

console.log('raw')
let log = x.log
log('in this case', 'this refers to global this')

console.log('apply')
x.log.apply({ n: 2 }, ['in this case', 'this refers to first apply arg'])

console.log('bind')
let bound = x.log.bind({ n: 3 })
bound('in this case', 'this refers to prebound object')

console.log('call')
x.log.call({ n: 4 }, 'in this case', 'same as apply, but with args in list not array')
```

Really `apply` and `call` are the same just with different ways of passing the function's actual arguments. 

```js
let args = [1,2]
let fn = { 
  log: function(a1, a2) { 
    return this.n + a1 + a2 
  } 
}.log

let a = fn.apply({ n: 1 }, args)
let c = fn.call({ n: 1 }, ...args)
console.log(a === c)
```
