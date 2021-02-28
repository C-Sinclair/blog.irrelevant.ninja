
  let app
  ;(async () => {
    try {
      const route = pickRoute()
      const comp = await import(route)
  
      app = new comp.default({
        target: document.body,
        hydrate: true
      })
    } catch (err) {
      console.error(err)
      const comp = await import('./pages/404.svelte.js')
      app = new comp.default({
        target: document.body,
        hydrate: true
      })
    }
  })()
  
  function pickRoute() {
    const { pathname } = window.location
    if (pathname === '/') {
      return './pages/index.svelte.js'
    }
     
      if (pathname.includes('pages')) {
        
          if (pathname.includes('404')) {
            return `.${pathname}.svelte.js`
          }
        
          if (pathname.includes('One')) {
            return `.${pathname}.svelte.js`
          }
        
          if (pathname.includes('Two')) {
            return `.${pathname}.svelte.js`
          }
        
          if (pathname.includes('index')) {
            return `.${pathname}.svelte.js`
          }
        
      }
    
    return `./pages${pathname}.svelte.js`
  }
  
    