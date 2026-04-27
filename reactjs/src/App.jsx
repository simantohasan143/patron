import { pageComponents } from './pages'

function App() {
  const path = window.location.pathname.replace(/^\/+/, '')
  const page = path === '' ? 'index.html' : path
  const CurrentPage = pageComponents[page] ?? pageComponents['404.html']
  return <CurrentPage />
}

export default App
