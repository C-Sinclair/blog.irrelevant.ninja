import App from './app'

// root holds our app's root DOM Element:
let root

function init() {
  root = render(<App />, document.body, root)
}
init()

if (module.hot) module.hot.accept('./app', init)
