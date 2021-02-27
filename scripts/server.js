import { loadConfiguration, startServer } from 'snowpack'

const config = await loadConfiguration()
config.mount = {
  public: { url: '/', static: true },
  src: { url: '/dist'}
}

const server = await startServer({ config })

const fileUrl = server.getUrlForFile('../src/pages/index.svelte')
const { contents } = server.loadUrl(fileUrl, {})

console.log({ contents })
