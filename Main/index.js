import  { Images } from '@components/Images'
import './index.scss'

const Main = () => {
  const view = `
    <main class="main">
      ${Images()}
    </main>
  `
  return view
}

export default Main
