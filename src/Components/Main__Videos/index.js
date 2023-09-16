import  { Videos } from '@components/Videos'
import './index.scss'

const Main = () => {
  const view = `
    <main class="main">
      ${Videos()}
    </main>
  `
  return view
}

export default Main
