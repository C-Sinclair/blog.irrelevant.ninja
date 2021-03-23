---
path: '/a/useless-usecallback'
date: '02-01-2021'
title: "useLess useCallback"
shortTitle: "useLess useCallback"
author: 'Conor Sinclair'
featuredImage: ../images/imani-vDQ-e3RtaoE-unsplash.jpg
tags: ["Javascript", "React"]
emoji: '🍳'
---

Found this `useCallback` in the one of the components at work. This is actually not needed.

```jsx
const handleClick = useCallback(() => {
    setClicked(true);
}, [clicked]);
```

With `useCallback` the function you pass it is memo-ized until one of the variables in its dependency array changes, and then the function is re-memo-ized with the new value for that variable. In this example nothing in the function relies on that `clicked` variable so we can rely on the function being pure instead of React's `useCallback`So this will be more efficient:

```jsx
const handleClick = () => {
    setClicked(true);
}
```

`useCallback` would make sense to use if there was a usage of the variable in that function, like this for example

```jsx
const handleClick = useCallback(() => {
  if (anotherVar) doSomething();
  setClicked(true);
}, [anotherVar]);
```

we need the current value of anotherVar so the function cant be memoised otherwise it will always use the initial value.

Last thing, if you need a guarantee that the `clicked` variable is current you can pass a function into the state setter.

```jsx
const handleClick = () => {
    setClicked(clicked => !clicked);
}
```
